
function MudaDesenho() {
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");

    const dia = document.querySelector("#dia").value;
    const mes = document.querySelector("#mes").value;
    const data = "2023" + "/" + mes + "/" + dia;

   //alert(`${data}`);
    const msg = document.querySelector("h2");


    if((data >= "2023/05/21") && (data <= "2023/06/20")){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo.";
    }

    else if((data >= "2023/10/23") && (data <= "2023/11/21")){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Milo de escorpião é o Cavaleiro de Ouro de Escorpião que protege a casa de escorpião no santuário. Prezava muito a amizade, por isso passou a zelar por Hyoga depois da morte de seu amigo Camus de aquário.";
    }
    
    else if(data >= '2023/02/19' && data<='2023/03/20'){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Afrodite de Peixes ( 魚座 ピスケス のアフロディーテ, Pisukesu no Afurodite?) é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais.";
    }

    else if(data >= '2023/11/22' && data<='2023/12/21'){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Aiolos de Sagitário ( 射手座 サジタリアス のアイオロス, Sajitariasu no Aiorosu?) é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia.";
    }
    
    else if(data >= "2023/03/21" && data<="2023/04/20"){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco.";
    }

    else if(data >='2023/01/21' && data<='2023/02/18'){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Camus de Aquário ( 水瓶座 アクエリアス のカミュ, Akueriasu no Kamyu?) é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
    }
    
    else if(data >= '2023/09/23' && data<='2023/10/22'){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Dohko de Libra foi um lendário e renomado Cavaleiro de Ouro do Santuário de Athena, por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries.";
    }

    else if(data >= '2023/08/23' && data<='2023/09/22'){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Shaka de Virgem (乙女座バルゴのシャカ Barugo no Shaka?) é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências.";
    }
    
    else if(data >= '2023/07/23' && data<='2023/08/22'){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Aiolia de Leão (獅子座のアイオリア, Reo no Aioria) é umCavaleiro de Ouro do Século XX, irmão do cavaleiro de Sagitário da mesma época (Aioros), na série Os Cavaleiros do Zodíaco, de Masami Kurumada. É o Cavaleiro de Ouro que protege a Casa de Leão.";
    }

    else if(data >= '2023/06/21' && data<='2023/07/22'){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Schiller. O Cavaleiro de Ouro de Câncer em Saint Seiya Omega. Ele é o Governante da Morte e Criação e pode usar o elemento Água. Schiller é arrogante, sarcástico, neurótico, dramático e bastante delicado.";
    }
    
    else if(data >= '2022/12/22' && data<='2023/01/20'){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Shura de Capricórnio ( 山羊座 のシュラ , Kapurikōn no Shura?) é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos.";
    }

    else if(data >= '2023/04/21' && data<='2023/05/20'){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Aldebaran (アルデバラン, Aldebaran) é o Cavaleiro de Ouro da Constelação de Touro ( 牡牛座 タウラス , Taurus) durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário.";
    }

    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/errei.jpg");
        imagem.setAttribute("width","250px");
    }
}
