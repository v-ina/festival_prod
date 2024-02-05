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
    
    // console.log(inscrits);
    const [programmes, setProgrammes] = useState(null)
    useEffect(()=>{
        (async()=>{
            const responseOfFetch = await fetch("http://localhost:4000/api/programmes")
            const responseToJson = await responseOfFetch.json()
            return setProgrammes(responseToJson.data)  
        })()
    },[])

    console.log(programmes);


    function countDown(targetDate) {
        const now = new Date()
        const target = new Date(targetDate)
        const difference = target - now
        const days = Math.ceil(difference / (1000 * 60 * 60 * 24))
        return days;
      }

      const [programmeDay, setProgrammeDay] = useState("friday")
      function handleProgrammeDate (event, day) {
        setProgrammeDay(`${day}`)
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
                            {inscrits && <h2>{inscrits.length}/3000</h2>}
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
                            <div className="inscrites--body">
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
                                            <hr />
                                        </div>
                                    )
                                })
                            )}
                            </div>
                            <div> 

                            </div>
                            <button>Voir tous les inscrits</button>
                        </div>
                        <div className="grid-item">
                            <h2>Programmation</h2>
                            <div className="programme--body">
                                <button onClick={event => handleProgrammeDate(event, 'friday')}>V</button>/
                                <button onClick={event => handleProgrammeDate(event, 'saturday')}>S</button>/ 
                                <button onClick={event => handleProgrammeDate(event, 'sunday')}>D</button>

                                <p>{programmeDay==='friday' && "Vendredi : "}</p>
                                <p>{programmeDay==='saturday' && "Samedi : "}</p>
                                <p>{programmeDay==='sunday' && "Dimanche : "}</p>
                                <div className='programme--list friday'>
                                    {programmes && programmeDay === 'friday' && (
                                        <>
                                            {programmes.filter(element => element.DateId === 1).map(filteredElement => (
                                                <>
                                                    <p>{filteredElement.Heure.heure}: 00 h</p> 
                                                    <p>{filteredElement.artist}</p><br />
                                                </>
                                            ))}
                                        </>
                                    )}
                                    {programmes && programmeDay === 'saturday' && (
                                        <>
                                            {programmes.filter(element => element.DateId === 2).map(filteredElement => (
                                                <>
                                                    <p>{filteredElement.Heure.heure}: 00 h</p>
                                                    <p>{filteredElement.artist}</p><br />
                                                </>
                                            ))}
                                        </>
                                    )}
                                    {programmes && programmeDay === 'sunday' && (
                                        <>
                                            {programmes.filter(element => element.DateId === 3).map(filteredElement => (
                                                <>
                                                    <p>{filteredElement.Heure.heure}: 00 h</p>
                                                    <p>{filteredElement.artist}</p><br />
                                                </>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </div>
                            <button>Voir tous les inscrits</button>
                        </div>
                        <div className="grid-item">
                            <h3>Mentions légales</h3>
                            <button>Modifier</button>
                        </div>
                        <div className="grid-item">
                            <h2>ARTISTES</h2>
                            <div className='artist--box'>
                                <div className="artist--flex">
                                <div className='artist--photo'>
                                    <img src="https://i.scdn.co/image/ab6761610000e5ebf83823555da55fd07555fbd0" alt="" />
                                </div>
                                <div>
                                    <p>Charlie Puth :</p>
                                    <p>Vendredi 5 juillet (18h)</p>
                                    <div className='artist--button'>
                                        <div>
                                            <img src="/assets/imgs/dashboard_admin/ajouter-un-bouton.png" alt="" /><span>Ajouter</span>
                                        </div>
                                        <div>
                                            <img src="/assets/imgs/dashboard_admin/modification-du-stylo.png" alt="" /><span>Modifier</span>
                                        </div>
                                        <div>
                                            <img src="/assets/imgs/dashboard_admin/supprimer.png" alt="" /><span>Supprimer</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus aut nostrum, ratione veritatis delectus expedita ducimus cum. Rerum possimus repellendus quod doloribus cupiditate, nihil amet, dolores repellat ea neque iusto?</p>
                                <div className='artist--sns'>
                                    <img src="" alt="" />
                                    <img src="" alt="" />

                                </div>
                            </div>
                            <button>Voir tous les artistes</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )   
}

export default DashboardPage