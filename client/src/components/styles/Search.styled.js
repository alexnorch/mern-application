import styled from "styled-components";

const StyledSearch = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  min-width: 480px;

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.2);
    padding-left: 20px;
  }

  span {
    position: absolute;
    background: ${({theme}) => theme.colors.secondary.shamrock};
    right: 5px;
    height: 30px;
    width: 30px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledSearch;