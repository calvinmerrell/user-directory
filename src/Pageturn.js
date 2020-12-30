import React from "react"


export default function Pageturn(props){
  console.log(props)

  return (
      <div className="pageturn">
      <h3 className="controls" onClick = {props.previousFn} >&#8592; Previous </h3>
      <h3 className="controls" onClick = {props.nextFn}> Next &#8594;</h3> 
      </div>
  )
}






