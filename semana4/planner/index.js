
function clique () {
    let tarefas = document.getElementById("tarefa")
    let dia = document.getElementById("dias-semana").value  

    document.getElementById(dia).innerHTML +=  `<li> ${tarefas.value} </li>`
    tarefas.value = ""
}


