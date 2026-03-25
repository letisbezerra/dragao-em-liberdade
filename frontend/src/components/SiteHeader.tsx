import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#historia", label: "História" },
  { href: "#lugares", label: "Lugares" },
  { href: "#contexto", label: "Contexto" },
  { href: "#conversar", label: "Conversar" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl" role="banner">
      <nav
        className="bg-card/90 backdrop-blur-md border border-border rounded-full px-4 md:px-6 py-3 shadow-ocean flex items-center justify-between"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          className="font-display font-bold text-lg text-foreground hover:text-ocean-mid transition-colors"
          aria-label="Ir para o início"
        >
          Dragão do Mar<span className="text-gold">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-1" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted focus-visible:ring-2 focus-visible:ring-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-card/95 backdrop-blur-md border border-border rounded-2xl p-4 shadow-ocean-lg"
          >
            <ul className="space-y-1" role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;
