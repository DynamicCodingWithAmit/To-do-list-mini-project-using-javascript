let EnterTodo = document.querySelector("#EnterTodo");
let AddTask = document.querySelector("#AddTask");

AddTask.addEventListener("click",()=>{
    let WrittenTask = EnterTodo.value;
    console.log(WrittenTask);

    

    if(WrittenTask !==""){
        let ListofTask = document.querySelector(".ListofTask");

    let CreateDivTAg = document.createElement("div");
    CreateDivTAg.setAttribute("id","TaskDetails");
    ListofTask.appendChild(CreateDivTAg);

    let TaskName = document.createElement("p");
    TaskName.setAttribute("id","TaskName");
    TaskName.textContent=WrittenTask;
    CreateDivTAg.appendChild(TaskName);

    let DeleteTask = document.createElement("p");
    DeleteTask.setAttribute("id","DeleteTask");
    DeleteTask.textContent="Delete";
    DeleteTask.style.textAlign="center";
    CreateDivTAg.appendChild(DeleteTask);

    DeleteTask.onclick = () =>{
        let divs = DeleteTask.parentElement;
        divs.style.display="none";
    }
    

    }
    else{
        alert("Task is Not empty")
    }
    


    

});