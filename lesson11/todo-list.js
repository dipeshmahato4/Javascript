
const ToDoList1=['wash dishes', 'make dinner'];

rendertodolist();
function rendertodolist(){
    let htmlcode='';// variable to store the result

    for(let i =0 ; i<ToDoList1.length; i++){
      const Todo =ToDoList1[i];
      const html = `<p>${Todo}</p>`;
      // to combine 
      htmlcode += html
    }
    console.log(htmlcode);

document.querySelector('.todolist').innerHTML=htmlcode;
}

function addButton(){
 const inputElement= document.querySelector('.userInput');
 const name=inputElement.value;

//  console.log(name);

  ToDoList1.push(name);
  console.log(ToDoList1);
  inputElement.value=''; 

  rendertodolist();
}