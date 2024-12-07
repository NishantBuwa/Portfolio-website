import React from "react"
import Nptel from '../../Assets//Nptel.png'
import tcs_ion from '../../Assets/Tcs_ion.png'
import hackerrank from '../../Assets/Hackerrank.png'
import udemy_1 from '../../Assets/Udemy_1.png'
import udemy_2 from '../../Assets/Udemy_2.png'



function Section3() {
    return (
        <div className="">
            <section id="certifications">
                <div className="section3-content">
                    <div className="heading">
                        <h1>CERTIFICATIONS</h1>
                    </div>
                    <div className="my_container">
                        <div id="default-carousel" className="relative w-full" data-carousel="slide">
                            <div className="my-carousel relative h-52 rounded-lg md:h-96">
                                <div className="my-img duration-700 ease-in-out" data-carousel-item>
                                    <img src={Nptel} className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-full max-h-full" alt="..." />
                                </div>
                                <div className="my-img hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src={tcs_ion} className="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  max-w-full max-h-full " alt="..." />
                                </div>
                                <div className="my-img hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src={hackerrank} className="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  max-w-full max-h-full " alt="..." />
                                </div>
                                <div className="my-img hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src={udemy_1} className="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  max-w-full max-h-full " alt="..." />
                                </div>
                                <div className="my-img hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src={udemy_2} className="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  max-w-full max-h-full " alt="..." />
                                </div>
                            </div>
                            <div className="round-button absolute z-30 flex -translate-x-1/2 left-1/2 space-x-3 rtl:space-x-reverse">
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                            </div>
                            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-prev>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-next>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Section3