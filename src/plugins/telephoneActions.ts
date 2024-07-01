import { fetchAction, telephoneKeys } from "./";

export const dialKey = async (key: string) => {

    const action = telephoneKeys[key];
    if(!action) return;
    fetchAction(action);
}