import styled from 'styled-components';

export default styled.button`
  background-color: ${props => 'bg' in props ? props.bg : '#FAFAFA'};
  border: none;
  border-radius: 10px;
  margin: 10px 20px;
  color: #FAFAFA;
  grid-column: 2 / 2;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 40px -10px ${props => 'bg' in props ? props.bg : '#FAFAFA'};
  }
`