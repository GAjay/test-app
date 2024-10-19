const stats = [
    {
      id: 1,
      img: "https://www.man-med.com/wp-content/uploads/2023/05/make-in-india.webp",
      value: "44 million",
    },
    {
      id: 2,
      img: "https://www.man-med.com/wp-content/uploads/2023/12/Digital_India_logo.webp",
      value: "$119 trillion",
    },
    {
      id: 3,
      img: "https://www.man-med.com/wp-content/uploads/2023/05/skill-india-logo.webp",
      value: "46,000",
    },
  ];
  const Footer = () => (
    <footer className="bg-gray  bg-gray-100">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-800 dark:text-gray-800 sm:text-center">
            {new Date().getFullYear()}
            <a href="/"> Aqua Clienz</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <img
              className="h-10"
              src="https://pngimagesfree.com/wp-content/uploads/Make-in-India-Logo-PNG-HD-Transparent@.png"
              alt=""
            />
  
            <img
              className="h-10"
              src="https://i0.wp.com/nomadtrips.in/wp-content/uploads/2021/03/kisspng-digital-india-government-of-india-prime-minister-o-comparex-india-private-limited-5b3d6667b99ef1.9025586015307505677603.png?ssl=1"
              alt=""
            />
            <img
              className="h-10"
              src="https://i0.wp.com/www.numel.in/wp-content/uploads/2021/11/Startup-India-Logo1-02.png?fit=3042%2C788&ssl=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
   