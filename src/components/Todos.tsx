import { type ListOfTodos } from '../types'
import { Todo } from './Todo'
interface Props {
    todos: ListOfTodos,
    onRemoveTodo: (id: string) => void,
    onCompleteTodo: (id: string) => void
}
export const Todos: React.FC<Props> = ({ onRemoveTodo, todos, onCompleteTodo }) => {

    return (
        <>
            <ul className='todo-list'>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className={`${todo.completed ? 'completed' : ''}`}>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onRemoveTodo={onRemoveTodo}
                            onCompleteTodo={onCompleteTodo}
                        />
                    </li>
                ))

                }
            </ul>



        </>


    )
}