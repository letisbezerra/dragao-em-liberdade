import { motion } from "framer-motion";

const ContextSection = () => {
  return (
    <section id="contexto" className="py-20 md:py-32 bg-sand" aria-labelledby="contexto-titulo">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-ocean-mid font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Contexto Histórico
          </p>
          <h2 id="contexto-titulo" className="font-display font-bold text-3xl md:text-5xl text-foreground leading-tight mb-8">
            O Ceará e a Abolição
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              No século XIX, o Brasil era um dos últimos países das Américas a manter a escravidão. 
              O Ceará, porém, se destacou como pioneiro na luta abolicionista. A economia cearense, 
              baseada na pecuária e no algodão, dependia menos do trabalho escravizado do que as 
              províncias açucareiras e cafeeiras.
            </p>
            <p>
              A grande seca de 1877-1879 devastou o Ceará, e muitos escravizados foram vendidos 
              para as províncias do sul — um comércio interprovincial que revoltou a população. 
              Os jangadeiros, trabalhadores livres do mar, eram peça-chave nesse transporte: 
              levavam os escravizados até os navios ancorados ao largo.
            </p>

            <blockquote className="border-l-4 border-gold pl-6 py-2 my-8">
              <p className="font-display text-2xl md:text-3xl text-foreground italic font-light leading-snug">
                "No porto do Ceará não se embarcam mais escravos!"
              </p>
              <footer className="mt-3 text-base text-ocean-mid font-body font-semibold not-italic">
                — Francisco José do Nascimento, 1881
              </footer>
            </blockquote>

            <p>
              Em 27 de janeiro de 1881, sob a liderança de Chico da Matilde — já conhecido como 
              <strong className="text-foreground"> Dragão do Mar</strong> —, os jangadeiros se 
              recusaram a transportar escravizados. A greve paralisou o tráfico no porto de 
              Fortaleza e se espalhou por outros portos cearenses.
            </p>
            <p>
              Em <strong className="text-foreground">25 de março de 1884</strong>, o Ceará se 
              tornou a primeira província brasileira a libertar todos os escravizados, quatro anos 
              antes da Lei Áurea. O ato corajoso dos jangadeiros foi o estopim dessa conquista histórica.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContextSection;
