import { fetchAction, telephoneKeys } from "./";

export const dialKey = async (key: string) => {

    const action = telephoneKeys[key];
    if(!action) return;
<<<<<<< HEAD
    //console.log(`${key}: ${action}`);
    // console.log(action);
    try{
        const url = `${base_url}${key}`;
        const marcar = await fetch( url , {
            headers: headers
        });
    }catch(e){
        //console.log(e);
        throw new Error('Error on telephone connection');
    }

=======
    fetchAction(action);
>>>>>>> realtime
}