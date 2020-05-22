import React from 'react'

function DataSettings(){


    const [tareas,setTareas] = React.useState([])
    const [active,setActive] = React.useState(false)




            if( active ) return tareas
            else return ''


    }

    

          


export default DataSettings