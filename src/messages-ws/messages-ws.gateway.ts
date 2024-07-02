import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { MessagesWsService } from './messages-ws.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class MessagesWsGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server;

  constructor() {}

  handleDisconnect(client: Socket) {
    // console.log('Client disconnected:', client.id);
  }

  handleConnection(client: Socket) {
    // console.log('Client connected:', client.id);
  }

  @SubscribeMessage('incomingCall')
  onIncomeCallWss(ip: string, callerNumber: string, callerId?: string) {
    this.wss.emit('incomingCall', {ip, callerNumber, callerId});
  }

  @SubscribeMessage('outgoingCall')
  onOutgoingWss(ip: string, callerNumber: string, callerId?: string) {
    this.wss.emit('outgoingCall', {ip, callerNumber, callerId});
  }

  @SubscribeMessage('terminateCall')
  onTerminateCallWss(ip: string) {
    this.wss.emit('terminateCall', {ip});
  }


}