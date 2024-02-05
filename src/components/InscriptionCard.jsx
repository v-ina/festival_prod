import './InscriptionCard.scss'

function InscriptionCard (){
    return(
        <section className='home--newsletter'>
            <div className='home--newsletterbox'>
                <h5>NEWSLETTER</h5>
                <p>Envie de connaitre le prochain artiste confirme?</p>
                <p>Inscrit toi!</p>
                <form action="">
                    <input type="email" placeholder='Votre E-mail'/>
                </form>
            </div>
        </section>
    )   
}

export default InscriptionCard