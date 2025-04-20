import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

interface IFooter {
    logo2: string;
}

function Footer({ logo2 }: IFooter) {
    return (
        <>
            <footer className="bg-black text-white flex flex-row  md:flex-row items-center justify-between p-4 text-center gap-4 md:gap-0 lg:p-6">
                <div className="md:items-center md:gap-2 md:visible md:flex md:w-1/3 hidden">
                    <img className="logo2 w-[14%]" src={logo2} alt="logo" />
                    <p className="text-4xl font-bold">Integra</p>
                </div>

                <div className="flex flex-col gap-2 items-center  md:w-1/3">
                    <h4 className="font-bold">Para mais informações</h4>
                    <ul>
                        <li>Quem Somos</li>
                        <li>Política de privacidade</li>
                        <li>Termos de Uso</li>
                        <li>Fale Conosco</li>
                    </ul>
                </div>

                <article className="flex flex-col gap-2 items-center  md:w-1/3">
                    <h4 className="font-bold">Siga nossas redes sociais</h4>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 text-xl">
                            <i className="text-[#016994]">
                                <FaFacebook />
                            </i>
                            <p className="text-[16px]">Facebook</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-xl">
                            <i className="text-[#fa035b]">
                                <FaInstagram />
                            </i>
                            <p className="text-[16px]">Instagram</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-xl">
                            <i className="text-[#27a1ef]">
                                <FaTwitter />
                            </i>
                            <p className="text-[16px]">Twitter</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-xl">
                            <i className="text-[#ff0000]">
                                <FaYoutube />
                            </i>
                            <p className="text-[16px]">Youtube</p>
                        </div>
                    </div>
                </article>
            </footer>
        </>
    );
}

export default Footer;
