
import Aboutus from "./Aboutus";
import ContactUs from "./Contactus";
import Navbar from "./Nav";
import Products from "./Products";
import dispoableLogo from './assets/dispologo.png'

const menus = [

  { name: "Aqua Clienz", url:"aqua" },
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
                    and food supply, heavy duty cutlery.
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
                                src="https://lh3.googleusercontent.com/d/1CaEIU-rQYZcXhKb2c5-sdTvRkoOWZc0h" className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://lh3.googleusercontent.com/d/17mEwDI4vXaYLIzQEqaMjIZt5_esZ6Y_Q"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                          </div>
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://www.man-med.com/wp-content/uploads/2024/01/Disposable-Pillow-Case-1.jpg"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://www.man-med.com/wp-content/uploads/2024/01/beard-guard-beard-cover-3.jpg"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://www.man-med.com/wp-content/uploads/2024/01/Blue-Anti-Skid-Polypropylene-Shoe-Cover-3.jpg"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                          </div>
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://www.man-med.com/wp-content/uploads/2024/01/mop-cap-1.jpg"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://www.man-med.com/wp-content/uploads/2024/01/Blue-Polypropylene-Disposable-Lab-Coat-3.jpg"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#products"
                      className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                    >
                      Check Out More
                    </a>
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
      <div className="fixed bottom-0 right-0 p-4">
        <a
          href="#home"
          className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </a>
      </div>

    </>
  );
}

export default Disposable;
