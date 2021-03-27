import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  max-height: 8vh;
  max-width: 1280px;

  padding: 2.5rem 0;
  margin: 0 auto;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);  

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 800px) {
    padding: 2.5rem;
    justify-content: flex-start;
    box-shadow: none;
  }
  
  h1 {
    font-size: 1.5rem;
    font-weight: 500;

    @media screen and (min-width: 400px) {
      font-size: 2rem;
    }
  }
`