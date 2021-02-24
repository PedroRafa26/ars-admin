import React, { useEffect, useState, useCallback } from 'react';
// import Carousel from '../../carousel/carousel'
// import PDFGenerator from '../../PDFGenerator/PDFGenerator';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function ({ value, label, type, fileType, onChange, id, options, className, toolTip, onClickEvent, buttonText, error, setFieldValue, handleBlur, hint, checkBoxLabel, extraInfo }) {

  const [input, setInput] = useState(null);
  const [fileURL, setFileURL] = useState([]);

  const getInputType = useCallback(
    () => {
      let inputType
      switch (type) {
        case 'listValues': {
          inputType = 'select';
          break;
        }

        case 'listValues2': {
          inputType = 'radioList';
          break;
        }

        case 'string': {
          inputType = 'text';
          break;
        }

        case 'boolean': {
          inputType = 'checkbox';
          break;
        }

        case 'boolean2': {
          inputType = 'checkbox2';
          break;
        }

        case 'booleanList': {
          inputType = 'checkboxList';
          break;
        }
        
        case 'number': {
          inputType = type;
          break;
        }

        case 'phoneNumber': {
          inputType = type;
          break;
        }
        
        case 'SocialSecuriy': {
          inputType = type;
          break;
        }

        case 'date':{
          inputType = type;
          break;
        }

        case 'password': {
          inputType = 'password';
          break;
        }

        case 'longString': {
          inputType = 'textArea';
          break;
        }

        case 'file': {
          inputType = 'file';
          break;
        }

        case 'multiple file': {
          inputType = 'multipleFile';
          break;
        }

        case 'sizedBoxWithTitle':{
          inputType = 'sizedBoxWithTitle'
          break;
        }

        case 'sizedBoxWithFooter':{
          inputType = 'sizedBoxWithFooter'
          break;
        }

        case 'button': {
          inputType = 'button';
          break;
        }

        default: {
          inputType = 'text';
          break;
        }
      }

      return inputType;
    },
    [type],
  )

  useEffect(() => {
    let element;
    const inputType = getInputType()

    function setPreviewFiles(event){
      const images = event.currentTarget.files
      for (const i in images) {
        const image = images[i];
        if (typeof(image) === 'object') {
          var reader = new FileReader();

          reader.onload = function (e) {
            setFileURL(prev => ([
              ...prev,
              e.target.result,
            ]));
          };
          reader.readAsDataURL(image);
        }
      }
    }

    if (value !== undefined || inputType === 'checkboxList') {
      switch (inputType) {
        case 'select':{
          const elementOptions = options.map((item, index) => {
            return (
              <option value={item.value} key={index}> {item.info} </option>
            );
          });
          element = (
            <select onChange={onChange} id={id} className="dynamic_form__input__input" value={value}>
              <option value={''}>  </option>
              {elementOptions}
            </select>
          );
          break;
        }
  
        case 'radioList': {
          element = options.map((item, index) => {
            return (
              <label
                key={`radio${id}${index}`}
                className='CheckBoxContainer'
              >
                <input
                  name={ id }
                  type="radio"
                  value={ item.value }
                  onChange={onChange}
                />
                <span className="checkmark">{ item.info }</span>
              </label>
            );
          });
          break;
        }
  
        case 'text':{
          element = (
            <input
              id={id}
              type={inputType}
              value={value}
              onBlur={handleBlur}
              onChange={onChange}
              placeholder={ hint ? hint : '' }
              className={`dynamic_form__input__input ${error && 'error'}`}
            />
          );
          break;
        }
  
        case 'number':{
          element = (
            <input
              id={id}
              type={inputType}
              onBlur={handleBlur}
              value={value || ''}
              onChange={(event) => {
                return setFieldValue(id, event.target.value !== '' ? Math.abs(event.target.value) : event.target.value)
              }}
              placeholder={ hint ? hint : '' }
              className={`dynamic_form__input__input ${error ? 'error' : ''}`}
            />
          );
          break;
        }
  
        case 'checkbox':{
          element = (
            <label className="checkbox bounce">
              <input
                type= 'checkbox'
                name= {id}
                id= {id}
                checked={!!value}
                onBlur={handleBlur}
                onChange={() => {
                  return setFieldValue(id, !value)
                }}
              />
              <svg viewBox="0 0 21 21">
                <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
              </svg>
              {/* {error && <label htmlFor={id} className={`dynamic_form__input__input ${error && 'error'}`}>{error}</label>} */}
            </label>
            );
            break;
        }
  
        case 'checkbox2':{
          element = <label className='CheckBoxContainer'>
              <input
                name={ id }
                type="checkbox"
                checked={ value }
                onBlur={handleBlur}
                onChange={onChange}
              />
              <span className="checkmark">{ label }</span>
            </label>
          break;
        }
  
        case 'checkboxList': {
          element = options.map((item, index) => {
            return (
              <label
                key={`checkbox${item.id}${index}`}
                className='CheckBoxContainer'
              >
                <input
                  name={ item.id }
                  type="checkbox"
                  value={ item.Value }
                  onBlur={handleBlur}
                  onChange={onChange}
                />
                <span className="checkmark">{ item.info }</span>
              </label>
            );
          });
          break;
        }
  
        case 'password':{
          element = (
            <input
              id={id}
              type={inputType}
              value={value}
              onBlur={handleBlur}
              onChange={onChange}
              placeholder={ hint ? hint : '' }
              className={`dynamic_form__input__input ${error && 'error'}`}
            />
          );
          break;
        }
  
        case 'textArea': {
          element = (
            <textarea
              id={id}
              type={inputType}
              value={value}
              onBlur={handleBlur}
              onChange={onChange}
              className="dynamic_form__input__textArea"
            >
            </textarea>
          );
          break;
        }
  
        case 'file':{
          element = (
            <span className="createCard__form__Input file dynamic_form__input__input">
              <input
                type= 'file'
                className='input formInput__input inputfile'
                name= {id}
                id={id}
                onChange={(event) =>{
                    setFieldValue(id, event.currentTarget.files[0])
                    setPreviewFiles(event)
                  }
                }
                accept= { fileType }
              />
              <label htmlFor={id} className='chooseFileButton'>Choose a File</label>
              {(fileURL && fileURL.length > 0) &&
                <FilePreview files={ fileURL } typeOfFile={ fileType } />
              }
            </span>
          );
          break;
        }
  
        case 'multipleFile':{
          element = (
            <>
              <span className="createCard__form__Input file dynamic_form__input__input">
                <input
                  type= 'file'
                  className='input formInput__input inputfile'
                  name= {id}
                  id={id}
                  onChange={(event) =>{
                    setFieldValue(id, event.target.files);
                    setPreviewFiles(event);
                  }}
                  accept= { fileType }
                  multiple
                />
                <label htmlFor={id} className='chooseFileButton'>Choose a File</label>
                {(fileURL && fileURL.length > 0) &&
                  <FilePreview files={ fileURL } typeOfFile={ fileType } />
                }
              </span>
            </>
          );
          break;
        }
  
        case 'button':{
          element = (
            <div
              id={id}
              // onClick={() => inputValue}
              className="dynamic_form__input__input"
            >
            </div>
          );
          break;
        }
  
        case 'sizedBoxWithTitle':{
          element = ''
          break;
        }

        case 'sizedBoxWithFooter':{
          element = ''
          console.log(label);
          break;
        }
  
        case 'phoneNumber':{
          element = (
            <>
              <input
                id={id}
                type='text'
                value={value}
                placeholder = {hint && hint}
                onChange={onChange}
                className={`dynamic_form__input__input ${error && 'error'}`}
              >
              </input>
            </>
          )
          break;
        }

        case 'SocialSecuriy':{
          element = (
            <>
              <input
                id={id}
                type='text'
                value={value}
                placeholder = {hint && hint}
                maxLength='11'
                onChange={(event) => {
                  const inputValue = event.target.value;
                    // 2
                  const input = inputValue.replace(/[\W\s\._\-]+/g, '');
                  
                  // 3
                  let split = 4;
                  const chunk = [];
                  const len = input.length

                  for(let i = 0; i < len; i += split) {
                    split = ( i >= 0 && i <= 2 ) ? 3 : ( i > 2 && i <= 4 ) ? 2 : 4;
                    chunk.push(input.substr( i, split ));
                  }
                  
                  // 4
                  const parsedString = chunk.join("-").toUpperCase();
                  setFieldValue(id, parsedString);
                }}
                className={`dynamic_form__input__input ${error && 'error'}`}
              >
              </input>
            </>
          )
          break;
        }
  
        case 'date': {
          element = <input
            id={id}
            className={`dynamic_form__input__input ${error && 'error'}`}
            type='date'
            value={value}
            onChange={onChange}
          />
          break;
        }
      
        default: {
          element = (
            <input
              id={id}
              type={inputType}
              value={value}
              placeholder={hint && hint}
              onChange={onChange}
              className={`dynamic_form__input__input ${error && 'error'}`}
            />
          );
          break;
        }
      }
    }

    setInput(() => element);
  }, [type, onChange, label, id, options, value, getInputType, className, onClickEvent, error, setFieldValue, handleBlur, hint, fileType, fileURL]);

  return (
    <div className={`dynamic_form__input__container ${!input ? 'center' : ''} ${type === 'listValues2' ? 'List' : ''} ${type === 'booleanList' ? 'List woLabel' : ''}`}>
      {label && typeof(label) === 'object' 
        ? 
          <label className="dynamic_form__input__label" htmlFor={id}>{label}</label>
        :
          <label className="dynamic_form__input__label" htmlFor={id}> {`${label}${extraInfo !== undefined ? ` ${extraInfo}:`: ':' }`}</label>
      }
      {input && <div className={`dynamic_form__input ${className ? className : ''}`}>
        {input}
        {checkBoxLabel && 
          <span>{checkBoxLabel}</span>
        }
        {onClickEvent && 
          <button
            className='buttonPrimary'
            onClick={() => onClickEvent(value)}
            // disabled={ error ? true : false }
          >
            {buttonText}
          </button>
        }
        {toolTip &&
          <div className='tooltip'>
            <span className='tooltiplabel'>i</span>
            <span className="tooltiptext">{toolTip}</span>
          </div>
        }
        {error &&
          <div className='tooltip error'>
            <span className='tooltiplabel'>i</span>
            <span className="tooltiptext">{error}</span>
          </div>
        }
      </div>}
    </div>
  );
};

function FilePreview({files, typeOfFile}){
  const [modalActive, setModalActive] = useState(false);
  const [Component, setComponent] = useState(<div></div>)
  const MySwal = withReactContent(Swal)

  function updateModal(value){
    setModalActive(value);
  }

  // useEffect(() => {
  //   setComponent(() => {
  //     return (
  //       <div>
  //         <div className='fileContainer'>
  //           {typeOfFile === '.pdf' ?
  //               <PDFGenerator pdf={ files[0] } />
  //               : typeOfFile === 'image/*' ?
  //               <Carousel images={ files } />
  //             :
  //             <div></div>
  //           }
  //         </div>
  //       </div>
  //     )
  //   })
  // }, [typeOfFile, files])

  // useEffect(() => {
  //   modalActive &&
  //     MySwal.fire({
  //       html: Component,
  //       onAfterClose: () => {
  //         updateModal(false)
  //       },
  //       customClass: {
  //         popup: 'Swal__popup',
  //         closeButton: 'Swal__closeButton',
  //         content: 'Swal__Content',
  //       },
  //       showConfirmButton: false,
  //       showCloseButton: true,
  //       allowOutsideClick: true,
  //     })
  // }, [modalActive, MySwal, Component])

  return (
    <div className='PreviewContainer'>
      <span className='chooseFileButton' onClick={() => updateModal(true)}>File Preview</span>
    </div>
  );
}