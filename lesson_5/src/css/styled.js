import styled, {css} from 'styled-components'

const getColor = (props) => {
    switch (props.type) {
        case 'qizil': return 'red';break;
        case 'qora' : return 'black'; break;
        case 'yashil' : return 'green'; break;
        default: return 'cyan' ;break;
    }
}
const UmumiyCss = styled(css)`
font-size: 25px;
font-weight: 500;
line-height: 20px;
`

export const Box = styled.h1`
color: ${getColor};
${UmumiyCss}

.div {
    background: red;
    color: blue;
}

`

export const Anchor = styled.a.attrs({href: 'google.com', target:'_blank'})`
color: green;
${UmumiyCss}
`
export const Image = styled.img`
width: 200px;
`


