const noteContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelector(".input-box");





function ShowStorage(){
    noteContainer.innerHTML = localStorage.getItem("NotesItem")
    
} 
ShowStorage();

function uploadLocalStorage(){
    localStorage.setItem("NotesItem" , noteContainer.innerHTML);

}
console.log(localStorage);




createBtn.addEventListener("click" , ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src = "images/delete.png"
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true");
    noteContainer.appendChild(inputBox).appendChild(img);
})

noteContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        uploadLocalStorage();
    }
    else if(e.target.tagName === "P"){
       let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                uploadLocalStorage();
            }

        })
    }

    
})

document.addEventListener("keydown" , Event =>{
    if(Event.key === "enter"){
     document.execCommand("inerLineBreak")
     Event.preventDefault();
    }
})

