import React from "react";

export const FormItem = ({name, onDelete}) => (
<ul>
    {name.map(({id, text}) => (
        <li key={id}>
            <p>{text}</p>
            <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </li>
    ))}
</ul>
)