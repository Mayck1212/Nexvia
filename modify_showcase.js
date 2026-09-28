const fs = require('fs');
let content = fs.readFileSync('components/Showcase.tsx', 'utf8');

content = content.replace(
  /<span className="text-\[10px\] font-mono tracking-\[0.16em\] uppercase px-2.5 py-0.5 rounded-full bg-\[rgba\(255,255,255,0.04\)\] border border-\[rgba\(255,255,255,0.08\)\] text-\[#888\]">\s*DEMO — PERFORMANCE\s*<\/span>/,
  `<span className="text-[10px] font-mono tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#888]">
                    DEMO — PERFORMANCE
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] text-white ml-2">
                    Projeto de demonstração
                  </span>`
);

content = content.replace(
  /<p className="text-\[14px\] sm:text-\[15px\] text-\[#888888\] font-light leading-relaxed mb-6">\s*Uma experiência focada em energia, força e conversão.*?\s*<\/p>/,
  `<p className="text-[14px] sm:text-[15px] text-[#888888] font-light leading-relaxed mb-4">
                Uma experiência focada em energia, força e conversão.
              </p>
              <div className="mb-6 space-y-2 text-[14px]">
                <p><strong className="text-white">O desafio:</strong> Criar uma presença online agressiva e moderna para uma academia premium.</p>
                <p><strong className="text-white">A solução:</strong> Design em tons escuros, animações de alta energia e forte apelo visual nas áreas de conversão.</p>
              </div>`
);

content = content.replace(
  /<span className="text-\[10px\] font-mono tracking-\[0.16em\] uppercase px-2.5 py-0.5 rounded-full bg-\[rgba\(255,255,255,0.04\)\] border border-\[rgba\(255,255,255,0.08\)\] text-\[#888\]">\s*DEMO — GASTRONOMIA\s*<\/span>/,
  `<span className="text-[10px] font-mono tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#888]">
                    DEMO — GASTRONOMIA
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] text-white ml-2">
                    Projeto de demonstração
                  </span>`
);

content = content.replace(
  /<p className="text-\[14px\] sm:text-\[15px\] text-\[#888888\] font-light leading-relaxed mb-6">\s*Design focado no apetite, com cores quentes e tipografia que.*?\s*<\/p>/,
  `<p className="text-[14px] sm:text-[15px] text-[#888888] font-light leading-relaxed mb-4">
                Design focado no apetite, com cores quentes e tipografia que transmite tradição e modernidade ao mesmo tempo.
              </p>
              <div className="mb-6 space-y-2 text-[14px]">
                <p><strong className="text-white">O desafio:</strong> Destacar os produtos e facilitar o fluxo de pedidos sem parecer um app genérico de delivery.</p>
                <p><strong className="text-white">A solução:</strong> Fotografia em grande escala, paleta imersiva e navegação baseada no apelo visual.</p>
              </div>`
);


content = content.replace(
  /<span className="text-\[10px\] font-mono tracking-\[0.16em\] uppercase px-2.5 py-0.5 rounded-full bg-\[rgba\(255,255,255,0.04\)\] border border-\[rgba\(255,255,255,0.08\)\] text-\[#888\]">\s*DEMO — HOTELARIA\s*<\/span>/,
  `<span className="text-[10px] font-mono tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#888]">
                    DEMO — HOTELARIA
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] text-white ml-2">
                    Projeto de demonstração
                  </span>`
);

content = content.replace(
  /<p className="text-\[14px\] sm:text-\[15px\] text-\[#888888\] font-light leading-relaxed mb-6">\s*Uma experiência sofisticada criada para transmitir conforto.*?\s*<\/p>/,
  `<p className="text-[14px] sm:text-[15px] text-[#888888] font-light leading-relaxed mb-4">
                Uma experiência sofisticada criada para transmitir conforto, exclusividade e desejo de reserva.
              </p>
              <div className="mb-6 space-y-2 text-[14px]">
                <p><strong className="text-white">O desafio:</strong> Evocar a sensação de hospedagem premium através da tela antes mesmo do check-in.</p>
                <p><strong className="text-white">A solução:</strong> Espaçamentos amplos, tipografia clássica serifada e transições suaves de página.</p>
              </div>`
);

fs.writeFileSync('components/Showcase.tsx', content);
