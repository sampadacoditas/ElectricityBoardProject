import React, { useState } from 'react'
export const Card = ({id,name,adress}:any) => {
    // const [CardOnpage,SetCardOnpage]=useState(12);
  return (
    
    <div className="inside-div">
        <div>{id}</div>
        {/* <div>{name}</div>
        <div>{adress}</div> */}
    </div>
  )
}