import './App.css';

import{useState, useEffect} from 'react';
import{BsTrash,BsBookmarkCheckFill} from 'react-icons/bs';

const API = "http://localhost:5000/"

function App() {
  const [title,setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos,setTodos] = useState([]);
  const [loading,setLoading]=useState(false);

  const handleSubmit =(e) =>{
    e.preventDefaut();
    console.log("Enviou!");
  }

  return (
    <div className="App">
     <div className='todo-header'>
       <h1>React Todo</h1>
     </div>
     <div className='form-todo'>
       <h2>Insira sua próxima tarefa:</h2>
       <form onSubmit={handleSubmit}>
         <div className='form-control'>
          <label htmlFor='title'> O que você vai fazer?</label>
          <input type="text" name="title" placeholder="Título da tarefa" onChange={(e) => setTitle(e.target.value)} value="title"/>
         </div>
        <input type="submit" value="Enviar"/>
       </form>
     </div>
     <div className='list-todo'>
      <p>Listas de tarefas</p>
      {todos.length === 0 && <p>Não há tarefas!</p>}
     </div>
     
    </div>
  );
}

export default App;
