import styled from "styled-components";

export const ViewPort= styled.div`      
display: flex;
flex-direction: column;
min-height: 100vh;
  
  
 
`;
export const MainContent = styled.div`
  flex-grow: 1;
  overflow: auto; // add this line
`;
export const GlobalStyle = styled.div`
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
`;