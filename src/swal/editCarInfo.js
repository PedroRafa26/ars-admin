import React from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"

export const editCarInfo = (element) => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    html: React.cloneElement(element, {sweetAlert: MySwal}),
    customClass: {
      popup: 'Swal__popup',
      closeButton: 'Swal__closeButton',
      content: 'Swal__Content'
    },
    showConfirmButton: true,
    showCloseButton: true,
    allowOutsideClick: true,
  }).then((result) => {
    if(result.isConfirmed){
      Swal.fire(
        "Este es titulo",
        "De algo que fue exitoso",
        'success',
      );
    }
  }).catch((error)=>{
    Swal.fire(
      "Este es otro titulo",
      "de algo que salio mal, muy mal",
      'error'
    );
    throw error;
  })
}

export const sectionInConstruction = (element) => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    text: "Sección en Construccion",
    customClass: {
      popup: 'Swal__popup',
      closeButton: 'Swal__closeButton',
      content: 'Swal__Content'
    },
    CancelButton: "Cancelar",
    showConfirmButton: true,
    showCancelutton: true,
    showCloseButton: true,
    allowOutsideClick: true,
  })
}