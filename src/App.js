import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const[newTodo, setNewTodo] = useState("");
  const[todos, setTodos] = useState([]);
 


  //función que está atenta a los cambios en el input
  function handleNewTodoChange(e) {  //Esta funcion se activa con el onChange del input
    e.preventDefault()
    setNewTodo(e.target.value)  // el event target es el input, y luego queremos de ese input el value. lo que obtengamos aquí va a ser el newTodo
    //console.log(e.target.value)
  }

  //función que guarda el estado en un objeto cuando ingresamos un todo en el input
  function handleNewTodo(e) {  //Esta funcion se activa por el form onsubmit, acá obtenemos el valor que proviene del input de newTodo
    e.preventDefault ()         
    if (newTodo === "") return
    setTodos([...todos, {id: Date.now(), text: newTodo, numero: (todos.length +1)}])   //acá vamos a obtener todos los todos y los vamos a agregar en el array [] en forma de objeto
    e.target.reset()
    //console.log(newTodo) // imprime lo que ingresas en el input luego de apretar enter
    //console.log(todos.length +1)  //imprime la cantidad de items de la lista todos
    
  
  }
  
  //funcion que elimina los todo
  function removeTodo(id){
    setTodos(todos.filter((todo) => todo.id !== id)) //solo retorna el todo si el todo.id no es igual al id
     
  }
 


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">  
        <div className="col-4">
          <h1 className="titulo">Todo</h1>
          <div className="col ">
            <form onSubmit={handleNewTodo}>
              <input type="text" className="form-control mb-2" placeholder={todos.length == 0 ? "No task, add a task" : "What needs to be done"} onChange={handleNewTodoChange} ></input>
              <ul className="list-group">
                {todos.map((todo) => (
                <li className="list-group-item" key={todo.id} >{todo.text}
                  <button type="button" className="close" aria-label="Close" onClick={()=> removeTodo(todo.id)}><span aria-hidden="true">&times;</span>
                  </button>
                </li>
                )) }
              </ul>
              <div className="col border mb-5">
                <small className="text-white">{todos.length} items left</small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
