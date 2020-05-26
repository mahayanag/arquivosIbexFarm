
//exemplo simples de experimento de leitura autocadenciada - maio de 2020 


var shuffleSequence = seq("setcounter", "tcle", "intro1", "pratica1", "intro2", "pratica2", "sep", "intro3", sepWith("sep", rshuffle(startsWith("exp"), startsWith("F"))), "hiddenCompletionCode");

// Define valores default a serem usados em todo o experimento

var defaults = [
  "Question", {as: ["Sim", "Não"], randomOrder: false} // randomOrder em false indica que as questoes sao sempre apresentadas em uma ordem fixa (primeiro sim, depois nao)
  ];

var progressBarText = "progresso"; 

var sendingResultsMessage = "Aguarde enquanto salvamos suas respostas. Isso pode levar alguns segundos - por favor, não feche a janela ainda.";

var completionMessage = "Muito obrigado por sua participação, você já pode fechar esta janela em seu navegador!";

var items = [
  
  // separator: mensagem mostrada entre os itens 
  
  ["sep", "Separator", {transfer: "keypress", normalMessage: "Correto! Pressione qualquer tecla para continuar", errorMessage: "Errado - Pressione qualquer tecla para continuar"}],
  
  // formularios apresentados como tcle, demografia e instrucoes
  
  ["tcle", "Form", {consentRequired: true, continueMessage: "Clique aqui para continuar", html: {include: "tcle.html"}}],  

  ["demografia", "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "demografia.html"}}],
  
  ["intro1", "Form", {consentRequired: false, continueMessage: "Clique aqui para ver um exemplo", html: {include: "intro1.html" }} ],
  
  ["intro2", "Form", {consentRequired: false, continueMessage: "Clique aqui para ver um exemplo", html: {include: "intro2.html" }} ],
  
  ["intro3", "Form", {consentRequired: false, continueMessage: "Clique aqui para começar o experimento", html: {include: "intro3.html" }} ],
  
// itens para pratica 

  ["pratica1", "DashedSentence", {s: "Essa sentença é apenas um exemplo simples. \n Você lerá sentenças como essas no experimento."}, "Question", {hasCorrect:"Sim", q: "Essa sentença foi um exemplo?"}],          
  
  ["pratica2", "DashedSentence", {s: "João adorava contar uma boa fofoca para seus amigos. \n Foi por isso que ele ficou chateado por Maria já ter contado tudo a Pedro."},
   "Question", {hasCorrect: "Não", q: "Foi João que contou a fofoca a Pedro?"}],

  
// itens distratores
  
  ["F-1filler", "DashedSentence", {s: "Harry Potter era um dos meus livros preferidos quando eu era criança. \n Foi por isso que dei a coleção para meu sobrinho em seu aniversário de oito anos."},
   "Question", {hasCorrect: "Sim", q: "Meu sobrinho ganhou uma coleção do Harry Potter?"}],
  ["F-2filler", "DashedSentence", {s: "Seguido de perto pelo canto assustador das corujas, nosso herói se embrenhou na mata. \n Lá, encontrou seu inimigo e iniciou uma luta por sua honra."}, "Question", {hasCorrect: "Não", q: "O herói desistiu da luta?"}],
  ["F-3filler", "DashedSentence", {s: "Em meio à cachoeira havia uma profusão de flores e plantas centenárias. \n Imaculadas, elas testemunhavam o isolamento tedioso em que vivia a floresta encantada."},
   "Question", {hasCorrect: "Sim", q: "As flores e plantas estavam ali havia muito tempo?"}],
  ["F-4filler", "DashedSentence", {s: "Meu queixo tilintava com o frio espantoso naquela insone noite de domingo. \n Precisei buscar as cobertas para me aquecer e conseguir dormir."},
   "Question", {hasCorrect: "Não", q: "Precisei de lençóis para me aquecer?"}],
  ["F-5filler", "DashedSentence", {s: "Jonas estava exausto pois passou noites em claro para se preparar bem para a prova. \n Ele precisava de um dez para ser aprovado na disciplina."}, "Question", {hasCorrect: "Sim", q: "Jonas estudou bastante?"}],


// itens experimentais
 
  [["exp.amb", 1], "DashedSentence", {s: "Rodrigo ajudou Caio a estudar para a prova e ele foi bem. \n A prova foi muito difícil."}, "Question", {hasCorrect: "Não", q: "A prova foi fácil?"}],
  [["exp.namb.obj", 1], "DashedSentence", {s: "Ana ajudou Caio a estudar para a prova e ele foi bem. \n A prova foi muito difícil."}, "Question", {hasCorrect: "Não", q: "A prova foi fácil?"}],
  [["exp.namb.suj", 1], "DashedSentence", {s: "Caio ajudou Ana a estudar para a prova e ele foi bem. \n A prova foi muito difícil."}, "Question", {hasCorrect: "Não", q: "A prova foi fácil?"}],
  
  [["exp.amb", 2], "DashedSentence", {s: "Pedro viu Lucas na praia e ele estava de chinelos. \n O dia estava muito quente."}, "Question", {hasCorrect: "Sim", q: "Alguém estava usando chinelo?"}],
  [["exp.namb.obj", 2], "DashedSentence", {s: "Maria viu Lucas na praia e ele estava de chinelos. \n O dia estava muito quente."}, "Question", {hasCorrect: "Sim", q: "Alguém estava usando chinelo?"}],
  [["exp.namb.suj", 2], "DashedSentence", {s: "Lucas viu Maria na praia e ele estava de chinelos. \n O dia estava muito quente."}, "Question", {hasCorrect: "Sim", q: "Alguém estava usando chinelo?"}],
  
  [["exp.amb", 3], "DashedSentence", {s: "Rubens convidou João para ir ao cinema e ele disse que adorava comédia. \n Marcaram para o dia seguinte."}, "Question", {hasCorrect: "Sim", q: "Os amigos concordaram em ir ao cinema?"}],
  [["exp.namb.obj", 3], "DashedSentence", {s: "Carla convidou João para ir ao cinema e ele disse que adorava comédia. \n Marcaram para o dia seguinte."}, "Question", {hasCorrect: "Sim", q: "Os amigos concordaram em ir ao cinema?"}],
  [["exp.namb.suj", 3], "DashedSentence", {s: "João convidou Carla para ir ao cinema e ele disse que adorava comédia. \n Marcaram para o dia seguinte."}, "Question", {hasCorrect: "Sim", q: "Os amigos concordaram em ir ao cinema?"}]
  
  ];
