'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/');
      }
    
    
    return (
        <div onClick={handleGoHome} className="hover:brightness-110 transition ">
            <Image
                alt="logo"
                className="hidden md:block cursor-pointer"
                height= "100"
                width= "100"
                src="/images/logopickup.png"
            />
        </div>
    )
};

export default Logo;