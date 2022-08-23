import styled from "styled-components";

const StyledUploader = styled.div`
  margin: 10px 0;

  p {
    margin-bottom: 5px;
  }

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    border: 2px solid ${({theme}) => theme.colors.primary.shamrock};
    color: ${({theme}) => theme.colors.primary.shamrock};
    padding: 10px 15px;
    border-radius: 4px;
    transition: all 0.3s ease;

    svg {
      margin-right: 5px;
      font-size: 20px;
    }

    &:focus,
    &:hover {
      background: ${({theme}) => theme.colors.primary.shamrock};
      color: ${({theme}) => theme.colors.primary.white};
    }
  }
`;

export default StyledUploader;