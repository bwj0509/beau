import React from 'react';
import Content from './Content';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import man from '../../img/man.jpg'
import { motion } from 'framer-motion';

const ImgWarpper = styled(motion.div)`
    width: 100%;
    height: 40vw;
    background: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color:white;

`


const Title = styled.div`
    color:#eeedef;
    font-size: 4vw;
    border-bottom: 0.5vw solid #b3a89d;
`


function topic() {

    const dumydata = [13, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]



    return (
        <>
            <ImgWarpper img={man} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <Title>HOMME</Title>
            </ImgWarpper>

            <Grid fluid>
                <Row>
                    {dumydata.map((item) => (
                        <Col xs={6} md={3} style={{ padding: '0px' }}>
                            <Content>{item}</Content>
                        </Col>
                    ))}
                </Row>
            </Grid>
        </>
    );
}

export default topic;