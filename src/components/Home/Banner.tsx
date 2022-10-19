import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Banner() {
  return (
    <section className="relative mx-auto max-w-screen-xl">
      <span className="absolute bottom-0 z-20 h-40 w-full bg-gradient-to-t from-gray-100 to-transparent"></span>
      <Carousel
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            src="/Banner1.jpeg"
            width={1400}
            height={550}
            objectFit="contain"
            alt="Launch 100+ games with Alexa. Luna. Luna Controller."
            priority
          />
        </div>
        <div>
          <Image
            src="/Banner2.jpg"
            width={1400}
            height={550}
            objectFit="contain"
            alt="Enjoy free pickup"
            priority
          />
        </div>
        <div>
          <Image
            src="/Banner3.jpg"
            width={1400}
            height={550}
            objectFit="contain"
            alt="Watch Thursday Night Football on Prime Video"
            priority
          />
        </div>
      </Carousel>
    </section>
  );
}
