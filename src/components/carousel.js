import React from 'react'

export default function carousel(props) {
  return (
    <>
      <div class="head">
        <h3 style={{fontSize:56, color:"white"}}><b>{props.heading}</b></h3>
        <h5 style={{fontSize:25}}><b>{props.subHeading}</b></h5>
      </div>
    </>
  )
}
