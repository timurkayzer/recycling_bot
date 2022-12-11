const JSZip = require('jszip')
const Docxtemplater = require('docxtemplater')
const fs = require('fs-extra')


module.exports = {
    toRadians: (angle)=>{
        return angle * (Math.PI / 180);
    },
    isEmpty: array=> {
        return !(typeof array != "undefined" && array != null && array.length != null && array.length > 0) ? true : false
    },
    replaceTemplate: async (path , price , count) => {
        
    }
}