const root = document.getElementById('root');
const input = document.getElementById('todo-input');
const submit = document.getElementById('submit');

const itemContainer = document.createElement('div');
const ul = document.createElement('ul');

root.appendChild(ul);

submit.addEventListener('click', submitItem);
itemContainer.addEventListener('click', completeDelete);

function submitItem(e){
    e.preventDefault();
    if (input.value !== '') {
        addItem(input.value);
        input.value = '';
    }
}

function addItem(val) {
    
    const li = document.createElement('li');
    const btnComplete = document.createElement('button');
    const btnDelete = document.createElement('button'); 

    itemContainer.setAttribute('class', 'item-container');
    li.innerHTML = val;
    btnComplete.innerText = 'Completed';
    btnComplete.setAttribute('class', 'complete');
    btnDelete.innerText = 'Delete';
    btnDelete.setAttribute('class', 'delete');

    ul.appendChild(itemContainer);
    itemContainer.appendChild(li);
    li.appendChild(btnComplete);
    li.appendChild(btnDelete);
}

function completeDelete(e) {
    let btnType = e.target.classList[0];
    if (btnType === 'complete') {
        completeItem(e);
    }else if (btnType === 'delete'){
        deleteItem(e);
    }
}

function completeItem(e) {
    const parent = e.target.parentElement;
    parent.classList.toggle('completed');
}

function deleteItem(e) {
    const parent = e.target.parentElement;
    parent.remove();
}