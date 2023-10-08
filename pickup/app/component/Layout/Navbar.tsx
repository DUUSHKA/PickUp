import Container from "../Container";
import Logo from "../navbar/Logo";
import UserMenu from "../navbar/UserMenu";


export default function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px] bg-white">
                <Container>
                    <div 
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0
                            "
                        >
                            <Logo/>

                            <UserMenu/>


                    </div>
                </Container>
            </div>
        </div>
  );
}