
Thumper
=======

Thumper is a thumbnial generator for node.js using [imageMagick]. To use it 
you need the the imageMagick tools installed.

Usage
-----

    var thumper = require("thumper");
    
    thumper.config({base: "/some/images/", store: "/some/images/.thumbs"});
    
    // fetches a 300 pixel thumbnail  of image.jpg
    thumper.fetch("image.jpg", 300, function(err, data) {
        // do something with data, like sent as HTTP response
    });

Install
-------

Thumper is a standard NPM package:

    npm install thumper
    
API
---

### config(options)

Sets the basic configuration for thumper. The avialable options are:

* **store** The base folder where the thumbnails are to be stored.
* **base** The base folder the images are stored. All file paths are relative to that.

### generate(file, size, callback)

Generates the thumbnail if required. If the thumbnail is generated or an 
error ocured the callback is called and contains the file path to the thumbnail. 
The callback signature is *callback(err, thumbnail)*

### fetch(file, size, callback)

Generates the thumbnail if requried and fetches it. This function will
read the created thumbnail and return the data in the callback. The 
callback signature is *callback(err, data)*

License
-------

Thuper is released under the MIT Liscense.

Copyright (c) 2012 Sean Farrell

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of 
the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[imageMagick]: http://www.imagemagick.org
