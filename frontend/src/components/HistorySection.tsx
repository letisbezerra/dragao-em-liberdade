import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } },
};

const timeline = [
  {
    year: "1839",
    title: "Nascimento",
    text: "Francisco José do Nascimento nasce em Canoa Quebrada, litoral do Ceará. Filho de uma lavadeira chamada Matilde, ficou conhecido como Chico da Matilde.",
  },
  {
    year: "1847",
    title: "Vida no Mar",
    text: "Aos oito anos, seu pai morreu. Sem ter muitas opções, sua mãe consegue um emprego para ele como menino de recados em navios que viajavam entre o Maranhão e o Ceará.",
  },
  {
    year: "1859",
    title: "Torna-se Líder",
    text: "Até os 20 anos, Chico trabalhou no veleiro de um renomado comendador português, virou comandante e conheceu muitos portos do Norte e Nordeste. Também ajudou a construir o porto de Fortaleza como chefe dos catraieros, foi nomeado prático-mor da Capitania dos Portos do Ceará, e alugava jangadas para levar pessoas e cargas.",
  },
  {
    year: "1881",
    title: "A Greve dos Jangadeiros",
    text: "Lidera a histórica greve dos jangadeiros, recusando-se a transportar escravizados para os navios negreiros. Com sua jangada Liberdade, desafia o sistema escravocrata.",
  },
  {
    year: "1884",
    title: "Ceará Livre",
    text: "O Ceará se torna a primeira província brasileira a abolir a escravidão, quatro anos antes da Lei Áurea. A luta dos jangadeiros foi fundamental para essa conquista.",
  },
  {
    year: "1914",
    title: "Legado Eterno",
    text: "Francisco falece em Fortaleza, mas seu legado permanece vivo. É homenageado com o Centro Dragão do Mar de Arte e Cultura, um dos maiores espaços culturais do Nordeste.",
  },
];

const HistorySection = () => {
  return (
    <section id="historia" className="py-20 md:py-32 bg-background" aria-labelledby="historia-titulo">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-2xl mb-16"
        >
          <p className="text-ocean-mid font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Linha do Tempo
          </p>
          <h2 id="historia-titulo" className="font-display font-bold text-3xl md:text-5xl text-foreground leading-tight mb-4">
            A História do Dragão do Mar
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            De jangadeiro humilde a herói da abolição: conheça os momentos que marcaram a vida de Francisco José do Nascimento.
          </p>
        </motion.div>

        <div className="relative" role="list" aria-label="Linha do tempo de Dragão do Mar">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } },
              }}
              role="listitem"
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div
                className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 mt-2 ring-4 ring-background z-10"
                aria-hidden="true"
              />

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="inline-block text-gold font-display font-bold text-2xl mb-1">{item.year}</span>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
