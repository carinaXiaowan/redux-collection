import React from 'react'
import PropTypes from 'prop-types'
const Repeat = (props) => {
    let items = [];
    for(let i=0; i<props.numTimes; i++){
        items.push(props.children(i));
    }
    return (
        <div>
            <div>{items}</div> 
            <button>点击</button>
        </div>
    )
}

Repeat.propTypes = {
   numTimes: PropTypes.number.isRequired
}

export default Repeat;