#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const parser = require('xml2json');

const DIRNAME = './fmod_project/Metadata/ParameterPreset';

let files = fs.readdirSync(DIRNAME) || [];

files.forEach(filename => {
	let fullfilename = path.join(DIRNAME, filename);
	let fileinfo = fs.statSync(fullfilename);

	if (fileinfo.isFile()) {
		let data = fs.readFileSync(fullfilename);
		let json = JSON.parse(parser.toJson(data, { reversible: true }));
		console.log();
		console.log(`Processing ${fullfilename}`);
		let firstobject = json.objects.object[0];
		if (firstobject.class === 'ParameterPreset') {
			let oldvalue = firstobject.property.value.$t;
			let newvalue = oldvalue.replace(/\//g, '.').replace(/\[\*]/g, '[#]');
			if (newvalue !== oldvalue) {
				console.log(`\x1b[31m${oldvalue}\x1b[0m ----> \x1b[36m${newvalue}\x1b[0m`);
				firstobject.property.value.$t = newvalue;
				let stringified = JSON.stringify(json);
				let xml = parser.toXml(stringified);
				fs.writeFileSync(fullfilename, xml);
				console.log('\x1b[32mUPDATED.\x1b[0m');
			} else {
				console.log('\x1b[33mUnchanged.\x1b[0m');
			}
		} else {
			console.log('\x1b[31mERROR: Unsupported format\x1b[0m');
		}
	}

});
