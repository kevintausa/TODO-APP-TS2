import {useState} from 'react'
import { Todos } from './components/Todos';
import {Header} from './components/Header'
import {Footer} from './components/Footer';
import './App.css'

const mockTodos = [
  {
    id: '0',
    title: 'Curso de ingles I',
    completed : true
  },
  {
    id: '1',
    title: 'Programar typeScript',
    completed : false
  },
  {
    id: '2',
    title: 'lavar la ropa',
    completed : true
  }
]



const App = ():JSX.Element => {

  const [todos,setTodos] = useState(mockTodos)
  
  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  const handelComplete = (id: string): void => {
    const index = todos.findIndex(todo => todo.id === id)
    const newTodos = todos.map(todo => {
      if(Number(todo.id) == index){
        todo.completed = !todo.completed
        return{
          ...todo
        }
      }
      return todo

    })
    setTodos(newTodos)
  }

  
  
  return (
    <div className='todoapp'>
      <Header/>
      {/*<Search/>*/}
      <Todos 
        onRemoveTodo={handleRemove}
        onCompleteTodo={handelComplete}
        todos={todos}
      />
      <Footer/>
    </div>
    
  )
}

export default App
