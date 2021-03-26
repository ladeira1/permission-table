import styled from 'styled-components'

export const Container = styled.table`
  border-collapse: collapse;

  width: 100%;

  thead tr {
    height: 2rem;
    margin-bottom: 200px;

    th {
      font-size: 0.9rem;
      font-weight: 500;

      @media screen and (min-width: 530px) {
        font-size: 1rem;
      }
    }
  }
`;

  