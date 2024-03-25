"use client"
import bigcoin from "../style/coin.png";
import Image from "next/image"
import arrowImg from "../style/arrow.png";
import Carousel from "./Slider";
const TitleDiv = () => {
    return (
        <div class="h-[981px]">
            <div class="text-2xl mt-8 ml-20 h-[40%]">
                <div class="flex bg-custom-color rounded-[32px] h-[65%] w-[40%]">
                    <div class="w-3/4">
                        <a className="block font-bold text-1xl md:text-2xl text-white font-[HankenGroteskRegular] pt-6 pl-6 ">
                            My Balance
                        </a>
                        <a className="block font-bold text-1xl md:text-6xl text-white font-[HankenGroteskRegular] pt-6 pl-6">
                            $25,350.52
                        </a>
                        <b className="block font-light text-xs md:text-lg text-white font-[HankenGroteskRegular] w-[300px] md:w-[500px] pt-[24px] pl-[24px]">
                            Grow your portfolio{" "}
                            <a href="your_other_link_url" className="text-[#C86C00] font-light underline font-[HankenGroteskRegular]">
                                check latest listed coins
                            </a>
                            <div
                                style={{ width: "21px", height: "21px" }}
                                className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-1"
                            >
                                <Image
                                    src={arrowImg}
                                    alt="Arrow"
                                    className="w-2 h-2 md:w-24 md:h-auto mt-0.7"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </b>
                        <a className="block text-[6px] md:text-[12px] text-white font-[HankenGroteskRegular] pl-6">
                            *All values represented in USD
                        </a>
                    </div>
                    <div class="w-3/4">
                        <Image
                            src={bigcoin}
                            alt="Arrow"
                            className="w-2 h-2 md:w-[200px] md:h-auto mt-6"
                            sizes="20vw"
                            priority
                        />
                    </div>
                </div>
                <a className="block text-1xl md:text-[24px] text-white font-[HankenGroteskRegular] pt-6 pl-6 ">
                    Your top movers
                </a>
                <div className="w-full h-full flex justify-center items-center">
                    <Carousel />
                </div>
            </div>

        </div>
    );
}

export default TitleDiv