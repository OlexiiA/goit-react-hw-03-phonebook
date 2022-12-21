import React from "react";
import { List, ListItem, Item, Btn } from "./FormItem.styled"

export const FormItem = ({ contacts, onDelete }) => (
    <List>
        {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
                <Item>{name}: {number}</Item>
                <Btn type="button" onClick={() => onDelete(id)}>Delete</Btn>
            </ListItem>
        ))}
    </List>
)