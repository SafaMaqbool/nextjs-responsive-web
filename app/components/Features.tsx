import Image from "next/image"
import sales from "../../public/assets/salesmonitoring.svg"
import customersupport from "../../public/assets/customersupport.svg"
import growthmonitoring from "../../public/assets/growthmonitoring.svg"
import check from "../../public/assets/checkmark.svg"
import arrow from "../../public/assets/arrow.svg"
import greenarrow from "../../public/assets/greenarrow.svg"
import pinkarrow from "../../public/assets/pinkarrow.svg"

export function Features(){
    return(
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
            <Image src={sales} alt="sales monitoring" className="hidden w-1/2 sm:block"/>
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="font-medium text-[#0085FF] lg:text-[18px]">Sales Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Simplify your sales monitoring</h1>
                    <Image src={sales} alt="sales monitoring" className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                    Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. 
                    </p>

                    <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span><Image src={check} alt=""/></span>
                            Lorem ipsum dolor sit amet

                        </li>

                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span><Image src={check} alt=""/></span>
                            Consectetur adipiscing elit

                        </li>

                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span><Image src={check} alt=""/></span>
                            Sed do eiusmod tempor incididunt ut labore 

                        </li>

                    </ul>

                    <p className="pt-[24px] font-medium text-[#0085FF] flex items-center gap-x-2 lg:text-[18px]"> Learn More <span> <Image src={arrow} alt=""/></span></p>
                </div>

            </div>


            {/* SECOND FEATURE LIST */}
            <div className="flex flex-col gap-x-6 sm:flex-row">
            <Image src={customersupport} alt="" className="hidden w-1/2 sm:block"/>
                <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
                    <h3 className="font-medium text-[#00A424] lg:text-[18px]">Customer Support</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Get in touch with your customers</h1>
                    <Image src={customersupport} alt="" className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                    Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. 
                    </p>

                    <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span><Image src={check} alt=""/></span>
                            Lorem ipsum dolor sit amet

                        </li>

                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span><Image src={check} alt=""/></span>
                            Consectetur adipiscing elit

                        </li>

                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span><Image src={check} alt=""/></span>
                            Sed do eiusmod tempor incididunt ut labore 

                        </li>

                    </ul>

                    <p className="pt-[24px] font-medium text-[#00A424] flex items-center gap-x-2 lg:text-[18px]"> Learn More <span> <Image src={greenarrow} alt=""/></span></p>
                </div>

            </div>

            {/* third feature list */}
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
            <Image src={growthmonitoring} alt="sales monitoring" className="hidden w-1/2 sm:block"/>
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="font-medium text-[#EB2891] lg:text-[18px]">Growth Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Monitor your site's new subscribers </h1>
                    <Image src={growthmonitoring} alt="sales monitoring" className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#172026]  lg:text-[18px]">
                    Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. 
                    </p>

                   <div className="flex w-full gap-x-[24px]">
                    <div className="w-1/2 flex flex-col gap-y-3">
                        <h3 className="text-[20px] font-medium text-[#172026]">
                            100+
                        </h3>
                        <p className="text-[#5F7896]">lorem ipsum dolor sit</p>

                    </div>

                    <div className="w-1/2 flex flex-col gap-y-3">
                        <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
                        <p className="text-[#5F7896]">Conse adipiscing elit</p>

                    </div>

                   </div>

                   <p className="pt-[24px] font-medium text-[#EB2891] flex items-center gap-x-2 lg:text-[18px]"> Learn More <span> <Image src={pinkarrow} alt=""/></span></p>
                </div>

            </div>


        </div>
    )
}