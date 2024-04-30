import React, {useState} from "react";
import Card from "../userInterface/Card";
import Button from "../userInterface/Button";
import style from "./NewUser.module.css"
import ErroreModal from "../userInterface/ErrorModal";

const NewUser = (props) => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const[error, setError] = useState()

    const addNewUserHandler = (event) => {
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0){
            setError({
                title:"Invalid Input",
                message:"Please enter a valid name and age (non-empty values)."
            })
            return;
        }

        if(+age < 0){
            setError({
                title:"Invalid Input",
                message:"Please enter a valid age (>0)."
            })
            return;
        }
        const user = {name:username, age:age, id:Math.random().toString()}
        props.onAddUser(user)
        setUsername("")
        setAge("")
    }

    const getUsernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const getAgeHandler = (event) => {
        setAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErroreModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={style.input}>
                <form onSubmit={addNewUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={getUsernameHandler} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={age} onChange={getAgeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default NewUser;