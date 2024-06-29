export const OnIncomeCall = (callerNumber: string, callerId?: string) => {
    console.log('Income Call ID:', callerId);
    console.log('Income Call Number:', callerNumber);
    return;
}

export const OnOutcomeCall = (callerNumber: string, callerId: string) => {
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