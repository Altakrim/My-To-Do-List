function addTask() {
    const taskInput=
    document.getElementById("taskInput");
    const taskList=
    document.getElementById("taskList");
    const taskText=taskInput.value.trim();
    
    if(taskText === "") return;

    const li =document.createElement("li");
    li.onclick = function () {
        li.classList.toggle("completed");
    };
    const deleteBtn =
    document.createElement ("button");
    deleteBtn.textContent="Delete";
    deleteBtn.onclick=function () {
        taskList.removeChild (li);
    };
    li.appendChild (deleteBtn);
    taskList.appendChild(li);
    taskInput.value ="";
}
 
