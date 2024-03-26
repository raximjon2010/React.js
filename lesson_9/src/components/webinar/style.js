import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled(NavLink)`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
text-decoration: none;

`
export const Image = styled.img`
width: 100%;
height: 100%;
position: absolute;
`
export const Wrapper = styled.div`
width: 500px;
height: 600px;
border: 1px solid gray;

display: flex;
justify-content: center;
flex-direction: column;
gap: 30px;
align-items: center;
`
export const Title = styled.div`
font-size: 24px;
font-weight: 600;
color: white;
`

export const Input = styled.input`
width: 50%;
height: 40px;
border: 1px solid gray;
background: none;
color: white;
outline-color: blue;
border-radius: 10px;
padding: 15px 15px;
`
export const Inputs = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
`
export const Levels = styled.div`
width: 50%;
height: 100px;
display: flex;
gap: 20px;
display: flex;
align-items: center;
`

export const Level = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background: ${(({color}) => {
        if (color == 'true') {
            return 'blue'
        }
        else if (color == 'green') {
            return 'green'
        }
}
)};
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
color: ${(({color}) => color && 'white')};
border: 1px solid gray;
`
export const Select = styled.select`
width: 50%;
height: 40px;
border: none;
background: none;
border-bottom: 1px solid blue;
outline: none;
color: white;
`
export const Option = styled.option`
background: black;
`
export const Button = styled.button`
width: 50%;
height: 40px;
outline: none;
background: white;
justify-content: center;
color: color: blue;
border-radius: 10px;
`

export const Texts = styled.div`
font-size: 25px;
font-weight: 500;
color: black;
border-bottom:${({tulov}) => tulov  && ' 2px dashed gray'};
width: 100%;
text-align: center;
padding:${({tulov}) => tulov  && ' 10px 10px'};
color: white;
`
export const Tulov = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
`
export const Icon = styled.img`
width: 20px;
height: 20px;
transform: ${({rotate}) => rotate && 'rotate(90deg)'};
`
export const Desc = styled.div`
font-size: 18px;
font-weight: 400;
color: white;

`;
