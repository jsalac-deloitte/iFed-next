import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UserProfile from './Pages/Profile/ReadUser'
import CreateUser from './Pages/Profile/CreateUser'
import ReadUser from './Pages/Profile/ReadUser'

const Home: NextPage = () => {
  return (
    <>
      <ReadUser />
    </>

  )
}

export default Home
