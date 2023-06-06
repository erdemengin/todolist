const addToDo = document.querySelector("#addToDo");
const clearToDo = document.querySelector("#clearToDo");
const inputText = document.querySelector("#inputText");
const toDoContainer = document.querySelector("#toDoContainer");



addToDo.addEventListener("click",function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("classList");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML=inputText.value;
    inputText.value="";

    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through"
    });
    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph);
    });
    clearToDo.addEventListener("click",function(){
        paragraph.remove();
    });
});






