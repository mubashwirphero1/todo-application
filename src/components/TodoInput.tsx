import React, { useRef } from "react";

interface TodoFormProps {
    onAdd(name: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    //const [name, setName] = useState<string>("");
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setName(event.target.value);
    // };
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = ''
        }
    }

    return (
        <div className="input-field mt2">
            <input

                ref={ref}
                className="standard-basic"
                type="text"
                id="name"
                placeholder="Enter person's name"
                onKeyPress={keyPressHandler}
            />
        </div>
    );
};
