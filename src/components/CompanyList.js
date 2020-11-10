import React, { useState, useEffect } from 'react'
import {db} from '../fire'

const CompanyList = () =>{
    const [companies, setCompanies] = useState([])

    //add
    useEffect(() => {
        console.log('effect');
        const unsub= db.collection('users').onSnapshot( snapshot =>{
            console.log(snapshot);
            const allCompanies = snapshot.docs.map( doc =>({
                name: doc.name,
                uid: doc.uid,
                photourl: doc.photourl
            }))
            console.log(allCompanies);
            setCompanies(allCompanies)
        })
        return () => {
            console.log('cleanup');
            unsub() 
        }
    }, [])

    //delete
    //const deleteBook = id =>{
    //    db.collection('users')
    //        .doc(id)
    //        .delete()
   // }

    console.log(companies);

    return(
        <div>
            <h6>Empresas</h6>
            <ul>
                {
                    companies.map(company =>(
                        <li key={company.uid}>
                            <div className="card company">
                                <div className="company-image">
                                    <img alt="company logo" src={company.photourl}/>
                                </div>
                                    <div className="company-name">{company.name}</div>
                            </div>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default CompanyList