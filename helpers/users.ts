import { randomInt } from "crypto";

export function generateUserName(){
    const user = 'test_user'+(new Date().toISOString().replace(/[-T:.]/g, ''));
    return user;
}
export function generateEmailAddress(){
    const email = (generateUserName()+`@safetodelete.com`);
    return email;
}
export function generatePassword(){
    const password = `${'Sd@tUn1c0rns'+ randomInt(5)}`;
    return password;
}
