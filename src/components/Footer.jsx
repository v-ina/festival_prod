import './Footer.scss'

function Footer (){
    return(
        <footer>
            <div className='footer__left'>
                <ul>
                    <li><a href="/programme">Programmation</a></li>
                    <li><a href="/connexion">Festival</a></li>
                    <li><a href="/infos">Info Pratique</a></li>
                </ul>
                <p><a href="/contact">Contact</a></p>
                <p><a href="">Mentions légales</a></p>
            </div>
            <div className='footer__right'>
                <h6>SUIVEZ NOUS SUR NOS RESEAUX</h6>
                <h6>SOCIAUX POUR SAVOIR QUI SERA</h6>
                <h6>LE PROCHAIN CONFIRME</h6>
                <div>
                    <img src="/assets/imgs/footer/tiktok copie.png" alt="" />
                    <img src="/assets/imgs/footer/instagram copie.png" alt="" />
                    <img src="/assets/imgs/footer/facebook copie.png" alt="" />
                    <img src="/assets/imgs/footer/X_logo_2023 copie.svg.png" alt="" />
                </div>
            </div>
        </footer>
    )   
}

export default Footer