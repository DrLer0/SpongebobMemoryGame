import React from "react";
import {Col, Row, Container} from "../Grid";

function Icons(props){
    // console.log(props.arr);
    var imageGroups = groupBy(4, props.arr);
    return (<Container>
        {imageGroups.map(renderRow)}
        </Container>
        );
}

function renderRow(group, index){
    return (<Row key={index}>
             {group.map(renderColumn)}
            </Row>);
}
  
function renderColumn(image, index, props){
return (<Col size="md-2" key={index}>
            <img data-id={image.id} className="btn btn-sm img-thumbnail" src={image.image} alt="" onClick={props.handleIncrement} ></img>
        </Col>);
}

function groupBy(amountOfItemsPerGroup, items){
    var groups = [], group, total = items.length;
    for (var i=0; i < total; i += amountOfItemsPerGroup) {
        group = items.slice(i, i+amountOfItemsPerGroup);
        groups.push(group);
    }
    
    return groups;
}



export default Icons;