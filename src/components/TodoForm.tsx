import { FC, FormEvent, useRef } from "react";

const TodoForm:FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event?.preventDefault();
        const val = inputRef.current!.value;
        console.log(val);
    };

    return (
        <form className="w-full flex justify-center mt-10 gap-2" onSubmit={handleSubmit}>
            <input type="text" className="border p-2 rounded" ref={inputRef} />
            <button className="p-2 bg-blue-400 rounded text-white font-bold" >ADD</button>
        </form>
    );
}

export default TodoForm;