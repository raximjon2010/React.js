import React from 'react';
import { Anchor, Box, Image } from '../css/styled';

class Lesson5 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}
    render() {
        return(
            <div>
                <Box type = 'qizil'>
                Qizil
                <div>
                    Children
                </div>
                </Box>
                <Box type = 'qora'>Qora</Box>
                <Box type = 'yashil'>Yashil</Box>
                <Box>Cyan</Box>
                <Anchor>Link</Anchor>
                <Image src ='https://www.shutterstock.com/image-photo/bolu-golcuk-tabiat-parki-national-260nw-2151179495.jpg'/>
            </div>
            ) 
        } 
}

export default Lesson5;


// styled compoents => bu javascript ichida css yozish imkonini beradi.
// endi biz jascript ichida css yozsak bir qancha qulayliklari bor 
// masalan biz bitta tag uchun ikkita dizayn yozamiz yoki 
// boshqa bu narsa styled componets da yuq.