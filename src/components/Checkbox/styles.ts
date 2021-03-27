import styled from 'styled-components'

interface ConatainerPros {
  isSelected: boolean
}

export const Container = styled.label<ConatainerPros>`
  width: 1.2rem;
  height: 1.2rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;


  background: ${({ isSelected, theme }) => isSelected? theme.colors.gray900 : 'transparent'};
  
  border: 1px solid${({ isSelected, theme }) => isSelected? 'transparent' : theme.colors.gray500};
  border-radius: 0.12rem;

  transition: background-color 0.2s, filter 0.2s;

  img {
    width: 1.1rem;
  }

  input {
    display: none;
  }

  :hover {
    filter: brightness(0.85);
    background-color: ${({ isSelected, theme }) => isSelected? theme.colors.gray900 : theme.colors.white};

    cursor: pointer;
  }
`;