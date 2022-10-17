import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Banner() {
  return (
    <section className="bg-[#232F3E] bg-opacity-90 ">
      <Carousel
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="">
          <Image
            src="/Banner1.jpeg"
            width={1400}
            height={550}
            objectFit="contain"
            alt="Launch 100+ games with Alexa. Luna. Luna Controller."
            priority
          />
        </div>
        <div className="h-[20vh] md:h-[40vh] lg:h-[60vh]">
          <Image
            src="/Banner2.jpg"
            width={1400}
            height={550}
            objectFit="contain"
            alt="Enjoy free pickup"
            priority
          />
        </div>
        <div className="h-[20vh] md:h-[40vh] lg:h-[60vh]">
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
