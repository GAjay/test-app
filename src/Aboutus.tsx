const Aboutus=(props:{bgColor:string})=>    <section
className={`py-24 relative xl:mr-0 lg:mr-5 mr-0 ${props.bgColor}`}
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
            Established in the year 2010 Aanchal Marketing has been delivering its clients with good quality
products with timely delivery and also has its sister concern Bharti Disponeeds and Vedanta
Enterprises which are working in the field of industry supply along with cleaning products with our
own Brand Aqua Clenz. We have our esteemed clients like Marriott, Radisson and many other
esteemed clients.
We understand the critical role that high-quality disposables play in ensuring the safety and success
of medical, salon and spa services . Our extensive product range is meticulously designed to cater to
the unique requirements of healthcare institutions.
            </p>
          </div>
        </div>
        <div className="w-full flex-col justify-center items-start gap-6 flex">
          <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
            <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
              <h4 className="text-white text-2xl font-bold font-manrope leading-9">
                14+ Years
              </h4>
              <p className="text-white text-base font-normal leading-relaxed">
                Providing great Products
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

export default Aboutus