import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'

import './cubeAbout2Style.css'

import Storage from '../storage'
const storage = Storage()


const CubeAbout2 = (props) => {

        return (<Container  className="CubeAbout2">
            <Row>
            <Col xs={12} md={12} >
               <h2>
               {  storage.about.title } 
               </h2>
            </Col>
        
            <Col xs={12} md={8} >
                <p>
                {  storage.about.text1 }<br/>
                {  storage.about.text2 } <br/>
                {  storage.about.text3 }
                </p>
                    
            </Col>
           
            <Col xs={12} md={4} >

            
            </Col>
            </Row>
        </Container>)
}


export default CubeAbout2