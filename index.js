/**
 * @description Common module for ONVIF library
 * @author Andrew D.Laptev <a.d.laptev@gmail.com>
 * @licence MIT
 */

module.exports = {
	Cam: require('./lib/cam').Cam
	, Discovery: require('./lib/discovery').Discovery
};