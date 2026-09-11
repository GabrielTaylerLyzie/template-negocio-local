/* =========================================
   TEMPLATE SITE PROFISSIONAL - PEQUENOS NEGÓCIOS
   Este arquivo lê os dados de site-data.js
   e preenche o HTML automaticamente.
   Não é necessário editar este arquivo.
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const d = window.SITE_DATA;

  if (!d) {
    console.error("site-data.js não foi carregado corretamente.");
    return;
  }

  // ---------- Utilitário: link do WhatsApp ----------
  function linkWhats(numero, mensagem) {
    const msg = mensagem ? "?text=" + encodeURIComponent(mensagem) : "";
    return "https://wa.me/" + numero + msg;
  }

  const mensagemPadrao = "Olá! Vi o site da " + d.nome + " e gostaria de mais informações.";
  const urlWhats = linkWhats(d.whatsapp, mensagemPadrao);

  // ---------- Cores personalizadas ----------
  if (d.cores) {
    const raiz = document.documentElement;
    if (d.cores.primaria) raiz.style.setProperty("--cor-primaria", d.cores.primaria);
    if (d.cores.secundaria) raiz.style.setProperty("--cor-secundaria", d.cores.secundaria);
    if (d.cores.fundoAlt) raiz.style.setProperty("--cor-fundo-alt", d.cores.fundoAlt);
  }

  // ---------- Título da página ----------
  document.title = d.nome + " - " + d.slogan;

  // ---------- Header ----------
  document.getElementById("logoNome").textContent = d.nome;
  const whatsHeader = document.getElementById("whatsHeader");
  whatsHeader.href = urlWhats;
  document.getElementById("whatsHeaderTexto").textContent = "WhatsApp";

  // ---------- Hero ----------
  document.getElementById("heroImagem").src = d.imagens.capa;
  document.getElementById("heroImagem").alt = "Foto de capa da " + d.nome;
  document.getElementById("heroCidade").textContent = d.cidade;
  document.getElementById("heroNome").textContent = d.nome;
  document.getElementById("heroSlogan").textContent = d.slogan;
  document.getElementById("whatsHero").href = urlWhats;

  // ---------- Serviços ----------
  const gridServicos = document.getElementById("gridServicos");
  gridServicos.innerHTML = "";
  d.servicos.forEach(function (servico) {
    const card = document.createElement("div");
    card.className = "card-servico";
    card.innerHTML =
      '<span class="icone">' + (servico.icone || "✂️") + "</span>" +
      "<h3>" + servico.nome + "</h3>" +
      "<p>" + servico.descricao + "</p>" +
      (servico.preco ? '<span class="preco">' + servico.preco + "</span>" : "");
    gridServicos.appendChild(card);
  });

  // ---------- Sobre ----------
  document.getElementById("sobreImagem").src = d.imagens.sobre;
  document.getElementById("sobreImagem").alt = "Foto do interior da " + d.nome;
  document.getElementById("sobreTitulo").textContent = "Sobre a " + d.nome;
  document.getElementById("sobreDescricao").textContent = d.sobre.descricao;

  const sobreDestaques = document.getElementById("sobreDestaques");
  sobreDestaques.innerHTML = "";
  (d.sobre.destaques || []).forEach(function (item) {
    const el = document.createElement("span");
    el.className = "destaque-item";
    el.textContent = item;
    sobreDestaques.appendChild(el);
  });

  // ---------- Galeria ----------
  const gridGaleria = document.getElementById("gridGaleria");
  gridGaleria.innerHTML = "";
  d.imagens.galeria.forEach(function (url, i) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = d.nome + " - foto " + (i + 1);
    img.loading = "lazy";
    gridGaleria.appendChild(img);
  });

  // ---------- Avaliações ----------
  const gridAvaliacoes = document.getElementById("gridAvaliacoes");
  gridAvaliacoes.innerHTML = "";
  d.avaliacoes.forEach(function (av) {
    const estrelas = "★".repeat(av.nota) + "☆".repeat(5 - av.nota);
    const inicial = av.nome ? av.nome.charAt(0).toUpperCase() : "?";
    const card = document.createElement("div");
    card.className = "card-avaliacao";
    card.innerHTML =
      '<div class="estrelas">' + estrelas + "</div>" +
      '<p class="texto">"' + av.texto + '"</p>' +
      '<div class="avaliador">' +
      '<div class="avaliador-inicial">' + inicial + "</div>" +
      '<span class="avaliador-nome">' + av.nome + "</span>" +
      "</div>";
    gridAvaliacoes.appendChild(card);
  });

  // ---------- Localização ----------
  document.getElementById("locEndereco").textContent = d.endereco.completo;
  document.getElementById("btnComoChegar").href = d.googleMapsLink;

  const listaHorarios = document.getElementById("listaHorarios");
  listaHorarios.innerHTML = "";
  d.horarios.forEach(function (h) {
    const li = document.createElement("li");
    li.innerHTML = "<span>" + h.dia + "</span><span>" + h.horario + "</span>";
    listaHorarios.appendChild(li);
  });

  const linkInstagram = document.getElementById("linkInstagram");
  linkInstagram.href = d.instagramLink;
  linkInstagram.textContent = d.instagramUsuario;

  document.getElementById("mapaEmbed").src = d.googleMapsEmbed;

  // ---------- Contato ----------
  document.getElementById("whatsContato").href = urlWhats;
  const telContato = document.getElementById("telContato");
  telContato.href = "tel:" + d.telefone.replace(/\D/g, "");
  document.getElementById("contatoEndereco").textContent = d.endereco.completo;
  document.getElementById("contatoCidade").textContent = d.cidade;

  // ---------- Rodapé ----------
  document.getElementById("footerNome").textContent = d.nome;
  document.getElementById("footerSlogan").textContent = d.slogan;
  document.getElementById("footerInstagram").href = d.instagramLink;
  document.getElementById("footerWhats").href = urlWhats;
  document.getElementById("footerMapa").href = d.googleMapsLink;
  document.getElementById("footerCopy").textContent =
    "© " + new Date().getFullYear() + " " + d.nome + ". Todos os direitos reservados.";

  // ---------- Botão flutuante ----------
  document.getElementById("whatsFlutuante").href = urlWhats;

  // ---------- Menu mobile ----------
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("aberto");
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("aberto");
    });
  });

  // ---------- Header com sombra ao rolar ----------
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      header.style.boxShadow = "0 4px 18px rgba(0,0,0,.12)";
    } else {
      header.style.boxShadow = "0 2px 12px rgba(0,0,0,.06)";
    }
  });

});