import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import dragaoImage from "@/assets/dragao-do-mar.png";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestedQuestions = [
  "Como era sua vida como jangadeiro?",
  "Por que você liderou a greve de 1881?",
  "Me conte sobre a jangada Liberdade.",
  "O que você sentiu quando o Ceará aboliu a escravidão?",
];

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    // In production, this would call an edge function
    try {
      const res = await fetch("https://dragao-em-liberdade.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text.trim(),
        }),
      });

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Sua mensagem é muito longa. Tente até 140 caracteres.",
          },
        ]);
        return;
      }

      const data = await res.json();

      if (data.error) {
        throw new Error("Erro na API");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Perdão, o mar está agitado e não consigo responder agora. Tente novamente." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <section id="conversar" className="relative py-20 md:py-32 bg-background" aria-labelledby="chat-titulo">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <img
            src={dragaoImage}
            alt="Retrato artístico de Francisco José do Nascimento, o Dragão do Mar"
            className="mx-auto mb-6 w-48 h-48 rounded-full object-scale-down shadow-lg border-4 border-ocean-foam"
          />
          <p className="text-ocean-mid font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Conversa com a História
          </p>
          <h2 id="chat-titulo" className="font-display font-bold text-3xl md:text-5xl text-foreground leading-tight mb-4">
            Fale com o Dragão do Mar
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Converse diretamente com Francisco José do Nascimento e aprenda sobre sua história, suas lutas e seu legado.
          </p>
        </motion.div>

        {/* Chat container */}
        <div className="max-w-2xl mx-auto">
          <div
            className="bg-card border border-border rounded-2xl shadow-ocean-lg overflow-hidden"
            role="log"
            aria-label="Conversa com Dragão do Mar"
            aria-live="polite"
          >
            {/* Messages area */}
            <div className="h-96 overflow-y-auto p-4 md:p-6 space-y-4">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="animate-float mb-4" aria-hidden="true">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-ocean-light">
                      <path d="M24 4L8 20h10v16h12V20h10L24 4z" fill="currentColor" opacity="0.3" />
                      <path d="M4 40c4-4 8-6 12-6s8 2 12 6 8 6 12 6" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M4 44c4-4 8-6 12-6s8 2 12 6 8 6 12 6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground font-body text-sm">
                    O mar está calmo. Pergunte algo ao Dragão.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {suggestedQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="px-3 py-1.5 text-xs font-body font-medium bg-ocean-foam text-ocean-deep rounded-full hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-chat text-sm leading-relaxed ${msg.role === "user"
                        ? "bg-ocean-deep text-primary-foreground"
                        : "bg-muted text-foreground"
                        }`}
                    >
                      {msg.role === "assistant" ? (
                        <div className="prose-chat">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      ) : (
                        msg.content
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted px-4 py-3 rounded-chat">
                    <div className="flex gap-1.5" aria-label="Dragão do Mar está pensando">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className="w-2 h-2 bg-ocean-mid rounded-full animate-bounce"
                          style={{ animationDelay: `${dot * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="border-t border-border p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex gap-3 items-end"
              >
                <label htmlFor="chat-input" className="sr-only">
                  Escreva sua pergunta para o Dragão do Mar
                </label>
                <textarea
                  ref={inputRef}
                  id="chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Fale com Dragão do Mar..."
                  rows={1}
                  className="flex-1 resize-none bg-muted rounded-xl px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  disabled={isLoading}
                  aria-describedby="chat-help"
                />
                <span id="chat-help" className="sr-only">
                  Pressione Enter para enviar, Shift+Enter para nova linha
                </span>
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-3 bg-ocean-deep text-primary-foreground rounded-xl font-body font-semibold text-sm transition-all hover:shadow-ocean hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Enviar mensagem"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            As respostas são geradas por inteligência artificial e podem conter imprecisões históricas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
