import React, { useEffect, useState } from "react";
import "./styles/MainAdmin.css";
import { FireStoreService } from "../apis/firebaseService";
import Swal from "sweetalert2";
import MainAdminListItem from "./MainAdminList";
import Layout from "../components/Layout";

const MainAdmin = () => {
	const [loading, setLoading] = useState(true);

	// * Como buena práctica, si no piensa usar conditional render declare el estado inicial del mismo}
	// * tipo que el componente hijo espera.

	const [empresas, setEmpresas] = useState([]);

	// ! USAR INDEXADO DE 2 ESSPACIOS!!
	// * Los valores asíncrons deben ser manejados con useffect, son la mejor
	// * manera de llevar el control de los renders en un componente.

	useEffect(() => {
		// * A pesar de que useeffect usa una función como argumento, no soporta
		// * que la función sea asíncrona. Así que hay que declararla y llamarla adentro.
		// * Sé que se podría poner fancy y querer declararla por fuera, eso tiene ventajas y
		// * desventajas. La función sería accesible en otros lados del archivo, pero
		// * sería necesaria en el array de dependencias del useffect, puede agregarla al array
		// * pero si no la ubica en un useCallback debidamente armado podría provocarle renders infinitos
		// * Para más informacion visita www.DNL_react.com

		const getEmpresas = async () => {
			// * Si no piensa cambiar los valores de una variable, fácilmente puede usar const en lugar de let.
			// * Tienen el mismo comportamiento con el scope.

			try {
				// setLoading(true);
				console.log("inicializando variablesss");
				const collections = await FireStoreService.getCollection("users");
				// debugger;
				return collections.docs.map(doc => {
					const key = doc.id;
					const data = doc.data();
					return {
						key,
						...data
					};
				});
				// setLoading(stop);
				// debugger;
				// return responseEmpresas;
			} catch (err) {
				console.log("Something happened", err);
				throw err;
			}
		};

		// * Como último punto, tengo entendido que los setState dentro de los useffect
		// * son recomendados ponerlos en su forma de function argumento (ahora mismo no recuerdo
		// * el por qué).

		getEmpresas()
			.then(result => {
				// debugger;
				setEmpresas(() => result);
				setLoading(false);
			})
			.catch(err => {
				console.log("error", err);
			});
	}, []);

	let swalConstruction = () => {
		Swal.fire({
			text: "Seccion en construcción"
		});
	};

	// debugger
	return (
		<Layout>
			<div className="MainAdmin">
				<div className="MainAdmin-container">
					<div className="MainAdmin-title">Bienvenido</div>
					<div className="MainAdmin-selection">
						<div className="MainAdmin-subtitle">Selecciona una Empresa</div>
						<div className="MainAdmin-selection-list">
							{/* <MainAdminList empresas={empresas}/> */}
							{!loading &&
								empresas.map(({ name, key, uid }, index) => {
									let parimpar;
									parimpar = index % 2 === 0 ? "par" : "impar";
									return (
										<MainAdminListItem
											key={key}
											name={name}
											parimpar={parimpar}
											uid = {uid}
										/>
									);
								})}
							{loading && <div> Cargando</div>}
						</div>
						<div>
							<button className="MainAdmin-btn-add" onClick={swalConstruction}>
								Nueva Empresa
							</button>
						</div>
					</div>
					{/* <div className="MainAdmin-logo"></div> */}
				</div>
			</div>
		</Layout>
	);
};

export default React.memo(MainAdmin);
