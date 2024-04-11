import { randomInt } from "crypto";

export function userName(){
    const name = 'test_user'+(new Date().toISOString().replace(/[-T:.]/g, ''));
    return name;
}
export function emailAddress(){
    const emailId = (userName()+`@safetodelete.com`);
    return emailId;
}
export function password(){
    const password = `${'Sd@tUn1c0rns'+ randomInt(5)}`
    console.log(password)
    return password
}
