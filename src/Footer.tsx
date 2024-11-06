import makeIndia from './assets/Make-in-India-Logo-PNG-HD-Transparent@.png'
import startupindia from './assets/Startup-India-Logo1-02.png'
import kisspng from './assets/kisspng-digital-india-government-of-india-prime-minister-o-comparex-india-private-limited-5b3d6667b99ef1.9025586015307505677603.png'
  
  const Footer = () => (
    <footer className="bg-gray  bg-gray-100">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-800 dark:text-gray-800 sm:text-center">
            {new Date().getFullYear()} All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <img
              className="h-10"
              src={makeIndia}
              alt="make in india"
            />
  
            <img
              className="h-10"
              src={startupindia} alt="startupindia"
            />
            <img
              className="h-10"
              src={kisspng}
              alt="kisspng"
            />
          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
   