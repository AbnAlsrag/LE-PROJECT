const hi_mom = document.getElementById("hi-mom");
const plus = document.getElementById("➕");
const txter = document.getElementById("txter");

let todos = 0;

function create_todo(text) {
    let div = document.createElement("div");
    let p_element = document.createElement("p");
    let button_element = document.createElement("button");

    p_element.textContent = text + " ";
    p_element.style = "display: inline;";
    button_element.textContent = "✖️";
    div.id = "todo-" + todos;
    div.style = "padding: 5px;";

    const i = todos;
    button_element.onclick = function () {
        let div = document.getElementById("todo-" + i);
        div.remove();
    };

    div.appendChild(p_element);
    div.appendChild(button_element);
    hi_mom.appendChild(div);
    todos++;
}

plus.onclick = function() {
    create_todo(txter.value);
    txter.value = "";
};