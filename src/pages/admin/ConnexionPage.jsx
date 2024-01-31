import { jwtDecode } from 'jwt-decode'
import './ConnexionPage.scss'

function ConnextionPage (){

    const handleLogin = async(event) => {
        event.preventDefault()
        const email = event.target[0].value
        const password = event.target[1].value
        const loginData = {email, password}
        console.log(loginData);
        const loginDataJson = JSON.stringify(loginData)

        const responseAfterFetch = await fetch("http://localhost:4000/api/users/login", {
            method : "POST", 
            headers : {"Content-type" : "application/json"}, 
            body : loginDataJson
        })
        const responseToJson = await responseAfterFetch.json()
        const token = responseToJson.token

        if(token){
            let decodedToken = jwtDecode(token)
            localStorage.setItem("jwt", token)
            /*
            if(decodedToken.data.role === 1 || decodedToken.data.role === 2){
                navigate('/admin/reports')
            } else {
                navigate('/mypage')
            }
        } else {
            setMessage(responseToJson.message)
            */
        }
    }

    return(
        <>
            <main>
                <div>
                    <p>Inscrivez-vous pour recevoir vos places!</p>
                    <form action="" onSubmit={handleLogin}>
                        <label htmlFor="email"> Adresse e-mail
                            <input type="email" id="email" name="email" />
                        </label>
                        <label htmlFor="password"> Mot de passe
                            <input type="text" id='password' name='password' />
                        </label>
                        <input type="submit" value="Connexion"/>
                    </form>
                </div>    
            </main>   
        </>
    )   
}

export default ConnextionPage