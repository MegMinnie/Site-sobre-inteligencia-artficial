import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
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
                <i className="text-white text-2xl lg:hidden ">
                    <FiMenu />
                </i>
                <div className="hidden lg:flex flex-row items-center border-1 border-gray-400">
                    <input
                        className="text-white p-2 "
                        type="text"
                        placeholder="Pesquisar..."
                    />
                    <i className="p-2  text-white font-bold text-2xl">
                        <CiSearch />
                    </i>
                </div>
            </header>
        </>
    );
}

export default Header;
