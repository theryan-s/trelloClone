import React, { useState } from 'react';


const Columns = (props) => {
    const [columns, setColumns] = useState(undefined);
    const [tasks, setTasks] = useState(undefined);

    return (
        <div>
            Columns
            {/* {props.columnOrder.map(columnId => {
                const column = props.columns[columnId];
                const tasks = column.taskIds.map(taskId => props.tasks[taskId]);

                return ;
            })} */}
        </div>
    )
};

export default Columns;