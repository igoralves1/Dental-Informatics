//Util

const extractError = (error) => {
    return {code: error.statusCode, message: error.message};
}

const extractType = (value) => {
    const type = value.split('.');

    return type.length > 4 ? type.slice(0, -2).join('.') : type.join('.');
}

const formatPhone = (value) => {
    return value ? value.replace('+', '').replaceAll(' ', '') : "";
}

const parseJson = (value) => {
    try {
        return JSON.parse(value);
    } catch (error) {
        return null;
    }
}

module.exports = {
    extractError,
    extractType,
    formatPhone,
    parseJson
};


==============

// Response

class Response {
    data = [] || {};
    count = 0;
    scannedCount = 0;
    lastEvaluatedKeyEncoded = undefined;
}

exports.IResponse = Response;  
  
  
