import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems };
    padding: 15px 0px 15px;
    max-height: 70px;
    width: 100%;
    position: fixed;
`

export default Header;