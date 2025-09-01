import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    let photo = uploadPhoto();
    let user = createUser();
    Promise.all([user, photo])
        .then(results => {
            const [userResult, photoResult] = results;
            console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
        })
        .catch(error => {
            console.log("Signup system offline");
        })
}