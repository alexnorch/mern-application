import styled from "styled-components";

const StyledArticle = styled.div`
  border-radius: 15px;
  flex-basis: calc(100% / 4 - 15px);
  min-height: 250px;
  background: #fff;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 480px) {
    flex-basis: 100%;
  }

  @media (min-width: 720px) {
    flex-basis: calc(100% / 2 - 10px);
  }

  @media (min-width: 990px) {
    flex-basis: calc(100% / 3 - 14px);
  }

  @media (min-width: 1190px) {
    flex-basis: calc(100% / 4 - 15px);
  }

  .top {
    height: 150px;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    margin-top: 10px;
  }

  .descr {
    color: gray;
    font-size: 14px;
    margin-top: 10px;
  }

  .middle {
    margin-bottom: 10px;
    padding: 0 10px;
  }

  .bottom {
    padding: 0 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    color: #fff;
    background: ${({ theme }) => theme.colors.secondary.shamrock};
    padding: 7px 10px;
    border-radius: 10px;
    font-size: 14px;
  }
`;

export default StyledArticle;
