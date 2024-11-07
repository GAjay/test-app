
import Aboutus from "./Aboutus";
import ContactUs from "./Contactus";
import Navbar from "./Nav";
import Products from "./Products";
import dispoableLogo from './assets/spalogo.svg'

const menus = [

  { name: "Aqua Clenz", url:"aqua" },
  { name: "About", id: "about-us" },
  { name: "Products", id: "products" },
  { name: "Contact Us", id: "contact-us" },

];
function Disposable() {
  return (
    <>
    <Navbar menus={menus} logo={dispoableLogo}/>
      <div className="pt-6" >
        <div className="relative overflow-hidden bg-white">
          <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
              <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Beauty Spa Salon, Medical Disposable Products
                  </h1>
                  <p className="mt-4 text-xl text-gray-500">
                    Leading manufacturer, supplier, and exporter of the most
                    comprehensive range of spa-salon disposable products and
                    medical surgical disposable products and disposable catering
                    and food supply.
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
                                src="https://lh3.googleusercontent.com/d/1wBsmLqbiwxFfacR-idLBD7bQGblnbteP" className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://lh3.googleusercontent.com/d/1TAx1-YXpOo_gep28ItN980-UJMT0LWrK"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                          </div>
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://lh3.googleusercontent.com/d/1sdK_8bvARENYK2dL_7ylfJDbZhbrmpah"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://lh3.googleusercontent.com/d/1RxU8st_93Hhw2kWKg3yiGdTsGlcQMMXX"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://lh3.googleusercontent.com/d/1CaEIU-rQYZcXhKb2c5-sdTvRkoOWZc0h"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                          </div>
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                
                                src="https://lh3.googleusercontent.com/d/1KdN1sN36jUugkPXUbguPRYyFi56xea1f"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://lh3.googleusercontent.com/d/1l1KnSqborYdFL795NPInyZL6yPXp04kK"
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
      <Aboutus bgColor="bg-gradient-to-r from-zinc-900 to-zinc-900"/>
      <Products />
     <ContactUs  bgColor="bg-gradient-to-r from-zinc-900 to-zinc-900"/>
    </>
  );
}

export default Disposable;
