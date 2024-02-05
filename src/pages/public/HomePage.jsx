import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import InscriptionCard from '../../components/InscriptionCard'
import Logo from '../../components/Logo'
import './HomePage.scss'

function HomePage (){

    const [programmes, setProgrammes] = useState(null)
    useEffect(()=>{
        (async()=>{
            const responseOfFetch = await fetch("http://localhost:4000/api/programmes")
            const responseToJson = await responseOfFetch.json()
            return setProgrammes(responseToJson.data)  
        })()
    },[])
    console.log(programmes);

    return(
        <>
            <Header />
            <Logo text={"EDITION 2024"} />

            <div className='iframe--container'>
                <iframe className='iframe--video' src="https://www.youtube.com/embed/Y5rJFJqebNA?si=X-bYoPerv0jucJsf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <section className='home--programme'>
                <h2>PROGRAMMATION</h2>
                <h3>5 JUILLET 2024</h3>
                <h4>TÊTE D'AFFICHE</h4>
                {programmes && (
                    <div className='programme--main--flex'>
                        {programmes
                            .filter(element => element.DateId === 1)
                            .slice(0, 3) 
                            .map(filteredElement => (
                                <div className='programme--flex'>
                                    <div className='programme--flex--img'>
                                        <div className='blur'></div>
                                        <img src={filteredElement.photo.substr(1, filteredElement.photo.length - 1)} alt={filteredElement.artist} />
                                        <div className='artistnametag'>{filteredElement.artist}</div>
                                    </div>
                                    <div className='programme--flex--description'>
                                        <p>Horaire : </p>
                                        <p>{filteredElement.Heure.heure}H00</p>
                                        <a href={`/programme/${filteredElement.id}`}>En savoir +</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
                <a className='btn__reservation' href="/reservation">Réserver</a>
                

                <h3>6 JUILLET 2024</h3>
                <h4>TÊTE D'AFFICHE</h4>

                {programmes && (
                    <div className='programme--main--flex'>
                        {programmes
                            .filter(element => element.DateId === 2)
                            .slice(0, 3) 
                            .map(filteredElement => (
                                <div className='programme--flex'>
                                    <div className='programme--flex--img'>
                                        <div className='blur'></div>
                                        <img src={filteredElement.photo.substr(1, filteredElement.photo.length - 1)} alt={filteredElement.artist} />
                                        <div className='artistnametag'>{filteredElement.artist}</div>
                                    </div>
                                    <div className='programme--flex--description'>
                                        <p>Horaire : </p>
                                        <p>{filteredElement.Heure.heure}H00</p>
                                        <a href={`/programme/${filteredElement.id}`}>En savoir +</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
                <a className='btn__reservation' href="/reservation">Réserver</a>
                

                <h3>7 JUILLET 2024</h3>
                <h4>TÊTE D'AFFICHE</h4>

                {programmes && (
                    <div className='programme--main--flex'>
                        {programmes
                            .filter(element => element.DateId === 1)
                            .slice(0, 3) 
                            .map(filteredElement => (
                                <div className='programme--flex'>
                                    <div className='programme--flex--img'>
                                        <div className='blur'></div>
                                        <img src={filteredElement.photo.substr(1, filteredElement.photo.length - 1)} alt={filteredElement.artist} />
                                        <div className='artistnametag'>{filteredElement.artist}</div>
                                    </div>
                                    <div className='programme--flex--description'>
                                        <p>Horaire : </p>
                                        <p>{filteredElement.Heure.heure}H00</p>
                                        <a href={`/programme/${filteredElement.id}`}>En savoir +</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
                <a className='btn__reservation' href="/reservation">Réserver</a>
            </section>

            <section className='home--reservationLink'>
                <div>
                    <img src="https://medias.tendanceouest.com/photos/1200/392537/" alt="" />

                    <div className='reservationLink--box'>
                        <h4>Réservation</h4>
                        <p>Billets 1 jour, Forfait 2 et 3 jours</p>
                        <a className='btn__reservation' href="/reservation">Réserver</a>
                    </div>
                </div>
            </section>

            <section className='home--infoPratique'>
                <h2>INFORMATIONS PRATIQUES</h2>
                <div className="infopratique--flex">
                    <div className="infoPratique--flex__left">
                        <p>Ou on se retourve?</p>
                        <p>On se retouve a l'adresse du "jardin des Tuilleries", le manifique jardin qui se trouve en face du Louvre.</p>
                        <p>117 rue de Rivoli, 75001</p>
                        <p>Vous trouverz les reponses a vos questions dans la rubrique "Infor Pratique"-"FAQ"</p>
                        <a className='btn__reservation' href="">En savoir +</a>
                    </div>
                    <div className="infoPratique--flex__right">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.722851585556!2d2.3249193768260557!3d48.863495100346704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2c30000001%3A0xc219db09e1bfefc7!2z65u466W07Z6IIOqwgOuToA!5e0!3m2!1sko!2sfr!4v1706788416898!5m2!1sko!2sfr" width="600" height="450" ></iframe>
                    </div>
                </div>
            </section>

            <section className='home--archive'>
                <h2>Les éditions précédentes : </h2>
                <div className='home--archive--flex'>
                    <div className='home--archive__left'>
                        <p>Soyez nostalgique en découvrant ou redécouvrant les anciennes éditions! </p>
                        <a className='btn__reservation' href="">En savoir +</a>
                    </div>
                    <div className='home--archive__right'>
                        <img src="https://www.deutschland.de/sites/default/files/media/image/tdt_31072023_kultur_festivals_wacken-open-air.jpg" alt="" />
                    </div>
                </div>
            </section>
            <InscriptionCard />
            <Footer />
        </>
    )   
}

export default HomePage