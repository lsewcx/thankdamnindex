'use client'


import React from 'react';
import DemoCarousel from './DemoCarousel';

export default function Swiper(){
    return(
        <section className="relative">
        <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
        ,<DemoCarousel></DemoCarousel>
        </div>
        </div>
        </section>
    )
}