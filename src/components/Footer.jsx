import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="bg-[#050a14] border-t border-white/10 pt-16 pb-8 text-white mt-auto">




      {/* MAIN CONTAINER */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-12">




        {/* BRAND */}

        <div className="max-w-sm">

          <div className="flex items-center gap-3">


            <img

              src="/auribus_ventuslogo.png"

              alt="Ventus Soft"

              className="h-9 w-auto object-contain"

            />


            <span className="text-lg font-semibold tracking-tight" style={ {color: "#5e98f1",}}>

              Ventus Soft

            </span>

          </div>



          <p className="mt-4 text-sm text-white/50 leading-relaxed">

            Engineering reliable infrastructure, cloud platforms,

            and deployment systems for modern software teams.

          </p>


        </div>





        {/* LINKS */}

        <div className="flex flex-col sm:flex-row gap-10 text-sm">




          {/* NAV LINKS */}

          <div className="flex flex-col gap-3">

            <span className="text-white/40 uppercase tracking-wider text-xs">

              Company

            </span>

            <Link to="/services" className="text-white/70 hover:text-white transition">

              Services

            </Link>

            <Link to="/about" className="text-white/70 hover:text-white transition">

              About

            </Link>

            <Link to="/contact" className="text-white/70 hover:text-white transition">

              Contact

            </Link>

          </div>





          {/* CONTACT */}

          <div className="flex flex-col gap-3">

            <span className="text-white/40 uppercase tracking-wider text-xs">

              Contact

            </span>

            <a

              href="mailto:support@ventussoft.com"

              className="flex items-center gap-2 text-white/70 hover:text-white transition"

            >

              <FaEnvelope />

              support@ventussoft.com

            </a>



            <a

              href="https://www.linkedin.com/"

              target="_blank"

              rel="noreferrer"

              className="flex items-center gap-2 text-white/70 hover:text-white transition"

            >

              <FaLinkedin />

              LinkedIn

            </a>

          </div>




        </div>




      </div>






      {/* COPYRIGHT */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row justify-between gap-4">


        <span>

          © 2026 Ventus Soft. All rights reserved.

        </span>


        <span>

          Built for reliability at scale.

        </span>


      </div>





    </footer>

  );

}