import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  {useEffect , useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


const Home = () => {

    const context = useContext(ThemeContext)

    useEffect(() => {
        console.log(context)
    }, [])

  return (
    <>
    <style jsx>{`
        .welcomeContainer {
            height:100%;
            width:100%;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }

        .bonjour {
            font-size : 4.5rem;
            margin-bottom : 0px;
            font-weight : 300;
        }

        .name {
            margin : 0px;
            font-size: 4.5rem;
            font-weight:500;
        }

        .dev {
            font-size: 2rem;
            font-weight: 300;
        }


        @media screen and (min-width: 768px) {
            .bonjour {
                font-size : 9rem;
                margin-bottom : 0px;
            }
            .name {
                font-size : 9rem;
            }
            .dev {
                font-size:3.5rem;
            }
            
            .paragraphs {
                margin-left : var(--columnWidth1);
                width:var(--columnWidth2)
            }

            .skills {
                font-size : 1.6rem;
            }
        }

        @media screen and (min-width:1250px) {
            .welcomeContainer {
                align-items : center;
            }
        }

        `}</style>
        <section className='welcomeContainer'>
            <article className='welcomeContainer'>
                <h2 className='bonjour'>Bonjour, je m'appelle </h2>
                <h1 className='name'><span>Nicolas Oudea</span></h1>
                <h2 className='dev'>Je suis un <span>développeur web</span> basé sur <span>Nantes</span></h2>
            </article>
        </section>
        <section className='about'>
            <h2>A propos</h2>
            <article className='paragraphs'>
                <h3 data-aos='fade-right'>I love <span>coffee</span></h3>
                <p data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod urna ligula, vitae tristique urna viverra vel. Praesent ut pharetra ex, vel rutrum ex. Nunc eros nisi, posuere in tincidunt vel, mollis id dolor.</p>
            </article>
            <article className='paragraphs'>
                <h3 data-aos='fade-right'>Languages, frameworks et CMS</h3>
                <p className='skills' data-aos='fade-up'><span>HTML CSS Javascript NodeJs ReactJs React-native Three.js Next.js Wordpress Strapi PHP Symfony MongoDB SQL</span></p>
            </article>
            <article className='paragraphs'>
                <h3 data-aos='fade-right'>Logiciels</h3>
                <p className='skills' data-aos='fade-up'><span>Visual Studio Code Photoshop Figma</span></p>
            </article>
        </section>
        <div style={{height:'250px;'}}></div>
    </>
  )
}

export default Home
