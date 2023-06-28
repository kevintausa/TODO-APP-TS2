import {type Todo as TodoType} from '../types'

interface Props extends TodoType {
    onRemoveTodo: (id:string)=>void
    onCompleteTodo: (id:string)=>void
}

export const Todo: React.FC<Props> = ({id, title , completed,onRemoveTodo, onCompleteTodo}) =>{
    
    return(
      <div>
        <input 
            className="toggle"
            checked = {completed}
            type="checkbox" 
            onChange={()=>{
                onCompleteTodo(id)
            }}
            />
        <label> {title}</label>
        <button
            className="destroy"
            onClick={()=>
                {onRemoveTodo(id)
            }}
        />
      </div>
      )
}