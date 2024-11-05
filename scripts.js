
function verificarResposta() {
    var resposta = prompt("Go (Golang) é popular em?");
    
    if (resposta != null && resposta.trim() !== "") {
        if (resposta.toLowerCase() === "microserviços e sistemas de infraestrutura") {
            alert("Resposta correta Go é popular em microserviços e sistemas de infraestrutura.");
        } else {
            alert("Resposta errada. A resposta correta é: microserviços e sistemas de infraestrutura.");
        }
    } else {
        alert("Você não inseriu uma resposta.");
    }
}

function verificarResposta2() {
    var resposta = prompt("O frontend lida com a?");
    
    if (resposta != null && resposta.trim() !== "") {
        if (resposta.toLowerCase() === "interface do usuário e a interação visual no lado do cliente") {
            alert("Resposta correta interface do usuário e a interação visual no lado do cliente");
        } else {
            alert("Resposta errada. A resposta correta é: interface do usuário e a interação visual no lado do cliente");
        }
    } else {
        alert("Você não inseriu uma resposta.");
    }
}

function verificarResposta3() {
    var resposta = prompt("O backend lida com a?");
    
    if (resposta != null && resposta.trim() !== "") {
        if (resposta.toLowerCase() === "lógica") {
            alert("Resposta correta");
        } else {
            alert("Resposta errada. A resposta correta é: lógica.");
        }
    } else {
        alert("Você não inseriu uma resposta.");
    }
}