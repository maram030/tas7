function createTodoItem(pp,ti,date){

    // san3an el div lekbira
    let todoItem = document.createElement('div');
    todoItem.classList.add('todoItem');


    // sna3na les elements li fel div
    let title = document.createElement('title');
    title.textContent=ti;
    title.classList.add('titre');
    let content = document.createElement('p');
    content.className = 'content';
    content.textContent = pp;
    let date= document.createElement('input');
    date.type(date);
    date.classList.add('date');

    todoItem.appendChild(title);
    todoItem.appendChild(content);
    todoItem.appendChild(date);

    return todoItem;
    

}function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
