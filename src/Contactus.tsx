const ContactUs = (props:{bgColor:string}) => (
    <div className={props.bgColor}id="contact-us">
      <div className="max-w-screen-xl py-12 mx-auto sm:px-6 lg:py-16 ">
        <div className="py-6 rounded-lg md:py-12 md:px-12 lg:py-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1 justify-center align-center text-center">
            <h2 className="text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl sm:leading-9">
              Contact Us
            </h2>
            <p
              className="mt-3 text-lg leading-6 text-white"
              id="newsletter-headline"
            >
              <a href="mailto:aanchalmarketing@gmail.com">aanchalmarketing@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  export default ContactUs;
  