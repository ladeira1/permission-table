import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { light } from './styles/theme/light';

import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={light}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}