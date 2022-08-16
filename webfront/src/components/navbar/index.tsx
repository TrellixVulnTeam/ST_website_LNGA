import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/images/logo.tif"
import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
} from "reactstrap"

import {
  NavDiv,
  SocialsDiv,
  NavigationBar,
  SocialIcon1,
  SocialIcon2,
  SocialIcon3,
  SocialIcon4,
} from "./style"

const Navigation: React.FC = () => {
  return (
    <NavDiv>
      <NavigationBar
      >
<NavbarBrand>

</NavbarBrand>

        <NavItem><NavLink to="/Events">Events</NavLink>
        </NavItem>

        <NavItem><NavLink to="/Ranking">Ranking</NavLink>
        </NavItem>

        <NavItem><NavLink to="/About">About</NavLink>
        </NavItem>
<SocialsDiv>
  
</SocialsDiv>
      </NavigationBar>
    </NavDiv>
  )
}

export default Navigation
