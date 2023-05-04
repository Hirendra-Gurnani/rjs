import React from 'react';

function FuncClick() {
    function clickHandler(){
        
    }
  return (
    <div>
      <button onClick={()=>clickHandler()}>Click!</button>
    </div>
  );
}

export default FuncClick;
