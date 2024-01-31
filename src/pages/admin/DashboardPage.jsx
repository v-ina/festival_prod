import { useEffect, useState } from 'react'
import AdminHeader from '../../components/AdminHeader'
import './DashboardPage.scss'

function DashboardPage (){

    const [inscrits, setInscrits] = useState(null)
    useEffect(()=>{
        (async()=>{
            const responseOfFetch = await fetch("http://localhost:4000/api/reservations")
            const responseToJson = await responseOfFetch.json()
            return setInscrits(responseToJson.data)  
        })()
    },[])
    
    console.log(inscrits);
    const [programmes, setProgrammes] = useState(null)
    useEffect(()=>{
        (async()=>{
            const responseOfFetch = await fetch("http://localhost:4000/api/programmes")
            const responseToJson = await responseOfFetch.json()
            return setProgrammes(responseToJson.data)  
        })()
    },[])


    function countDown(targetDate) {
        const now = new Date()
        const target = new Date(targetDate)
        const difference = target - now
        const days = Math.ceil(difference / (1000 * 60 * 60 * 24))
        return days;
      }

    return(
        <>
            <AdminHeader />

            <main>
                <div className='dashboard--header'>Dashboard</div>
                <div className='gridflex'>
                    <div className="grid-container">
                        <div className="grid-item">
                            <p>Nombre d'inscrits</p>
                            {inscrits && <h2>{3000-inscrits.length}/3000</h2>}
                        </div>
                        <div className="grid-item">
                            <p>Nombre d'artistes programmés</p>
                            {programmes && <h2>{programmes.length}/20</h2>}
                        </div>
                        <div className="grid-item">
                            <p>Jours restants avant le jour </p>
                            <h2>{countDown("2024-07-05")} j</h2>
                        </div>
                        <div className="grid-item">
                            <div>
                                <h3>Infos pratiques</h3>
                                <button>Modifier</button>
                            </div>
                            <div>
                                <h3>FAQ</h3>
                                <button>Modifier</button>
                            </div>
                        </div>
                        <div className="grid-item">
                            <h2>Personnes inscrites</h2>
                            {inscrits && (
                                inscrits.map(element => {
                                    return(
                                        <div className='inscrites--list'>
                                            <p>N° {element.id}</p>
                                            <p>{element.prenom}{element.nom}</p>
                                            <p>Inscrit depuis le {element.createdAt.substr(0,10)}</p>
                                            <p>{element.email}</p>
                                            {element.Dates.map(date =>{
                                                return (
                                                    <>
                                                        <span>{date.id === 1 ? " / V" : ""}</span> 
                                                        <span>{date.id === 2 ? " / S" : ""}</span> 
                                                        <span>{date.id === 3 ? " / D" : ""}</span> 
                                                    </>
                                                )
                                            })}
                                        </div>
                                    )
                                })
                            )}
                            <div>

                            </div>
                            <button>Voir tous les inscrits</button>
                        </div>
                        <div className="grid-item">
                            <h2>Programmation</h2>
                            <button>Voir tous les inscrits</button>
                        </div>
                        <div className="grid-item">
                            <h3>Mentions légales</h3>
                            <button>Modifier</button>
                        </div>
                        <div className="grid-item">
                            <h2>ARTISTES</h2>
                            <div></div>
                            <button>Voir tous les artistes</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )   
}

export default DashboardPage