// Defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores:
// "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
}
for (let properties in info) {
    if (
      info[properties] === info.recorrente &&
      info[properties] === "Sim" &&
      info2[properties] === "Sim"
    ) {
      console.log("Ambos recorrentes");
    } else {
      console.log(info[properties] + " e " + info2[properties]);
    }
  }