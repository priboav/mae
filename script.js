function carregaMAE() {
    var dicas = {
        dica01: {
            subtitulo: "1.Durma perto se seu bebê não gostar de ficar sozinho",

            imagem: "https://i.postimg.cc/x15kqhzj/dormir.jpg",

            texto: "A maioria deles não gosta, principalmente no começo. E tudo bem, é só um bebê. Não é manha.",

            citacao: "Observe as medidas de segurança.",
        },

        dica02: {
            subtitulo: "Use um sling para carregar o bebê",

            imagem: "https://i.postimg.cc/HWMVbVyh/sling.jpg",

            texto: "Fique com os braços livres e faça suas coisas enquanto o bebê fica feliz.",

            citacao: "Aprenda a amarrar. Vale a pena.",
        },

        dica03: {
            subtitulo: "Roupas confortáveis, mas que façam você se sentir bonita",

            imagem: "https://i.postimg.cc/VNHdWtg3/roupa.jpg",

            texto: "Use brincos, passe maquiagem (se isso faz você se sentir bem).",

            citacao: "O puerpério é difícil, buscar se sentir bem pode ajudar.",
        },

        dica04: {
            subtitulo: "4. Amamente em livre demanda",

            imagem: "https://i.postimg.cc/TY85srxx/amamentando.jpg",

            texto: "Mesmo que ele queira peito a cada 30 minutos. Isso é normal. Eu sei que te ensinaram diferente, mas o normal é que eles passem o maior tempo no peito.",

            citacao: "Depois melhora.",
        },

        dica05: {
            subtitulo: "Dê colo. Muito colo",

            imagem: "https://i.postimg.cc/qv4hJ4gZ/colo.jpg",

    texto: "Já já o bebê não vai mais querer ficar abraçado e seu colo fica vazio.",

            citacao: "Dá uma saudade tão grande!",
        },

        dica06: {
            subtitulo: "Cante para o seu bebê",

            imagem: "https://i.postimg.cc/L6zgFn41/cantar.jpg",

            texto: "Sente-o de frente para você e converse pertinho.",

            citacao: "Ele vai adorar essa comunicação.",
        },

        dica07: {
            subtitulo: "7. Se puder, durma",

            imagem: "https://i.postimg.cc/yx0xKbKH/mae-dormindo.jpg",

            texto: "Se puder dormir um pouco enquanto o bebê está cochilando, aproveite.",

            citacao: "Descansar faz você aproveitar a Maternidade um pouco mais.",
        },

        dica08: {
            subtitulo: " 8. Estude sobre maternidade",

            imagem: "https://i.postimg.cc/Twz1ZXZ0/estudar.jpg",

            texto: "Estude sobre parto, amamentação, introdução alimentar. Estude sobre sono, rotina, estímulos.",
    
            citacao: "Há muita coisa a se aprender.",
        },

        dica09: {
            subtitulo: "Tenha paciência",

            imagem: "https://i.postimg.cc/JhhsXxNN/paciencia.jpg",

            texto: "Busque um grupo de mães para trocar figurinhas. Faça caminhadas com o bebê. Aproveite o momento.",

            citacao: "Tudo passa muito rápido e deixa saudades.",
        },
    };

    var content =
        document.getElementById("content");

    for (var dica in dicas) {
        content.innerHTML +=
            '<div class="card">' +
            '<img src="' +
            dicas[dica].imagem +
            '"/>' +
            "<details>" +
            "<summary>" +
            dicas[dica].subtitulo +
            "</summary>" +
            "<p>" +
            dicas[dica].texto +
            "</p>" +
            "<blockquote> <q>" +
            dicas[dica].citacao +
            "</q> </blockquote>" +
            "</details>" +
            "</div>";
    }

}

carregaMAE();