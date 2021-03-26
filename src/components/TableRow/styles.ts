import styled from 'styled-components'

interface ContainerProps {
  backgroundColor: string
}

interface FirstColumnProps {
  type: string
}


export const Container = styled.tr<ContainerProps>`
  max-width: 1200px;

  background: ${({ backgroundColor }) => backgroundColor};
  border: none;

  td {
    width: 8rem;
    height: 3rem;

    padding-left: 1rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const FirstColumn = styled.td<FirstColumnProps>`
  font-size: ${({ type, theme }) => type === 'child'? '0.9rem' : '1.05rem'};
  font-weight: ${({ type, theme }) => type === 'child'? 400 : 500};

  @media screen and (min-width: 530px) {
    font-size: ${({ type, theme }) => type === 'child'? '1rem' : '1.12em'};
  }
`;