import React from 'react'

function User(props) {
  return (
    <div className="card mb-3">
        <h5 className="card-header">{props.name}</h5>
        <div className="card-body">
            <h5 className="card-title">{props.surname}</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default User