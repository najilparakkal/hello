'use client';

import React from 'react';
import Image from 'next/image';
import Header from '../src/helpers/components/Header';
import Services from '../src/helpers/components/Services';
import Gallery from '../src/helpers/components/Gallery';
import SecondGallery from '../src/helpers/components/SecondGallery';
import LandingSecond from '../src/helpers/components/LandingSecond';
import Contact from '../src/helpers/components/Contact';
import Footer from '../src/helpers/components/Footer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function HomePage() {
  return (
    <>
      <div className="relative w-full flex flex-col  h-60 md:min-h-screen">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/banner/sumatra-weddings-tyKLwDFdrCU-unsplash.jpg"
            alt="Background"
            fill
            className="md:object-cover "
            quality={100}
            priority
          />
          <div
            className="absolute hidden md:flex top-0 left-0 w-full h-full"
            style={{
              clipPath: 'polygon(0 0, 40% 0, 60% 100%, 0% 100%)',
              backgroundColor: 'rgba(0,0,0,0.4)'
            }}
          ></div>
        </div>

        <Header />

        <main className="relative z-10 flex flex-grow   justify-start items-center  md:mt-0 mt-4 ">
          <div className="container h-fit  flex items-center">
            <div className="text-white w-full md:w-1/2 px-6 md:px-40">
              <h1 className="text-xl md:text-7xl font-bold leading-tight mb-2 ">
                <span className='font-light md:text-4xl text-sm super-thin  '>PLAN</span><br />
                <span className='text-[var(--primary-color)] '> Y</span>OUR<br />
                EVENT'<span className='text-[var(--primary-color)]'>S</span>
              </h1>
              <p className="text-xs text-style tracking-widest md:text-xl md:mb-8 mb-2">
                WITH ELEGANCE AND PASSION,
              </p>
              <div className="flex gap-5  items-center ">
                <button className="bg-[var(--primary-color)] text-black md:px-4 md:py-2 md:text-sm text-xs px-2 h-7 md:h-auto  rounded-lg font-bold hover:bg-gray-100 transition">
                  Contact Us
                </button>

                <div className="flex space-x-2">
                  <div className="flex items-center space-x-[-10px]">
                    <p className="">
                      <Image
                        width={30}
                        height={30}
                        className="inline-block rounded-full object-cover md:w-8 w-7 h-7 md:h-8 ring-2 ring-white"
                        src="/users/360_F_164453979_9LUTIH7upWczSzYjJXOojjt87GPmRHMQ.jpg"
                        alt="Guy"
                      />
                    </p>
                    <p className="">
                      <Image
                        width={30}
                        height={30}
                        className="inline-block rounded-full object-cover md:w-8 w-7 h-7 md:h-8 ring-2 ring-white"
                        src="/users/360_F_164453979_9LUTIH7upWczSzYjJXOojjt87GPmRHMQ.jpg"
                        alt="Max"
                      />
                    </p>
                    <p className="">
                      <Image
                        width={30}
                        height={30}
                        className="inline-block rounded-full object-cover md:w-8 w-7 h-7 md:h-8 ring-2 ring-white"
                        src="/users/360_F_164453979_9LUTIH7upWczSzYjJXOojjt87GPmRHMQ.jpg"
                        alt="Charles"
                      />
                    </p>
                  </div>
                  <div className="flex flex-col -space-y-1 justify-center items-center">
                    <div className="flex -space-x-2">
                      <DotLottieReact
                        src="https://lottie.host/b6eb3236-d611-4d6c-82c9-84978c29c1a7/huXfyYdmyz.lottie"
                        loop
                        autoplay
                        style={{ width: '25px', height: '25px' }}
                      />
                      <DotLottieReact
                        src="https://lottie.host/b6eb3236-d611-4d6c-82c9-84978c29c1a7/huXfyYdmyz.lottie"
                        loop
                        autoplay
                        speed={400}

                        style={{ width: '25px', height: '25px' }}
                      />
                      <DotLottieReact
                        src="https://lottie.host/b6eb3236-d611-4d6c-82c9-84978c29c1a7/huXfyYdmyz.lottie"
                        loop
                        autoplay
                        speed={400}

                        style={{ width: '25px', height: '25px' }}
                      />
                      <DotLottieReact
                        src="https://lottie.host/b6eb3236-d611-4d6c-82c9-84978c29c1a7/huXfyYdmyz.lottie"
                        loop
                        autoplay
                        speed={400}

                        style={{ width: '25px', height: '25px' }}
                      />
                      <DotLottieReact
                        src="https://lottie.host/b6eb3236-d611-4d6c-82c9-84978c29c1a7/huXfyYdmyz.lottie"
                        loop
                        autoplay
                        speed={400}
                        style={{ width: '25px', height: '25px' }}
                      />

                    </div>
                    <p className='text-sm font-semibold'> 4.8/5 rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/+91700004657"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 border border-green-600 rounded-full shadow-lg bg-green-600 transition z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"

            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.392 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.296-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
        </main>
      </div>
      <div className="h-auto bg-black">
        <LandingSecond />
        <Services />
        <Gallery />
        <SecondGallery />
        
        <Footer />
      </div>
    </>
  );
}