
import Aboutus from "./Aboutus";
import ContactUs from "./Contactus";
import Products from "./Products";
import Navbar from "./Nav";
import aqua from './assets/logo.svg'

const menus = [

  { name: "Spa & Diposables", url:"/" },
  { name: "About", id: "about-us" },
  { name: "Products", id: "products" },
  { name: "Contact Us", id: "contact-us" },

];
function Aquze() {
  return (
    <>
    <Navbar menus={menus} logo={aqua}/>
      <div className="pt-6" >
        <div className="relative overflow-hidden bg-white">
          <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
              <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                   Clean germs with Aqua Clenz
                  </h1>
                  <p className="mt-4 text-xl text-gray-500">
                  Aqua Clenz is an effective solution for cleaning germs and bacteria. With its advanced formula, Aqua Clenz sanitizes surfaces, 
                  providing a hygienic environment by eliminating harmful pathogens. Ideal for both home and office use, 
                  it offers a quick and reliable way to maintain cleanliness and protect against germs.
                  </p>
                </div>
                <div>
                  <div className="mt-10">
                    {/* Decorative image grid */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                    >
                      <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                              <img
                                alt=""
                                src="https://lh3.googleusercontent.com/d/1i57q65SP3EMqfFMDSNogp1Up57sx6CRq"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://lh3.googleusercontent.com/d/1_CTSsY-ZeO3AkAta-2YDhk3whpE3iGQD"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                          </div>
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://lh3.googleusercontent.com/d/1BVtzjJocoK4fu8D7QBHbNj7HJZYWccR0"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                          </div>
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                
                                src="https://lh3.googleusercontent.com/d/16jRmZdRCUs8AXT1tqUJFMc581laOvpP3"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <Aboutus bgColor="bg-gradient-to-r from-emerald-500 to-green-900"/>
      <Products sheetNo={1} key={"product"}/>
      <ContactUs  bgColor="bg-gradient-to-r from-emerald-500 to-green-900"/>
    </>
  );
}

export default Aquze;
