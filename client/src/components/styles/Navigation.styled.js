import styled from "styled-components";

const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .profile {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.colors.secondary.white};
    z-index: 3;

    &:hover ul {
      transform: translateY(0);
      opacity: 1;
    }
  }

  ul {
    z-index: 1;
    opacity: 0;
    position: absolute;
    top: 110%;
    background: ${({theme}) => theme.colors.primary.shamrock};
    border-radius: 4px;
    padding: 15px;
    width: 100%;
    text-align: center;
    transform: translateY(-100%);
    transition: all 0.3s ease;

    li {
      color: ${({theme}) => theme.colors.primary.white};
      font-weight: 300;
      cursor: pointer;
    }
  }

  .profile-details {
    margin-left: 10px;
  }

  .profile-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default StyledNavigation;