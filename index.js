
var fs       = require("fs");
var mkdirp   = require("mkdirp");
var path     = require("path");
var im       = require("imagemagick");

var options = {
    store: ".thumbs",
    base: "."
};

/**
 * Initialize the thumbnail generation.
 *
 * @param options
 *   store - the location where the thumbnails are stored
 *   base  - the base folder for lookups
 **/
exports.config = function (opt) {
    // we only overwrite the options that are given, other defaults remain
    for (key in opt) {
        options[key] = opt[key];
    }
}

/**
 * Generate the Thumbnail
 **/
exports.generate = function (file, size, cb) {
    var fullFile  = path.join(options.base, file);
    console.log("fullFile: " + fullFile);
    var thumbFile = path.join(options.store, size, file);
    console.log("thumbFile: " + thumbFile);
    var thumbDir  = path.dirname(thumbFile);
    console.log("thumbDir: " + thumbDir);
    
    console.log("GO!");
    fs.exists(thumbFile, function (exists) {
        if (exists) {
            cb(null, thumbFile);
        }
        else {            
            mkdirp(thumbDir, function (err) {
                if (err) {
                    console.log("mkdir failed " + err);
                    cb(err, null);
                }
                else {
                    console.log("convert ");
                    im.convert([fullFile, "-resize", size + "x" + size + ">", thumbFile], function (err) { 
                        if (err) {			
                            console.log("convert " + failed);
                            cb(err, null);                            
                        }
                        else {
                            console.log("convert  OK");
                            cb(null, thumbFile);                            
                        }
                    });
                }
            });           
        }
    });
}

/**
 * Fetch a Thumbnail
 **/
exports.fetch = function (file, size, cb) {
    exports.generate(file, size, function (err, thumbnail) {
        if (err) {
            cb(err, null);
        }
        else {        
            fs.readFile(thumbnail, cb);
        }
    });   
}
