console.log("Test");
const ElementIpWork = document.querySelector('.addTask');
const ElementAddWork = document.querySelector('.btn-addTask');
const ElementList = document.querySelector('.list');

var Tasks = [];
Tasks = JSON.parse(window.localStorage.Tasks);
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
    Tasks = Tasks.filter((Task) => {
        return Task !== str;
    });
    window.localStorage.removeItem('Tasks')
    window.localStorage.setItem('Tasks',JSON.stringify(Tasks));
    RenderTasks();
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
    RenderTasks();
    RemoveTask();
    window.localStorage.setItem('Tasks',JSON.stringify(Tasks));
};

window.onload = () => {
    RenderTasks();
    RemoveTask();
}



