import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      black: string;
      white: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray900: string;
    };
    fonts: {
      roboto: string;
    };
  }
}
