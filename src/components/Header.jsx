import './Header.scss'

function Header (){
    return(
        <nav className='nav--main'>
            <ul>
                <li><div><a href="/"><img src="/assets/imgs/Fichier_1Png.png" alt="site logo" /></a></div></li>
                <li><a href="/programme">Programmation</a></li>
                <li><a href="/festival">Festivals</a></li>
                <li><a href="/infos">Info Pratique</a></li>
                <li><a href="/reservation">Tickets</a></li>
            </ul>
            <div className='ticketsDeco'></div>
        </nav>
    )   
}

export default Header