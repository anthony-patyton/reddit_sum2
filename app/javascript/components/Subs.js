import React from 'react';

const url = "http://localhost:3000/subs/"
const Subs = ({ subs }) => {
  return(
    <>
      <h1>Sub component</h1>
      <a href={`${url}new`}>Add sub</a>
      {
        subs.map( (sub) =>(
          <div>
            <h3>{sub.name}</h3>
            <a href={`${url}${sub.id}`}>Show</a>
            <a href={`${url}${sub.id}/edit`}>Edit</a>
            <a href={`${url}${sub.id}`} data-method="delete">Delete</a>
          </div>
        ))
      }
    </>
  )
}

export default Subs;