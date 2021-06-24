import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>CRUD React, Redux, REST API & Axios</h1>

        <a 
          href="/products/new"
          className="btn btn-danger nuevo-post d-block d-md-inline-block"
          >
          Add new product &#43;</a>
      </div>
    </nav>
  )
}

export default Header