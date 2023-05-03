import React, {useCallback, useState} from "react"

const ItemList = (props) => {

    const {items} = props;

    return(
        <ul>
            {items.map((item, index) => (
                <li key = {index}>{item}</li>
            ))}
        </ul>
    )

}

export default ItemList;