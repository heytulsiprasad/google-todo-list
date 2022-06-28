import styled from "styled-components";
import {Avatar} from "@mantine/core"

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  text-align: center;  

  .profile {
    position: absolute;
    right: 0;
    top: 0;
  }
`

const Navbar = () => {
  return (
    <StyledNav>
      <h1>#todo</h1>
      <div className="profile">
        <Avatar />
      </div>
    </StyledNav>
  )
}

export default Navbar;