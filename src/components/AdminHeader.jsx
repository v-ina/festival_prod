import './AdminHeader.scss'

function AdminHeader (){
    return(
        <nav className='navbar--admin'>
            <div className="navbar__bg">
                <ul>
                    <li><a href="">
                        <img src="/assets/imgs/navbar_admin/bouton-daccueil.png" alt="" />    
                        <div className="dot"></div></a>
                    </li>
                    <li><a href=""><img src="/assets/imgs/navbar_admin/inscrit.png" alt="" /></a></li>
                    <li><a href=""><img src="/assets/imgs/navbar_admin/calendrier.png" alt="" /></a></li>
                    <li><a href=""><img src="/assets/imgs/navbar_admin/artiste.png" alt="" /></a></li>
                    <li><a href=""><img src="/assets/imgs/navbar_admin/inscrit.png" alt="" /></a></li>
                    <li><a href=""><img src="/assets/imgs/navbar_admin/a-propos.png" alt="" /></a></li>
                    <li><a href=""><img src="/assets/imgs/navbar_admin/contrat.png" alt="" /></a></li>
                </ul>
            </div>
        </nav>
    )   
}

export default AdminHeader