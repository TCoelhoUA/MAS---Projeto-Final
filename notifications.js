function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function updatePopupContent() {
    const NomeCliente = ["Tiago Coelho", "Margarida Ribeiro", "Rodrigo Costa", "Diogo Perpétuo", "Miguel Silva", "Sofia Oliveira",
    "João Pereira", "Ana Santos", "José Faria", "Beatriz Martins", "Rafael Costa", "Inês Rodrigues", "Tiago Almeida", "Mariana Cardoso"];
    const SaborBolo = ["Brigadeiro", "Cenoura", "Massa Folhada", "Pão de Ló", "Red-Velvet"];
    const Recheio = ["Sem Recheio", "Chocolate", "Chantilly", "Doce de Ovo", "Creme de Caramelo"]
    const Cobertura = ["Sem Cobertura", "Chantilly", "Cream Cheese", "Chocolate", "Pasta de Açúcar"]
    const Peso = ["2Kg", "3Kg", "4Kg", "5Kg"]
    const Formato = ["Redondo", "Quadrado", "Retangular", "Escultura", "Número"]
    const Descricao = ["O meu filho faz 10 anos e gostava de o poder surpreender com o vosso melhor bolo!",
                      "Vou fazer uma festa de Natal e gostava que decorássem o bolo com tema natalino!",
                      "O meu pai faz 92 anos e sempre gostou de carros, será que podiam decorar o bolo com esse tema?",
                      "A minha filha tem 6 anos e gosta da Barbie. Podem colocar algo desse tema no bolo?",
                      "Olá, estou a precisar de um bolo para uma festa temática de praia. Pode ser decorado com tons de azul e amarelo?",
                      "Boa tarde, queria um bolo para um chá de bebé. Algo delicado e com tons suaves, por favor.",
                      "Olá! Preciso de um bolo para celebrar um aniversário de casamento. Gostaria de algo romântico, talvez com tons de vermelho e branco.",
                      "Boa noite! Estou à procura de um bolo para um evento corporativo. Pode ser algo elegante em tons de prateado e preto?",
                      "Olá, estou organizando uma festa surpresa e preciso de um bolo com o tema de cinema. Cores vibrantes seriam ótimas!",
                      "Boa tarde, queria encomendar um bolo para um aniversário de criança. Algo colorido e divertido, por favor!",
                      "Olá! Estou à procura de um bolo para um evento de despedida. Algo descontraído e com cores alegres, por favor.",
                      "Boa noite, queria um bolo para um evento de inauguração. Pode ser algo elegante em tons de dourado e branco?",
                      "Olá, estou a precisar de um bolo para um encontro de amigas. Algo simples, mas com um toque feminino, por favor.",
                      "Boa tarde! Gostaria de encomendar um bolo para um evento de agradecimento. Pode ser algo clássico em tons de verde e castanho?",
                      ]

    document.getElementById("NomeCliente").textContent = getRandomItem(NomeCliente)
    document.getElementById("SaborBolo").textContent = getRandomItem(SaborBolo)
    document.getElementById("Recheio").textContent = getRandomItem(Recheio)
    document.getElementById("Cobertura").textContent = getRandomItem(Cobertura)
    document.getElementById("Peso").textContent = getRandomItem(Peso)
    document.getElementById("Formato").textContent = getRandomItem(Formato)
    document.getElementById("Descricao").textContent = getRandomItem(Descricao)

    /* document.getElementById("clientName").textContent = getRandomItem(clientNames);
    document.getElementById("cakeFlavor").textContent = getRandomItem(cakeFlavors);
    document.getElementById("description").textContent = getRandomItem(descriptions); */
  }

  function showPopup() {
    document.getElementById("popup").style.display = "block";
  }

  function hidePopup() {
    document.getElementById("popup").style.display = "none";
  }

  function acceptOrder() {
    hidePopup();
    console.log("Order accepted");
    var div = document.getElementById("aceite");
    div.style.display = (div.style.display === "none") ? "block" : "none";
    setTimeout(function() {
      div.style.display = "none";
    }, 5000); // 5000 milliseconds (5 seconds)
  }

  /*function rejectOrder() {
    hidePopup();
    console.log("Order rejected");
    alert("Está prestes a cancelar um pedido.")
    var div = document.getElementById("rejeitado");
    div.style.display = (div.style.display === "none") ? "block" : "none";
    setTimeout(function() {
      div.style.display = "none";
    }, 5000); // 5000 milliseconds (5 seconds)
  }*/
  function rejectOrder() {
    hidePopup();
    var confirmation = window.confirm("Está prestes a cancelar um pedido. Tem a certeza?");

    if (confirmation) {
        console.log("Order rejected");
        var div = document.getElementById("rejeitado");
        div.style.display = (div.style.display === "none") ? "block" : "none";
        setTimeout(function() {
            div.style.display = "none";
        }, 5000); // 5000 milliseconds (5 seconds)
    } else {
        // User clicked "Cancel" or closed the dialog
        alert("O pedido não foi rejeitado.");
    }
}

  // Update and show the popup every 30 seconds
  setInterval(function () {
    updatePopupContent();
    showPopup();
  }, 30000);