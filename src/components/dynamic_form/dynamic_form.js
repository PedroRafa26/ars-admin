import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import DynamicInput from './input_dynamic_form/input_dynamic_form';
import './dynamic_form.css';

export default function ({ dataForm, onSubmit, messageForButton, actions, validation, loadingMessage }) {
  const [formikInitialValues, setFormikInitialValues] = useState({});
  const formik = useFormik({
    initialValues: {
      ...formikInitialValues
    },
    validate: validation,
    onSubmit: (values, actions) => parseSubmit(values, actions),
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
  });

  useEffect(() => {
    let initialValues = {};
    try {
      dataForm.map((item, index) => {
        if (item.type !== 'sizedBoxWithTitle') {
          if (item.type === 'booleanList') {
            item.options.map(element => {
              initialValues[element.id] = element.value;
              return null;
            })
          } else {
            initialValues[item.id] = item.value;
          }
        }
        return null
      });
      initialValues['done'] = true;
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something happened creating the form',
      });

      throw err;
    }

    setFormikInitialValues(() => initialValues);
  }, [dataForm]);

  // useEffect(() => {
  //   if (formik.isSubmitting) {
  //     Swal.fire({
  //       title: 'Saving, please wait',
  //       // icon: 'info',
  //       html:
  //         '<div class="loadingio-spinner-rolling-w23e05eix9"><div class="ldio-ik6pzj2wupc"><div></div></div></div>',
  //       // onBeforeOpen: () => {
  //       //   Swal.showLoading()
  //       // },
  //       showConfirmButton: false,
  //       showCancelButton: false,
  //       focusConfirm: false,
  //     })
  //     Swal.isLoading(true);
  //   }else{
  //     Swal.close();
  //   }
  // }, [formik.isSubmitting])

  async function parseSubmit(values, actions) {
    delete values.done;
    await onSubmit(values, actions);
  }

  return (
    <div className='dynamic_form__container'>
      {formikInitialValues.done &&
        <form onReset={formik.handleReset} onSubmit={formik.handleSubmit}>
          {dataForm.map(item => {
            return (
              <DynamicInput
                key={item.id}
                id={item.id}
                value={ formik.values[item.id] }
                error={ formik.errors[item.id] }
                label={ item.info }
                checkBoxLabel={item.checkBoxLabel}
                type={ item.type }
                fileType={ item.fileType }
                options={ item.options ? item.options : null}
                className = { item.className }
                toolTip = { item.toolTip }
                onClickEvent = { item.onClickEvent && item.onClickEvent }
                buttonText = { item.buttonText && item.buttonText }
                onChange={ formik.handleChange }
                hint={item.hint}
                extraInfo={item.extraInfo}
                {...formik}
              />
            );
          })}
          <div className='dynamic_form__container__actions'>
            {actions && actions}
          </div>
          <button type='submit' className="dynamic_form__submit_button" 
            disabled={formik.isSubmitting || !formik.isValid ? true : false}
          >
          { messageForButton }
          </button>
        </form>
      }
    </div>
  );
};