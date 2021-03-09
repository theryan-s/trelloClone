import React from "react";
// Components
import Title from "../Title/Title";
// import InputContainer from '../Input/InputContainer';
import { Droppable, Draggable } from 'react-beautiful-dnd';

// Styles
import listStyle from "./List.styles"; 



const List = () => {
    const classes = listStyle();

    return (
        <div>
            <Title />
        </div>
    )
}

export default List;