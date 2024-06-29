import { Injectable } from '@nestjs/common';
import { dialKey } from 'src/plugins';

@Injectable()
export class TelephoneService {

    async dial(key: string){
        await dialKey(key);
    }

}