import React from 'react';

const Columns = (props) => {

  return (
    <div className={"columns " + props.extras}>
      {props.children}
    </div>
  )
}

export default Columns;
