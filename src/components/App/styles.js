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
  body {
    overflow-y: hidden;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;