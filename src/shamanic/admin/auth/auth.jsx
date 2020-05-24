import React from 'react'
import { auth } from "../../../firebase"



function Auth ()  {

    const [firebaseUser,setFirebaseUser] = React.useState(false)


React.useEffect(() => {
  auth.onAuthStateChanged(user=>{ 
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
   })
},[])


return firebaseUser

}

export default Auth