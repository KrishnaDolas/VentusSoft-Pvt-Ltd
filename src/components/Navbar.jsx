import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  useEffect(() => {

    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);




  const getLinkClasses = (path) => {

    const isActive = location.pathname === path;

    return `text-sm font-medium transition-all duration-300 hover:text-sky-400 ${
      isActive
        ? 'text-sky-400 border-b border-sky-400 pb-1'
        : 'text-white/70'
    }`;

  };





  return (

    <>

      <header

        className={`fixed top-0 left-0 w-full h-[72px] z-[1000] transition-all duration-300 flex items-center border-b ${
          scrolled || mobileMenuOpen
            ? 'bg-[#050a14]/90 backdrop-blur-md border-white/10'
            : 'bg-transparent border-transparent'
        }`}

      >



        {/* CONTAINER — perfectly aligned with Hero */}

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex justify-between items-center">



          {/* LOGO */}

          <Link

            to="/"

            className="flex items-center gap-3 z-[1002]"

            onClick={() => setMobileMenuOpen(false)}

          >


            {/* LOGO IMAGE — place your file in public/logo.png */}

          {/* <div className="h-20 w-20 overflow-hidden rounded-xl">
  <img
    src="/auribus_ventuslogo.png"
    alt="Ventus Soft"
    className="h-full w-full object-cover"
  />
</div> */}





            {/* <span className="text-white font-semibold text-lg tracking-tight">

              Ventus Soft

            </span> */}


          </Link>





          {/* DESKTOP NAV */}

          <div className="hidden lg:flex items-center gap-10">



            <nav className="flex gap-8">

              <Link to="/" className={getLinkClasses('/')}>Home</Link>

              <Link to="/services" className={getLinkClasses('/services')}>Services</Link>

              <Link to="/about" className={getLinkClasses('/about')}>About</Link>

            </nav>




            <Link

              to="/contact"

              className="px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-white/80"

            >

              Contact

            </Link>



          </div>





          {/* MOBILE BUTTON */}

          <button

            className="lg:hidden text-white text-2xl z-[1002]"

            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

          >

            {mobileMenuOpen ? <FaTimes /> : <FaBars />}

          </button>



        </div>

      </header>





      {/* MOBILE MENU */}

      <div

        className={`fixed top-0 left-0 w-full h-screen bg-[#050a14] z-[999] flex flex-col items-center justify-center gap-10 transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}

      >


        <Link to="/" className="text-2xl font-semibold text-white hover:text-sky-400" onClick={() => setMobileMenuOpen(false)}>Home</Link>

        <Link to="/services" className="text-2xl font-semibold text-white hover:text-sky-400" onClick={() => setMobileMenuOpen(false)}>Services</Link>

        <Link to="/about" className="text-2xl font-semibold text-white hover:text-sky-400" onClick={() => setMobileMenuOpen(false)}>About</Link>



        <Link

          to="/contact"

          className="mt-6 px-8 py-4 rounded-lg bg-white text-black font-semibold text-lg"

          onClick={() => setMobileMenuOpen(false)}

        >

          Contact

        </Link>



      </div>



    </>

  );

};



export default Navbar;