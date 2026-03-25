import { motion } from "framer-motion";
import WaveSVG from "./WaveSVG";

const places = [
  {
    name: "Poço da Draga",
    description:
      "Porto histórico de Fortaleza, onde os jangadeiros atracavam e de onde partiam os navios negreiros. Foi aqui que Chico da Matilde liderou a greve de 1881.",
    detail: "Fortaleza, CE",
  },
  {
    name: "Canoa Quebrada",
    description:
      "Pequena vila de pescadores no litoral leste do Ceará, onde nasceu Francisco José do Nascimento em 1839. A comunidade de jangadeiros moldou sua identidade.",
    detail: "Aracati, CE",
  },
  {
    name: "Centro Dragão do Mar",
    description:
      "O maior centro cultural do Ceará, inaugurado em 1999 em homenagem ao herói. Abriga museus, teatros, cinemas e espaços de arte, mantendo viva a memória da luta pela liberdade.",
    detail: "Fortaleza, CE",
  },
  {
    name: "Passeio Público",
    description:
      "Jardim público de Fortaleza onde abolicionistas se reuniam para planejar ações contra a escravidão. Palco de discursos e manifestações do movimento abolicionista cearense.",
    detail: "Fortaleza, CE",
  },
];

const PlacesSection = () => {
  return (
    <section id="lugares" className="relative bg-ocean-deep py-20 md:py-32" aria-labelledby="lugares-titulo">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 text-background">
        <WaveSVG className="w-full md:h-32" flip />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-gold font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Onde a História Aconteceu
          </p>
          <h2 id="lugares-titulo" className="font-display font-bold text-3xl md:text-5xl text-primary-foreground leading-tight mb-4">
            Lugares Históricos
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            Conheça os locais que foram palco da luta contra a escravidão no Ceará.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {places.map((place, i) => (
            <motion.article
              key={place.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-6 hover:bg-card/15 transition-colors"
            >
              <span className="text-gold text-xs font-body font-semibold uppercase tracking-wider">
                {place.detail}
              </span>
              <h3 className="font-display font-semibold text-xl text-primary-foreground mt-1 mb-3">
                {place.name}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed text-sm">
                {place.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 text-background">
        <WaveSVG className="w-full md:h-32" />
      </div>
    </section>
  );
};

export default PlacesSection;
