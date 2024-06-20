import { Injectable } from '@nestjs/common';

@Injectable()
export class TelephoneService {

    private base_url = `http://${process.env.TELEPHONE_IP}/servlet?key=`;
    private headers = new Headers({
        'Authorization': `Basic ${Buffer.from(`${process.env.TELEPHONE_USER}:${process.env.TELEPHONE_PASS}`).toString('base64')}`
    });

    async dial(key: string){
        const marcar = await fetch(`${this.base_url}${key}`, {
            headers: this.headers
        });
    }

}