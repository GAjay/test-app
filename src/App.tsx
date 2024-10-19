import "./App.css";
import ContactUs from "./Contactus";
import Footer from "./Footer";
import Navbar from "./Nav";
import Products from "./Products";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-6" >
        {/* <div className="relative overflow-hidden ">
          <div className="flex flex-col h-screen items-center justify-center">
            <div className="w-max">
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-5xl text-black font-bold">
                We invest in the world’s potential
              </h1>
            </div>
            <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Learn more
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div> */}
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
                                src="https://www.man-med.com/wp-content/uploads/2024/01/Blue-Polyethylene-Shoe-Covers-1.jpg"
                                className="h-full w-full object-cover object-center border rounded-3xl"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                alt=""
                                src="https://www.man-med.com/wp-content/uploads/2024/01/Disposable-bed-Sheet-1.jpg"
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

      <section
        className="py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-gradient-to-r from-emerald-500 to-green-900 "
        id="about-us"
      >
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-base font-normal leading-relaxed text-white">
                    About Us
                  </h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      The Tale of Our Achievement Story
                    </h2>
                    <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
                      Our achievement story is a testament to teamwork and
                      perseverance. Together, we've overcome challenges,
                      celebrated victories, and created a narrative of progress
                      and success.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-white text-2xl font-bold font-manrope leading-9">
                        5+ Years
                      </h4>
                      <p className="text-white text-base font-normal leading-relaxed">
                        Influencing Digital Landscapes Together
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-white text-2xl font-bold font-manrope leading-9">
                        99% Happy Clients
                      </h4>
                      <p className="text-white text-base font-normal leading-relaxed">
                        Mirrors our Focus on Client Satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="https://5.imimg.com/data5/PI/FR/AN/SELLER-55850641/ppe-kit-500x500.png"
                  alt="about Us image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Products />

      <ContactUs />
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

      <Footer />
    </>
  );
}

export default App;
