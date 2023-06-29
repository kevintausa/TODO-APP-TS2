import { useState } from 'react'
interface Props {
    showTodo: (inTodo: string) => void
}

export const Search = ({ showTodo }: Props) => {
    const [newTodo, setNewTodo] = useState('');
    const handleInput = (e: any) => {
        var title = e.target.value
        setNewTodo(title)
    }
    const handleSubmit = () => {
        event?.preventDefault()
        if (newTodo!== '') {
            showTodo(newTodo)
            setNewTodo('')
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" placeholder="¿ Que hay pa hacer ?" className="new-todo" value={newTodo} />
        </form>

    )

}

