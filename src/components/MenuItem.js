import React, {useState} from 'react'
import { Collapse, NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";


const MenuItem = ({name,src}) => {
    const [hoverImg , setHoverImg] =  useState(false)
    return (
        <Nav vertical className={`list-unstyled pb-3 `}>
            <br />
            <NavItem>
                <NavLink className={`h-7 ${src}`} tag={Link} to={"/"}>

                    <span className='m-4'>
                        {name}
                    </span>
                </NavLink>
            </NavItem>

        </Nav>


    );
}

export default MenuItem;