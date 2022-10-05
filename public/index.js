console.log("Test");
const ElementIpWork = document.querySelector('.addTask');
const ElementAddWork = document.querySelector('.btn-addTask');
const ElementList = document.querySelector('.list');
const ElementBTNCompleted = document.querySelector('.btn-complete');
const ElementCompleteList = document.querySelector('.complete-list');
const Elementbtn_chevron_right = document.querySelector('.fa-chevron-right');
const Elementbtn_chevron_down = document.querySelector('.fa-chevron-down');

var Tasks = [];
var TasksCompleted = [];

var key = JSON.parse(window.localStorage.getItem('Tasks'));
var complete_Task = JSON.parse(window.localStorage.getItem('TasksComplete'));

if (key != undefined) {
    console.log('Load UI');
    Tasks = key;
    window.onload = () => {
        RenderTasks();
        RemoveTask();
    };
}
else
    window.localStorage.setItem('Tasks',JSON.stringify(Tasks));

if (complete_Task != undefined) {
    TasksCompleted = complete_Task;
    if (TasksCompleted != null)
        document.querySelector('.btn-complete').classList.remove('hint-btn');
    else
        document.querySelector('.btn-complete').classList.add('hint-btn');
    window.onload = () => {
        RenderTasksCompleted();
        RemoveTask();
    };
}

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
    window.localStorage.removeItem('Tasks');
    if(str != null) {
        Tasks = Tasks.filter((Task) => {
            return Task !== str;
        });
        TasksCompleted.push(str);
        if (TasksCompleted.length > 0) {
            document.querySelector('.btn-complete').classList.remove('hint-btn');
        }
        window.localStorage.setItem('TasksComplete',JSON.stringify(TasksCompleted));
    }
    console.log(Tasks);
    RenderTasks();
    RenderTasksCompleted();
    RemoveTaskCompleted();
    ElementCompleteList.classList.add('hint-btn');
    window.localStorage.setItem('Tasks',JSON.stringify(Tasks));
    const ElementCheckTasks = document.querySelectorAll('.radio-item');
    const ElementWorkItem = document.querySelectorAll('.work-item');
    console.log(ElementCheckTasks);
    for (let i = 0; i < ElementCheckTasks.length; ++i) {
        ElementCheckTasks[i].addEventListener('click', () => {
            console.log('Successful');
            Elementbtn_chevron_right.classList.remove('hint-btn');
            Elementbtn_chevron_down.classList.add('hint-btn');
            console.log(ElementWorkItem[i].textContent);
            console.log(ElementWorkItem[i]);
            RemoveTask(ElementWorkItem[i].textContent);
        });
    };
}

ElementAddWork.onclick = () => {
    Tasks.push(ElementIpWork.value);
    console.log(Tasks);
    RenderTasks();
    RemoveTask();
};

// List completed

const RenderTasksCompleted = () => {
    document.querySelector('.CountItem').textContent = TasksCompleted.length;
    const htmlTasksCompleted = TasksCompleted.map((taskcomplete) => {
        return (
            `<div class="item-list">
                <div class="item-left">
                    <input class = "radio-item complete-radio" type="radio" name= "task-item">
                    <del class="work-item complete-item">${taskcomplete}</del>
                </div>
                <div class="item-right">
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>`
        );
    });
    ElementCompleteList.innerHTML = htmlTasksCompleted.join('');
};

ElementBTNCompleted.onclick = () => {
    TasksCompleted = JSON.parse(window.localStorage.getItem('TasksComplete'));
    console.log('Successful');
    Elementbtn_chevron_right.classList.toggle('hint-btn');
    Elementbtn_chevron_down.classList.toggle('hint-btn');
    console.log(ElementCompleteList);
    ElementCompleteList.classList.toggle('hint-btn');
    console.log(TasksCompleted);
    if (TasksCompleted != null){
        document.querySelector('.btn-complete').classList.remove('hint-btn');
    }
    else
        document.querySelector('.btn-complete').classList.add('hint-btn'); 
    RenderTasksCompleted();
    RemoveTaskCompleted();
}

const RemoveTaskCompleted = (str) => {
    if (str !== undefined) {
        Tasks.push(str);
        RenderTasks();
        RemoveTask();
    }
    TasksCompleted = TasksCompleted.filter((TaskComplete) => {
        return TaskComplete !== str;
    });

    if (TasksCompleted.length > 0){
        document.querySelector('.btn-complete').classList.remove('hint-btn');
        ElementCompleteList.classList.remove('hint-btn');
    }
    else
        document.querySelector('.btn-complete').classList.add('hint-btn');

    RenderTasksCompleted();
    window.localStorage.setItem('TasksComplete',JSON.stringify(TasksCompleted));
    const ElementCheckComplete = document.querySelectorAll('.complete-radio');
    const ElementCompleteItem = document.querySelectorAll('.complete-item');
    for (let i = 0; i < ElementCheckComplete.length; ++i) {
        ElementCheckComplete[i].addEventListener('click', () => {
            console.log('Successful');
            console.log(ElementCheckComplete[i].textContent);
            RemoveTaskCompleted(ElementCompleteItem[i].textContent);
        });
    };
}




