import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
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
color: blue;
`

export const Input = styled.input`
width: 50%;
height: 30px;
border: 1px solid gray;
background: #fff;
color: black;
outline-color: blue;
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
background: ${(({color}) => color && 'blue')};
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
color: ${(({color}) => color ? 'white' : 'black')};
border: 1px solid gray;
`
export const Select = styled.select`
width: 50%;
height: 30px;
border: none;
border-bottom: 1px solid blue;
outline: none;
color: black;
`
export const Button = styled.button`
width: 50%;
height: 40px;
outline: none;
background: blue;
justify-content: center;
color: white;
border-radius: 10px;
`

export const Texts = styled.div`
font-size: 20px;
font-weight: 500;
color: black;
border-bottom:${({tulov}) => tulov  && ' 2px dashed gray'};
width: 100%;
text-align: center;
padding:${({tulov}) => tulov  && ' 10px 10px'};
`
export const Tulov = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
`