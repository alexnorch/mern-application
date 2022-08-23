import styled from 'styled-components'

const StyledCategory = styled.span`
  display: inline-block;
  background: ${(props) => props.palette};
  min-width: 100px;
  text-align: center;
  padding: 7px 0;
  border-radius: 10px;
  font-size: 14px;
  color: ${({theme}) => theme.colors.primary.white};
  cursor: pointer;
`;

export default StyledCategory;