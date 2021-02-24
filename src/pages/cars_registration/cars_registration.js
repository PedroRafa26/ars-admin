import React, { useState, useEffect } from "react";
import DynamicForm from "../../components/dynamic_form/dynamic_form";
import "./cars_registration.css";
import Layout from "../../components/Layout";

const CarsRegistration = props => {
	const [formData, setformData] = useState([
		{
			id: "Identificador",
			type: "string",
			value: "",
			info: "Identificador unico del vehiculo a agregar"
		},
		{
			id: "Marca",
			type: "string",
			value: "",
			info: "Marca del vehiculo a agregar"
		},
		{
			id: "Modelo",
			type: "string",
			value: "",
			info: "Modelo del vehiculo a agregar"
		},
		{
			id: "Placa",
			type: "string",
			value: "",
			info: "Placa oficial del vehiculo"
		},
		{
			id: "Conductor",
			type: "string",
			value: "",
			info: "Conductor designado al vehiculo"
		},
		{
			id: "Estatus",
			type: "listValues",
			options: [
				{
					info: "EN OPERACIONES",
					value: "EN OPERACIONES"
				},
				{
					info: "EN MANTENIMIENTO",
					value: "EN MANTENIMIENTO"
				},
				{
					info: "EN PATIO",
					value: "EN PATIO"
				}
			],
			value: "",
			info: "Estatus actual del vehiculo"
		},
		{
			id: "Combustible",
			type: "listValues",
			options: [
				{
					info: "0",
					value: "0"
				},
				{
					info: "1/4",
					value: "1/4"
				},
				{
					info: "1/2",
					value: "1/2"
				},
				{
					info: "3/4",
					value: "3/4"
				},
				{
					info: "FULL",
					value: "FULL"
				}
			],
			value: "",
			info: "Nivel de gasolina actual del vehiculo"
		},
		{
			id: "Kilometraje",
			type: "string",
			value: "",
			info: "Ingrese el kilometraje actual del vehiculo a agregar"
		},
		{
			id: "fotosVehiculo",
			type: "multiple file",
			info: "Imágenes del vehiculo",
			value: "",
			multiple: true,
			fileType: "image/*"
		}
	]);

	function onSubmitForm() {
		console.log("Aceptando data");
	}

	function validation(values) {
		const errors = {};
		if (!values.fotosVehiculo) {
			errors.fotosVehiculo = "Fotos del Vehiculo son requeridos";
		}
		return errors;
	}

	return (
		<>
			<Layout>
				<div className="Form_container">
					<DynamicForm
						dataForm={formData}
						onSubmit={onSubmitForm}
						messageForButton="Agregar Vehiculo"
						validation={validation}
					/>
				</div>
			</Layout>
		</>
	);
};

export default CarsRegistration;
