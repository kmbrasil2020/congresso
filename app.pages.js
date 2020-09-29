var app = new Vue({
    el: '#app',
    data: {
      preEvento: [
        {
            titulo: "Trilha de Casos Iniciativas de GC",
            descricao: "Caso 1: Projeto GC na área de P&D da BRF S/A Caso 2: Gestão do Conhecimento - Um olhar para a Fundação Oswaldo Cruz" ,
            youtubeLink: "GzUpOyiQf0g",
            bandeira: "br"
        },
        {
            titulo: "​Trilha de Casos: GC e Gestão Pública",
            descricao: "Caso 1: Automatização do Serviço de Publicação de Atos Oficiais - MPF Projeto Gestão do Conhecimento e Programa de Desligamento Assistido - FINEP" ,
            youtubeLink: "jHGl5gwP_dI",
            bandeira: "br"
        },  
        {
            titulo: "Trilha de Casos: Praticas de GC",
            descricao: "Caso 1: Simulação - Petrobras Transporte S/A TRANSPETRO Caso 2: Lições Aprendidas - Itaguai Construções Navais S.A (ICN)" ,
            youtubeLink: "i6RJQdWo4_8",
            bandeira: "br"
        },  
        {
            titulo: "Mesa redonda: Conhecimento Críticos",
            descricao: "Caso 1: Mapeamento do Conhecimento Crítico - AVIBRAS Caso 2: O uso do mapeamento do conhecimento crítico como estratégia de avaliação do nível de prontidão na área hospitalar - Hospital Albert Einstein" ,
            youtubeLink: "lg_K63M656s",
            bandeira: "br"
        },
        {
            titulo: "Trilha de Casos: GC no Setor Bancário",
            descricao: "Caso 1: Mentoria Técnica na Inspetoria GC do Banco Bradesco Caso 2: Soluções para identificação e localização de talentos e planejamentos no Banco Central do Brasil" ,
            youtubeLink: "_VwHJkhxznU",
            bandeira: "br"
        }      
      ],  
      palestras1: [
        {
            titulo: "Abertura: SBGC + Uninove ",
            descricao: "" ,
            youtubeLink: "Ov87WPlJjaM",
            bandeira: "br"
        },
        {
            titulo: "Abertura: SBGC + Uninove - Inglês",
            descricao: "" ,
            youtubeLink: "j_P87xyIew4",
            bandeira: "us"
        },
        {
            titulo: "Modelo de Referência SBGC",
            descricao: "" ,
            youtubeLink: "3oVO03syNhc",
            bandeira: "br"
        },
        {
            titulo: "Modelo de Referência SBGC",
            descricao: "" ,
            youtubeLink: "J0lv2n9TweM",
            bandeira: "us"
        },
        {
            titulo: "Keynote Speaker: Kim Glover (TechnipFMC)",
            descricao: "" ,
            youtubeLink: "ZFGV22RnVOw",
            bandeira: ""
        },
        {
            titulo: "Keynote Speaker: Kim Glover (TechnipFMC)",
            descricao: "" ,
            youtubeLink: "o-bmK3b-sKU",
            bandeira: ""
        },
      ],  
      palestras2:  [
        {
            titulo: "PAINEL: Destino do Trabalho",
            descricao: "" ,
            youtubeLink: "5TlayOe0xF8",
            bandeira: "us"
        },
        {
            titulo: "PAINEL: Destino do Trabalho (Tradução)",
            descricao: "" ,
            youtubeLink: "oe2R67MsoNc",
            bandeira: "br"
        },
        {
            titulo: "PAINEL: SupplyChain & KM",
            descricao: "" ,
            youtubeLink: "4Q6YxSyXUc8",
            bandeira: ""
        },
        {
            titulo: "PAINEL: SupplyChain & KM (Tradução)",
            descricao: "" ,
            youtubeLink: "UiGX6lQbJRU",
            bandeira: ""
        },
        {
            titulo: "PAINEL: Digital PKM",
            descricao: "" ,
            youtubeLink: "yDXYRyIQ7Dg",
            bandeira: ""
        },
        {
            titulo: "PAINEL: Digital PKM (Tradução)",
            descricao: "" ,
            youtubeLink: "kSZgR_wSdOs",
            bandeira: ""
        },
        {
            titulo: "PAINEL: INOVAÇÃO DIGITAL SETORIAL",
            descricao: "" ,
            youtubeLink: "xTCC9GFtkCY",
            bandeira: "br"
        },
        {
            titulo: "PAINEL: INOVAÇÃO DIGITAL SETORIAL (Tradução)",
            descricao: "" ,
            youtubeLink: "fNd-GIBg9Vk",
            bandeira: "us"
        },
        {
            titulo: "Seção de Apresentação de Trabalhos 1",
            descricao: "" ,
            youtubeLink: "LiJDpvEQ050",
            bandeira: "br"
        },
        {
            titulo: "Seção de Apresentação de Trabalhos 2",
            descricao: "" ,
            youtubeLink: "yBmSEKIzj8A",
            bandeira: "br"
        },
        {
            titulo: "Seção de Apresentação de Trabalhos 3",
            descricao: "" ,
            youtubeLink: "jH9d7xUJohE",
            bandeira: "br"
        },
        {
            titulo: "Seção de Apresentação de Trabalhos 4",
            descricao: "" ,
            youtubeLink: "vtHZB8_Et-M",
            bandeira: "br"
        }
      ],
      palestras3: [
        {
            titulo: "PAINEL: Empresas Digitais GC como Alicerce da Transformação Digital",
            descricao: "" ,
            youtubeLink: "F6sNYs3Lzj4",
            bandeira: ""
        },
        {
            titulo: "PAINEL: Empresas Digitais GC como Alicerce da Transformação Digital (Tradução)",
            descricao: "" ,
            youtubeLink: "N_aaP27TTzI",
            bandeira: ""
        },
        {
            titulo: "PAINEL: Tecnologias Inteligentes e GC",
            descricao: "" ,
            youtubeLink: "kQc4gP0asm8",
            bandeira: ""
        },
        {
            titulo: "PAINEL: Tecnologias Inteligentes e GC (Tradução)",
            descricao: "" ,
            youtubeLink: "AG7aas3xGaE",
            bandeira: ""
        },
        {
            titulo: "PAINEL: A Descontinuidade da Gestão Pública e a GC",
            descricao: "" ,
            youtubeLink: "nUoJzNeG5Cg",
            bandeira: ""
        },
        {
            titulo: "PAINEL: A Descontinuidade da Gestão Pública e a GC (Tradução)",
            descricao: "" ,
            youtubeLink: "jz4g5DCVRU8",
            bandeira: ""
        },
        {
            titulo: "PAINEL: Transformação Digital e GC no Governo",
            descricao: "" ,
            youtubeLink: "5znytapZ-qM",
            bandeira: ""
        },
        {
            titulo: "PAINEL: Transformação Digital e GC no Governo (Tradução)",
            descricao: "" ,
            youtubeLink: "dC7kkDhdpS8",
            bandeira: ""
        },
        {
            titulo: "PAINEL: KM as a Supporting Tool for Urban Organizing",
            descricao: "" ,
            youtubeLink: "Fq25xvD6yf4",
            bandeira: ""
        },
        {
            titulo: "PAINEL: KM as a Supporting Tool for Urban Organizing (Tradução)",
            descricao: "" ,
            youtubeLink: "OLns5qF8m2k",
            bandeira: ""
        },
        {
            titulo: "PAINEL: THE KM Role for Environmental Policies Definition",
            descricao: "" ,
            youtubeLink: "JPulWikxrvo",
            bandeira: ""
        },
        {
            titulo: "PAINEL: THE KM Role for Environmental Policies Definition (Tradução)",
            descricao: "" ,
            youtubeLink: "98PqrAXf_5w",
            bandeira: ""
        },
        {
            titulo: "Palestra: Management of Smart Water Systems - Operational and Security Aspects",
            descricao: "" ,
            youtubeLink: "-IfREOQXZ4U",
            bandeira: ""
        },
        {
            titulo: "Palestra: Management of Smart Water Systems - Operational and Security Aspects (Tradução)",
            descricao: "" ,
            youtubeLink: "uvxwczZm18k",
            bandeira: ""
        },
        {
            titulo: "Palestra: KM as a Supporting Tool for COVID-19 Crisis Mitigation",
            descricao: "" ,
            youtubeLink: "UkgnL5m2yr4",
            bandeira: ""
        },
        {
            titulo: "Palestra: KM as a Supporting Tool for COVID-19 Crisis Mitigation (Tradução)",
            descricao: "" ,
            youtubeLink: "BbM5d2wHQLI",
            bandeira: ""
        },
        {
            titulo: "Palestra: KM Applied for Art Imagitec",
            descricao: "" ,
            youtubeLink: "6RcbxMhXRK4",
            bandeira: ""
        },
        {
            titulo: "Palestra: KM Applied for Art Imagitec (Tradução)",
            descricao: "" ,
            youtubeLink: "meHoF5gsbL0",
            bandeira: ""
        },
        {
            titulo: "Trilha de Casos: Programas de GC e Transformação Digital",
            descricao: "" ,
            youtubeLink: "6EDC9L74EnI",
            bandeira: ""
        },
        {
            titulo: "Trilha de Casos: Práticas de GC",
            descricao: "" ,
            youtubeLink: "_SiFWwLN49g",
            bandeira: ""
        }
      ],
      palestra4: [
        {
            titulo: "Como medir o impacto da Gestão do Conhecimento (GC)",
            descricao: "" ,
            data: "16 ​de Setembro ",
            youtubeLink: "UT3bxeJbhys",
            bandeira: "br"
        },
        {
            titulo: "Transformação Digital na Educação: a Educação Digital",
            descricao: "" ,
            data: "18 ​de Setembro ",
            youtubeLink: "CL8LDS0uedY",
            bandeira: "br"
        },
        {
            titulo: "Novas fronteiras: Inteligência Artificial aplicada à Gestão do Conhecimento",
            descricao: "" ,
            data: "22 ​de Setembro ",
            youtubeLink: "SWtZD1z98TE",
            bandeira: "br"
        },
      ]
    },
  })

