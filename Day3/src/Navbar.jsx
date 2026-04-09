import styled from "styled-components";

const NavLink = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    color: red;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <nav>
      <NavLink href="#">Home</NavLink>
    </nav>
  );
}

export default Navbar;