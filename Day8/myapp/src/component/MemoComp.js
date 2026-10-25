import React from 'react'

const MemoComp = (props) => {
  console.log("Memo component Render")
  return (
    <div>
      <h2>This is memo component</h2>
      <div>Item:<strong>{props.newItem}</strong></div>
    </div>
  )
}

export default React.memo(MemoComp);

