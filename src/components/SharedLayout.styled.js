import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeNav = active => {
  switch (active) {
    case "true":
      return "color: red";
    case "false":
      return "color: black";
    default:
      return "color: black";
  };
};

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-inline: 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
  display:flex;
  flex-direction: row;
  gap: 30px;
  font-weight: 700;
  font-size: 24px;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  &:hover,
  &:focus{
    color:blue;
  }
  &:not(:hover,:focus ){
    ${({active}) => activeNav(active)}
  }
  nav &:hover,
  nav &:focus{
    color:red;
  }
`;

export const Back = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: lightgrey;
  text-decoration: none;
  &:hover,
  &:focus{
    color:red;
    background-color: lightblue;
  }
  &:not(:hover,:focus ){
    ${({active}) => activeNav(active)}
  }
  nav &:hover,
  nav &:focus{
    color:red;
  }
  .
`

export const Img = styled.img`
  width: 280px;
  height: 400px;
`

export const Movie = styled.div`
  padding:20px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  border-bottom: 1px solid black;
`

export const H2 = styled.h2`
    font-size:30px;
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 20px;
`

export const Options = styled.div`
  border-bottom: 1px solid black;
`