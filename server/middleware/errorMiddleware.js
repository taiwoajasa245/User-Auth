const express = require('express'); 


const handleGlobalError = ((error, req, res, next) => {
    error.statuCode = error.statuCode || 500;
    error.status = error.status || "Error";

    res.satus(error.statuCode).json({
        status: error.status,
        message: error.message,
    }); 
}); 

module.exports = handleGlobalError; 

