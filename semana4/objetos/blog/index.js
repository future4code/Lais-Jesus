let texto = {
    titulo: document.getElementById("titulo-post"),
    autor: document.getElementById("autor-post"),
    conteudo: document.getElementById("conteudo-post")
}

function adicionarTexto () {
    const container = document.getElementById("container-de-posts")
    container.innerHTML += `<p>${texto['titulo'].value} </br> ${texto['autor'].value} </br> ${texto['conteudo'].value} </p>`
    texto.value = ""
    
}

function criarPost(event){
    console.log(event)
    adicionarTexto()   
}