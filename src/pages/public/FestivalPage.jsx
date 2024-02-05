import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Logo from '../../components/Logo'
import InscriptionCard from '../../components/InscriptionCard'
import './FestivalPage.scss'

function FestivalPage (){
    return(
        <>
            <Header />
            <Logo text={"LE FESTIVAL 2024"} />


            <section className='festival--flex'>
            <div className="img">
                <img src="/assets/imgs/festivals/festival1.jpg" alt="jardin_des_tuileries_paris" />
                <h2>OÙ SOMMES-NOUS ? ?</h2>
            </div>
        </section>

        <section className='festival--flex'>
            <div className="text_container">
                <p>
                    L'édition du festival TOUS EN SEINE se déroulera au Jardin des Tuilleries. Le jardin des Tuilleries, qu'est ce que c'est ? Je me transforme en Stéphane Berne pour vous l'expliquer ! Le Jardin des Tuileries, situé au cœur de Paris, est l'un des plus célèbres jardins de la ville. Créé au XVIe siècle, il s'étend sur environ 25 hectares entre le Louvre et la place de la Concorde. Le Jardin des Tuileries est un lieu emblématique de Paris, chargé d'histoire et de beauté. Il a été conçu à l'origine par le jardinier du roi Louis XIV, André Le Nôtre. Les allées rectilignes offrent une perspective magnifique depuis le Louvre jusqu'à l'Arc de Triomphe. Des statues majestueuses, des fontaines élégantes et des parterres de fleurs colorés parsèment le jardin.
                    Les bassins ornés de sculptures apportent une touche de sérénité, invitant à la détente. Les célèbres chaises vertes permettent aux visiteurs de s'asseoir et de profiter du cadre exceptionnel. Au printemps, les tulipes et les jonquilles éclatent en une explosion de couleurs. En été, les parisiens et les touristes se retrouvent pour pique-niquer sur l'herbe. L'Orangerie abrite une collection d'œuvres d'art, offrant une pause culturelle au cœur du jardin. Le Jardin des Tuileries est le lieu idéal pour une promenade romantique le long des allées ombragées. Les enfants peuvent s'amuser dans les aires de jeux ou faire du bateau sur les bassins.
                    Les statues de Maillol et de Rodin ajoutent une dimension artistique à l'ensemble. Des événements culturels tels que des expositions en plein air enrichissent régulièrement le jardin. Les alignements d'arbres taillés avec précision créent une atmosphère élégante et ordonnée. Les terrasses du jardin offrent une vue imprenable sur la Seine et le reste de la ville. Des événements spéciaux, comme la Fête des Tuileries, apportent une ambiance festive. Le jardin a inspiré de nombreux artistes, écrivains et cinéastes au fil des siècles. Les parisiens l'apprécient également comme lieu de détente en plein cœur de la vie trépidante de la ville.
                    En automne, les feuilles des arbres créent un tapis coloré, ajoutant une nouvelle dimension à la beauté du jardin. En résumé, le Jardin des Tuileries incarne l'élégance intemporelle et demeure un joyau verdoyant au cœur de la capitale française.
                </p>
            </div>
        </section>

        <section className='festival--flex'>
            <div className='img'>
                <img src="/assets/imgs/festivals/festival2.jpg" alt="concert" />
                <h2>LE THÈME DE TES2K24 ?</h2>
            </div>
        </section>

        <section className='festival--flex'>
            <div className="text_container">
                <p>
                    Le thème de cette année est : LE HIP-HOP ! 
                    Ce festival de hip-hop réunit une constellation d'artistes de renom, offrant une expérience musicale immersive et inoubliable.
                    Le public est transporté dans un univers vibrant dès le début avec la présence de la sensation française Aya Nakamura, dont les hits entraînants et la présence scénique enflammée ouvriront la soirée avec énergie. Shay, une étoile montante du hip-hop francophone, prend le relais, déchaînant son flow unique et son style percutant.
                    Dadju, maître de l'émotion, plongera la foule dans une atmosphère envoûtante avec ses ballades urbaines et ses morceaux captivants. Tayc, l'artiste aux sonorités envoûtantes, ajoutera une touche de romantisme à la soirée, faisant vibrer les cœurs avec ses mélodies sensuelles.
                    Le hip-hop français sera représenté au sommet avec la présence de Niska, dont les rythmes percutants et les paroles tranchantes feront vibrer le public. Une surprise internationale s'invite avec la légendaire Rihanna, délivrant ses tubes incontournables et sa présence magnétique sur scène. Shakira, la reine du mélange de rythmes latins et de pop, apportera une énergie explosive à la soirée.
                    Le festival prendra une tournure éclectique avec l'inclusion du groupe Imagine Dragons, offrant un mélange épique de rock alternatif et d'électro, tandis que BTS, le phénomène mondial de la K-pop, enflammera la scène avec leur présence dynamique et leurs chorégraphies impeccables.
                    Enfin, clôturant cette nuit mémorable, l'icône mondiale Drake prendra le micro, enflammant la scène avec ses hymnes incontournables et son charisme indéniable.
                    Ce festival de hip-hop promet une expérience musicale diversifiée et riche en émotions, rassemblant des artistes de renommée internationale pour une nuit où la musique transcende les frontières et unit les fans du monde entier dans une célébration commune de la culture hip-hop. Une fusion unique d'artistes, de styles et d'énergies qui restera gravée dans les mémoires.
                </p>
            </div>
        </section>

            <InscriptionCard />
            <Footer />
        </>
    )   
}

export default FestivalPage