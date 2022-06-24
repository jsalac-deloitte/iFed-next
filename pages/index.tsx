import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UserProfile from './Profile/ReadUser'
import CreateUser from './Profile/CreateUser'

const Home: NextPage = () => {
  return (
    <>
      <CreateUser />
      <UserProfile />
    </>

  )
}

export default Home
