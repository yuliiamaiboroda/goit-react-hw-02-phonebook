import styled from 'styled-components';

export const Ul = styled.ul`
margin: 0 ;
padding: 0;
list-style: none;
`
export const Li = styled.li`
display: flex;
gap: 6px;
margin-bottom: 5px;
color: #8d5524;
font-family: 'Abel', sans-serif;
font-size: 18px;
align-items: center;

`
export const Span = styled.span`
color: #c68642;
font-size: 18px;
`

export const Button = styled.button`
padding: 5px ;
font-size: 12px;
background-color:  #e0ac69;
color: #ffdbac;
border: none;
border-radius: 3px;
&:hover{
    background-color: #8d5524;
}
`