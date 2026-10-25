import React from 'react'
import imgpath from '../shared/constsnt/constantData'

const MyImagesComp = () => {
  return (
    <div>
      <h2>My Images Component</h2>
      <img src={imgpath.iphone} height="200px" width="200px"/>
      <img src={imgpath.nothing} height="200px" width="200px"/>
      <img src={imgpath.doll} height="200px" width="200px"/>
      <img src={imgpath.key} height="200px" width="200px"/>
      <img src={imgpath.s26ultra} height="200px" width="200px"/>
      <img src={imgpath.reno} height="200px" width="200px"/>
      <img src={imgpath.edge70pro} height="200px" width="200px"/>
      <img src={imgpath.pixel} height="200px" width="200px"/>
      <img src={imgpath.locker} height="200px" width="200px"/>
      <img src={imgpath.goldchest}height="200px" width="200px" />
      <img src={imgpath.chain} height="200px" width="200px"/>
    </div>
  )
}

export default MyImagesComp
