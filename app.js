//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function adicionarAmigo(){

    const input = document.getElementById("amigo");

    const inputValue = input.value;

    if(inputValue.trim() == ""){
        return alert("Voce precisa inserir um nome !!!");
    }

    const createListElement = document.createElement("li");

    const textNode = document.createTextNode(inputValue);

    createListElement.appendChild(textNode);

    document.getElementById("listaAmigos").appendChild(createListElement);

    input.value = "";

}

function sortearAmigo(){

    const friends = document.querySelectorAll("#listaAmigos li");

    const randomNumber = getRandomNumber(0,friends.length - 1 ); 

    const resultList = document.getElementById("resultado");

    const createElementList = document.createElement("li");
    const nodeTextContent = document.createTextNode(`O amigo secreto sorteado e: ${friends[randomNumber].textContent}`);
    createElementList.appendChild(nodeTextContent);

    if(document.querySelectorAll("#resultado li").length != 0){
        
        const valuesList = document.querySelectorAll("#resultado li");

        valuesList.forEach(v => (v.remove()));

    }

    resultList.appendChild(createElementList);

    friends.forEach(f => (f.remove()));


}

function getRandomNumber(x, y){

    return Math.floor(Math.random() * (y - x + 1)) + x;

}