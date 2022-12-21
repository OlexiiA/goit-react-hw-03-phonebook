import React from "react";
import { InputForm } from "./Filter.styled"

export const Filter = ({ value, filterName }) => (
    <InputForm>
        <label><h3>Find contact by name</h3>
            <input type="text" value={value} onChange={filterName} style={{ borderRadius: '10px', marginTop: '5px' }} />
        </label>
    </InputForm>
)