import fs from 'fs'
import jwt from 'jsonwebtoken'

const payload = { 
    username: 'codedamn'
 };

const secretKey = 'weewrewewrwr3wfsew-ewwfed-ewtewfdv';

const token = jwt.sign(payload, secretKey);

console.log('Token:', token)

const decodedPayload = jwt.decode(token);

console.log('Decoded Payload:', decodedPayload);

const verified = jwt.verify(token, secretKey);

console.log('Verified:', verified)

export { 
    token, decodedPayload, verified 
};
