import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  {useEffect , useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import MoonCloud from '../components/svg/MoonCloud'
import SunCloud from '../components/svg/SunCloud'
import Link from 'next/link'

const Home = () => {

    const context = useContext(ThemeContext)
    const color = useContext(ThemeContext).color
    const theme = useContext(ThemeContext).theme.name

    useEffect(() => {
        console.log(context)
    }, [])

  return (
    <>
    <style jsx>{`
            .welcomeContainer {
                height:100%;
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

            .projectPictures {

            }
            .work {

            }

            .projectPictures{
                width : var(--columnWidth6);
            }

            @media screen and (min-width: 768px) {

                .marginLeft {
                    margin-left : var(--columnWidth1);
                }
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
                .paragraphs,.paragraphsLeft {
                    margin-left : var(--columnWidth1);
                    width:var(--columnWidth3);
                }

                .projectPictures {
                    width : var(--columnWidth5);
                    }
            }

            @media screen and (min-width:1200px) {

                .paragraphs {
                    margin-left : var(--columnWidth1);
                    width:var(--columnWidth3);
                }
                .paragraphsLeft {
                    margin-left : var(--columnWidth3);
                    width:var(--columnWidth3);
                }
                .welcomeText {
                    margin-left : var(--columnWidth1);
                }
                .projectPictures {
                    width : var(--columnWidth3);
                }

            }

        `}</style>
        <section className='welcomeContainer welcomeText'>
            <article className='welcomeContainer'>
                <h2 className='bonjour'>Bonjour, je m'appelle </h2>
                <h1 className='name'><span>Nicolas Oudea</span></h1>
                <h2 className='dev'>Je suis un <span>développeur web</span> basé sur <span>Nantes</span></h2>
                {theme === 'light' ? <SunCloud></SunCloud>  : <MoonCloud></MoonCloud> }
                {/* <img style={{width:'250px'}}src='/svg/test3.svg'></img> */}
            </article>
        </section>
        <div className='separator'></div>
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
        <div className='separator'></div>
        {/* <div style={{height:'250px;'}}></div> */}
        <section className='work'>
            <h2>Projets</h2>
            <article className='paragraphs'>
                <div>
                    <h3 data-aos='fade-right'>Ariane</h3>
                    <img data-aos='fade-up' className='projectPictures' src='/images/7fcb28b7e75d3abd9543e2273dbc5744.webp'></img>
                </div>
                <div data-aos='fade-up'>
                    <p>C'est une librairie de composants pour <span>Next.js</span> et <span>React</span>. </p>
                    <p>Technologies : </p>
                    <p><span>Next.js React Gsap</span></p>
                    <div>
                        <a href='https://ariane.vercel.app/'>VISITER</a>
                    </div>
                </div>
            </article>
            <article className='paragraphsLeft'>
                <div>
                    <h3 data-aos='fade-left'>My Desktop</h3>
                    <img data-aos='fade-up' alt='project pic' className='projectPictures' src='/images/db58485c536036cbd7cc389eae83cb10.webp'></img>
                </div>
                <div data-aos='fade-up'>
                    <p>Un portfolio version os mac.</p>
                    <p>Technologies : </p>
                    <p><span>Next.js React Gsap</span></p>
                    <div>
                        <a href='https://nicolasoudea.vercel.app/'>VISITER</a>
                    </div>
                </div>
            </article>
        </section>
        <div style={{height:'550px'}}></div>
    </>
  )
}

export default Home
