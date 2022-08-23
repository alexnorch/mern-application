import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  gap: 30px;
  height: 100%;

  .hide {
    display: none;
  }

  .profile-left {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    flex-basis: 300px;
    flex-shrink: 0;

    .image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        font-size: 32px;
        color: ${({theme}) => theme.colors.primary.white};
        background: ${({theme}) => theme.shadows.shamrock};
        transition: all 0.3s ease;
        opacity: 0;
      }

      &:hover span {
        opacity: 1;
      }
    }

    .bio {
      margin: 20px 0;
      text-align: center;
    }
  }

  .profile-middle {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%;
    padding-right: 30px;
  }

  .profile-right {
    h3 {
      margin-bottom: 20px;
    }
  }
`;

export default StyledProfile;