import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className="navbar bg-body-tertiary" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      {/* put variable inside curly braces  */}
      {props.title}
    </a>
  </div>
  <div className="darkmodebtn">
   
  </div>
</nav>
  )
}


// define proptypes for the function  provide in object
Navbar.propTypes = {
  title : PropTypes.string
}

// have to add compulsary prop value of props and add is required or add default props in case nothing is pass

// Navbar.propTypes = {
//   title : PropTypes.string.isRequired
// }

// we can also add default props
Navbar.defaultProps = {
  title:"default name of prop variable"
}
