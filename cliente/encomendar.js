/* Esta script envia para o localStorage pedidos e conta quantos novos pedidos foram enviados. */
document.querySelector("#buttonId").addEventListener("click", function() {
    let namesCount = Number(localStorage.getItem("namesCount")) || 0;
    let newName = "Random Name"; 
    localStorage.setItem("name" + namesCount, newName);
    localStorage.setItem("namesCount", namesCount + 1);
  });