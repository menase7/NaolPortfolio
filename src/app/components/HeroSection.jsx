"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center md:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-800">
              Hello, I&apos;m{" "} Amen
            </span>
            <br></br>
            <div className="text-3xl lg:text-5xl">
            <TypeAnimation
              sequence={[
                "Graphics Designer",
                1000,
                "Video Editor",
                1000,
                "Logo maker",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          You can order whatever you want, wherever you are.          
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-600 to-red-800 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-400 to-red-800 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="bg-[#181818] rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative max-md:mt-5 overflow-hidden">
            <Image
              src="/images/f74c55edc593407f66f5797d6c4b9819.jpg"
              alt="hero image"
              className="absolute"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
