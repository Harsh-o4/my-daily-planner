// const test = document.getElementById("test");

let tasks = [
    // {"done":false, "task": "name of task"}
];

function updateList(){
    const div = document.getElementById("list");
    
    let todo = [...tasks];
    let html = "";

    for(let i = 0; i < todo.length; ++i){
        html += `<li>
                    <input type="checkbox" class="todoCheckbox" ${todo[i].done?"checked":""}>
                    <span id="taskText" style="${todo[i].done?"text-decoration: line-through":""}">
                        ${todo[i].task}
                    </span>
                </li>`;
    }

    html += `<br><li> <input type="text" class="todoItem" id="task" placeholder="Enter Task"></li>`
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

};

updateList();
    
    
    

