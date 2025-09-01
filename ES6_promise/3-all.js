import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    let photo = uploadPhoto();
    let user = createUser();
    
    return Promise.all([photo, user])
        .then(results => {
            const [photoResult, userResult] = results;
            console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
        })
        .catch(error => {
            console.log("Signup system offline");
        });
}