import Image from "next/image";
import tick from "../../public/assets/checkmark.svg"
import whitetick from "../../public/assets/whitetick.svg"

export function Pricing(){
    return(
        <div className="py-[48px] lg:py-[60px]">
            <h1 className="text-[#172026] font-medium text-center text-[24px] lg:text-[42px]">Flexible plans for you</h1>
            <p className="text-center text-[#36485C] font-normal pt-4 pb-[40px] lg:text-[18px]">No hidden fees!</p>

            <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">

                <div className="w-full rounder-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="text-[#4328EB] font-medium text-[18px] lg:text-[20px]">Free Trial</h3>
                        <p className="text-[#36485C] font-normal pt-[12px] lg:text-[18px]">Perfect for testing the waters</p>
                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
                            0$<span className="text-[#5F7896]">/mo</span>
                        </h2>

                        <ul className="flex flex-col gap-y-2 pt-4 text-[#36485C]">
                            <li className="flex items-center gap-x-2"><span><Image src={tick} alt=""/></span>Lorem ipsum dolor sit amet</li>
                            <li className="flex items-center gap-x-2"> <span><Image src={tick} alt=""/></span>Sed do eiusmod tempor incididunt</li>
                            <li className="flex items-center gap-x-2"><span><Image src={tick} alt=""/></span>Consectetur adipiscing elit</li>
                        </ul>
                    </div>
                    <button className="mt-[16px] rounded-[4px] bg-[#ffff] py-[14px] text-[#4328EB] font-medium">Start Trial</button>

                </div>
                {/* second card */}
                <div className="w-full rounder-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="text-[#fff] font-medium text-[18px] lg:text-[20px]">Business</h3>
                        <p className="text-[#F4F8FA] font-normal pt-[12px] lg:text-[18px]">Perfect for small business</p>
                        <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
                            500$<span className="text-[#F4F8FA]">/mo</span>
                        </h2>

                        <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
                            <li className="flex items-center gap-x-2"><span><Image src={whitetick} alt=""/></span>Lorem ipsum dolor sit amet</li>
                            <li className="flex items-center gap-x-2"> <span><Image src={whitetick} alt=""/></span>Sed do eiusmod tempor incididunt</li>
                            <li className="flex items-center gap-x-2"><span><Image src={whitetick} alt=""/></span>Consectetur adipiscing elit</li>
                            <li className="flex items-center gap-x-2"><span><Image src={whitetick} alt=""/></span>Consectetur adipiscing elit</li>
                            <li className="flex items-center gap-x-2"><span><Image src={whitetick} alt=""/></span>Consectetur adipiscing elit</li>
                        </ul>

                    </div>
                    <button className="mt-[16px] rounded-[4px] bg-[#ffff] py-[14px] text-[#4328EB] font-medium">Get Started</button>

                </div>
                {/* Third card */}

                <div className="w-full rounder-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="text-[#4328EB] font-medium text-[18px] lg:text-[20px]">Enterprise</h3>
                        <p className="text-[#36485C] font-normal pt-[12px] lg:text-[18px]">Perfect for big companies</p>
                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
                            Custom
                        </h2>

                      <p className="pt-4 text-[16px] text-[#36485C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>
                      <p className="pt-2 text-[16px] text-[#36485C]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <button className="mt-[16px] rounded-[4px] bg-[#ffff] py-[14px] text-[#4328EB] font-medium">Contact Us</button>

                </div>

            </div>

        </div>
    )
}