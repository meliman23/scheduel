
import React from 'react'

const Card = (props) => {
  return (
    <div className='centerCard'>
      <div className='card'>
      <h2>{props.day}</h2>
      <div className='left'>
         <h4>First client at {props.time}</h4>
         <p>{props.name} lives <a href={props.adress} trget='_blank'>here</a></p>

         <h4>Second client at {props.time2}</h4>
         <p>{props.name2} lives <a href={props.adress2} trget='_blank'>here</a></p>
      </div>
      </div>   
    </div>
  )
}

export default Card