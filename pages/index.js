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
        <h1>Home</h1>
    </>
  )
}

export default Home
