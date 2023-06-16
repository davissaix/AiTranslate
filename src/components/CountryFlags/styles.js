import styled from "styled-components";

export const List = styled.div` 
    display: flex;
    flex-wrap: wrap;
    gap: 5vw;
    justify-content: center;
    align-items: center;

  
`
export const Container = styled.div` 

    height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}`

export const Flag = styled.div`
    cursor: pointer;
    &:hover {
        opacity: 0.65;
    };
    opacity:${props=>props.opacity};

    
    transform:${props => props.transform};
    //translateY(-7px);
    
`