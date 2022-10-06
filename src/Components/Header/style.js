import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  ul {
  display: flex;
}

li {
  list-style: none;
  color: white;
  margin-left: 15px;
  font-size: 18px;
}

.active {
  color: #F6E51C;
  padding-bottom: 2px;
  border-bottom: 2px solid #F6E51C;
}
`;
