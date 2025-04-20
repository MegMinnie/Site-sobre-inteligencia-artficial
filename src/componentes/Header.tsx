import { FiMenu } from "react-icons/fi";
interface IHeader {
    logo: string;
}

function Header({ logo }: IHeader) {
    return (
        <>
            <header className="bg-[#24252a] p-4 flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4 items-center ">
                    <img
                        className="logo w-[10%] md:w-[6%]"
                        src={logo}
                        alt="Logo"
                    />
                    <h1 className="text-white text-3xl font-bold lg:text-5xl">
                        Integra
                    </h1>
                </div>
                <i className="text-white text-2xl">
                    <FiMenu />
                </i>
            </header>
        </>
    );
}

export default Header;
