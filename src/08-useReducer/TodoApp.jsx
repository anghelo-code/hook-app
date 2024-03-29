import { useTodo } from "../hooks"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

    const { todos, handleNewTodo, handleToggleTodo, handleRemoveTodo } = useTodo();
  return (
    <>
        <h1>Todo App</h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onRemoveTodo={ handleRemoveTodo } 
                    onToggleTodo={ handleToggleTodo }
                />                
            </div>
            
            <div className="col-5">
                
                <h4>Agregar TODO</h4>
                <hr/>

                <TodoAdd  handleNewTodo={ handleNewTodo }/>
               
            </div>

        </div>
    </>
  )
}
