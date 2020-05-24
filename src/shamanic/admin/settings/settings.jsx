import React from 'react'
import { Container } from 'react-bootstrap'
import { db } from "../../../firebase"
import Table from "./tableSettings"
import Navegador from '../nav/nav'

function Settings(){

    const [tareas,setTareas] = React.useState([])
    const [active,setActive] = React.useState(false)

    React.useEffect(() => {

        const obtenerData = async () => {

                try {

                    const data = await  db.collection('Settings').get()
                    const arrayData = data.docs.map(doc => ({ id: doc.id,...doc.data() }))
                
                    setTareas(arrayData)

                    if(data.docs){
                        setActive(true)
                    }
    
                } catch (error) {
                    
                }

        }

        obtenerData()

        },[])

            if( active ) return (
                <React.Fragment>
                <Navegador />
            <Container>
                <Table tareas={tareas}  />
            </Container> </React.Fragment>)
            else return ''


    }

    

          


export default Settings