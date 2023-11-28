import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bestie's Special Page</title>
      </Head>

      <main className="p-6">
        <h1 className="text-4xl font-bold text-center text-purple-500">
          Wajeeha!! Pagalll
        </h1>
        <p className='text-center text-purple-900 font-semibold mt-5'>pyar ha tumse magar pyar se dar lgta haaa ohhhhhh</p>
        <p className='text-center mt-2'>Parh le Moye moye krnay se pass ni hona!!! 😂🤷‍♀️</p>
       
       <div className='flex justify-center items-center mt-8'>
        <Link href={"/surprise"} className='bg-black hover:bg-purple-700 text-white py-2 px-4 rounded justify-center'>SURPRISE!!!</Link>
        </div> 
      </main>
    </div>
  )
}

export default Home
