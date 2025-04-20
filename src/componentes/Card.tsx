interface ICard {
    capa: string;
    titulo: string;
    descricao: string;
}

function Card({ capa, titulo, descricao }: ICard) {
    return (
        <>
            <div className="row row-col bg-[#acdbee] border-1 border-gray-500 w-[95%] m-auto md:w-[45%] h-[285px] lg:w-[90%]">
                <img
                    className="capa w-[100%] h-[200px]"
                    src={capa}
                    alt="imagem 4"
                />

                <p className="descricao p-1">
                    <b className="titulo">{titulo} </b>
                    {descricao}
                </p>
            </div>
        </>
    );
}

export default Card;
