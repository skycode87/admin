import React from 'react'
import { Container } from 'react-bootstrap'
import { db,fire } from "../../../firebase"
import Table from "../table/table"
import Navegador from '../nav/nav'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es'


function validarLead(x){
   
    if(x){
       return moment(x).format('D MMMM h:mm a')
    }else{
        return ''
    }

} 


function Contacts(props){


    const [tareas,setTareas] = React.useState([])
    const [active,setActive] = React.useState(false)
    const[user,setUser] = React.useState(null)


    React.useEffect(() => {


        fire.auth().onAuthStateChanged(function(user) {
           
            if (user) {
              
                setUser(user)

            } else {
               
                props.history.push('/')
            
            }
          });
      



        const obtenerData = async () => {

                try {

                    const data = await  db.collection('Contacts').get()
                    const arrayData = data.docs.map(doc => (
                        { id: doc.id,
                          ...doc.data(),
                          date2:moment(doc.data().date).format('D MMMM h:mm a'),
                          lead2: validarLead(doc.data().lead)

                        }
                        
                        
                        )

                        

                        )
                



                    setTareas(arrayData)

                    if(data.docs){
                        setActive(true)
                    }
    
                } catch (error) {
                    
                }

        }

        obtenerData()

        },[props])

            if( active ) return (
                <React.Fragment>
        
            <Container>
               {/*
 <Navegador />
               
               */}  
                <Table tareas={tareas}  />
            </Container></React.Fragment>)
            else return ''


    }

    

          


export default withRouter(Contacts)