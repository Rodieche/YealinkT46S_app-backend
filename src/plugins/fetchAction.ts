
export const fetchAction = async (action: string) => {
    try{
        const base_url = `http://${process.env.TELEPHONE_IP}/servlet?key=`;

        const headers = new Headers({
            'Authorization': `Basic ${Buffer.from(`${process.env.TELEPHONE_USER}:${process.env.TELEPHONE_PASS}`).toString('base64')}`,
        });

        const url = `${base_url}${action}`;

        const marcar = await fetch( url , {
            headers: headers
        });
    }catch(e){
        console.log(e)
        // throw new Error('Error on telephone connection');
    }

}