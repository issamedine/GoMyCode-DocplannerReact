import React from 'react';
import './Nav.scss'

// export default function Nav(props) {
//   return (
//     <nav className="navbar navbar-light">
//                 <a classNameName="navbar-brand">
//                     <img className="logo-docplanner" width="268"
//                         src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" />
//                 </a>
//                 <div className="form-inline">
//                     <a href="" className="mr-sm-4">About us</a>
//                     <a href="" className="my-2 my-sm-0">Career</a>
//                     <li className="nav-item dropdown">
//                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                           Dropdown
//                         </a>
//                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                           <a className="dropdown-item" href="#">Action</a>
//                           <a className="dropdown-item" href="#">Another action</a>
//                           <div className="dropdown-divider"></div>
//                           <a className="dropdown-item" href="#">Something else here</a>
//                         </div>
//                       </li>
//                 </div>
//             </nav>
//   ); 
// } 
export default function Nav(props) {
    return (
        <nav className="navbar navbar-light">
            <img src={props.menuNav.map(el=> el.img)}  width="300"/>
            <a className="navbar-brand">
               
            </a>
        
        <ul className="form-inline">
            {props.menuNav.map(el => (
                <li className="dropdown">
                    {el.title}
                    {!el.drop ? null : (
                        <ul className="dropdown-menu">
                            {el.drop.map(item =>(
                                <li className="dropdown-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
        </nav>
    );
}
