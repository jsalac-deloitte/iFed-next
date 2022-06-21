import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UserProfile from './Profile/userProfile'
import CreateUser from './Profile/createUser'

const Home: NextPage = () => {
  return (
    <>
      <CreateUser />
      <UserProfile />
    </>

  )
}

export default Home
