// Carousel.js
import { useState } from 'react';
import slider from "../style/slider1.png";
import Image from "next/image";
const Carousel = () => {
    return (
        <div className="flex">
            <div className="w-12 md:w-[190px] md:h-[63px] overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-1 bg-custom-color rounded-[16px] p-2">
                <div className="flex items-center">
                    <Image
                        src={slider}
                        alt="Arrow"
                        className="w-2 h-2 md:w-1/4 md:h-auto mt-1"
                        sizes="20vw"
                    />
                    <div className="text-white pl-[8px] text-[20px] mb-[10px]">ETH</div> 
                    <a></a>
                    <div className="text-white pl-[8px] text-[20px] mb-[10px]">$3,500</div> 
                </div>
            </div>
        </div>
    );
};

export default Carousel;
