import './App.css'
import Footer from './Footer'
import Navbar from './Nav' 
import TimeLine from './Timeline'

function App() {

  return (
    <>
    <div className="relative overflow-hidden bg-[url('/public/banner.jpg')]">
    <Navbar/>
 <div className='flex flex-col h-96 items-center justify-center'>
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">We invest in the world’s potential</h1>
<p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Learn more
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>
</div>
      </div>
      <TimeLine/>
      <Footer/>
    </>
    
  )
}

export default App
