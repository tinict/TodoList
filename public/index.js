console.log("Test");
const ElementIpWork = document.querySelector('.addTask');
const ElementAddWork = document.querySelector('.btn-addTask');
const ElementList = document.querySelector('.list');

var Tasks = [];
if (Tasks != null) {
    
    window.onload = () => {
        RenderTasks();
        RemoveTask();
    }
}
else
    window.localStorage.setItem('Tasks',JSON.stringify(Tasks));
    
console.log(Tasks);

const RenderTasks = () => {
    const htmlTasks = Tasks.map((task) => {
        return (
            `<div class="item-list">
                <div class="item-left">
                    <input class = "radio-item" type="radio" name= "task-item">
                    <span class="work-item">${task}</span>
                </div>
                <div class="item-right">
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>`
        );
    });
    ElementList.innerHTML = htmlTasks.join('');
};

const RemoveTask = (str) => {
    console.log('Delete Successful');
    // (3)
    window.localStorage.removeItem('Tasks');
    Tasks = Tasks.filter((Task) => {
        return Task !== str;
    });
    console.log(Tasks);
    RenderTasks();
    // (4)
    window.localStorage.setItem('Tasks',JSON.stringify(Tasks));
    const ElementCheckTasks = document.querySelectorAll('.radio-item');
    const ElementWorkItem = document.querySelectorAll('.work-item');
    console.log(ElementCheckTasks);
    for (let i = 0; i < ElementCheckTasks.length; ++i) {
        ElementCheckTasks[i].addEventListener('click', () => {
            console.log('Successful');
            console.log(ElementWorkItem[i].textContent);
            RemoveTask(ElementWorkItem[i].textContent);
        });
    };
}

ElementAddWork.onclick = () => {
    Tasks.push(ElementIpWork.value);
    console.log(Tasks);
    RenderTasks();
    RemoveTask();
    // (2) Error
    // window.localStorage.setItem('Tasks',JSON.stringify(Tasks));
};




