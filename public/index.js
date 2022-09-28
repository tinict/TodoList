console.log("Test");
ElementIpWork = document.querySelector('.addTask');
ElementAddWork = document.querySelector('.btn-addTask');
ElementList = document.querySelector('.list');

const Tasks = [];

ElementAddWork.onclick = () => {
    console.log(ElementIpWork.value);
    Tasks.push(ElementIpWork.value);
    console.log(Tasks);
    const htmlTasks = Tasks.map((task) => {
        return (
            `<div class="item-list">
                <div class="item-left">
                    <input class = "radio-item" type="radio">
                    <span class="work-item">${task}</span>
                </div>
                <div class="item-right">
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>`
        );
    })
    ElementList.innerHTML = htmlTasks.join('');
};