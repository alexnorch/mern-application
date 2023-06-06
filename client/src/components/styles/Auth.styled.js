import styled, { css } from "styled-components";

const StyledAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 30px;

  form {
    flex-basis: 350px;
  }

  .form-bottom {
    margin-bottom: 15px;
  }

  .image {
    max-width: 600px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default StyledAuth;
