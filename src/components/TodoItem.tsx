import { FC } from "react"
import { AiFillDelete } from 'react-icons/ai';

interface TodoItemProps {
    id: number
    text: string
    handleRemoveTodoItem: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = ({id, text, handleRemoveTodoItem}) => {
    return (
        <div className="w-64 bg-gray-400 flex justify-between items-center p-3 rounded">
            <div className="font-bold text-white" >{text}</div>
            <AiFillDelete className="cursor-pointer" onClick={handleRemoveTodoItem.bind(null, id)} />
        </div>
    )
}

export default TodoItem