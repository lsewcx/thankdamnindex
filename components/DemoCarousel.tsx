import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import chaungye from '@/public/images/chuangye.jpg';
export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                <Image className="relative rounded-full" src={chaungye}  alt="Testimonial 01" />
                </div>
                <div>
                    <Image className="relative rounded-full" src={chaungye}  alt="Testimonial 01" />
                </div>
            </Carousel>
        );
    }
}