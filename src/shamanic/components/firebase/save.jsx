import { db } from "../../../firebase"


let response = 404


const SaveFirebase = async (props) => {
    try{
        const data = await  db.collection(props.collection).doc(props.id).update(props.data);
        response = 200;
    }catch(error){
        response = 404;
    }
    return response 
}




export default SaveFirebase

