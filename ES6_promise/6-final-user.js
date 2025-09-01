export default async function handleProfileSignup(firstName, lastName, fileName){
    const sign = signUpUser(firstName, lastName); 
    const upload = uploadPhoto(fileName);
    const results = await Promise.allSettled([sign, upload]);
    
    return results.map(result => {
        if (result.status === 'fulfilled') {
            return { status: 'fulfilled', value: result.value };
        } else {
            return { status: 'rejected', value: result.reason };
        }
    });
}