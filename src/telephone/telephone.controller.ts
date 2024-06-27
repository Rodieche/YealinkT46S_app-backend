import { Controller, Get, Param } from '@nestjs/common';
import { TelephoneService } from './telephone.service';

@Controller('telephone')
export class TelephoneController {

    constructor(private readonly telephoneService: TelephoneService ){}

    // @Get('hola')
    // test(){
    //     console.log('hola');
    // }

    @Get(':k')
    dialUp(@Param('k') k: string ){
        return this.telephoneService.dial(k);
    }
}
