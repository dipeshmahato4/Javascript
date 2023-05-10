
const ToDoList1=[];

function addButton(){
 const inputElement= document.querySelector('.userInput');
 const name=inputElement.value;

//  console.log(name);

  ToDoList1.push(name);
  console.log(ToDoList1);

  inputElement.value='';
  
}