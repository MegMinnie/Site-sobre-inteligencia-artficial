import "./App.css";
import Header from "./componentes/Header";
import Card from "./componentes/Card";
import Footer from "./componentes/Footer";
import logo from "./assets/logo.png";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
import img6 from "./assets/img6.jpg";
import perfil from "./assets/perfil.png";

function App() {
    return (
        <>
            <Header logo={logo} />
            <main className=" flex flex-col gap-4 lg:flex-row lg:justify-between">
                <section className="flex flex-col gap-2 lg:w-full bg-white pb-8 p-2 lg:ml-[50px] lg:p-4">
                    <h2
                        className="text-[#003460] bg-white
                text-3xl font-bold text-center p-2"
                    >
                        Inteligência Artificial: A tecnologia que está mudando o
                        mundo
                    </h2>
                    <img
                        className="w-[90%] h-[200px] p-4 m-auto md:w-[40%] md:h-[260px]"
                        src={img1}
                        alt="Imagem 1"
                    />
                    <p className="text-justify">
                        A inteligência artificial (IA) é um conjunto de
                        tecnologias que possibilita a máquinas realizarem
                        tarefas complexas, simulando a capacidade humana de
                        aprender, raciocinar e tomar decisões a partir de dados.
                        Isso torna processos como a produção muito mais rápidos
                        e eficazes, otimizando o tempo, entre outros benefícios.
                    </p>
                    <p className="text-justify">
                        Apesar dessas e de outras vantagens da utilização da IA,
                        muitos ainda nutrem medo e desconfiança em relação a
                        ela. Grande parte desse medo é estimulada pelo
                        imaginário popular, presente no cinema, em filmes e
                        livros, especialmente do gênero ficção científica.
                        Nesses trabalhos, a IA é explorada, geralmente, de forma
                        negativa, com cenários distópicos como robôs se voltando
                        contra os humanos.
                    </p>
                    <b className="mt-2">
                        Para entender mais sobre esse tema, neste post você irá
                        conferir:
                    </b>
                    <ul className="list-disc pl-5 text-blue-800 text-justify">
                        <li>
                            <a href="#">
                                Qual é a origem da inteligência Artificial?
                            </a>
                        </li>
                        <li>
                            <a href="#">Tipos de Inteligência artificial</a>
                        </li>
                        <li>
                            <a href="#">
                                Por que as pessoas temem o avanço da
                                Inteligência Artficial?
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                O futuro da Inteligência artificial e seu
                                impacto na sociedade
                            </a>
                        </li>
                    </ul>
                    <h2
                        className="text-[#003460] bg-white
                text-xl font-bold  p-2"
                    >
                        Qual é a origem da Inteligencia Artificial
                    </h2>
                    <p className="text-justify">
                        A ideia de um sistema inteligente que pudesse pensar e
                        agir como um ser humano é mais antiga do que se imagina,
                        as pessoas já pensavam em um sistema que pudesse
                        automatizar suas tarefas e diminuir seu trabalho manual,
                        porém foi somente em 1943 que Warren McCulloch e Walter
                        Pitts criaram o modelo computacional para redes neurais,
                        considerado o precursor da inteligência artificial,
                        apesar do termo ter sido cunhado pela primeira vez em
                        1956 por John McCarthy durante seus estudo sobre a
                        capacidade de máquinas de realizar tarefas humanas.
                    </p>
                    <p className="text-justify">
                        Em 1950, o matemático e cientista Alan Turing publicou
                        um estudo pioneiro sobre a inteligência artificial
                        chamado de Teste de Turing que tinha como finalidade
                        descobrir se uma máquina poderia se passar por uma
                        pessoa. Posto isso, o teste consistia em colocar uma
                        pessoa e uma máquina em salas separadas, para que um
                        interrogador tentasse identificar qual era qual, apenas
                        fazendo perguntas. Se a máquina conseguisse enganar o
                        interrogador, ela seria considerada inteligente, contudo
                        a primeira vez que uma máquina passou no Teste de Turing
                        foi em 2014, em uma banca na Universidade de Reading em
                        Londres. Apesar desse marco, os primeiros estudos sobre
                        inteligência artificial, no século XX, eram limitados
                        pela falta de computadores poderosos o suficiente para
                        processar grandes volumes de dados e simular a
                        complexidade da cognição humana. Naquela época, a ideia
                        de máquinas inteligentes era mais comum na ficção
                        científica, como em filmes como "O Exterminador do
                        Futuro" e "Blade Runner".
                    </p>
                    <p className="text-justify">
                        Nos dias de hoje, a inteligência artificial deixou de
                        ser ficção científica para se tornar realidade.
                        Algoritmos de IA são capazes de identificar padrões em
                        grandes conjuntos de dados, personalizando recomendações
                        e conteúdos para cada usuário. Chatbots com IA podem
                        responder a diversas perguntas e gerar textos criativos,
                        imitando a comunicação humana. Além disso, a IA
                        automatiza processos, aumentando a eficiência e a
                        precisão em diversas áreas. Essa tecnologia funciona por
                        meio do aprendizado de máquina, em que os sistemas são
                        treinados com grandes quantidades de dados para
                        identificar padrões e tomar decisões cada vez mais
                        precisas. A IA tem o potencial de revolucionar diversas
                        áreas, desde a medicina até a indústria, contribuindo
                        para a resolução de problemas complexos e o
                        desenvolvimento de novas soluções.
                    </p>

                    <h2
                        className="text-[#003460] bg-white
                text-xl font-bold  p-2"
                    >
                        Tipos de inteligência artificial
                    </h2>
                    <p className="text-justify">
                        A Inteligência Artificial pode ser classificada em 3
                        tipos, conforme a capacidade e o propósito para qual foi
                        projetada:
                    </p>
                    <h3 className="font-bold">
                        1.Inteligência Artificial Limitada (ANI)
                    </h3>
                    <p className="text-justify">
                        O primeiro tipo de IA é a Inteligência Artificial
                        Limitada, ou ANI. Ela armazena uma enorme quantidade de
                        dados e consegue realizar tarefas complexas com muita
                        rapidez. No entanto, por não conseguir ir além disso, é
                        considerada uma "IA fraca". Esse tipo de IA é comum no
                        reconhecimento facial ou assistentes virtuais como Alexa
                        e Siri.
                    </p>

                    <h3 className="font-bold">
                        2. Inteligência artificial geral (AGI)
                    </h3>
                    <p className="text-justify">
                        Inteligência artificial geral (AGI) também recebe o nome
                        de "IA forte", que pode ser capaz de realizar tarefas
                        similares às dos seres humanos e de autoaprender através
                        de técnicas como machine learning (aprendizado de
                        máquina). Além disso, esse modelo pode ser aplicado a
                        tarefas nas quais a ANI é limitada. Atualmente, essa
                        forma de IA ainda é teórica e não foi totalmente
                        desenvolvida.
                    </p>
                    <h3 className="font-bold">3. Superinteligência (ASI)</h3>
                    <p className="text-justify">
                        Superinteligência (ASI) é um termo que se refere à
                        inteligência artificial capaz de realizar tarefas
                        impossíveis para as pessoas, podendo até superar a
                        capacidade humana em diversos aspectos, como
                        criatividade e resolução de problemas em grandes
                        escalas, revolucionando a forma como vemos e entendemos
                        o mundo. Esse último modelo levanta muitas questões
                        éticas e de segurança, pois se essa IA pode superar os
                        humanos, o mundo se depara com a questão de que, no
                        futuro, poderia ser dominado por máquinas. No entanto,
                        ela ainda é apenas uma teoria.
                    </p>
                    <h2 className="text-[#003460] bg-white text-xl font-bold  p-2">
                        Por que as pessoas temem o avanço da Inteligência
                        Artficial?
                    </h2>
                    <figure>
                        <img
                            className="w-[90%] h-[200px] m-auto md:w-[40%] md:h-[260px]"
                            src={img2}
                            alt="Imagem 2"
                        />
                        <figcaption className="text-center text-gray-700">
                            <i>Ex-Machina, filme de 2014</i>
                        </figcaption>
                    </figure>
                    <p className="text-justify">
                        A inteligência artificial está transformando
                        profundamente a sociedade, alterando a forma como
                        vivemos e trabalhamos. Essa rápida evolução tecnológica
                        gera preocupações, principalmente em relação à
                        possibilidade de a IA substituir a mão de obra humana. A
                        capacidade da inteligência artificial de resolver
                        problemas complexos de forma rápida e eficiente levanta
                        questionamentos sobre o futuro do mercado de trabalho,
                        alimentando o temor de que muitos empregos se tornem
                        obsoletos.
                    </p>
                    <p className="text-justify">
                        Outro fator que amplifica esse medo é a natural aversão
                        humana ao desconhecido. A necessidade de segurança e
                        controle nos leva a desconfiar de novas tecnologias e
                        situações que não compreendemos totalmente. O modelo de
                        IA superinteligente, além de ser novo, representa uma
                        tecnologia que pode superar o intelecto humano, gerando
                        o temor de que um dia possamos perder o controle sobre
                        ela, com consequências imprevisíveis.
                    </p>
                    <p className="text-justify">
                        A mídia, com filmes como "Ex Machina", que retratam a IA
                        como uma ameaça, ajudam a reforçar essa percepção. A
                        representação frequente da inteligência artificial como
                        algo perigoso ou maléfico, seja por meio de robôs
                        assassinos ou máquinas que se rebelam contra a
                        humanidade, influencia a opinião pública e aumenta o
                        medo em relação a sistemas inteligentes alimentando
                        temores de substituição ou aniquilação.
                    </p>
                    <h2 className="text-[#003460] bg-white text-xl font-bold  p-2">
                        O futuro da Inteligência artificial e seu impacto na
                        sociedade
                    </h2>
                    <p className="text-justify">
                        A Inteligência Artificial (IA) está em constante
                        aprimoramento, utilizando aprendizado de máquina para
                        otimizar seus resultados e adquirir conhecimento de
                        forma rápida a partir de estímulos e informações. No
                        entanto, à medida que a IA se torna mais sofisticada,
                        surgem debates complexos sobre seus impactos na
                        sociedade, na ética e na própria definição de
                        inteligência. Entre as principais preocupações estão a
                        substituição de empregos por máquinas e os riscos
                        potenciais de uma IA que ultrapasse o intelecto humano.
                        Embora o desconhecido possa gerar apreensão, é
                        fundamental que nos mantenhamos abertos a novas
                        possibilidades, evitando nos limitar ao que já
                        conhecemos, pois isso implicaria renunciar ao progresso.
                    </p>
                    <p className="text-justify">
                        Apesar das incertezas, a IA pode trazer impactos
                        positivos para o futuro. Ela é capaz de assumir tarefas
                        repetitivas e rotineiras, permitindo que empresas adotem
                        a automação para liberar seus funcionários a se
                        dedicarem a trabalhos mais criativos e estratégicos,
                        aumentando a produtividade, reduzindo o tempo gasto em
                        tarefas operacionais e diminuindo a margem de erro.
                        Outra grande vantagem da IA está na área da medicina,
                        onde já contribui para diagnósticos mais precisos,
                        tratamentos personalizados e no desenvolvimento de novos
                        medicamentos. No futuro, pode até ajudar na descoberta
                        de curas para doenças graves, como o câncer, além de
                        acelerar avanços científicos ao analisar grandes volumes
                        de dados.
                    </p>
                    <p className="text-justify">
                        Na educação, a IA também pode assumir um papel
                        importante, oferecendo personalização de conteúdos e
                        adaptando-se às necessidades individuais de cada aluno.
                        Com o uso de plataformas educacionais que já utilizam
                        IA, é possível criar planos de aprendizagem dinâmicos e
                        recomendados de acordo com o ritmo e estilo de
                        aprendizagem de cada indivíduo. Essa abordagem tem o
                        potencial de tornar a educação mais inclusiva, ajudando
                        alunos a desenvolverem suas habilidades de forma
                        personalizada e eficiente.
                    </p>
                </section>
                <section className="flex flex-col itens-center justify-center  gap-6 lg:w-[50%]">
                    <h1 className="text-2xl font-bold text-[#003460] p-2 lg:text-center lg:text-3xl">
                        Artigos relacionados
                    </h1>
                    <div className="flex flex-col gap-6 md:flex md:flex-row md:flex-wrap md:itens-center lg:flex-col">
                        <Card
                            capa={img3}
                            titulo="Inteligência Artificial e o emprego:"
                            descricao="Especialista discute sobre as inquietações da inteligência artificial para o trabalho."
                        />

                        <Card
                            capa={img4}
                            titulo="Character AI:"
                            descricao="A nova ferramenta que permite conversar com personagens da ficção."
                        />
                        <Card
                            capa={img5}
                            titulo="Avanços na medicina:"
                            descricao="Inteligência artificial pode ser ferramenta de auxílio na saúde coletiva, aponta pesquisa."
                        />

                        <Card
                            capa={img6}
                            titulo="ChatGPT na educação:"
                            descricao="Especialista comenta sobre a inteligência artificial no campo educacional."
                        />
                    </div>
                    <div className="flex flex-col itens-center justify-center border-3 border-[#003360] p-2 w-[95%] lg:w-[90%]">
                        <div className="flex flex-row items-center gap-3">
                            <img
                                className="w-[15%] rounded-[50%]"
                                src={perfil}
                                alt="Perfil"
                            />
                            <b>Escrito por: Mirele Oliveira</b>
                        </div>
                        <p className="text-justify">
                            graduanda em Licenciatura em Computação pelo IFBA -
                            Instituto Federal de Educação, Ciência e Tecnologia
                            da Bahia.
                        </p>
                    </div>
                </section>
            </main>
            <Footer logo2={logo} />
        </>
    );
}

export default App;
