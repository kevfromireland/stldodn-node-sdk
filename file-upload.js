var azure = require('azure-storage');
var Promise = require('promise');
var uuid = require('node-uuid');

var blobSvc = azure.createBlobService();

module.exports = {
  upload: function(data) {
    return new Promise(function(fulfil, reject) {
          var filename = uuid.v4() + '.txt';
          var stream = blobSvc.createWriteStreamToBlockBlob('stldodn', filename, {
            contentType: 'text/plain'
          });

          stream.on('error', reject);
          stream.on('close', function() {
	    fulfil('https://stldodnnodestorage.blob.core.windows.net/stldodn/' + filename);
	  });

          stream.end(new Buffer(data));
    });
  }
}
