const cardsContainer = document.getElementById("cardsContainer");
const classSelect = document.getElementById("classSelect");

const teamsData = {
  1: [
    {
      nome: "VITAL +",
      descricao:
        "O principal objetivo do projeto é realizar a conexão entre os profissionais qualificados e pacientes que necessitam de atendimento, como também, vem como uma forma de inserir novos profissionais no mercado de trabalho regional.",
      integrantes: [
        "Bruno Vinícius Azevedo De Carvalho",
        "Gabriel Marra Meireles",
        "Gedeon Custodio Fagundes",
        "Herick Henrique Gomes Silva",
        "João Pedro Martins Pinheiro",
        "Yasmin Fernanda Ribeiro Pereira",
      ],
    },
    {
      nome: "LETTERA",
      descricao:
        "Site institucional com a interface simples e intuitiva que apresente os tipos de serviços prestados pela empresa.",
      integrantes: [
        "Gabriel Alves Borges Corrêa",
        "Gabriel De Oliveira Godinho",
        "João Pedro De Lima Alvares",
        "Kauã Diego Santana Corrêa",
        "Matheus Ferreira Rocha Oliveira",
        "Waber De Medeiros Bernardino",
      ],
    },

    {
      nome: "FAZENDA MAGALHÃES",
      descricao:
        "Site institucional que conste com uma interface para apresentar a fazenda e seus serviços para um futuro parceiro comercial.",
      integrantes: [
        "Deywid Braga Rosa",
        "Lucas Muniz Amorim",
        "Luís Paulo Magalhães",
        "Thiago Silva Tonelli",
        "Vítor Luís Caixeta",
        "Willy Anderson dos Santos Furtado",
      ],
    },
    {
      nome: "SH CUTELARIA",
      descricao:
        "Desenvolvimento de um site de e-commerce, voltado principalmente à venda de produtos personalizados.",
      integrantes: [
        "Bernardo Willian da Cunha",
        "Júnior Francisco Mendes Pereira",
        "Mateus Felisberto Xavier Rosa",
        "Matheus Hitalo Braz Rodrigues",
        "Murilo Nunes Braga",
        "Ricardo Martins Santos",
      ],
    },
    {
      nome: "PLANTIX",
      descricao:
        "O Plantix é uma solução automatizada que tem como principal objetivo facilitar e automatizar a irrigação de forma que seja possível garantir a umidade e temperatura adequada para o plantio.",
      integrantes: [
        "Fernanda Raquel Rodrigues Alves",
        "Gabriel Andrade Silva",
        "Henrique Silva Amorim",
        "Lucas Nunes Fonseca Costa",
        "Luís Felipe Sousa de Carvalho",
      ],
    },
    {
      nome: "BOT OS GUERREIROS",
      descricao:
        "Um bot para Discord que registra e contabiliza as horas trabalhadas pelos funcionários, automatizando o controle de horas e garantindo precisão nos registros. Armazenando as informações de forma segura e gerando relatórios detalhados e personalizados. O bot facilita a gestão do tempo, reduzindo erros manuais e aumentando a transparência e eficiência no acompanhamento das jornadas de trabalho.",
      integrantes: [
        "Gabriel Guimarães Coimbra",
        "João Paulo Araujo Cunha",
        "Ketley Souza Lopes",
        "Maria Eduarda Ferreira Rocha",
        "Vanderlei Júnio Ribeiro",
      ],
    },
    {
      nome: "CALCULARDOCE",
      descricao:
        "O site para facilitar o cálculo rápido dos ingredientes de bolo para ajudar confeiteiros  ter mais precisão nos orçamentos de bolos personalizados .",
      integrantes: [
        "Gelciney de Paulo Correa",
        "Gustavo da Silva Souza",
        "Igor Antonini Correa Leles",
        "Nicolas Paz Campos",
      ],
    },
    {
      nome: "ALTERNATIVA SMART",
      descricao:
        "Site desenvolvido para realizar vendas de acessórios e derivados para celular por meio virtual com integração ao mercado pago, contendo criação de conta para salvar produtos em uma aba de “favoritos” e adição de formas de pagamento. Tendo também um painel administrativo para organização de vendas e alteração de produtos no site. Sistema de cálculo de frete para entregas.",
      integrantes: [
        "Adriel da Costa Soeiro Borges Silva",
        "Jhonata Eliardo Rodrigues Versiane",
        "João Lucas Fernandes",
        "Valdir Luciano Martins Souza Neto",
        "Vinicius Oliveira Leal",
      ],
    },
    {
      nome: "METAMORFOSE",
      descricao: " Criação de um Website para um estúdio de música",
      integrantes: [
        "Arthur Antônio Alves",
        "Davi Pereira Rezende",
        "João Victor de Faria e Silva",
        "João Vitor de Oliveira Caixeta",
        "Otávio Soares dos Santos",
        "Pedro Felipe Gomes Farias",
      ],
    },
    {
      nome: "BLACKOUT",
      descricao:
        "Um site para aumentar a visibilidade da  barbearia, fornecer informações, facilitar o gerenciamento dos horários.",
      integrantes: [
        "Gabriel Constantino Martins Barbosa",
        "Gustavo Ferreira Braga",
        "Anthony Gabriel Soares Pedroso",
        "Luís Henrique de Oliveira Souza",
        "João Lucas Corrêa Gonçalves",
        "Gabriel Domício Mach Lourenço Barreto",
      ],
    },
  ],
  2: [
    {
      nome: "BRASILDEX",
      integrantes: [
        "Arthur Roque Melo Neiva",
        "Fellipe Maia Rodrigues de Morais",
        "João Pedro Araújo Nunes",
        "Kaique Lucas Araujo de Oliveira",
        "Matheus Henrique Lopes",
      ],
      descricao:
        "O objetivo é criar um site interativo que funcione como uma enciclopédia digital de animais, com foco em espécies do Brasil. O site será uma ferramenta educacional acessível, especialmente para crianças e escolas, que trará informações sobre os diferentes animais, como características físicas, habitats, comportamentos, e formas de proteger e cuidar dos mesmos.",
    },
    {
      nome: "REFÇORÇO APRENDIZ",
      integrantes: [
        "Aline Cristina Martins Dias",
        "Luiz Gustavo de Oliveira",
        "Maria Eduarda de Oliveira",
        "Maria Luísa Pereira Caixeta",
        "Mariana Marins Cândido",
        "Sabrina Naoko Ishii",
      ],
      descricao:
        "Uma página institucional sobre a Escola Reforço Aprendiz, com atividades para a aprendizagem para contribuir com as aulas de reforço de crianças e jovens.",
    },
    {
      nome: "VC DESENVOLVIMENTO",
      integrantes: [
        "Lucas Morais",
        "Flávio Júnio Dável Vinhal",
        "João Marcos Oliveira Tiago",
        "João Pedro Gonçalves Pelet",
        "Matheus de Oliveira Rassi",
        "Matheus Ferreira Tofanello",
      ],
      descricao:
        "O objetivo desse projeto é realizar a informatização dos formulários de avaliação de desempenho para uma psicóloga especialista em RH, proporcionando uma melhor visualização e compreensão dos dados coletados.",
    },
    {
      nome: "WORK's CONNECTION",
      integrantes: [
        "Antônio Henrique de Souza Silva",
        "Caio César Alves de Freitas",
        "Gustavo Borges de Melo",
        "Gustavo Jesus Damiço de Sousa",
        "Higor Honório Silva",
      ],
      descricao:
        "Um site de vaga de empregos que permita que o candidato possa cadastrar o seu currículo e empresa possa cadastrar as vagas.",
    },
    {
      nome: "BIO AVENTURA",
      integrantes: [
        "Arthur Aparecido Sousa Silva",
        "Isadora Santos Leal",
        "Ítalo Rodrigues Boaventura",
        "Matheus Henrique Vieira",
        "Rafael Mariano de Paula Dias",
      ],
      descricao:
        "Um jogo educativo que tem intuito de uma nova abordagem de ensino sobre os biomas brasileiros. O projeto conterá um mapa do Brasil com os 6 biomas que serão desbloqueados com o progresso do jogo. Os biomas também possuirão elementos interativos que terão perguntas a serem respondidas sobre os biomas para o progresso.",
    },
    {
      nome: "DRIPTECH",
      integrantes: [
        "Felipe Rodrigues Santana",
        "João Vítor Fernandes Caixeta",
        "Mabelly Alves Leonel",
      ],
      descricao:
        "Calculadora web para calcular diferentes tipos de umidade do solo.",
    },
    {
      nome: "ROYAL'T",
      integrantes: [
        "Arthur Oliveira Chagas",
        "Carlos Eduardo Fontes Aguiar",
        "João Pedro Machado Cunha",
        "Samuel de Almeida Carvalho",
        "Victor Silva Vida",
      ],
      descricao:
        "O projeto será um catálogo de roupas voltado ao redirecionamento para a loja das marcas das roupas do catálogo, junto a um cupom de desconto fornecido para os clientes da nossa empresa.",
    },
    {
      nome: "ZENDIX",
      integrantes: [
        "Israel Salvador de Faria",
        "Izadora de Lima Silva",
        "Luiz Filipe Santos Araujo",
        "Maria Clara Felipe de Souza Borges Gonçalves",
        "Roberto Souto Junior",
      ],
      descricao:
        "O projeto tem como finalidade implementar uma solução robusta para o monitoramento e gerenciamento de e-mails e contas de usuários em uma rede corporativa. Utilizaremos o Zentyal para administração de servidores e contas, e o Zabbix para monitoramento e análise de desempenho.",
    },
    {
      nome: "BEAUTY NOTE",
      integrantes: [
        "Alex Barros",
        "Alexandre Félix Oliveira",
        "André Luis Fernandes Vieira",
        "Layo Henrique da Silva Mendes",
        "Lucas Pereira Silva",
        "Mateus Romitto Pelosi",
      ],
      descricao:
        "Site de gestão de serviços e produtos para uma clínica estética.",
    },
    {
      nome: "CAL EVENTOS",
      integrantes: [
        "Antônio de Pádua Rabelo de Almeida Silva",
        "Lucas Phellype Martins",
        "Mateus Soares de Deus",
        "Gustavo Henrique Magalhães Caixeta",
      ],
      descricao:
        "Atualizar o site para que este atenda os novos padrões de tecnologia, tornando-o mais responsivo e acrescentando um design atraente. Assim aumentando a credibilidade e visibilidade da empresa, atraindo clientes.",
    },
    {
      nome: "GOLDEM INFORMÁTICA",
      integrantes: [
        "Adrian Messias dos Santos",
        "Victor Gabriel Barbosa Ribeiro",
        "Willer Dias Vaz Filho",
      ],
      descricao:
        "Criar um site institucional, com informações do cliente, descrições e imagens dos serviços.",
    },
  ],
  3: [
    {
      nome: "AgroSync",
      integrantes: [
        "Chrystian Alexander Sousa Soares",
        "Iasmin De Souza Pereira",
        "Lays Gabrielle Rosa Cruzeiro",
        "Marcos Vinicius Alves De Souza",
        "Pablo Victor Ribeiro Braga",
      ],
      descricao:
        "Um app que oferece previsões, melhore a eficiência e a produtividade da fazenda, mas também promove o bem-estar animal, a organização do trabalho, e a saúde financeira da operação.",
    },
    {
      nome: "EcoFogo",
      integrantes: [
        "Caio César Nunes dos Santos",
        "Eric Bruno de Sousa Lopes",
        "Iago Marques da Silva",
        "Luis Miguel Moreira Branquinho",
        "Marcelo Almeida Lima",
      ],
      descricao:
        "Ecofogo foi desenvolvido com o objetivo de oferecer rotas seguras usando GPS e permitir alertas em tempo real sobre focos de incêndio. A metodologia envolveu estudos sobre geolocalização e consultas com especialistas do setor agro. Os resultados mostraram que o aplicativo pode reduzir o tempo de resposta a incêndios e aumentar a conscientização ambiental. Com sua implementação, espera-se maior segurança e prevenção eficaz em áreas rurais.",
    },
    {
      nome: "SuinoTracker",
      integrantes: [
        "Kauã Matheus da Silva Lopes",
        "Saulo Rodrigues da Silva",
        "Thallys Gustavo de Moura Borges",
      ],
      descricao:
        "Desenvolver um sistema integrado para melhorar a previsão de faturamento, controlar doenças e gerenciar insumos, visando aumentar a eficiência operacional, otimizar recursos e garantir a saúde dos colaboradores, assegurando estabilidade financeira e sustentabilidade a longo prazo.",
    },
    {
      nome: "Vaxnet",
      integrantes: [
        "Gabriel Rodrigues Braga",
        "Victor Nascimento Diniz",
        "Luis Felipe de Oliveira Silva",
        "Marcos Paulo Gonçalves Nascentes",
        "David Yehud De Jesus Chaves",
      ],
      descricao:
        "Faremos uma aplicação que possa ser usada no controle de vacinação dos animais, com a identificação da vacina aplicada, das anteriores e das posteriores, com o tipo da vacina e marcações de datas delas.",
    },
    {
      nome: "Dutrato",
      integrantes: [
        "Carlos Eduardo Torquato Rodrigues",
        "Cawã Estevan Torquato Rodrigues",
        "Lucas Domingues Oliveira",
        "Pedro Henrique Freitas Sousa",
      ],
      descricao:
        "Desenvolver um site de vendas online especializado em rações para uma grande variedade de espécies animais, oferecendo uma experiência de compra prática, segura e personalizada, que atenda às necessidades específicas de diferentes tipos de animais.",
    },
    {
      nome: "Rural Tech",
      integrantes: [
        "Gabriel Henrique de Melo Costa",
        "João Pedro Fonseca Santana",
        "Lucas Henrique do Nascimento",
        "Rafael Henrique Ribeiro Braga",
        "Vinicius Santos Souza",
      ],
      descricao:
        "O objetivo do sistema de irrigação automatizado é permitir aos produtores monitorar e controlar o uso da água de forma eficiente, garantindo a irrigação adequada da plantação e otimizando os recursos hídricos. Além disso, ele complementará as práticas agrícolas dos produtores de maracujá, aprimorando significativamente o manejo da plantação e promovendo maior produtividade e sustentabilidade.",
    },
    {
      nome: "Order Milk",
      integrantes: [
        "João Victor Rodrigues Vida",
        "Lucas Vinicius de Lima",
        "Victor Augusto Caixeta Matos",
      ],
      descricao:
        "Este projeto visa criar uma solução tecnológica inovadora e acessível que atende às necessidades dos produtores leiteiros, promovendo a sustentabilidade e competitividade do setor, ao mesmo tempo em que melhora a gestão do rebanho e o controle da produção leiteira.",
    },
    {
      nome: "Gene Guarda",
      integrantes: [
        "Danilo Borges de Oliveira",
        "Laune Gonzaga e Silva",
        "Grabriel Lucena da Silva",
      ],
      descricao:
        "Desenvolver uma plataforma informatizada composta por um site e um aplicativo para auxiliar os processos de produção e divulgação da Arca Embriões. Através da implementação desse sistema, objetiva-se aprimorar a eficiência das operações internas, facilitando a gestão de dados e o acompanhamento dos processos de produção. Simultaneamente, o site servirá como um canal eficaz de comunicação e marketing, promovendo a visibilidade da empresa e permitindo a interação com clientes e parceiros.",
    },
    {
      nome: "Checkin",
      integrantes: [
        "Vitor Emmanuel Pereira de Mesquita",
        "Rogério José dos Santos Silva",
        "Nickolas Tavares do Nascimento",
        "Rafael Rodrigues Oliveira",
      ],
      descricao:
        "O processo manual de controle de presença e lançamento de notas no internato de medicina é complexo, demandando tempo e esforço significativo dos funcionários, além de estar sujeito a erros. Para otimizar essa gestão, foi desenvolvida uma aplicação que automatiza tarefas manuais e agiliza a atualização das informações no Portal do Aluno. A metodologia incluiu entrevistas com usuários e análise dos fluxos atuais, resultando em uma interface intuitiva com validações automáticas. Como resultado, espera-se maior eficiência, precisão nos registros e acessibilidade para alunos, professores e administradores, promovendo uma gestão acadêmica mais moderna e confiável.",
    },
  ],
  4: [
    {
      nome: "Fazendata",
      integrantes: [
        "Thiago de Paula Silva",
        "João Pedro Souza Mendes Braga",
        "Guilherme Bellonia Moreira de Brito",
        "Kelysson Bruno Teixeira Martins",
      ],
      descricao:
        "Desenvolver um aplicativo para gerenciar informações de animais do ramo de criação de gado, utilizando tecnologia NFC. A ficha digital incluirá dados como vacinas aplicadas, próximas vacinas, peso, raça, dieta e doenças recentes. O sistema permitirá a gravação e recuperação de dados através de tags NFC, garantindo persistência de dados e sincronização automática com o banco de dados quando a conexão com a internet estiver disponível.",
    },
    {
      nome: "Pet Guard",
      integrantes: [
        "Augusto Renner Barbosa de Oliveira",
        "João Felipe Encarnação Alves",
        "Rafael Vincius Barcelos Rodrigues",
        "Samuel Vasconcelos Caixeta Machado",
        "Yuri Araújo Santos",
      ],
      descricao:
        "O presente trabalho propõe o desenvolvimento de um aplicativo mobile que faz o cadastros de tutores e seus respectivos pets com o objetivo de facilitar o acesso as informações através de um código QR na coleira, o app também conta com controle de vacinação de forma prática e digital.",
    },
    {
      nome: "HortoManage",
      integrantes: [
        "Ana Clara Soares Ferreira",
        "Eduarda Gyordane Fonseca Souza",
        "Fellipe Queiroz Moreira",
        "Lucas Damasceno Costa",
        "Nathan Gomes Pessoa",
        "Victor Nonato Gomes",
      ],
      descricao:
        "O Horto Manage é um sistema inovador voltado para a gestão de hortas e viveiros, criado para atender às necessidades de proprietários de negócios do setor. A plataforma tem como objetivo otimizar a administração de atividades como controle de estoque, gerenciamento de clientes e vendas, além de fornecer relatórios detalhados. Sua proposta é oferecer uma ferramenta prática para aumentar a produtividade e a organização.",
    },
    {
      nome: "Controle Animal",
      integrantes: [
        "Arthur Augusto Sousa Lacerda",
        "Kamila Fernandes Silva",
        "Rafael Rodrigues da Mota",
        "Samuel Andrade Dias",
      ],
      descricao:
        "O aplicativo visa fornecer uma ferramenta simples e acessível para produtores rurais, permitindo-lhes coletar, armazenar e analisar dados de forma eficaz, o que pode levar a uma gestão mais eficiente e decisões corretas no manejo animal.",
    },
    {
      nome: "Feira Fácil",
      integrantes: [
        "Maurício Hansen Simões",
        "Murilo Henrique Pereira Galvão",
        "Marco Túlio Martins",
        "Alexandre Henrique Pereira de Souza",
        "Matheus Porto Rocha",
      ],
      descricao:
        "Feira Fácil surge com o objetivo de modernizar a organização e gestão das barracas, ampliar a visibilidade dos produtores, fomentar práticas sustentáveis e fortalecer a economia local, criando uma experiência única para os visitantes e aproximando o campo da cidade.",
    },
    {
      nome: "Acesso Rural",
      integrantes: [
        "Guilherme Oliveira Tawil",
        "Arthur Antunes de Deus",
        "Felipe de Deus Matos",
        "Gabriel Figueiredo Maia",
        "Kaueh Amorim Araujo",
      ],
      descricao:
        "Simplificar o processo de vendas, facilitar o acesso aos produtos e aumentar a visibilidade da loja.",
    },
    {
      nome: "AgroImune",
      integrantes: [
        "Delieltom Dantas Guimarães",
        "Matheus Heck",
        "Igor Andrade Machado",
        "Gabriel Lucas Pereira Silva",
        "Gabriel Soares Rodrigues",
      ],
      descricao:
        "Implementar um software que facilite o controle e a gestão de vacinas para o gado. Melhorando a organização, a eficiência e a eficácia nas práticas de vacinação.",
    },
  ],
  5: [
    {
      nome: "VoiceLocker",
      integrantes: [
        "Felipe Augusto Araujo de Siqueira",
        "Guilherme Ântony Oliveira Santos",
      ],
      descricao:
        "Projeto de biometria por voz, onde será utilizado o reconhecimento por voz como meio de segurança.",
    },
    {
      nome: "FAZER O BEM, OLHANDO A QUEM!",
      integrantes: ["Davi Peixoto", "David Mundim", "Isadora Hansen"],
      descricao:
        "Este trabalho aplica a metodologia ágil Scrum no desenvolvimento de uma solução tecnológica para o Torneio Brasil de Robótica (TBR) 2024, com foco na universalização do acesso a alimentos nutritivos. A equipe STR, do Colégio Marista, desenvolveu totens interativos em supermercados que permitem doações para instituições de caridade, que são convertidas em alimentos para famílias vulneráveis. A solução foi gerida com reuniões semanais, promovendo planejamento, entregas contínuas e adaptações rápidas, e resultou em uma plataforma acessível e funcional, unindo aprendizado acadêmico e impacto social positivo.",
    },
    {
      nome: "HOME AUTOMATION PROJECT H.A.P.",
      integrantes: ["Bruno Duarte Silveira", "Laura de Oliveira Marques"],
      descricao:
        "O projeto HAP (Home Automation Project) foi desenvolvido para facilitar o cotidiano de pessoas com dificuldades de locomoção, utilizando o Node-RED para automação, MQTT para comunicação entre dispositivos, e Trello para gerenciamento de tarefas. O design foi criado no Photoshop e a comunicação da equipe foi realizada via Discord. O sistema é escalável e pode ser integrado a novos dispositivos, oferecendo conforto e autonomia, especialmente para pessoas com limitações físicas, com potencial para expansão e aprimoramento.",
    },
    {
      nome: "AUTOMAÇÃO DE IRRIGAÇÃO COM ESP32",
      integrantes: [
        "Alan de Lima",
        "Gabriel Henrique",
        "Matheus Aragão",
        "Otavio Augusto",
        "Taiyo Tanaka",
      ],
      descricao:
        "O projeto desenvolve um sistema de automação de irrigação para ambientes controlados usando IoT, com ESP32, sensores de umidade e temperatura, e relés. O Zabbix coleta e analisa dados ambientais, gerando gráficos e controle. A irrigação é automatizada para maior precisão no uso de água e controle ambiental. O sistema destaca a importância da tecnologia para aumentar a eficiência na agricultura.",
    },
    {
      nome: "VETXPRESS",
      integrantes: ["Fernando Martins", "Gustavo Martins", "Marcos Moreira"],
      descricao:
        "O VetXpress é um colar inteligente para monitoramento da saúde de cavalos de alto valor, equipado com sensores IoT para medir frequência cardíaca, respiratória e temperatura. As informações são transmitidas em tempo real para uma plataforma Node-RED, que processa e exibe dados em interfaces visuais intuitivas. O sistema também registra a administração de medicamentos e controla a alimentação, promovendo rastreabilidade e precisão nos cuidados. A metodologia incluiu fluxos no Node-RED e simulações para validar a coleta de dados. Os resultados preliminares demonstram sua eficácia na gestão da saúde equina.",
    },
    {
      nome: "TAGLOG",
      integrantes: [
        "Davi Marques",
        "João Pedro Ribeiro",
        "Thiago Melo",
        "Victor Gomes",
        "Yuri Dias",
      ],
      descricao:
        "Este trabalho desenvolve um sistema de logística rastreável usando tecnologia NFC para monitoramento contínuo do inventário, garantindo identificação precisa e atualização em tempo real. A abordagem melhora a precisão, agilidade e transparência na distribuição, beneficiando o controle de estoques e entregas. Conclui-se que a NFC estabelece um novo padrão de eficiência e confiabilidade na logística.",
    },
    {
      nome: "SAFECOIN",
      integrantes: ["Igor da Silva Mendes", "Juliano Gomes Oliveira"],
      descricao:
        "O projeto SafeCoin visa promover a segurança digital no mercado de criptomoedas, utilizando Blockchain e smart contracts para transações seguras e rastreáveis. A solução garante anonimato, controle e transparência, com autenticação de múltiplos fatores e criptografia avançada. Desenvolvido em uma rede Blockchain privada, o SafeCoin reduz custos e combate fraudes, oferecendo uma plataforma confiável para o mercado de criptomoedas.",
    },
    {
      nome: "EPIVision",
      integrantes: [
        "Gustavo Silvério Rosa",
        "Henrique Oliveira Melo",
        "João Vitor Pereira Sousa",
        "Lara Evellym Ferreira",
        "Lucas Teodoro de Melo",
        "William Henrique Ribeiro",
      ],
      descricao:
        "EPIVision é uma solução de monitoramento de segurança que utiliza inteligência artificial e visão computacional para garantir o uso correto de Equipamentos de Proteção Individual (EPIs) no trabalho. O sistema identifica automaticamente a ausência de EPIs, como máscaras, coletes e capacetes, em tempo real e alerta os gestores, visando melhorar a segurança dos colaboradores e evitar multas para as empresas.",
    },
    {
      nome: "Passa Porta",
      integrantes: [
        "Ana Clara Silva",
        "Hiago de Oliveira",
        "Bruno Alves",
        "Arthur Moreira",
        "Guilherme Chilon",
        "Yan Lucas",
      ],
      descricao:
        "O projeto Passa-Porta visa desenvolver uma solução de baixo custo para controle automático de acesso de veículos, utilizando um sistema de leitura de placas em tempo real. A cancela foi automatizada através de um motor controlado por microcontrolador, permitindo a abertura e fechamento da barreira de forma eficiente. O objetivo principal do Passa-Porta é criar uma cancela automática acessível, que integre um sistema de leitura de placas veiculares utilizando câmeras de baixo custo e algoritmos de processamento de imagens.",
    },
    {
      nome: "PetTag",
      integrantes: [
        "Gustavo Ribeiro",
        "Kauã Christian",
        "Luccas Rodrigues",
        "Luis Henrique",
        "Tiago Soares",
      ],
      descricao:
        "Este trabalho propõe o desenvolvimento de um sistema de coleira para pets utilizando a tecnologia NFC (Near Field Communication), com o objetivo de fornecer uma solução prática e eficaz para localizar animais de estimação perdidos. O sistema permite que os donos cadastrem informações sobre o pet, como nome e dados de contato, associando essas informações a uma etiqueta NFC que pode ser facilmente carregada pelo pet, em sua coleira. Quando o animal é encontrado e a etiqueta NFC é lida por um celular, as informações de contato do dono e nome do animal são exibidas.",
    },
    {
      nome: "Automação de Etiquetas",
      integrantes: ["Giovanna Mendes", "Igor Martins"],
      descricao:
        "O presente trabalho descreve o desenvolvimento de um sistema web voltado para o gerenciamento de estoque, implementado com funcionalidades abrangentes e inovadoras. O software permite a criação, exclusão e atualização de produtos, além do controle de alterações nos preços. Destaca-se a integração de um módulo de automação de etiquetas, que utiliza um display LCD e um Arduino para exibir e imprimir informações diretamente do sistema.",
    },
    {
      nome: "Carrinho Remotamente Controlado com Câmera",
      integrantes: [
        "José Otávio Pereira Braga",
        "Luís Miguel dos Santos Gonçalves",
        "Luiz Carlos de Siqueira Brandão",
      ],
      descricao:
        "O projeto 'Carrinho ESP32 Cam' tem como objetivo o desenvolvimento de um sistema de carrinho robótico com câmera integrada, controlado remotamente via aplicativo. A proposta visa explorar a utilização de Placas de Circuito Impresso (PCI) em ambientes de difícil acesso ou com riscos para seres humanos, mas que podem ser realizados por máquinas. O carrinho foi projetado com um chassi robusto, equipado com motores DC e controlado por uma Ponte H, com o ESP32 Cam como unidade central de processamento.",
    },
    {
      nome: "Sistema de Votação (Câmara Municipal)",
      integrantes: [
        "Arthur Caixeta de Andrade",
        "Layla Suellen Ferreira Nunes",
        "Lucas Henrique Sousa",
        "Vinicius Santos Gontijo de Sousa",
      ],
      descricao:
        "O sistema de votação desenvolvido para a Câmara Municipal de Patos de Minas foi projetado para modernizar e facilitar o gerenciamento de reuniões e votações, promovendo eficiência, transparência e organização no âmbito legislativo. O sistema automatizou processos antes realizados manualmente, reduziu a margem de erros e aumentou a transparência das atividades legislativas, oferecendo maior segurança no acesso às informações sensíveis.",
    },
    {
      nome: "FIND YOUR CAR",
      integrantes: [
        "Alexandre De Oliveira",
        "Arthur Fellipe",
        "Lucas Braga",
        "Lucas Venâncio",
        "Matheus Henrique",
        "Rychard Cezar",
      ],
      descricao:
        "O Find Your Car é um aplicativo que facilita a localização de veículos em estacionamentos grandes. Utilizando um ESP32-CAM posicionado no estacionamento, o sistema captura imagens e, com o auxílio de inteligência artificial, reconhece as placas dos veículos. Ao inserir a placa no app, o usuário recebe informações sobre a localização do carro, como o número da vaga e a área onde ele está estacionado. Essa solução integra tecnologias avançadas de visão computacional, IA e APIs, proporcionando uma maneira prática e eficiente de encontrar o veículo, reduzindo o estresse e economizando tempo.",
    },
    {
      nome: "AUTOMAÇÃO RESIDENCIAL",
      integrantes: ["Lorenzo", "Matheus", "Marcelo", "Luiz G."],
      descricao:
        "A automação residencial utiliza tecnologia e conectividade para transformar casas em ambientes inteligentes, oferecendo maior conforto, eficiência energética e segurança. O projeto conectou um aplicativo de controle à AWS, utilizando o broker MQTT e funções Lambda para integrar dispositivos IoT com a placa ESP32. A interface do aplicativo inclui telas de login e controle, permitindo gerenciar os dispositivos conectados de forma prática. A automação visa otimizar recursos, reduzir custos e melhorar a segurança, atendendo às necessidades de um estilo de vida moderno e sustentável. A integração com a maquete física demonstrou a viabilidade da solução em cenários reais.",
    },
    {
      nome: "PROFINSIGHT",
      integrantes: ["Lucas Cândido", "Júlia Vasconcelos"],
      descricao:
        "O ProfInsight é uma plataforma desenvolvida para validar e autenticar as certificações acadêmicas e profissionais de professores, garantindo a integridade das instituições de ensino. O sistema possui quatro perfis de usuário: administrador, assessor acadêmico, coordenador e professor. Cada perfil tem permissões específicas para gerenciar e validar as credenciais dos docentes. A plataforma integra dados do currículo Lattes dos professores e exige autorização das instituições para acessar essas informações. O backend utiliza Java com Spring Boot e MongoDB, enquanto o frontend é desenvolvido com React.js, TypeScript e Styled Components. A renderização é feita com Next.js, e o design é criado no Figma. O sistema visa otimizar a verificação das certificações de maneira segura e eficiente.",
    },
    {
      nome: "WATTSON",
      integrantes: [
        "Luis Felipe Andrade",
        "Marcus Vinicius Braga",
        "Pedro Henrique",
        "Vinicius Rodrigues",
      ],
      descricao:
        "Este projeto propõe um sistema de monitoramento e controle de consumo energético utilizando IoT de baixo custo e assistentes virtuais como Alexa. O sistema permite o monitoramento em tempo real e o controle remoto de dispositivos elétricos, tanto por aplicativo móvel quanto por comandos de voz. A solução é não invasiva, com sensores de energia conectados a uma plataforma IoT e uma visualização 3D interativa da sala, mostrando o status e consumo dos dispositivos. A integração com Alexa facilita a automação por voz. O sistema é eficiente, acessível e contribui para a redução do desperdício de energia, promovendo um uso mais sustentável e prático.",
    },
    {
      nome: "TAPLN",
      integrantes: [
        "Hárita Satóritt Cardoso Araujo",
        "Ryan Henrique Pereira Cardoso",
      ],
      descricao:
        "Este projeto propõe uma solução para otimizar os processos de check-in e check-out em hotéis, utilizando um aplicativo móvel com tecnologia NFC integrada a tags RFID. O objetivo é reduzir o tempo de espera e melhorar a experiência do hóspede, permitindo que os atendentes se concentrem em tarefas mais complexas. O sistema foi desenvolvido com backend em Typescript, Express, Prisma ORM e MySQL, e frontend em React Native. Os resultados mostram que a solução agiliza o processo, melhora a gestão de reservas e reduz o contato físico, contribuindo para a digitalização e eficiência operacional do setor hoteleiro.",
    },
  ],
  6: [
    {
      nome: "VoiceLocker",
      integrantes: [
        "Felipe Augusto Araujo De Siqueira",
        "Guilherme Ântony Oliveira Santos",
      ],
      descricao:
        "Projeto de biometria por voz, onde será utilizado o reconhecimento por voz como meio de segurança.",
    },
    {
      nome: "Weatherly",
      integrantes: ["Gustavo Monteiro", "João Pedro Rodrigues Rocha"],
      descricao:
        "O projeto consiste na criação de um aplicativo desktop que utiliza dados históricos de temperatura para prever valores futuros. O sistema permite que o usuário carregue um arquivo CSV com os dados e visualize as previsões em forma de gráfico.",
    },
    {
      nome: "Algoritmos Genéticos – Super Mario",
      integrantes: ["Gustavo Rodrigues Marques", "Higor De Deus Matos"],
      descricao:
        "Este projeto desenvolve uma IA que joga Super Mario usando algoritmos genéticos e análise de endereços de memória em tempo real, com Python e C. A IA é otimizada para respostas rápidas e eficientes, e o sistema é modular, utilizando containers Docker. Os dados são processados e armazenados em um banco de dados para análises contínuas, enquanto a evolução do desempenho é visualizada em gráficos na web. O sistema recompensa ações como finalizar fases e coletar moedas, destacando o uso avançado de IA e algoritmos genéticos.",
    },
    {
      nome: "HRFinnance",
      integrantes: [
        "Hiury Lucas Bernardes Batista",
        "Ricardo Balbino Vaz Filho",
      ],
      descricao:
        "Projeto para auxiliar as pessoas a investirem, mostrando previsões de ações, chatbot para conversar sobre finanças e apresentação das ações com maior rentabilidade.",
    },
    {
      nome: "AniFinder",
      integrantes: [
        "João Augusto Soares",
        "Lucas Rodrigues Braga",
        "Natan Cristian Pereira Caixeta",
      ],
      descricao:
        "O sistema permite que usuários pesquisem e obtenham informações detalhadas sobre animes, como ano, nota e número de episódios, além de fornecer recomendações e gráficos baseados nos dados coletados. O projeto demonstra a aplicação de programação e análise de dados para tornar a descoberta de novos animes mais acessível aos usuários.",
    },
    {
      nome: "SmartCam",
      integrantes: [
        "Luiz Henrique Rodrigues Mendes",
        "João Victor Araujo Garcia",
      ],
      descricao:
        "O projeto consiste em identificar pessoas e objetos através de uma câmera de segurança.",
    },
    {
      nome: "Snake Intelligence",
      integrantes: [
        "Nivaldo Gonçalves Caixeta Júnior",
        "Paulo Henrique Marques De Araújo",
      ],
      descricao:
        "Este projeto é um jogo da cobrinha com modo multiplayer, onde o jogador compete contra uma inteligência artificial (IA) baseada em redes neurais, usando o modelo Deep Q-Network (DQN) e aprendizado por reforço. A IA aprende a tomar decisões para maximizar sua pontuação e evitar colisões, observando o estado do jogo, como a posição da comida e a direção da cobra. O objetivo é explorar o uso de inteligência artificial em jogos simples e aplicar o aprendizado por reforço em ambientes interativos.",
    },
    {
      nome: "ChatBrot",
      integrantes: [
        "Pedro Henrique Maciel Oliveira",
        "Edro Víctor Maciel Oliveira",
      ],
      descricao:
        "Chat Bot com conversas simples de temas específicos, servindo de intermédio entre empresas e clientes.",
    },
  ],
};

let selectedClass = 1;

function updateCards(selectedClass) {
  cardsContainer.innerHTML = "";

  const teams = teamsData[selectedClass];

  if (teams && teams.length > 0) {
    teams.forEach((team) => {
      const card = document.createElement("div");
      card.className = "teamCard";

      const name = document.createElement("p");
      name.className = "teamName";
      name.textContent = team.nome;

      const members = document.createElement("div");
      members.className = "teamDescription";
      const developedBy = document.createElement("p");
      developedBy.className = "developedBy";
      developedBy.textContent = "Desenvolvido por: ";
      members.appendChild(developedBy);

      const description = document.createElement("div");
      description.className = "teamDescription";
      const descriptionTitle = document.createElement("p");
      descriptionTitle.className = "developedBy";
      descriptionTitle.textContent = "Resumo: ";
      const descriptionText = document.createElement("p");
      descriptionText.textContent = team.descricao;

      team.integrantes.forEach((integrante) => {
        const membersText = document.createElement("p");
        membersText.textContent = integrante;
        members.appendChild(membersText);
      });

      description.appendChild(descriptionTitle);
      description.appendChild(descriptionText);
      card.appendChild(name);
      card.appendChild(members);
      card.appendChild(description);
      cardsContainer.appendChild(card);
    });
  } else {
    const card = document.createElement("div");
    card.className = "teamCard";

    const text = document.createElement("p");
    text.className = "teamName";
    text.textContent = "Opa, sem equipes!";

    card.appendChild(text);
    cardsContainer.appendChild(card);
  }
  addGlowEffect();
}

classSelect.addEventListener("change", (event) => {
  selectedClass = event.target.value || 1;
  updateCards(selectedClass);
});

updateCards(selectedClass);

function addGlowEffect() {
  const cards = document.querySelectorAll(".teamCard");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}
