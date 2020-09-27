'use strict';

var date = new Date();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var day = date.getDate();

//今日の日付を表示
document.getElementById("today").innerHTML =
  year + "年" + month + "月" + day + "日のTodoリスト";

const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];
const removeTask = removeButton => {
  const targetTask = removeButton.closest('li');
  addTaskTarget.removeChild(targetTask);
};
const addTask = task => {
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');
  const completeButton = document.createElement('button');
  removeButton.innerText = '削除';
  removeButton.addEventListener('click', () => removeTask(removeButton));
  listItem.innerText = task;
  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem);
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => completeTask(completeButton));
  listItem.append(completeButton);
  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem);
};
const completeTask = completeButton => {
  const targetTask = completeButton.closest('li');
  targetTask.classList.add('isComplete');
  targetTask.removeChild(completeButton);
};

addTaskTrigger.addEventListener('click', event => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = '';
});


