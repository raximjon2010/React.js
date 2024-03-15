import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
width: 100%;
height: 50px;
background: black;
display: flex;
justify-content: space-evenly;
align-items: center;
border-radius: 8px;
.active {
    color: red;
}
`
export const Item = styled(NavLink)`
font-size: 20px;
font-weight: 500;
color: white;
text-decoration: none;
`