// const test = document.getElementById("test");

// let tasks = [
//     {"done":false, "task": "name of task"}
// ];

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
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
                        value="${todo[i].task}"
                        style="text-decoration: ${todo[i].done?"line-through":"none"}"
                        >
                </li>`;
    }

    html += `<br><li> <input type="checkbox" class="todoCheckbox"> <input type="text" class="todoItem" id="task" placeholder="Enter Task"></li>`
    div.innerHTML = html;
    
    
    //new task
    const inp = document.getElementById("task");
    inp.focus();

    inp.addEventListener("keydown",(event)=>{
        if(event.key === "Enter"){
            // test.innerHTML = "successful access";
            let newTask = {
                done: false,
                task: inp.value
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

            checkbox.nextElementSibling.style.textDecoration =
                checkbox.checked ? "line-through" : "none";
        });
    });

    //remove empty tasks
    document.querySelectorAll(".todoItem").forEach((input,index)=>{
        input.addEventListener("blur",()=>{
            if(input.id == "task")  return;

            if(input.value.trim() == ""){
                tasks.splice(index,1);
                saveTasks();
            }
            else{
                task[index].task = input.value;
                saveTasks();
            }
            
            updateList();
        });
    });

};

updateList();
    
    
    

