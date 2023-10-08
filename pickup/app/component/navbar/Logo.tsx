'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
    const router = useRouter();
    
    
    return (
        <Image
            alt="logo"
            className="hidden md:block cursor-pointer"
            height= "100"
            width= "100"
            src="/images/logopickup.png"
        />
    )
};

export default Logo;