function executarComando(params) {
    audio.play();
  }
  
  function mudarIcone() {
    // Obtém o elemento de imagem
    const icone = document.getElementById("icone");
  
  
    // Altera a imagem dependendo da imagem atual
    if (icone.src.includes("imagens/botao-play.png")) {
        icone.src = "imagens/pausa.png"; // Troca para a segunda imagem
    } else {
        icone.src = "imagens/botao-play.png"; // Troca de volta para a primeira imagem
    }
    audio.onended = function() {
      icone.src = "imagens/botao-play.png";
    }
  }
  
  
  document.getElementById("playButton").addEventListener('click', function() {
    let contadorClique = 0;
  
    contadorClique++;
    executarComando();
    mudarIcone();
  
    if (contadorClique == 1){
      document.getElementById('skipButton3').disabled = true;
      document.getElementById('skipButton2').disabled = true;
      document.getElementById('skipButton').disabled = false;
      document.getElementById('skipButton3').style.opacity = '40%';
      document.getElementById('skipButton2').style.opacity = '40%';
      document.getElementById('skipButton').style.opacity = '100%';
    }
    if (contadorClique >= 2 || contadorClique === 2 ){
      document.getElementById('skipButton3').disabled = true;
      document.getElementById('skipButton2').disabled = false;
      document.getElementById('skipButton').disabled = true;
      document.getElementById('skipButton').style.opacity = '40%';
      document.getElementById('skipButton2').style.opacity = '100%';
    }
  
  
  });
  
  
  
  const barraProgresso = document.getElementById('barraProgresso');
  const audio = document.getElementById('audio');
  
  audio.addEventListener('timeupdate', function() {
    const progresso = (audio.currentTime / audio.duration) * 60;
    barraProgresso.value = progresso;
    barraProgresso.style.width = audio.duration;
  });
  
  
  
  const currentTime = document.querySelector(".currentTime")
  const duration = document.querySelector(".duration")
  
  audio.addEventListener('ended', () => {
    barraProgresso.value = 0;
  })
  
  audio.ontimeupdate = () => updateTime();
  
  function updateTime() {
    const currentMinutes = Math.floor(audio.currentTime / 60)
    const currentSeconds = Math.floor(audio.currentTime % 60)
    currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)
  
    const durationFormatted = isNaN(audio.duration) ? 0 : audio.duration
    const durationMinutes = Math.floor(durationFormatted / 60)
    const durationSeconds = Math.floor(durationFormatted % 60)
    duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)
  }
  
  const formatZero = (n) => (n < 10 ? '0' + n : n)
  
  
  let contador2 = 0;
  
  skip1 = document.getElementById("skipButton").addEventListener('click', function() {
  });
  
  
  document.getElementById("skipButton").addEventListener('click', function() {
    document.getElementById("playButton").addEventListener('click', function() {
      contadorClique = 2;
      audio2.play();
      document.getElementById('skipButton').style.opacity = '40%';
      document.getElementById('skipButton').disabled = true;
      document.getElementById('skipButton2').disabled = false;
    });
    const audio2 = document.getElementById('audio2');
    audio2.currentTime = 0;
    audio2.play();
  
    document.getElementById('skipButton2').disabled = false;
    document.getElementById('skipButton').disabled = true;
    document.getElementById('skipButton').style.opacity = '40%';
    document.getElementById('skipButton2').style.opacity = '100%';
    contador++;
  
    document.getElementById("caixa" + contador).innerHTML += 'Skipped';
    document.getElementById('img' + contador).src = 'imagens/barra.png';
  
  });
  
  const audio2 = document.getElementById('audio2');
  
  audio2.addEventListener('timeupdate', function() {
    const progresso = (audio2.currentTime / audio2.duration) * 55;
    barraProgresso.value = progresso;
  });
  
  audio2.addEventListener('ended', () => {
    barraProgresso.value = 0;
  })
  
  audio2.ontimeupdate = () => updateTime();
  
  function updateTime() {
    const currentMinutes = Math.floor(audio2.currentTime / 60)
    const currentSeconds = Math.floor(audio2.currentTime % 60)
    currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)
  
    const durationFormatted = isNaN(audio2.duration) ? 0 : audio2.duration
    const durationMinutes = Math.floor(durationFormatted / 60)
    const durationSeconds = Math.floor(durationFormatted % 60)
    duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)
  }
  
  
  
  
  document.getElementById("skipButton2").addEventListener('click', function() {
    document.getElementById("playButton").addEventListener('click', function() {
      contadorClique >= 2;
      audio3.play();
      document.getElementById('skipButton').disabled = true;
      document.getElementById('skipButton2').disabled = true;
      document.getElementById('skipButton3').disabled = false;
    });
    const audio3 = document.getElementById('audio3');
    audio3.currentTime = 0;
    audio3.play();
    document.getElementById('skipButton3').disabled = false;
    document.getElementById('skipButton2').disabled = true;
    document.getElementById('skipButton').style.opacity = '40%';
    document.getElementById('skipButton2').style.opacity = '40%';
    document.getElementById('skipButton3').style.opacity = '100%';
  
    contador++;
  
    document.getElementById("caixa" + contador).innerHTML += 'Skipped';
    document.getElementById('img' + contador).src = 'imagens/barra.png';
  
  
  });
  
  
  const audio3 = document.getElementById('audio3');
  
  audio3.addEventListener('timeupdate', function() {
    const progresso = (audio3.currentTime / audio3.duration) * 53;
    barraProgresso.value = progresso;
  });
  
  audio3.addEventListener('ended', () => {
    barraProgresso.value = 0;
  })
  
  audio3.ontimeupdate = () => updateTime();
  
  function updateTime() {
    const currentMinutes = Math.floor(audio3.currentTime / 60)
    const currentSeconds = Math.floor(audio3.currentTime % 60)
    currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)
  
    const durationFormatted = isNaN(audio3.duration) ? 0 : audio3.duration
    const durationMinutes = Math.floor(durationFormatted / 60)
    const durationSeconds = Math.floor(durationFormatted % 60)
    duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)
  }
  
  
  
  
  
  
  
  document.getElementById("skipButton3").addEventListener('click', function() {
    document.getElementById("playButton").addEventListener('click', function() {
      audio4.play();
      document.getElementById('skipButton3').disabled = true;
    });
    const audio4 = document.getElementById('audio4');
    audio4.currentTime = 0;
    audio4.play();
    document.getElementById('skipButton').disabled = true;
    document.getElementById('skipButton2').disabled = true;
    document.getElementById('skipButton3').disabled = true;
    document.getElementById('skipButton3').style.opacity = '40%';
    
    contador++;
  
    document.getElementById("caixa" + contador).innerHTML += 'Skipped';
    document.getElementById('img' + contador).src = 'imagens/barra.png';
  
  
  });
  
  
  const audio4 = document.getElementById('audio4');
  
  audio4.addEventListener('timeupdate', function() {
    const progresso = (audio4.currentTime / audio4.duration) * 50;
    barraProgresso.value = progresso;
  });
  
  audio4.addEventListener('ended', () => {
    barraProgresso.value = 0;
  })
  
  
  audio4.ontimeupdate = () => updateTime();
  
  function updateTime() {
    const currentMinutes = Math.floor(audio4.currentTime / 60)
    const currentSeconds = Math.floor(audio4.currentTime % 60)
    currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)
  
    const durationFormatted = isNaN(audio3.duration) ? 0 : audio3.duration
    const durationMinutes = Math.floor(durationFormatted / 60)
    const durationSeconds = Math.floor(durationFormatted % 60)
    duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)
  }
  
  
  
  
  
  
  const audio5 = document.getElementById('audio5');
  
  audio5.addEventListener('timeupdate', function() {
    const progresso = (audio5.currentTime / audio5.duration) * 50;
    barraProgresso.value = progresso;
  });
  
  
  
  audio5.ontimeupdate = () => updateTime();
  
  function updateTime() {
    const currentMinutes = Math.floor(audio5.currentTime / 60)
    const currentSeconds = Math.floor(audio5.currentTime % 60)
    currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)
  
    const durationFormatted = isNaN(audio5.duration) ? 0 : audio5.duration
    const durationMinutes = Math.floor(durationFormatted / 60)
    const durationSeconds = Math.floor(durationFormatted % 60)
    duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)
  }
  
  const txt_r1 = document.getElementById('txt-r1');
  const txt_r2 = document.getElementById('txt-r2');
  
  const opcaoCorreta = 'Not Sorry for Loving You';
  
  let opcaoSelecionada = "";
  
  function mostrarMenu() {
  
  
const opcoes = [
        "The Horse and the Infant", 
        "Just a Man",
         "Full Speed Ahead", 
         "Open Arms", 
         "Warrior of the Mind",
         "Polyphemus",
          "Survive", 
          "Remember Them", 
          "My Goodbye",
          "Storm",
           "Luck Runs Out", 
           "Keep Your Friends Close", 
           "Ruthlessness", 
           "Puppeteer", 
           "Wouldn't You Like", "Done For", 
           "There Are Other Ways",
            "The Underworld", 
            "No Longer You", 
            "Monster", 
            "Suffering", 
            "Different Beast", 
            "Scylla",
             "Mutiny", 
             "Thunder Bringer", 
             "Legendary", 
             "Little Wolf", 
             "We'll Be Fine",
              "Love in Paradise", 
              "God Games", 
              "Not Sorry for Loving You", 
              "Dangerous", 
              "Charybdis", 
              "Get in the Water", 
              "Six Hundred Strike",
               "The Challenge", 
               "Hold Them Down", 
               "Odysseus", 
               "I Can't Help but Wonder", 
               "Would You Fall in Love with Me Again", 
               "I Can't Help but Wonder", 
               "Would You Fall in Love with Me Again"
];
    
    const inputTexto = document.getElementById('typebox');
    const menuOpcoes = document.getElementById('menu');
    const letraDigitada = inputTexto.value.toLowerCase();
  
    // Filtra as opções que começam com a letra digitada
    const opcoesFiltradas = opcoes.filter(opcao => opcao.toLowerCase().startsWith(letraDigitada));
  
    // Agrupar as opções por inicial
    const grupos = {};
  
    // Organiza as opções filtradas por inicial
    opcoesFiltradas.forEach(opcao => {
        const inicial = opcao[0].toLowerCase();
        if (!grupos[inicial]) {
            grupos[inicial] = [];
        }
        grupos[inicial].push(opcao);
    });
  
    // Se houver opções filtradas, exibe o menu, caso contrário, esconde
    if (letraDigitada.length > 0 && opcoesFiltradas.length > 0) {
        menuOpcoes.innerHTML = ''; // Limpa o menu antes de adicionar as novas opções
        
  
        // Cria grupos de opções com base na inicial
        Object.keys(grupos).forEach(inicial => {
            const grupoDiv = document.createElement('div');
            grupoDiv.classList.add('grupoOpcao');
  
            // Adiciona as opções do grupo
            grupos[inicial].forEach(opcao => {
                const opcaoDiv = document.createElement('div');
                opcaoDiv.textContent = opcao;
  
                // Adiciona evento de clique na opção para fechar o menu
                opcaoDiv.onclick = () => {
                  opcaoSelecionada = opcao;
                  inputTexto.value = opcao; // Preenche o input com a opção selecionada
                  menuOpcoes.style.display = 'none'; // Fecha o menu
              };
  
  
              grupoDiv.appendChild(opcaoDiv);
            });
  
            // Adiciona o grupo de opções ao menu
            menuOpcoes.appendChild(grupoDiv);
        });
  
        menuOpcoes.style.display = 'block';  // Mostra o menu
    } else {
        menuOpcoes.style.display = 'none';  // Esconde o menu
    }
  }
  
  const A = document.getElementById("enter").addEventListener('click', function() { });
  //const B = document.getElementById("skipButton").addEventListener('click', function() {});
  
  let contador = 0;
  
  function exibirTelaDeSucesso(params) {
    // itera em cima de cada quadrado, baseado na quantidade de tentativas (contador)
      for (var i = 1; i <= contador; i++) {
      // pega um dos quadrados q1, q2... qcontador, baseado na iteração (i) atual
          var quadrado = document.getElementById("q" + i);
      
      // altera o css "backgroundColor" do elemento selecionado
          quadrado.style.backgroundColor = "black";
      }
  
      // acessa o último quadrado
      var quadrado = document.getElementById("q" + contador);
      // pinta ele de verde
      quadrado.style.backgroundColor = "green";
  
      if (document.getElementById("q1").style.backgroundColor ===  'green'){
        const txt_result = document.getElementById('txt-result')
        txt_result.textContent = 'Certificado #0 EPIC Fã' 
        txt_result.style.color = '#060270'
      }
      if (document.getElementById("q2").style.backgroundColor ===  'green'){
        const txt_result = document.getElementById('txt-result')
        txt_result.textContent = 'EPIC Fã' 
        txt_result.style.color = '#818650'
        txt_result.style.position = 'absolute';
        txt_result.style.left =  '272px';
      }
      if (document.getElementById("q3").style.backgroundColor ===  'green'){
        const txt_result = document.getElementById('txt-result')
        txt_result.textContent = 'Fã médio' 
        txt_result.style.color = '#D5CEA6'
        txt_result.style.position = 'absolute';
        txt_result.style.left =  '290px';
      }
      if (document.getElementById("q4").style.backgroundColor ===  'green'){
        const txt_result = document.getElementById('txt-result')
        txt_result.textContent = 'já escutou vez ou outra' 
        txt_result.style.color = '#B0B6B8'
        txt_result.style.position = 'absolute';
        txt_result.style.left =  '140px';
      }
  
  
      const telaSucesso =
          document.getElementById("a");
      telaSucesso.style.display = "block"; // Exibe a tela de sucesso
  
  
  
  }
  
  
  function mostrarOpcao(tipoBotao) {
    contador++;
  
    const select = opcaoSelecionada;
    const valorSelecionado = select;
  
    if (tipoBotao === A){
      document.getElementById("caixa" + contador).innerHTML += valorSelecionado;
    } 
  
    if (contador >= 4 && (document.getElementById("caixa4").innerHTML !== valorSelecionado)) {
      const telaFracasso = document.getElementById('aa');
      telaFracasso.style.display = 'block';
  }
  
  }
  function mostrarOpcao2()  {
    const inputTexto = document.getElementById('typebox');
    if(inputTexto.value === opcaoCorreta){
      const telaSucesso = document.getElementById("a");
      telaSucesso.style.display = "block";
    }
    
  }
  function mostrarOpcao3(params) {
    if(contador >= 4 && (document.getElementById("caixa" + contador).innerHTML += 'Skipped')){
      const telaFracasso = document.getElementById('aa');
      telaFracasso.style.display = 'block';
    }
  }
  
  function enviarOpcao(params) {
    mostrarOpcao3();
    mostrarOpcao2();
    mostrarOpcao();
  
    var imagem = document.getElementById('img1')
  
    if (opcaoSelecionada === opcaoCorreta){
      const telaFracasso = document.getElementById('aa');
      telaFracasso.style.display = 'none';
      exibirTelaDeSucesso();
    } else {
      document.getElementById('img' + contador).src = 'imagens/x.png';
    }
  
  }
  
  