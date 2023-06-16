import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const ViewPort= styled.div`      
display: flex;
flex-direction: column;
justify-content: space-between;
  min-height: 100vh; 
  width: 100%;
`;
export const MainContent = styled.div`
  flex: 1 0 auto;
  overflow: auto;

  align-content: space-between;
`;
export const GlobalStyle = createGlobalStyle`
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#root {
  height: 100%;
}
:root {
  --vh: 100vh;
}


.yourContainerClass {
  height: var(--vh);
}
box-sizing: border-box;
`;
export default GlobalStyle
