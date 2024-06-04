import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SiMaterialformkdocs } from "react-icons/si";
import whiteLogo from "@/public/cc-logo-white.svg";
const Footer = () => {
  return (
    <div className=" bg-[#0C191E] min-h-[500px]">
      <div className=" w-4/5 mx-auto ">
        <div className=" p-5">
          <div className=" flex md:items-center items-start  flex-col md:flex-row gap-[10px] md:gap-[40px]">
            <h3 className=" text-[#ffffff] font-poppins-bold text-[25px]">
              Join our community{" "}
            </h3>
            <div className=" flex gap-2">
              <Link href={"https://twitter.com/CryptoCartCC"} target="_blank">
                <div className="  border-white h-[40px] w-[40px] flex items-center justify-center rounded-full text-[5px] text-white hover:opacity-80 border-[2px]">
                  <FaTwitter className=" w-full h-auto p-[4px]" />
                </div>
              </Link>
              <Link href={"https://t.me/cryptocartcc"} target="_blank">
                <div className="  border-white h-[40px] w-[40px] flex items-center justify-center rounded-full text-[5px] text-white hover:opacity-80 border-[2px]">
                  <FaTelegramPlane className=" w-full h-auto p-[4px]" />
                </div>
              </Link>
              <Link href={"https://docs.cryptocart.cc/"} target="_blank">
                <div className="  border-white h-[40px] w-[40px] flex items-center justify-center rounded-full text-[5px] text-white hover:opacity-80 border-[2px]">
                  <SiMaterialformkdocs className=" w-full h-auto p-[5px]" />
                </div>
              </Link>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className=" flex flex-col md:flex-row md:h-[450px] mt-10 w-3/4 mx-auto justify-between gap-4">
            <div className=" hidden md:block">
              <div className=" flex flex-col justify-between  h-full">
                <div className=" flex items-center gap-5 ">
                  <div className=" text-white  ">
                    <h4 className=" text-[25px] font-poppins-bold">
                      cryptocart
                    </h4>
                    <p className=" text-[15px] font-poppins-regular text-end">
                      pay your way
                    </p>
                  </div>
                  <div>
                    <Image src={whiteLogo} alt="" className=" w-1/2 h-auto" />
                  </div>
                </div>
                <div className=" text-white font-poppins-regular text-[15px]">
                  <p>Copyright © 2024 Cryptocart.</p>
                  <p>All rights reserved.</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#48E640] w-[2px] h-full my-auto" />
            <div className=" flex  flex-col gap-[10px] md:gap-[50px]">
              <div className=" text-white text-[18px] flex flex-col gap-2">
                <p className=" font-poppins-bold">Here to help</p>
                <Link
                  href={
                    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=contact@cryptocart.cc"
                  }
                  target="_blank"
                >
                  {" "}
                  <p className=" font-poppins-regular hover:opacity-80">
                    contact@cryptocart.cc
                  </p>
                </Link>
              </div>
              <div className=" text-white text-[18px] flex flex-col gap-2">
                <p className=" font-poppins-bold">Policy</p>
                <div className=" flex flex-col gap-[1px]">
                  <Link
                    href={"https://cryptocart.cc/privacy-policy/"}
                    target="_blank"
                  >
                    <p className=" font-poppins-regular hover:opacity-80">
                      Privacy & cookies policy
                    </p>
                  </Link>
                  <Link
                    href={"https://cryptocart.cc/terms-of-use/"}
                    target="_blank"
                  >
                    <p className=" font-poppins-regular hover:opacity-80">
                      General terms & conditions
                    </p>
                  </Link>
                  <Link
                    href={"https://cryptocart.cc/terms-of-service/"}
                    target="_blank"
                  >
                    <p className=" font-poppins-regular hover:opacity-80">
                      Product terms & conditions
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" bg-[#48E640] w-[2px] h-full my-auto" />
            <div className=" flex flex-col gap-7">
              <div className=" text-white text-[18px] flex flex-col gap-2">
                <p className=" font-poppins-bold">Join Community</p>
                <div className="  flex flex-col gap-[1px]">
                  <Link
                    href={"https://twitter.com/CryptoCartCC"}
                    target="_blank"
                  >
                    <div className=" flex  items-center gap-2">
                      <FaTwitter className=" text-[#48E640]" />

                      <p className=" font-poppins-regular hover:opacity-80">
                        @CryptoCartCC
                      </p>
                    </div>
                  </Link>
                  <Link href={"https://t.me/cryptocartcc"} target="_blank">
                    <div className=" flex  items-center gap-2">
                      <FaTelegramPlane className=" text-[#48E640]" />
                      <p className=" font-poppins-regular hover:opacity-80">
                        CryptoCart Official
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              {/* ------------------- */}
              <div className=" text-white text-[18px] flex flex-col md:gap-2 ">
                <p className=" font-poppins-bold">Explore CC Token</p>
                <div className=" flex flex-col gap-[1px]">
                  <Link
                    href={"https://twitter.com/CryptoCartCC"}
                    target="_blank"
                  >
                    <div className=" flex  items-center gap-2">
                      <FaTwitter className=" text-[#48E640]" />

                      <p className=" font-poppins-regular hover:opacity-80">
                        Coin Gecko
                      </p>
                    </div>
                  </Link>
                  <Link href={"https://t.me/cryptocartcc"} target="_blank">
                    <div className=" flex  items-center gap-2">
                      <FaTelegramPlane className=" text-[#48E640]" />
                      <p className=" font-poppins-regular hover:opacity-80">
                        Dextools
                      </p>
                    </div>
                  </Link>
                  <Link href={"https://t.me/cryptocartcc"} target="_blank">
                    <div className=" flex  items-center gap-2">
                      <FaTelegramPlane className=" text-[#48E640]" />
                      <p className=" font-poppins-regular hover:opacity-80">
                        CoinMarketCap
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" bg-[#48E640] w-[2px] h-full my-auto" />
            <div className=" flex flex-col justify-between gap-5 md:gap-0">
              <div className=" ">
                <div className=" text-white text-[18px] flex flex-col gap-2">
                  <p className=" font-poppins-bold">Buy CC Token</p>
                  <p className=" font-poppins-bold">Ethereum</p>

                  <div className=" flex flex-col gap-[2px]">
                    <Link
                      href={"https://twitter.com/CryptoCartCC"}
                      target="_blank"
                    >
                      <div className=" flex  items-center gap-2">
                        <p className=" font-poppins-regular hover:opacity-80">
                          Uniswap
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"https://twitter.com/CryptoCartCC"}
                      target="_blank"
                    >
                      <div className=" flex  items-center gap-2">
                        <p className=" font-poppins-regular hover:opacity-80">
                          Digifinex
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"https://twitter.com/CryptoCartCC"}
                      target="_blank"
                    >
                      <div className=" flex  items-center gap-2">
                        <p className=" font-poppins-regular hover:opacity-80">
                          1Inch
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"https://twitter.com/CryptoCartCC"}
                      target="_blank"
                    >
                      <div className=" flex  items-center gap-2">
                        <p className=" font-poppins-regular hover:opacity-80">
                          Dodo Exchange
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"https://twitter.com/CryptoCartCC"}
                      target="_blank"
                    >
                      <div className=" flex  items-center gap-2">
                        <p className=" font-poppins-regular hover:opacity-80">
                          Rango Exchange
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"https://twitter.com/CryptoCartCC"}
                      target="_blank"
                    >
                      <div className=" flex  items-center gap-2">
                        <p className=" font-poppins-regular hover:opacity-80">
                          Paraswap
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className=" text-white text-[18px] flex flex-col gap-2">
                  <p className=" font-poppins-bold">Binance</p>

                  <div className=" flex flex-col  gap-[2px]">
                    <Link
                      href={"https://twitter.com/CryptoCartCC"}
                      target="_blank"
                    >
                      <div className=" flex  items-center gap-2">
                        <p className=" font-poppins-regular hover:opacity-80">
                          PancakeSwap
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"https://twitter.com/CryptoCartCC"}
                      target="_blank"
                    >
                      <div className=" flex  items-center gap-2">
                        <p className=" font-poppins-regular hover:opacity-80">
                          1Inch
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"https://twitter.com/CryptoCartCC"}
                      target="_blank"
                    >
                      <div className=" flex  items-center gap-2">
                        <p className=" font-poppins-regular hover:opacity-80">
                          Dodo Exchange
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"https://twitter.com/CryptoCartCC"}
                      target="_blank"
                    >
                      <div className=" flex  items-center gap-2">
                        <p className=" font-poppins-regular hover:opacity-80">
                          Rango Exchange
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"https://twitter.com/CryptoCartCC"}
                      target="_blank"
                    >
                      <div className=" flex  items-center gap-2">
                        <p className=" font-poppins-regular hover:opacity-80">
                          Paraswap
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
