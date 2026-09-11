/* =========================================================
   SITE-DATA.JS
   ARQUIVO DE CONTEÚDO - EDITE APENAS ESTE ARQUIVO
   ---------------------------------------------------------
   Troque as informações abaixo para usar este mesmo template
   com qualquer negócio local: salão, barbearia, mecânico,
   eletricista, clínica, restaurante, loja, etc.

   IMPORTANTE:
   - O número de WhatsApp deve estar no formato:
     55 + DDD + NÚMERO (somente números, sem espaços,
     traços ou parênteses). Exemplo: 5511999998888
   - As avaliações e a maioria das fotos abaixo são
     EXEMPLOS DEMONSTRATIVOS. Substitua por fotos e
     avaliações reais do seu negócio antes de publicar.
   ========================================================= */

window.SITE_DATA = {

  // ---------- IDENTIDADE ----------
  nome: "Barbearia Alameda",
  slogan: "Tradição e estilo em cada corte",
  cidade: "São Paulo - SP",

  // ---------- CONTATO ----------
  telefone: "(11) 4002-8922",
  whatsapp: "5519981411214", // formato: 55 + DDD + número

  // ---------- ENDEREÇO ----------
  endereco: {
    completo: "Alameda Santos, 1234 - Jardim Paulista, São Paulo - SP, 01419-000"
  },

  // ---------- GOOGLE MAPS ----------
  // Link normal (abre o app/site do Google Maps em outra aba)
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Alameda+Santos+1234+Sao+Paulo",
  // Link de incorporação (embed) usado no mapa dentro do site
  googleMapsEmbed: "https://www.google.com/maps?q=Alameda+Santos+1234+Sao+Paulo&output=embed",

  // ---------- REDES SOCIAIS ----------
  instagramUsuario: "@barbearia.alameda",
  instagramLink: "https://instagram.com/barbearia.alameda",

  // ---------- HORÁRIO DE FUNCIONAMENTO ----------
  horarios: [
    { dia: "Segunda-feira", horario: "09h às 19h" },
    { dia: "Terça-feira", horario: "09h às 19h" },
    { dia: "Quarta-feira", horario: "09h às 19h" },
    { dia: "Quinta-feira", horario: "09h às 19h" },
    { dia: "Sexta-feira", horario: "09h às 20h" },
    { dia: "Sábado", horario: "08h às 18h" },
    { dia: "Domingo", horario: "Fechado" }
  ],

  // ---------- CORES DO SITE ----------
  // Troque para combinar com a identidade visual do negócio.
  // Sugestões: salão (rosa/dourado), mecânico (azul/laranja),
  // clínica (azul/verde claro), restaurante (vermelho/dourado).
  cores: {
    primaria: "#1a1a1a",   // cor escura (header/rodapé/textos fortes)
    secundaria: "#c9a227", // cor de destaque (botões, ícones, títulos)
    fundoAlt: "#f7f5f2"    // cor de fundo das seções alternadas
  },

  // ---------- IMAGENS (Unsplash - demonstrativas) ----------
  imagens: {
    capa: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=80",
    sobre: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=700&q=80"
    ]
  },

  // ---------- SERVIÇOS ----------
  // "icone" pode ser um emoji simples.
  servicos: [
    {
      icone: "✂️",
      nome: "Corte de Cabelo",
      descricao: "Cortes clássicos e modernos, personalizados para o seu estilo.",
      preco: "A partir de R$ 45"
    },
    {
      icone: "🪒",
      nome: "Barba Completa",
      descricao: "Modelagem, hidratação e acabamento com navalha.",
      preco: "A partir de R$ 35"
    },
    {
      icone: "💈",
      nome: "Corte + Barba",
      descricao: "Combo completo com desconto especial para o pacote.",
      preco: "A partir de R$ 70"
    },
    {
      icone: "🧴",
      nome: "Sobrancelha",
      descricao: "Design e acabamento na navalha ou pinça.",
      preco: "A partir de R$ 20"
    }
  ],

  // ---------- SOBRE A EMPRESA ----------
  sobre: {
    descricao: "Há mais de 10 anos cuidando do visual dos nossos clientes com atenção aos detalhes, produtos de qualidade e um ambiente pensado para o seu conforto. Nossa equipe é formada por profissionais experientes e sempre atualizados com as últimas tendências.",
    destaques: [
      "+10 anos de experiência",
      "Profissionais qualificados",
      "Ambiente climatizado",
      "Produtos premium"
    ]
  },

  // ---------- AVALIAÇÕES (EXEMPLOS DEMONSTRATIVOS) ----------
  avaliacoes: [
    {
      nome: "Cliente Demonstrativo 1",
      nota: 5,
      texto: "Atendimento excelente e resultado impecável. Ambiente muito agradável, recomendo!"
    },
    {
      nome: "Cliente Demonstrativo 2",
      nota: 5,
      texto: "Profissionais muito atenciosos, sempre saio satisfeito com o corte."
    },
    {
      nome: "Cliente Demonstrativo 3",
      nota: 4,
      texto: "Ótimo custo-benefício e localização de fácil acesso."
    }
  ]

};