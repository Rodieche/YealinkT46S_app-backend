import { telephoneKeys } from "./";

const base_url = `http://${process.env.TELEPHONE_IP}/servlet?key=`;

const headers = new Headers({
    'Authorization': `Basic ${Buffer.from(`${process.env.TELEPHONE_USER}:${process.env.TELEPHONE_PASS}`).toString('base64')}`,
});

export const dialKey = async (key: string) => {
    const action = telephoneKeys[key];
    if(!action) return;
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

}