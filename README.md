# Start project

1. Download repository form: https://github.com/Rodieche/YealinkT46S_app-frontend.git
2. Replace ```.env.templace``` to ```.env``` and add the enviroment vars as mentioned on file.
3. Install dependencies: ````yarn install```
4. Run server
- a. Development: ```yarn run start:dev```

# Setting up Phone

> [!NOTE]
It was tested on Yealink T46S model

1. Go to Yealink phone ip 
2. Login with credentials
3. Go to Features tab > Action URL
4. Set:
- Incoming Call: 
```html
http://{ip}:{port}/telephone/incomingCall?IP=$ip&NAME=$callerID&PHONE=$calledNumber
```
- Outgoing Call: 
```html
http://{ip}:{port}/telephone/outgoingCall?IP=$ip&NAME=$callerID&PHONE=$calledNumber
```
- Terminated: 
```html
http://{ip}:{port}/telephone/terminateCall?IP=$ip
```
- Cancel Call Out: 
```html
http://{ip}:{port}/telephone/terminateCall?IP=$ip
```

- Mute
```html
http://{ip}:{port}/telephone/mute?IP=$ip
```

# Features
- [X] Incoming Calls function
- [X] Outgoing Calls function
- [X] Terminated or Cancellated Calls function
- [X] Established Calls function
- [X] Mute / Unmute function
- [ ] OnHook / OffHook function
- [ ] OpenDND / CloseDND function
- [ ] Hold/ UnHold function
- [ ] Missed Call function
- [ ] Idle to Busy function
- [ ] Busy to Idle function
- [ ] Rejected Incoming Call function
- [ ] Answer New Incoming Call function
- [ ] Headset function
- [ ] Handsfree function
- [ ] Peripheral Information
- [ ] Local Database 

# GUI
https://github.com/Rodieche/YealinkT46S_app-frontend.git
