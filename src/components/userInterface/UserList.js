import React from "react";
import Card from "./Card";
import style from "./UserList.module.css"

const UserList = (props) => {
    return(
        <Card className={style.users}>
            <ul>
                {props.users.map((user) => {
                    return <li key={user.id}>{user.name} {user.age} years old.</li>
                })}
            </ul>
        </Card>
    )
}

export default UserList;