/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
*/



   const jogador = [];
   const computador = [];
   
   if(confirm("Quer começar uma rodada?")){
     
      let cartasIniciais = false;
      while(!cartasIniciais){
      computador.push(comprarCarta())
      computador.push(comprarCarta())

      jogador.push(comprarCarta())
      jogador.push(comprarCarta())
   
      if((jogador[0].valor === 11 && jogador[1].valor === 11) ||
      (computador[0].valor === 11 && computador[1].valor === 11)){
       jogador = [];
       computador = [];
      }else{
         cartasIniciais = true;
      }
    }
   }

   
   let cartasJogador = jogador.map((item) => {
      return item.texto
   })
   // // primeiro confirm
     if(confirm(`
      Este confirm resulta na mensagem:
      Suas cartas são ${cartasJogador}. A carta revelada do computador é 4♣️.
	   Deseja comprar mais uma carta?
      `)){

      }
   

      

   //       if(pontuacaoComputador > pontuacaoJogador){
   //        console.log("O computador ganhou!")
   //        }
   //       if(pontuacaoJogador > pontuacaoComputador){
   //        console.log("O usuário ganhou!")
   //       }
   //       if(pontuacaoComputador == pontuacaoJogador){
   //        console.log("Empate!")
   //       }
    
   //  }else{
   //    console.log("O jogo acabou.");
   //    }
 
