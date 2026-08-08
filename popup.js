// let tasks = [
//     {"done":false, "task": "name of task"}
// ];

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

document.getElementById("clearAll").addEventListener("click",()=>{
    tasks = [];
    saveTasks();
    updateList();
});

function escapeHtml(text){
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

//function for checking &  removing empty elements
function updateTask(input,index){
    if(input.id == "task")  return;

    if(input.value.trim()==="")
        tasks.splice(index,1);
    else
        tasks[index].task = input.value;

    saveTasks();
    updateList();
}

function updateList(){
    const div = document.getElementById("list");
    
    let todo = [...tasks];
    let html = "";

    for(let i = 0; i < todo.length; ++i){
        if(todo[i].task == "") continue;

        html += `<li>
                    <input type="checkbox" class="todoCheckbox" ${todo[i].done?"checked":""}>
                    <input type="text" 
                        class="todoItem" 
                        value="${escapeHtml(todo[i].task)}"
                        style="text-decoration: ${todo[i].done?"line-through":"none"}"
                        >
                    <button type="button" class="removeTask" aria-label="Remove task">X</button>
                </li>`;
    }

    html += `<br><li> <input type="text" class="todoItem" id="task" placeholder="Enter Task"></li>`
    div.innerHTML = html;
    
    
    //new task
    const inp = document.getElementById("task");
    inp.focus();

    inp.addEventListener("keydown",(event)=>{
        if(event.key === "Enter"){
            if(inp.value.trim()==="")  return;

            let newTask = {
                done: false,
                task: inp.value.trim()
            }
            
            tasks.push(newTask)
            saveTasks();
            updateList();
        }
    });

    //checkbox functionality
    const checkboxes = document.querySelectorAll(".todoCheckbox");

    checkboxes.forEach((checkbox,i) => {
        checkbox.addEventListener("change",()=>{

            tasks[i].done = checkbox.checked;
            saveTasks();

            checkbox.nextElementSibling.style.textDecoration =
                checkbox.checked ? "line-through" : "none";
        });
    });

    document.querySelectorAll(".removeTask").forEach((button,index)=>{
        button.addEventListener("click",()=>{
            tasks.splice(index,1);
            saveTasks();
            updateList();
        });
    });

    //remove empty tasks
    document.querySelectorAll(".todoItem").forEach((input,index)=>{
        input.addEventListener("blur",()=> updateTask(input,index));

        input.addEventListener("keydown",(event)=>{
            if(event.key==="Enter"){
                event.preventDefault();
                input.blur();
            }         
        });
    });

};

updateList();
    
    
    

