const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validteToken = asyncHandler(async (res,res,next) => {
    let token;
    let authHeader = res.headers.Authorization || res.headers.authorization;

    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.Acc)
    }
})