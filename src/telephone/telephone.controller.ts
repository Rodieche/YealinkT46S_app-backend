import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { TelephoneService } from './telephone.service';
import { OnIncomeCall } from 'src/plugins';
import { MessagesWsGateway } from 'src/messages-ws/messages-ws.gateway';

@Controller('telephone')
export class TelephoneController {

    constructor(
        private readonly telephoneService: TelephoneService,
        private readonly ws: MessagesWsGateway
    ){}

    @Get('incomingCall')
    incomingCall(@Query() query: Response){
        this.ws.onIncomeCallWss(query['IP'], query['PHONE'], query['NAME']);
        console.log(query);
    }

    @Get('outgoingCall')
    outgoingCall(@Query() query: Response){
        console.log(query);
    }

    @Get(':k')
    dialUp(@Param('k') k: string ){
        return this.telephoneService.dial(k);
    }
}
