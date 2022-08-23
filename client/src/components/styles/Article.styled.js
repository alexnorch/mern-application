import styled from "styled-components";

const StyledArticle = styled.div`
  background-color: ${({theme}) => theme.colors.primary.white};
  border-radius: 15px;
  flex-basis: calc(100% / 3 - 47px);
  min-height: 200px;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 20px;

  .picture {
    border-radius: 10px;
    overflow: hidden;
    height: 70%;
    transform: translateX(-30px);
    box-shadow: 0 0 15px 2px ${({theme}) => theme.colors.primary.white};
    flex-basis: 40%;
    flex-shrink: 0;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .description: {
    flex-basis: 60%;
  }

  .text {
    font-size: 14px;
    color: gray;
  }

  .bottom {
    text-align: right;
  }

  .link {
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    color: #fff;
    background: ${({theme}) => theme.colors.secondary.shamrock};
    padding: 7px 10px;
    border-radius: 10px;
    font-size: 14px;
  }

  &:hover {
    background: ${({theme}) => theme.colors.secondary.shamrock};
  }

  &:hover .link {
    background: ${({theme}) => theme.colors.primary.white};
    color: ${({theme}) => theme.colors.secondary.shamrock};
  }

  &:hover .picture {
    box-shadow: 0 0 15px 2px ${({theme}) => theme.colors.primary.white};
  }

  &:hover .text,
  &:hover h3 {
    color: ${({theme}) => theme.colors.primary.white};
  }
`;

export default StyledArticle;