import styled from 'styled-components'

export const Container = styled.div`
  flex: 3;


  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 15rem;
    height: 3rem;

    background: ${({ theme }) => theme.colors.gray900};

    border: none;
    border-radius: 2rem;

    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.85);
    }
  }
`;