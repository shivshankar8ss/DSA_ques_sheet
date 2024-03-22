 import React from 'react'
 import PropTypes from 'prop-types'
 function Navbar(props) {
   return (
     <nav className={`navbar navbar-expand-lg navbar-${props.mode}  ${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutUs}</a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li> */}
             <div class="form-check form-switch">
            <input className="form-check-input" type="checkbox" 
            onClick={props.toggleMode}
            role="switch" id="flexSwitchCheckDefault"/>
            
            <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
</div>
            {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Contact US</a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <div className="form-check form-switch">
          
            </div> */}
          {/* </form> */}
        </div>
      </div>
    </nav>
   ); 
 }
 
 export default Navbar;

 Navbar.protoTypes ={
            title: PropTypes.string.isRequired,
            aboutText: PropTypes.string.isRequired
 }

//  default props
Navbar.defaultProps = {
  title :'enter title',
  aboutUs: 'about text here'
}