import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>iFED</title>
        <meta name="description" content="Deloitte Consulting Philippines Delivery Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex justify-center items-center">
        <div className="text-center">
          <h1>HOMEPAGE</h1>
          <h2>This page is currently in progress...</h2>
          <p className="m-[25px]">Please click <button className="flex justify-center items-center mx-auto my-[5px] w-[275px] md:w-[150px] rounded-[25px] bg-[#80B324] text-[16px] text-white"><MdChevronRight className="w-[40px] h-[40px]" /><Link href="/login">HERE</Link><MdChevronLeft className="w-[40px] h-[40px]" /></button> to start</p>
        </div>
      </main>
    </div>
  )
}

export default Home