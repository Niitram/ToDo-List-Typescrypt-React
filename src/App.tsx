import { useState } from "react"
import { Todos } from "./components/Todos"
import { TodoId, TodoTitle } from "./types"
import { type Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

const mockTodos = [
  {
    id:"1",
    title:"Estudiar",
    completed:false,
  },
  {
    id:"2",
    title:"Meditar",
    completed:true,
  },
  {
    id:"3",
    title:"Crear un nuevo proyecto",
    completed:false,
  },
  
]


const App=(): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<typeof TODO_FILTERS[keyof typeof TODO_FILTERS]>(TODO_FILTERS.ALL)

  const handleRemove=({id}:TodoId): void=>{
    const newTodos = todos.filter((todo)=>todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted=({id, completed}:Pick<TodoType, "id" | "completed">): void=>{
    const newTodos = todos.map((todo)=>{
      if(todo.id === id){
        return {...todo, completed}
      
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange=(filter:typeof TODO_FILTERS[keyof typeof TODO_FILTERS]): void=>{
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted =():void=>{
    const newTodos = todos.filter((todo)=>!todo.completed)
    setTodos(newTodos)
  
  }

  const filteredTodos = todos.filter((todo)=>{
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    } 
    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    } 
    return todo
  })

  const handleAddTodo = ({title}:TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos
        onToggleTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
      activeCount={todos.filter((todo)=>!todo.completed).length} 
      completedCount={todos.length - todos.filter((todo)=>!todo.completed).length}
      onClearCompleted={handleRemoveAllCompleted}
      filterSelected={filterSelected}
      handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
