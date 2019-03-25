import React  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/TopNav.css';

//import the components
import AddNew from './AddNew';
import DeleteContact from './DeleteContacts';
import EditContact from './EditContacts';
import Homes from './Homes';

class TopNav extends React.Component{
    render(){
        return(
            <Router>
                <ul className="topnav">
                    <li>
                        <Link to="">
                        <a className="active" href="">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/EditContact">
                            <a href="">Edit</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/DeleteContact">
                        <a href="">Delete</a>
                        </Link>
                    </li>
                    <li className="right">
                    <Link to="/AddNew">
                        <a href="">Add New</a>
                    </Link>
                    </li>
                </ul>
                <Route exact path="/" component={Homes} />
                <Route path="/addnew" component={AddNew} />
                <Route path="/deletecontact" component={DeleteContact} />
                <Route path="/editContact" component={EditContact} />
            </Router> 
            )
    }
}

export default TopNav;