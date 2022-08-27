import { FC } from "react"

const TodoList: FC = () => {

    const dummyData = [
        {
            "id": 1,
            "description": "xxxsadas"
        },
        {
            "id": 2,
            "description": "222adfdasf"
        }
    ];

    return (
        <div className="w-full flex justify-center items-center mt-5 flex-col gap-2">
            {
                dummyData.map(item => 
                    <div>
                        { item.description }
                    </div>
                )
            }
        </div>
    )
}

export default TodoList