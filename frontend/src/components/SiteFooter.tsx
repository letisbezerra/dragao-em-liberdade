const SiteFooter = () => (
  <footer className="bg-ocean-deep py-12" role="contentinfo">
    <div className="container text-center">
      <p className="font-display text-2xl md:text-3xl text-primary-foreground/60 italic mb-4">
        "No porto do Ceará não se embarcam mais escravos!"
      </p>
      <p className="text-primary-foreground/40 text-sm font-body mb-6">
        Francisco José do Nascimento — Dragão do Mar — 1839–1914
      </p>
      <div className="flex justify-center gap-6 text-primary-foreground/40 text-xs font-body">
        <a href="#inicio" className="hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold rounded">
          Início
        </a>
        <a href="#historia" className="hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold rounded">
          História
        </a>
        <a href="#conversar" className="hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold rounded">
          Conversar
        </a>
      </div>
      <p className="text-primary-foreground/20 text-xs font-body mt-8">
        Site educacional · Conteúdo gerado com auxílio de inteligência artificial
      </p>
    </div>
  </footer>
);

export default SiteFooter;
