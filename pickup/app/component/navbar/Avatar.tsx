'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";


export const Avatar = () => {
    const router = useRouter();
    
    
    return (
        <Image
            alt="logo"
            className="hidden md:block cursor-pointer"
            height= "50"
            width= "50"
            src="/images/placeholder.png"
        />
    )
};

export default Avatar;