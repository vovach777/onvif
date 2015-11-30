/**
 * Created by Andrew D.Laptev<a.d.laptev@gmail.com> on 1/21/15.
 */

var CAMERA_HOST = '10.0.100.102', //axis
	USERNAME = 'root',
	PASSWORD = 'root';

var http = require('http'),
	Cam = require('./index').Cam;

new Cam({
	hostname: CAMERA_HOST,
	username: USERNAME,
	password: PASSWORD
}, function(err) {
        if (err) {
           console.dir(err);
	   return;
        }
 	console.log('connected!');
	console.dir( this.deviceInformation );
//	console.dir( this.timeShift );
//	console.dir( this.uri );
//	console.dir( this.capabilities );
	console.dir( this.profiles );
	this.getStreamUri({protocol:'RTSP'}, function(err, stream) {
		if (err)
	        console.dir(err);
		else
			console.dir(stream);
		// http.createServer(function (req, res) {
		// 	res.writeHead(200, {'Content-Type': 'text/html'});
		// 	res.end(
		// 		'<html><body>' +
		// 		'<embed type="application/x-vlc-plugin" target="' + stream.uri + '"></embed>' +
		// 		'</boby></html>');
		// }).listen(3030);
	});
});