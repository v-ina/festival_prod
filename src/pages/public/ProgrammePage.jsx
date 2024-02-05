import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import InscriptionCard from '../../components/InscriptionCard'
import Logo from '../../components/Logo'
import './ProgrammePage.scss'

function ProgrammePage (){

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
            <Logo text={"LA PROGRAMMATION 2024"} />
            

            <div className='programme--list'>
                <h2>5 JUILLET 2024</h2>
                <h3>TÊTE D'AFFICHE</h3>
                    {programmes && (
                        <div className='programme--flex'>
                            {programmes.filter(element => element.DateId === 1).map(filteredElement => (
                                <div className='programme--box'>
                                    <div className='programme__img'>
                                        <a href={`/programme/${filteredElement.id}`}><img src={filteredElement.photo.substr(1, filteredElement.photo.length - 1)} alt={filteredElement.artist} /></a>
                                    </div>
                                    <div className='programme__description'>
                                        <p>{filteredElement.artist}</p> 
                                        <p>{filteredElement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <a className='btn__reservation' href="/reservation">Réserver</a>
                    
                    <h2>6 JUILLET 2024</h2>
                    <h3>TÊTE D'AFFICHE</h3>
                    {programmes &&(
                        <div className='programme--flex'>
                            {programmes.filter(element => element.DateId === 2).map(filteredElement => (
                                <div className='programme--box'>
                                    <div className='programme__img'>
                                        <a href={`/programme/${filteredElement.id}`}><img src={filteredElement.photo.substr(1, filteredElement.photo.length - 1)} alt={filteredElement.artist} /></a>
                                    </div>
                                    <div className='programme__description'>
                                        <p>{filteredElement.artist}</p> 
                                        <p>{filteredElement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <a className='btn__reservation' href="/reservation">Réserver</a>

                    <h2>7 JUILLET 2024</h2>
                    <h3>TÊTE D'AFFICHE</h3>
                    {programmes &&  (
                        <div className='programme--flex'>
                            {programmes.filter(element => element.DateId === 3).map(filteredElement => (
                                <div className='programme--box'>
                                    <div className='programme__img'>
                                        <a href={`/programme/${filteredElement.id}`}><img src={filteredElement.photo.substr(1, filteredElement.photo.length - 1)} alt={filteredElement.artist} /></a>
                                    </div>
                                    <div className='programme__description'>
                                        <p>{filteredElement.artist}</p> 
                                        <p>{filteredElement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                <a className='btn__reservation' href="/reservation">Réserver</a>
            </div>
            


{/* 
            <div className="artistes">
                <div className="intro_artistes">
                    <img src="/assets/imgs/artists/artist1.jpeg" alt="groupe_bts" />
                    <button className="btn-secondary">B.T.S.</button>
                    <p>
                        BTS, également connu sous le nom de Bangtan Sonyeondan, est un groupe de pop sud-coréen formé en 2013. Composé de sept membres - RM, Jin, Suga, J-Hope, Jimin, V et Jungkook - le groupe est devenu une sensation mondiale dans l'industrie musicale. Leur musique mélange divers genres tels que la pop, le hip-hop et le R&B, avec des paroles engagées et réfléchies. BTS a gagné une immense popularité grâce à ses performances énergiques et à son impact sur les médias sociaux. Ils ont connu des succès internationaux avec des albums tels que "Love Yourself: Tear" et "Map of the Soul: 7". BTS a également établi des records de ventes, remporté de nombreux prix, et s'est impliqué dans des œuvres caritatives. Le groupe est salué pour sa contribution à la popularisation de la musique coréenne à l'échelle mondiale, créant ainsi une communauté mondiale de fans appelée l'ARMY.
                    </p>
                </div>
                
                <div className="intro_artistes">
                    <img src="/assets/imgs/artists/artist2.jpeg" alt="groupe_imagine-dragons" />
                    <button className="btn-secondary">Imagine Dragons</button>
                    <p>
                        Imagine Dragons est un groupe de pop-rock américain formé en 2008 à Las Vegas. Il se compose de Dan Reynolds (chant), Wayne Sermon (guitare), Ben McKee (basse) et Daniel Platzman (batterie). Leur premier album, "Night Visions" (2012), les a propulsés sur la scène mondiale avec des singles à succès comme "Radioactive" et "Demons". Le groupe est reconnu pour son style éclectique incorporant des éléments de rock, de pop et d'électro. Imagine Dragons a continué à produire des albums acclamés tels que "Smoke + Mirrors" (2015) et "Evolve" (2017). Leur musique est souvent caractérisée par des paroles introspectives et des mélodies accrocheuses. Le groupe a remporté plusieurs récompenses, dont des Grammy Awards, et est apprécié pour ses performances énergiques en direct. Imagine Dragons a joué un rôle important dans l'expansion de la musique pop-rock contemporaine.
                    </p>
                </div>

                <div className="intro_artistes">
                    <img src="/assets/imgs/artists/artist3.jpeg" alt="star_shakira" />
                    <button className="btn-secondary">Shakira</button>
                    <p>
                        Shakira, de son nom complet Shakira Isabel Mebarak Ripoll, est une artiste colombienne née en 1977. Elle a commencé sa carrière musicale dans les années 1990 avec des albums en espagnol, mais a atteint une renommée mondiale avec son album en anglais "Laundry Service" (2001). Connue pour son mélange de pop, rock, et de rythmes latins, Shakira a marqué des succès mondiaux tels que "Whenever, Wherever" et "Hips Don't Lie". Elle est également reconnue pour ses performances de danse dynamiques et son engagement philanthropique. Shakira a remporté de nombreux prix, dont des Grammy Awards, et a été une coach populaire dans l'émission "The Voice". Son influence s'étend au-delà de la musique, en tant qu'activiste et ambassadrice de l'UNICEF.
                    </p>
                </div>
            </div>

            <div className="btn-container">
                <button className="btn-primary">Réserver</button>
            </div>

            <section>
                <div className="date">
                    <h2>6 JUILLET 2024</h2>
                    <h3>À L'AFFICHE</h3>
                </div>
                    
                <div className="artistes">
                    <div className="intro_artistes">
                        <img src="/assets/imgs/artists/artist4.jpeg" alt="star_aya-nakamura" />
                        <button className="btn-secondary">Aya Nakamura</button>
                        <p>
                            Aya Nakamura, de son vrai nom Aya Danioko, est une chanteuse, auteure-compositrice et interprète française née en 1985 à Bamako, au Mali. Elle s'est fait connaître du grand public avec son single "Djadja" en 2018, qui a rencontré un énorme succès en France et à l'international. Nakamura est reconnue pour son mélange de pop, de R&B, et d'influences afrobeat dans sa musique, créant un style distinctif. Elle a sorti plusieurs albums, dont "Nakamura" (2018) et "AYA" (2020), qui ont également rencontré un grand succès. En plus de sa carrière musicale, Aya Nakamura est saluée pour son style iconique et sa personnalité affirmée. Elle a remporté plusieurs prix, dont des NRJ Music Awards, et continue de jouer un rôle important dans la scène musicale contemporaine en France.
                        </p>
                    </div>
                    
                    <div className="intro_artistes">
                        <img src="/assets/imgs/artists/artist5.jpeg" alt="star_tayc" />
                        <button className="btn-secondary">Tayc</button>
                        <p>
                            Tayc, de son vrai nom Taycir Ben Messaoud, est un chanteur, auteur-compositeur et interprète français d'origine camerounaise, né en 1992 à Yaoundé. Il s'est fait connaître du grand public avec sa musique mélangeant des genres tels que le R&B, la pop et l'afrobeat. Tayc a gagné en popularité avec son hit "N'y pense plus" en 2020, et depuis, il a continué à séduire les auditeurs avec ses productions musicales élégantes et son style singulier. Il a sorti des projets tels que l'album "Fleur Froide" en 2019 et "Fleur Froide - Part II" en 2020. Tayc est également reconnu pour ses collaborations avec d'autres artistes du paysage musical francophone. Son succès rapide témoigne de l'influence croissante de la musique afro-urbaine dans la scène musicale française contemporaine.
                        </p>
                    </div>

                    <div className="intro_artistes">
                        <img src="/assets/imgs/artists/artist6.jpeg" alt="star_niska" />
                        <button className="btn-secondary">Niska</button>
                        <p>
                            Niska, de son vrai nom Stanislas Dinga Pinto, est un rappeur français né en 1994 à Villeneuve-Saint-Georges. Il a émergé dans la scène rap française avec son style unique mêlant des influences trap et afrobeat. Niska s'est fait connaître avec des titres à succès tels que "Charo Life" et "Réseaux" qui ont contribué à sa notoriété. Originaire de la banlieue parisienne, Niska est associé au mouvement du rap français contemporain, souvent caractérisé par des sonorités urbaines et des paroles reflétant la vie des quartiers. Il a sorti plusieurs albums, dont "Commando" (2017) et "Mr Sal" (2019), consolidant sa position dans l'industrie musicale. Niska est également reconnu pour ses collaborations avec d'autres artistes du rap français. Son succès témoigne de l'influence croissante du rap francophone à l'échelle internationale.
                        </p>
                    </div>
                </div>

                <div className="btn-container">
                    <button className="btn-primary">Réserver</button>
                </div>
            </section>

            <section>
                <div className="date">
                    <h2>7 JUILLET 2024</h2>
                    <h3>À L'AFFICHE</h3>
                </div>                            
                <div className="artistes">
                    <div className="intro_artistes">
                        <img src="/assets/imgs/artists/artist7.jpeg" alt="star_shay" />
                        <button className="btn-secondary">Shay</button>
                        <p>
                            Shay, de son vrai nom Shannon Mempa, est une rappeuse et chanteuse belge née en 1992. Elle a acquis une notoriété dans le paysage musical francophone grâce à son style unique mêlant rap, R&B, et pop. Shay a fait ses débuts avec le collectif belge 92i en collaboration avec Booba. Elle a ensuite lancé sa carrière solo et a connu le succès avec des titres tels que "PMW" et "Thibaut Courtois". Son premier album, "Jolie Garce" sorti en 2016, a été bien accueilli. Shay est appréciée pour son franc-parler et son engagement à explorer des thèmes variés dans ses chansons. Malgré une pause artistique, elle est revenue avec des projets tels que "Antidote" en 2019. Shay continue d'influencer la scène hip-hop et R&B en Belgique.
                        </p>
                    </div>
                    
                    <div className="intro_artistes">
                        <img src="/assets/imgs/artists/artist8.jpeg" alt="star_rihanna" />
                        <button className="btn-secondary">Rihanna</button>
                        <p>
                            Rihanna, de son nom complet Robyn Rihanna Fenty, est une chanteuse, auteure-compositrice et femme d'affaires barbadienne née en 1988 à Saint Michael. Elle a débuté sa carrière musicale à la fin des années 2000 et est rapidement devenue une icône mondiale de la pop et du R&B. Rihanna a sorti des albums à succès tels que "Good Girl Gone Bad" (2007), "Loud" (2010) et "Anti" (2016). En plus de ses réalisations musicales, elle est également reconnue pour ses talents d'actrice, sa ligne de mode Fenty, et ses engagements philanthropiques. Rihanna a accumulé de nombreux prix, dont neuf Grammy Awards, et est saluée pour son influence sur la mode et la culture populaire. Malgré une pause musicale, elle reste l'une des artistes les plus influentes et puissantes de l'industrie du divertissement.
                        </p>
                    </div>

                    <div className="intro_artistes">
                        <img src="/assets/imgs/artists/artist9.jpeg" alt="star_drake" />
                        <button className="btn-secondary">Drake</button>
                        <p>
                            Drake, de son vrai nom Aubrey Drake Graham, est un rappeur, chanteur, auteur-compositeur et acteur canadien, né en 1986 à Toronto. Il a d'abord acquis la célébrité en tant qu'acteur dans la série télévisée "Degrassi: The Next Generation" avant de se lancer dans une carrière musicale prolifique. Drake est devenu l'un des artistes les plus influents dans les domaines du rap, du R&B et de la pop, avec des albums à succès tels que "Take Care" (2011), "Views" (2016), et "Scorpion" (2018). Il est célèbre pour son style versatile, ses paroles introspectives et ses mélodies accrocheuses. Drake a remporté de nombreux prix, dont quatre Grammy Awards, et détient plusieurs records de streaming. En plus de sa carrière musicale, il est également impliqué dans des projets commerciaux et philanthropiques, renforçant sa stature en tant qu'icône culturelle mondiale.
                        </p>
                    </div>
                </div>

                <div className="btn-container">
                    <button className="btn-primary">Réserver</button>
                </div>
            </section>
 */}
            <InscriptionCard />
            <Footer />
            
        </>
    )   
}

export default ProgrammePage