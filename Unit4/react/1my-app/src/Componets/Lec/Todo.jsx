import styles from "./todo.module.css" ;

export const Todo = ({todo}) => {
    return (
        <div >{todo.value}</div>
    )
}