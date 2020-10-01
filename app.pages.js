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
            titulo: "Abertura: SBGC + Uninove",
            descricao: "" ,
            youtubeLink: "j_P87xyIew4",
            bandeira: "us"
        },
        {
            titulo: "Modelo de Referência SBGC",
            descricao: 'Um grande guia de temas que podem ser relevantes ao se pensar em estratégias, programas e práticas de conhecimento e o ambiente que fomenta estas práticas nas organizações. Ele provê um norte aos profissionais que atuam com problemas de conhecimento. O modelo, quando usado com um olhar crítico e alinhado aos objetivos da organização, é uma ferramenta poderosa que mostra o valor do conhecimento de forma prática e estruturada, potencializando a GC como uma ferramenta que contribui na transformação organizacional.' ,
            youtubeLink: "3oVO03syNhc",
            bandeira: "br"
        },
        {
            titulo: "Modelo de Referência SBGC",
            descricao: "Um grande guia de temas que podem ser relevantes ao se pensar em estratégias, programas e práticas de conhecimento e o ambiente que fomenta estas práticas nas organizações. Ele provê um norte aos profissionais que atuam com problemas de conhecimento. O modelo, quando usado com um olhar crítico e alinhado aos objetivos da organização, é uma ferramenta poderosa que mostra o valor do conhecimento de forma prática e estruturada, potencializando a GC como uma ferramenta que contribui na transformação organizacional." ,
            youtubeLink: "J0lv2n9TweM",
            bandeira: "us"
        },
        {
            titulo: "Keynote Speaker: Kim Glover (TechnipFMC)",
            descricao: "Ten Things You Need to Know about Knowledge Management (KM) in the Digital Age Stories, advice and predictions based on two decades leading knowledge management at international corporations. Whether you’re a business leader, knowledge management practitioner or just KM-curious, this lively and thought-provoking discussion will provide insights, lessons learned and immediately deployable advice for implementing knowledge management to help achieve organization goals in this increasingly digital world." ,
            youtubeLink: "ZFGV22RnVOw",
            bandeira: "us"
        },
        {
            titulo: "Keynote Speaker: Kim Glover (TechnipFMC)",
            descricao: "Ten Things You Need to Know about Knowledge Management (KM) in the Digital Age Stories, advice and predictions based on two decades leading knowledge management at international corporations. Whether you’re a business leader, knowledge management practitioner or just KM-curious, this lively and thought-provoking discussion will provide insights, lessons learned and immediately deployable advice for implementing knowledge management to help achieve organization goals in this increasingly digital world." ,
            youtubeLink: "o-bmK3b-sKU",
            bandeira: "br"
        },
      ],  
      palestras2:  [
        {
            titulo: "PAINEL: Destino do Trabalho",
            descricao: "Talk about ways to explore opportunities presented by the market dynamism, multiple generations working together in several technological environments, among others, and thus participate in creating the destination of work, where our main characteristic can be better used - the human being!" ,
            youtubeLink: "5TlayOe0xF8",
            bandeira: "us"
        },
        {
            titulo: "PAINEL: Destino do Trabalho (Tradução)",
            descricao: "Uma conversa sobre formas de explorar as oportunidades apresentadas com o dinamismo do mercado, múltiplas gerações trabalhando em conjunto em ambientes tecnológicos variados, entre outras, e assim participar da criação do destino do trabalho onde nossa principal característica possa ser melhor utilizada – o ser humano!" ,
            youtubeLink: "oe2R67MsoNc",
            bandeira: "br"
        },
        {
            titulo: "PAINEL: SupplyChain & KM",
            descricao: "O valor do conhecimento na Transformação Digital do Supply Chain . Este painel irá explorar quais são os elementos de conhecimento necessários para alavancar a transformação digital e o seu impacto no ambiente de Supply Chain. " ,
            youtubeLink: "4Q6YxSyXUc8",
            bandeira: "br"
        },
        {
            titulo: "PAINEL: SupplyChain & KM (Tradução)",
            descricao: "O valor do conhecimento na Transformação Digital do Supply Chain . Este painel irá explorar quais são os elementos de conhecimento necessários para alavancar a transformação digital e o seu impacto no ambiente de Supply Chain. " ,
            youtubeLink: "UiGX6lQbJRU",
            bandeira: "us"
        },
        {
            titulo: "PAINEL: Digital PKM",
            descricao: "Vivemos em um mundo onde a transformação, mais do que constante, é exponencial, com impactos profundos na Sociedade, na Economia e nas Organizações. Como bem introduzido no editorial do evento, a transformação digital já é realidade para muitos segmentos e setores econômicos e em alguns casos é base inclusive para novas formas de pensar os negócios, propósitos das organizações, bem como novos empreendimentos." ,
            youtubeLink: "yDXYRyIQ7Dg",
            bandeira: "br"
        },
        {
            titulo: "PAINEL: Digital PKM (Tradução)",
            descricao: "Vivemos em um mundo onde a transformação, mais do que constante, é exponencial, com impactos profundos na Sociedade, na Economia e nas Organizações. Como bem introduzido no editorial do evento, a transformação digital já é realidade para muitos segmentos e setores econômicos e em alguns casos é base inclusive para novas formas de pensar os negócios, propósitos das organizações, bem como novos empreendimentos." ,
            youtubeLink: "kSZgR_wSdOs",
            bandeira: "us"
        },
        {
            titulo: "PAINEL: INOVAÇÃO DIGITAL SETORIAL",
            descricao: "A Transformação Digital, tem implementado tecnologias digitais para a automação e aperfeiçoamento dos processos, produtos e serviços das organizações públicas e privadas, impactando no modo de gerenciar organizações e no relacionamento com clientes, parceiros e fornecedores. " ,
            youtubeLink: "xTCC9GFtkCY",
            bandeira: "br"
        },
        {
            titulo: "PAINEL: INOVAÇÃO DIGITAL SETORIAL (Tradução)",
            descricao: "A Transformação Digital, tem implementado tecnologias digitais para a automação e aperfeiçoamento dos processos, produtos e serviços das organizações públicas e privadas, impactando no modo de gerenciar organizações e no relacionamento com clientes, parceiros e fornecedores. " ,
            youtubeLink: "-CNFsgFpNTI",
            bandeira: "us"
        },
        {
            titulo: "Seção de Apresentação de Trabalhos 1",
            descricao: "Moderador: Prof. Dr. Fábio Câmara Araújo de Carvalho (ESPM) 1 - Gestão do conhecimento e o setor da mineração: uma proposta de framework teórico-analítico como estratégia de nivelamento dos conhecimentos do setor de manutenção em instrumentação e automação 2 - Diagnóstico da Gestão do Conhecimento no Setor Público: Estudo de Caso no Corpo de Bombeiros Militar de Alagoas 3 - Faça o que eu digo e faça o que eu faço: como pequenos empreendedores de software percebem a inovação em suas empresas4 - A gestão do conhecimento aplicada à política pública de esporte e lazer" ,
            youtubeLink: "zgHfWjFnyxk",
            bandeira: "br"
        },
        {
            titulo: "Seção de Apresentação de Trabalhos 2",
            descricao: "Moderadora: Profa. Dra. Isabel Cristina dos Santos (PPGA – USCS) 1 - Value added intellectual capital coefficient (VAIC) and business performance. The impact of intellectual capital on small and medium-sized enterprises performance. 2 - Evidências de validade de uma medida de Gestão do Conhecimento 3 - LEARNING THE HARDEST WAY: o duro aprendizado obtido com catástrofes 4 - ​Políticas de Gestão do Conhecimento: da teoria à prática" ,
            youtubeLink: "JjtnxcbDbuM",
            bandeira: "br"
        },
        {
            titulo: "Seção de Apresentação de Trabalhos 3",
            descricao: "Moderador: Prof. Dr. Marcos Antonio Gaspar (PPGI - UNINOVE) 1 - Gestão do Conhecimento em Empresa Pública: Práticas e Iniciativas Adotadas pelo Poupatempo 2 - Uma ferramenta on-line para ensino de Redação, baseada nos critérios avaliativos do ENEM 3 - Criação de valor público: um modelo de universidade corporativa para organizações públicas brasileiras 4 - Capacidades dinâmicas nas organizações públicas​" ,
            youtubeLink: "9LHZ5InN5kc",
            bandeira: "br"
        },
        {
            titulo: "Seção de Apresentação de Trabalhos 4",
            descricao: "Moderador: Prof. Dr. Fellipe Silva Martins (PPGI - UNINOVE) 1 - Knowledge Generation and Market Orientation during global crises in B2B supply chains 2 - Análise do Relacionamento da Gestão do Conhecimento Estruturada na Implantação de Métodos Ágeis em Empresa de Desenvolvimento de Software 3 - A transformação digital nas organizações: reflexões sobre as competências de um gestor do conhecimento. 4 - ​Transformação Agrícola Digital: o entrelaçamento da Agricultura e Transformação Digital para o futuro inovador do setor Agrícola" ,
            youtubeLink: "KwbBG0gFhwM",
            bandeira: "br"
        }
      ],
      palestras3: [
        {
            titulo: "PAINEL: Empresas Digitais GC como Alicerce da Transformação Digital",
            descricao: "Neste painel, vamos conhecer os caminhos de transformação percorridos por empresas para se tornarem digitais. Faremos a apresentação de cases de sucesso de empresas que fizeram da Gestão do Conhecimento o alicerce para a transformação, da cultura digital aos principais impulsionadores e os maiores obstáculos encontrados." ,
            youtubeLink: "F6sNYs3Lzj4",
            bandeira: "br"
        },
        {
            titulo: "PAINEL: Empresas Digitais GC como Alicerce da Transformação Digital (Tradução)",
            descricao: "Neste painel, vamos conhecer os caminhos de transformação percorridos por empresas para se tornarem digitais. Faremos a apresentação de cases de sucesso de empresas que fizeram da Gestão do Conhecimento o alicerce para a transformação, da cultura digital aos principais impulsionadores e os maiores obstáculos encontrados." ,
            youtubeLink: "N_aaP27TTzI",
            bandeira: "us"
        },
        {
            titulo: "PAINEL: Tecnologias Inteligentes e GC",
            descricao: "Cada vez mais as empresas e profissionais tem aplicado ferramentas, técnicas e soluções de Tecnologia da Informação de forma mais inteligente em prol da evolução da organização. Neste painel serão apresentados casos práticos de aplicações de Tecnologias da Informação Inteligente para a gestão do ativo conhecimento em diferentes empresas. " ,
            youtubeLink: "kQc4gP0asm8",
            bandeira: "br"
        },
        {
            titulo: "PAINEL: Tecnologias Inteligentes e GC (Tradução)",
            descricao: "Cada vez mais as empresas e profissionais tem aplicado ferramentas, técnicas e soluções de Tecnologia da Informação de forma mais inteligente em prol da evolução da organização. Neste painel serão apresentados casos práticos de aplicações de Tecnologias da Informação Inteligente para a gestão do ativo conhecimento em diferentes empresas. " ,
            youtubeLink: "AG7aas3xGaE",
            bandeira: "us"
        },
        {
            titulo: "PAINEL: A Descontinuidade da Gestão Pública e a GC",
            descricao: "As Organizações Públicas não são homogêneas em relação às políticas de retenção, registro, disseminação e aplicabilidade da Gestão do Conhecimento como fator ou diferencial estratégico. Há um lapso entre aquelas que necessitam de constante aprimoramento dos seus processos de trabalho e também de inovação para que se configure a vantagem competitiva, repercutindo em seu crescimento, expansão e apresentação de lucratividade." ,
            youtubeLink: "nUoJzNeG5Cg",
            bandeira: "br"
        },
        {
            titulo: "PAINEL: A Descontinuidade da Gestão Pública e a GC (Tradução)",
            descricao: "As Organizações Públicas não são homogêneas em relação às políticas de retenção, registro, disseminação e aplicabilidade da Gestão do Conhecimento como fator ou diferencial estratégico. Há um lapso entre aquelas que necessitam de constante aprimoramento dos seus processos de trabalho e também de inovação para que se configure a vantagem competitiva, repercutindo em seu crescimento, expansão e apresentação de lucratividade." ,
            youtubeLink: "jz4g5DCVRU8",
            bandeira: "us"
        },
        {
            titulo: "PAINEL: Transformação Digital e GC no Governo",
            descricao: "​O propósito desse painel é abordar a rápida digitalização dos serviços públicos imposta nas instâncias dos governos Federal, Estadual e Municipal, a partir da pandemia COVID-19, que mudou nossa maneira de viver, de estudar e, principalmente, de trabalhar. A transformação digital, anunciada como uma mudança que deveria ocorrer em alguns anos, ocorreu, na prática, em algumas semanas. " ,
            youtubeLink: "5znytapZ-qM",
            bandeira: "br"
        },
        {
            titulo: "PAINEL: Transformação Digital e GC no Governo (Tradução)",
            descricao: "​O propósito desse painel é abordar a rápida digitalização dos serviços públicos imposta nas instâncias dos governos Federal, Estadual e Municipal, a partir da pandemia COVID-19, que mudou nossa maneira de viver, de estudar e, principalmente, de trabalhar. A transformação digital, anunciada como uma mudança que deveria ocorrer em alguns anos, ocorreu, na prática, em algumas semanas. " ,
            youtubeLink: "dC7kkDhdpS8",
            bandeira: "us"
        },
        {
            titulo: "PAINEL: KM as a Supporting Tool for Urban Organizing",
            descricao: "The urban planning, as a set of premisses that aim to organize the cities territory, is passing through a deep revision. The trend, anticipated by the COVID-19 crisis, highlights the incorporation need for practical evidence, data, and performing index as essential elements for urban planning, monitoring, and the assessment of urban policies for a city that will require rapid and effective actions from Public Power. Each day, the experimentalism is getting lower. This way, the main purpose of this pane is to discuss the Knowledge Management role as an essential tool for urban planning and policy definitions." ,
            youtubeLink: "Fq25xvD6yf4",
            bandeira: "es"
        },
        {
            titulo: "PAINEL: KM as a Supporting Tool for Urban Organizing (Tradução)",
            descricao: "​O planejamento urbano enquanto conjunto de premissas ordenadoras do território das cidades passa por uma profunda revisão crítica. A tendência, antecipada pela pandemia da COVID-19, evidencia a necessidade de incorporação de evidências práticas, dados e indicadores de desempenho como elementos indispensáveis ao planejamento, ao monitoramento e à avaliação de políticas urbanas para uma cidade que, com cada vez mais intensidade, exigirá respostas rápidas e eficientes do Poder Público. Cada vez menos haverá espaço para experimentalismo. Nesse sentido, a proposta deste painel é discutir o papel da gestão do conhecimento como ferramenta para o planejamento das cidades." ,
            youtubeLink: "OLns5qF8m2k",
            bandeira: "es"
        },
        {
            titulo: "PAINEL: THE KM Role for Environmental Policies Definition",
            descricao: "The Environmental policy definition consists of an issue each day much dependent on a broad bean of different knowledge, data, and indicator analysis. Concerning this situation, the role of Knowledge Management can be highlighted as the main actor of this knowledge border. This way, the main purpose of this panel is to promote discussions about Knowledge Management's role as an essential tool for much effective and efficient environmental policy elaboration, always facing the imposed challenges by the contemporary societies." ,
            youtubeLink: "JPulWikxrvo",
            bandeira: "us"
        },
        {
            titulo: "PAINEL: THE KM Role for Environmental Policies Definition (Tradução)",
            descricao: "A definição de políticas ambientais – cuja incidência transcende os limites do meio ambiente natural e abrange também o planejamento das cidades – é um campo de análise cada vez mais dependente um amplo feixe de saberes, dados e indicadores. Nesse sentido, é destacado o papel da Gestão do Conhecimento como componente de fronteira dessa abordagem. Nesse sentido, a proposta deste painel é discutir o papel da Gestão do Conhecimento como ferramenta para a formulação de políticas ambientais mais eficientes e compatíveis com os desafios das sociedades contemporâneas." ,
            youtubeLink: "98PqrAXf_5w",
            bandeira: "br"
        },
        {
            titulo: "Palestra: Management of Smart Water Systems - Operational and Security Aspects",
            descricao: "Water distribution systems (WDSs) are critical infrastructures that supply drinking water from water sources to end-users. Smart WDSs could be designed by integrating physical components (e.g., valve and pumps) with computation and networking devices. As such, in smart WDSs, pumps and valves are automatically controlled together with continuous monitoring of important systems’ parameters." ,
            youtubeLink: "-IfREOQXZ4U",
            bandeira: "us"
        },
        {
            titulo: "Palestra: Management of Smart Water Systems - Operational and Security Aspects (Tradução)",
            descricao: "Water distribution systems (WDSs) are critical infrastructures that supply drinking water from water sources to end-users. Smart WDSs could be designed by integrating physical components (e.g., valve and pumps) with computation and networking devices. As such, in smart WDSs, pumps and valves are automatically controlled together with continuous monitoring of important systems’ parameters." ,
            youtubeLink: "uvxwczZm18k",
            bandeira: "br"
        },
        {
            titulo: "Palestra: KM as a Supporting Tool for COVID-19 Crisis Mitigation",
            descricao: "Knowledge management is the process of creating, sharing, using and managing information in order to create knowledge for the benefit of city' residents. Managing knowledge can serve to develop services and targeted policies informed by multidisciplinary integration of information into knowledge." ,
            youtubeLink: "UkgnL5m2yr4",
            bandeira: "us"
        },
        {
            titulo: "Palestra: KM as a Supporting Tool for COVID-19 Crisis Mitigation (Tradução)",
            descricao: "Knowledge management is the process of creating, sharing, using and managing information in order to create knowledge for the benefit of city' residents. Managing knowledge can serve to develop services and targeted policies informed by multidisciplinary integration of information into knowledge." ,
            youtubeLink: "BbM5d2wHQLI",
            bandeira: "br"
        },
        {
            titulo: "Palestra: KM Applied for Art Imagitec",
            descricao: "In this presentation, we will discuss Art Imagetic, the act of expressing through images, which represents the question of the object, the materiality perceived by the senses that goes against the abject, immateriality. Thus, the observed by perceiving and conceiving through his eyes the form understood in his mind by semiotic conditions; acquire knowledge." ,
            youtubeLink: "6RcbxMhXRK4",
            bandeira: "br"
        },
        {
            titulo: "Palestra: KM Applied for Art Imagitec (Tradução)",
            descricao: "In this presentation, we will discuss Art Imagetic, the act of expressing through images, which represents the question of the object, the materiality perceived by the senses that goes against the abject, immateriality. Thus, the observed by perceiving and conceiving through his eyes the form understood in his mind by semiotic conditions; acquire knowledge." ,
            youtubeLink: "meHoF5gsbL0",
            bandeira: "us"
        },
        {
            titulo: "Trilha de Casos: Programas de GC e Transformação Digital",
            descricao: "Caso 1:  Potencializando sua Transformação Digital com práticas de Bootcamp e Hackathon - Vivo-Telefônica Caso 2: Modelo estratégico para consolidar a Gestão do Conhecimento e da Aprendizagem na Unidade de Justiça da Softplan Caso 3: Implantação de GC nas Áreas de Desenvolvimento Nuclear - AMAZUL" ,
            youtubeLink: "6EDC9L74EnI",
            bandeira: "br"
        },
        {
            titulo: "Trilha de Casos: Práticas de GC",
            descricao: "Trilha de Casos: Práticas de GC C​aso ​1: Programa de Webinar Corporativo Experts Explain - TechnipFMC C​aso ​2: Cases de Gestão do Conhecimento da Braskem C​aso ​3: ​Programa de Mentoria Técnica - EMBRAER Engenharia e Tecnologia" ,
            youtubeLink: "_SiFWwLN49g",
            bandeira: "br"
        }
      ],
      palestra4: [
        {
            titulo: "Como medir o impacto da Gestão do Conhecimento (GC)",
            descricao: "Apesar da implementação de diversas práticas de gestão do conhecimento, muitas empresas não sabem como mostrar, por meio de indicadores, o impacto de tais iniciativas na eficiência, na eficácia, na efetividade e na inovação de processos, produtos e serviços." ,
            data: "16 ​de Setembro ",
            youtubeLink: "UT3bxeJbhys",
            bandeira: "br"
        },
        {
            titulo: "Transformação Digital na Educação: a Educação Digital",
            descricao: "Como a Transformação Digital está atingindo todos os setores da atividade humana e, particularmente, o setor educacional. Nesse sentido, a necessária evolução de uma educação atual analógica, centrada no professor e baseada em conteúdos, para uma educação futura digital, centrada no estudante e baseada em competências." ,
            data: "18 ​de Setembro ",
            youtubeLink: "CL8LDS0uedY",
            bandeira: "br"
        },
        {
            titulo: "Novas fronteiras: Inteligência Artificial aplicada à Gestão do Conhecimento",
            descricao: "A Gestão do Conhecimento (GC) pode se beneficiar da Inteligência Artificial (IA)? Como? Quais as oportunidades e obstáculos? Que experiências concretas já existem? Que possibilidades as tecnologias cognitivas trazem para o futuro da GC? Beto do Valle, da Impakt, explora possibilidades com Tiago Machado, cofundador da Rocketmat, empresa de tecnologia que usa IA para soluções em RH, e com Fábio Bagnara, diretor de P&D da BRF, que utiliza GC no contexto de pesquisa, desenvolvimento e inovação." ,
            data: "22 ​de Setembro ",
            youtubeLink: "SWtZD1z98TE",
            bandeira: "br"
        },
        {
            titulo: "Framework de Governança da Aprendizagem Organizacional",
            descricao: "A sociedade do conhecimento tem imposto desafios complexos que passam a exigir capacidade dinâmica de adaptação e transformação contínuas e ágeis. É consenso que o desenvolvimento organizacional é dependente da aprendizagem coletiva e em múltiplos níveis, porém para  implantá-la e governá-la existem modelos, mas não framework que estabeleça um método seguro." ,
            data: "30 de setembro ",
            youtubeLink: "DlnkLyrlsd0",
            bandeira: "br"
        },
      ]
    },
  })

