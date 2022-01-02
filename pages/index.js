import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Spotter2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main>
      <Sidebar />
      {/* Center */}
     </main>

     <div>
       {/* Player */}
     </div>
    </div>
  )
}
