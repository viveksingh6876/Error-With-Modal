import React from "react";
import Card from "./Card";
import style from "./UserList.module.css"

const UserList = (props) => {
    return(
        <Card className={style.users}>
            <ul>
                {props.users.map((user) => {
                    return <li key={user.id}>{user.name} is {user.age} years old. and studies in {user.collegeName} college.</li>
                })}
            </ul>
        </Card>
    )
}

export default UserList;