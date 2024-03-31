import Image from "next/image";
import logo from '../../public/assets/logo.svg'
import profile from '../../public/assets/user-profile.svg'
import menu from '../../public/assets/menu.svg'


const NavLinks=[
    {name:"Features"},
    {name:"Pricing"},
    {name: "Enterprise"},
    {name: "Careers"}

]


export function Navbar(){
    return(
      <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
        <div className="flex items-center">
            <Image src={logo} alt="Logo" />

         <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
               {NavLinks.map((item, index) => (
               <p className="text-[#36485C] font-medium" key={index}>{item.name}</p>
              ))}
         </div>

        </div>

        <div className="flex gap-x-5 ">

            <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open An Account</p>
            <div className="flex items-center gap-x-2">
             <Image src={profile} alt="user-profile"/>
             <span className="hidden font-medium text-[#36485C] lg:block">Sign in</span>
             
            </div>
            <Image src={menu} alt="menu" className="lg:hidden"/>
        </div>

      </nav>
    )
}