import styled from "styled-components"
import { Nav, Navbar, NavbarBrand, } from 'reactstrap';
import logotype from "../../assets/images/logotype.png"
import FaTwitter from "react-icons/fa"
import FaFacebookF from "react-icons/fa"
import FaDiscord from "react-icons/fa"
import FaYoutube from "react-icons/fa"
import { BounceTop, SwingUp } from "../../global-styles/keyframes";


interface FaTwitter {
    
}



export const NavDiv = styled(Nav)`
border: 1px black solid;
`;

export const NavigationBar = styled(Navbar)`
display: flex;
width: 100%;
background-color: hsla(0, 0%, 100%, 1);
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
text-align: center;
box-shadow: 5px 5px 5px #00000080;
`;

export const NavBrandStyle = styled(NavbarBrand)`
display: flex;
`;

export const SocialsDiv = styled.div `
display:flex;
`;

export const SocialIcon1 = styled.div `
display: flex;
animation: ${BounceTop} bounce-top 0.9s both;
`;

export const SocialIcon2 = styled.div `
display: flex;
animation: ${BounceTop} bounce-top 0.9s 1s both;
`;

export const SocialIcon3 = styled.div `
display: flex;
animation: ${BounceTop} bounce-top 0.9s 2s both;
`;

export const SocialIcon4 = styled.div `
display: flex;
animation: ${BounceTop} bounce-top 0.9s 3s both;
`;

export const TwitterIcon = styled(FaTwitter)`
display: flex;
color:blue;
`;