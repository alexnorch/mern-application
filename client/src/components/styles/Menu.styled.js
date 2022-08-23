import styled from "styled-components";

const StyledMenu = styled.div`
  padding: 20px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateX(10px);
    }

    &:hover svg,
    &:hover a {
      color: ${({theme}) => theme.colors.primary.dark};
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  svg {
    font-size: 24px;
    color: ${({theme}) => theme.colors.primary.white};
    margin-right: 5px;
  }
`;

export default StyledMenu;