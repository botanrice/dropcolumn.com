import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from 'react-bootstrap';
import './assets/stylesheets/components/DragDrop.css';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};

const grid = 6;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "#a38bbf" : "black",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lavender" : "white",
  padding: grid,
  margin: '0 0 25px 0'
});


export default class DrapDrog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: []
        }
    }

  render() {
    let { onDragEnd, submitRanking } = this.props;
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dropcolumn-droppable" id="dropper" >
        {(provided, snapshot) => (
            <div 
                ref={provided.innerRef} 
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps} >
            {this.props.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle( snapshot.isDragging, provided.draggableProps.style)}
                      >
                        {item.content}
                      </div>
                    )}
                </Draggable>
            ))}

            {provided.placeholder}
            </div>
        )}
        </Droppable>
        <Button onClick={submitRanking}>Submit</Button>
      </DragDropContext>
    );
  }
}