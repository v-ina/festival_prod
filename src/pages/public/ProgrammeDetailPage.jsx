import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Logo from '../../components/Logo'
import './ProgrammeDetailPage.scss'
import { useEffect, useState } from 'react'
import InscriptionCard from '../../components/InscriptionCard'
import Footer from '../../components/Footer'

function ProgrammeDetailPage (){

    const {id} = useParams()
    console.log(id);

    const [programme, setProgramme] = useState(null)
    useEffect(()=>{
        (async()=>{
            const responseOfFetch = await fetch(`http://localhost:4000/api/programmes/${id}`)
            const responseToJson = await responseOfFetch.json()
            return setProgramme(responseToJson.data)  
        })()
    },[])

    console.log(programme);


    const [date, setDate] = useState(null)
    useEffect(()=>{
        if(programme !== null){
            if(programme.DateId === 1){
                setDate(5)
            }
            if(programme.DateId === 2){
                setDate(6)
            }
            if(programme.DateId === 3){
                setDate(7)
            }
        }
    },[programme])
    

    console.log(date);



    return(
        <>  
            <Header />
            <Logo text={programme ? `${programme.artist}`:(`charge en cours`)}/>

            <section className='section--programmeDetail'>

            {programme && (
                <div className='programme--flex'>
                    <div className='programme--img'>
                        <img src={`/${programme.photo.substr(1, programme.photo.length - 1)}`} alt={programme.artist} />
                    </div>
                    <div className='programme--description'>
                        <p>{programme.description}</p>
                        <p>Retrouvez les sur les réseaux sociaux : </p>
                        <div className='programme--sns--flex'>
                            <a href={programme.reseaux.instagram}><img src="/assets/imgs/footer/instagram copie.png" alt="" /></a>
                            <a href={programme.reseaux.facebook}><img src="/assets/imgs/footer/facebook copie.png" alt="" /></a>
                            <a href={programme.reseaux.twitter}><img src="/assets/imgs/footer/X_logo_2023 copie.svg.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            )}


            <h2>ILS SERONT SUR SCENE LE {programme && date && `${date}`} JUILLET 2024!</h2>
            <p>Reserve vos places pour les voir !</p>
            <a className='btn__reservation' href="/reservation">Réserver</a>

            </section>
            
        <InscriptionCard />
        <Footer />    
        </>
    )   
}

export default ProgrammeDetailPage