import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    onRemove,
    onToggle
}) => {
    if (todos.length === 0) {
        return <p className="center">Nothing to show</p>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <span><h4>{todo.title}</h4></span>
                            <i
                                className="material-icons red-text"
                                onClick={event => removeHandler(event, todo.id)}
                            >
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}
