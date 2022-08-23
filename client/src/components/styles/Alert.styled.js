import styled from "styled-components";

const StyledAlert = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  color: white;
  box-shadow: 0px 0px 5px 3px
    ${({ type, theme }) =>
      type === "success" ? theme.shadows.green : theme.shadows.red};
  background-color: ${({ type, theme }) =>
    type === "success" ? theme.colors.primary.green : theme.colors.primary.red};
`;

export default StyledAlert;
