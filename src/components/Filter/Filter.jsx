import React from "react";

export const Filter = ({value, filterName}) => (
    <label>Find contact by name
        <input type="text" value={value} onChange={filterName} />
    </label>
)