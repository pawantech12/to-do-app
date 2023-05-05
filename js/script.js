const inputfield = document.getElementById("input");
let todolists = document.getElementById("todolists");
let pendingNum = document.querySelector(".pending-num");
let clearBtn = document.getElementById("clear-all");
let addBtn = document.getElementById("add");
let deleteBtn = document.getElementById("delete");
function allTask(){
    let tasks = document.querySelectorAll(".pending");
    // pendingNum.textContent = tasks.length === 0?"no":tasks.length;
    if(tasks.length === 0){
        pendingNum.textContent = "no";
    }else{
        pendingNum.textContent = tasks.length;
    }
    let alllists = document.querySelectorAll(".list");
    if(alllists.length > 0){
        todolists.style.marginTop = "20px";
        clearBtn.style.pointerEvents = "auto";
        return;
    }
    todolists.style.marginTop = "0px";
    clearBtn.style.pointerEvents = "none";
}

addBtn.addEventListener("click",() => {
    let inputVal = inputfield.value.trim();
    let liTag = `<li class="list pending" onclick="handlestatus(this)">
    <input type="checkbox"/>
    <span class="task">${inputVal}</span>
    <i class="fa-solid fa-trash-can" onclick="deleteTask(this)"></i></li>`;
    todolists.insertAdjacentHTML("beforeend",liTag);
    inputfield.value = "";
    allTask();
})

handlestatus = (e) => {
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false:true;
    e.classList.toggle("pending");
    allTask();
}
function deleteTask(e){
    e.parentElement.remove();
    allTask();
}
clearBtn.addEventListener("click",() => {
    todolists.innerHTML = "";
    allTask();
})