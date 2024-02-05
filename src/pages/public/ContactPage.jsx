import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Logo from '../../components/Logo'
import './ContactPage.scss'

function ContactPage (){
    return(
        <>
            <Header />
            <Logo text={"CONTACT"} />


                <form className='form--contact' action="your_server_url_here">
                    <div className='input--flex'>
                        <input type="text" id="nom" name="nom" placeholder='Nom' /> 
                        <input type="text" id="prenom" name="prenom" placeholder='Prénom' /> 
                    </div>
                    <div className='input--flex'>
                        <input type="email" id="email" name="email" placeholder='E-mail :' /> 
                        <input type="tel" id="mobile" name="mobile" placeholder='Mobile :'/> 
                    </div>
                    <select id="genre" name="genre" placeholder='Sujet :'>
                        <option value="reservation">Réservation</option>
                        <option value="contact">Contact professionnel</option>
                        <option value="autre">Autre</option>
                    </select>
                    <textarea id="message" name="message" placeholder='Message'></textarea> 
                    <input type="submit" className='btn__reservation' value="Envoyer" />
                </form>

            <Footer />
        </>
    )   
}

export default ContactPage