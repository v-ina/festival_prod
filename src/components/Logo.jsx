import './Logo.scss'

function Logo ({text}){
    return(
        <section className='home--main'>
            <div className='home--banner'>
                <div className="banner-logo"><img src="/assets/imgs/Fichier_1Png.png" alt="sitelogo" />
                </div>
                <h1>{text}</h1>
            </div>
        </section>
    )   
}

export default Logo