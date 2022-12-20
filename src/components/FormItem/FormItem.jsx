import React from "react";

export const FormItem = ({name, onDelete}) => (
<ul>
    {name.map(({id, name, number}) => (
        <li key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </li>
    ))}
</ul>
)