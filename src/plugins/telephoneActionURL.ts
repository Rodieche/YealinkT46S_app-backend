/* 
ON HOOK
OFF HOOK
INCOMING CALL
OUTGOING CALL
ESTABLISHED
TERMINATED
OPEN DND
CLOSE DND
HOLD
UNHOLD
MUTE
UNMUTE
MISSED CALL
IDLE TO BUSY
BUSY TO IDLE
REJECT INCOMING CALL
ANSWER NEW INCOMING CALL
HEADSET
HANDSFREE
*/

import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { MessagesWsGateway } from "src/messages-ws/messages-ws.gateway";


export const OnIncomeCall = async (callerNumber: string, callerId?: string) => {
    console.log('Income Call ID:', callerId);
    console.log('Income Call Number:', callerNumber);
    return;
};

export const OnOutgoingCall = (callerNumber: string, callerId: string) => {
    console.log('Income Call ID:', callerId);
    console.log('Income Call Number:', callerNumber);
    return;
}

export const OnMute = () => {
    console.log('MUTE');
    return;
}

export const OnUnmute = () => {
    console.log('UNMUTE');
    return;
}

export const OnHook = () => {
    console.log('ONHOOK');
    return;
}

export const OffHook = () => {
    console.log('OFFHOOK');
    return;
}

export const OnEstablished = () => {
    console.log('ESTABLISHED');
    return;
}

export const OnTerminated = () => {
    console.log('TERMINATED');
    return;
}

export const OnOpenDND = () => {
    console.log('Open DND');
    return;
}

export const OnCloseDND = () => {
    console.log('Close DND');
    return;
}

export const OnHold = () => {
    console.log('On Hold');
    return;
}

export const OnUnHold = () => {
    console.log('On UnHold');
    return;
}

export const OnMissedCall = () => {
    console.log('Missed Call');
    return;
}

export const OnHeadset = () => {
    console.log('Headset');
    return;
}

export const OnHandsfree = () => {
    console.log('Handsfree');
    return;
}