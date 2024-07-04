import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { TelephoneService } from './telephone.service';
import { OnIncomeCall } from 'src/plugins';
import { MessagesWsGateway } from 'src/messages-ws/messages-ws.gateway';

interface IQuery extends Response {
    PHONE?: string;
    NAME?: string;
    IP: string;
} 

@Controller('telephone')
export class TelephoneController {

    private checkName = (phone: string, name: string | undefined): string => {
        if(!name || phone == name){
            return 'Unknown'
        }
        return name
    }
  
    constructor(
        private readonly telephoneService: TelephoneService,
        private readonly ws: MessagesWsGateway
    ){}



    @Get('incomingCall')
    incomingCall(@Query() query: IQuery){
        const ip = query.IP;
        const phone = query.PHONE;
        let name = this.checkName(query.PHONE, query.NAME);
        this.ws.onIncomeCallWss(ip, phone, name);
    }

    @Get('outgoingCall')
    outgoingCall(@Query() query: IQuery){
        const ip = query.IP;
        const phone = query.PHONE;
        let name = this.checkName(query.PHONE, query.NAME);
        this.ws.onOutgoingCallWss(ip, phone, name);
    }

    @Get('establichedCall')
    establishedCall(@Query() query: IQuery){
        console.log(query);
        const ip = query.IP;
        this.ws.onEstablishedCallWss(ip);
    }

    @Get('terminateCall')
    terminateCall(@Query() query: IQuery){
        const ip = query.IP;
        this.ws.onTerminateCallWss(ip);
    }

    @Get('mute')
    mute(@Query() query: IQuery){
        const ip = query.IP;
        this.ws.onMuteWss(ip);
    }

    @Get('unmute')
    unmute(@Query() query: IQuery){
        const ip = query.IP;
        this.ws.onUnMuteWss(ip);
    }

    @Get('headset')
    headset(@Query() query: IQuery){
        const ip = query.IP;
        this.ws.onHeadsetWss(ip);
    }

    @Get('handsfree')
    handsfree(@Query() query: IQuery){
        const ip = query.IP;
        this.ws.onHandsfreeWss(ip);
    }
    
    @Get(':k')
    dialUp(@Param('k') k: string ){
        return this.telephoneService.dial(k);
    }
}
