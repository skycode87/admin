import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ItemIncluded from "./itemIncluded"
import Cta01 from "./cta/cta01"
import Storage from '../components/storage'
const storage = Storage()

const SectionWhatsIncluded = () => {

  
     
        return (<Container id="SectionWhatsIncluded" className="section">
            <Row>
            <Col xs={12} md={12} >
               <h2 className="text-center">
               <span className="title"> { storage.includesSection.title } </span>
               </h2>
            </Col>
            </Row>
            <Row>
           
            {
                
                storage.includes.map( ( item ) => (

                    <Col xs={12} md={12} >
                            <ItemIncluded  { ...item }  />
                    </Col>

                 ) )
            }    
   <Col xs={12} md={12} >
                            <Cta01 />
                    </Col>
            
            </Row>
        </Container>)

}


export default SectionWhatsIncluded




