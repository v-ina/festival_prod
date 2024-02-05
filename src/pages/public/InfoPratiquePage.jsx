import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Logo from '../../components/Logo'
import './InfoPratiquePage.scss'

function InfoPratiquePage (){

    const [festival, setFestival] = useState(null)
    useEffect(()=>{
        (async()=>{
            const responseOfFetch = await fetch(`http://localhost:4000/api/festival`)
            const responseToJson = await responseOfFetch.json()
            return setFestival(responseToJson.data[0])  
        })()
    },[])

    console.log(festival);


    return(
        <>
            <Header />
            <Logo text={"INFORMATION PRATIQUE"} />

            <section className='info--main'>
                <h2>FAQ</h2>

                {festival && (
                    <div className='faq--flex'>
                        {festival.faq.map((faq)=>{
                            return(
                                <div className='faq--box'>
                                    <h4>{faq.question}</h4>
                                    <p>{faq.reponse}</p>
                                </div>
                            )
                        })}
                    </div>
                )}

                <h3>Votre Reponse se trouve dans ses phrases</h3>
                <div className='faq--imgbox'>
                    <div className='faq--box__large'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur tempore accusantium corrupti voluptatibus quia sunt doloribus porro a debitis officiis magnam, iusto iste voluptate. Odit, rem placeat. Repellat, facilis doloribus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur tempore accusantium corrupti voluptatibus quia sunt doloribus porro a debitis officiis magnam, iusto iste voluptate. Odit, rem placeat. Repellat, facilis doloribus.</p>
                    </div>
                    <div className='faq--box__img'>
                        <img src="/assets/imgs/autre/tuilirie.jpg" alt="" />
                    </div>
                </div>

            </section>


            <Footer />
        </>
    )   
}

export default InfoPratiquePage