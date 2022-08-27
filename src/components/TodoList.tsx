import { FC } from "react"
import TodoItem from "./TodoItem";
import Todo from '../models/Todo.model';
interface TodoListProps {
    data: Todo[]
    handleRemoveTodoItem: (id: number) => void
}

const TodoList: FC<TodoListProps> = ({data, handleRemoveTodoItem}) => {
    return (
        <div className="w-full flex justify-center items-center mt-5 flex-col gap-2">
            {
                data.map(item => 
                    <TodoItem key={item.id} id={item.id} text={item.description} handleRemoveTodoItem={handleRemoveTodoItem} />
                )
            }
        </div>
    )
}

export default TodoList