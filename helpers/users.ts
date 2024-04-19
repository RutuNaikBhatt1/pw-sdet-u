import { faker} from '@faker-js/faker';

export function generateUserName(){
    const user = ('test_user'+ faker.person.firstName());
    return user;
}
export function generateEmailAddress(){
    const email = ('test_user_'+faker.person.firstName()+`@safetodelete.com`);
    return email;
}
export function generatePassword(){
    const password = faker.internet.password();
    return password;
}
