import React from "react";

export const FormItem = ({contacts, onDelete}) => (
<ul>
    {contacts.map(({id, name, number}) => (
        <li key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </li>
    ))}
</ul>
)