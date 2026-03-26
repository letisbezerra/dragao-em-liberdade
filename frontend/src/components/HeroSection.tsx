import { motion } from "framer-motion";
import WaveSVG from "./WaveSVG";
import heroImage from "@/assets/hero-jangada.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-ocean-deep"
      aria-label="Seção principal sobre Dragão do Mar"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ilustração abstrata de uma jangada tradicional cearense navegando em ondas verdes do oceano"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 via-ocean-deep/60 to-ocean-deep" />
      </div>

      <div className="container relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold font-body font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Francisco José do Nascimento
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-primary-foreground leading-tight tracking-tight mb-6"
          >
            Dragão do Mar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-primary-foreground/80 font-body leading-relaxed max-w-2xl mb-8"
          >
            O jangadeiro cearense que paralisou o tráfico de escravizados no porto de Fortaleza. 
            Herói da abolição, Chico da Matilde navegou a jangada <em className="text-gold font-semibold not-italic">Liberdade</em> contra 
            a maré da escravidão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#historia"
              className="inline-flex items-center px-6 py-3 bg-gold text-accent-foreground font-body font-semibold rounded-lg transition-all hover:shadow-ocean-lg hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-gold"
            >
              Conhecer a História
            </a>
            <a
              href="#conversar"
              className="inline-flex items-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded-lg transition-all hover:bg-primary-foreground/10 focus-visible:ring-2 focus-visible:ring-gold"
            >
              Conversar com o Dragão
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 text-background">
        <WaveSVG className="w-full md:h-32" />
      </div>
    </section>
  );
};

export default HeroSection;