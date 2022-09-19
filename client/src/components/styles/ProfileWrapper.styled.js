import styled from "styled-components";

const StyledProfileWrapper = styled.div`
  display: flex;
  gap: 30px;
  height: calc(100% - 70px);

  .profile-left {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    flex-basis: 300px;
    flex-shrink: 0;
    padding-right: 20px;

    .info {
      text-align: center;
    }

    .confirmation {
      margin-top: 10px;
    }

    .image {
      width: 150px;
      height: 150px;
      overflow: hidden;
      border-radius: 50%;
      margin-bottom: 10px;
      border: 10px solid ${({theme}) => theme.colors.primary.white};

      img {
        width: 100%;
        heigth: 100%;
        object-fit: cover;
      }
    }

    .navigation {
      margin-top: 30px;

      a {
        width: 100%;
        border: 1px solid ${({theme}) => theme.colors.secondary.shamrock};
        color: ${({theme}) => theme.colors.secondary.shamrock};
        border-radius: 3px;
        margin-bottom: 10px;
        text-align: center;
        display: inline-block;
        padding: 10px 15px;
      }

      a.active {
        background: ${({theme}) => theme.colors.secondary.shamrock};
        color: ${({theme}) => theme.colors.primary.white};
      }
    }

    .bottom {
      margin-top: auto;
    }
  }

  .profile-content {
    flex-grow: 1;
  }
`;

export default StyledProfileWrapper;
