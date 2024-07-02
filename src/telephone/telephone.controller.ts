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
        if(query['PHONE'] == query['NAME']){
            query['NAME'] = 'Unknown';
        }
        this.ws.onIncomeCallWss(query['IP'], query['PHONE'], query['NAME']);
    }

    @Get('outgoingCall')
    outgoingCall(@Query() query: Response){
        if(query['PHONE'] == query['NAME']){
            query['NAME'] = 'Unknown';
        }
        this.ws.onOutgoingWss(query['IP'], query['PHONE'], query['NAME']);
    }

    @Get('terminateCall')
    terminateCall(@Query() query: Response){
        this.ws.onTerminateCallWss(query['IP']);
    }

    @Get(':k')
    dialUp(@Param('k') k: string ){
        return this.telephoneService.dial(k);
    }
}
