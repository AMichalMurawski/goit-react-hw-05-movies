import styled from 'styled-components';

export const Ul = styled.ul`
    display:flex; 
    flex-direction: column;
    gap: 20px;
    list-style:none;    
`

export const Li = styled.li`
    margin:0;
    padding:0;
    &:not(:first-of-type){
        border-top: 1px dashed black;
    }
    & p:first-child{
        font-weight:700;
    }
`