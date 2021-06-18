"use strict";
const Config = require('../config/config');
const async = require('async');
const moment = require('moment-timezone');

/*
 * GET admins listing.
 */

function isNumeric(n){
  return (typeof n == "number" && !isNaN(n));
}


exports.segitiga = function(req, res){
	console.log('Bilangan: Segita');	
	var respon = Config.base_response;
	var input = JSON.parse(JSON.stringify(req.body));
	var angka = input.angka;
	console.log(angka);
	if(angka == ""){
		respon.is_success = false;
		respon.description = 'Angka Not Found!';
	} else if(isNumeric(angka)){
		respon.is_success = false;
		respon.description = 'Angka not valid';
	} else {
		var str_angka = (angka).toString();
		var output = "";
		const a = Array.from(str_angka);
		for(var i=0; i<a.length; i++){
			var item = String(a[i]);
			for(var j=0; j<=i; j++){
				item+="0";
			}
			output +=item+"<br/>"; 
		}
		console.log(output);
		respon.is_success = true;
		respon.description = 'Success';
		respon.data = output;
	}
	res.json(respon);		
};

exports.ganjil = function(req,res){    	
	console.log('Bilangan: Ganjil');	
	var respon = Config.base_response;	
	var input = JSON.parse(JSON.stringify(req.body));
	var angka = input.angka;
	if(angka == ""){
		respon.is_success = false;
		respon.description = 'Angka Not Found!';
	} else if(isNumeric(angka)){
		respon.is_success = false;
		respon.description = 'Angka not valid';
	} else {
		var output = "";
		for(var i=0; i<angka; i++){
			if(i%2 != 0){
				output+=" "+(i).toString();
			}
		}
		console.log(output);
		respon.is_success = true;
		respon.description = 'Success';
		respon.data = output;
	}
	res.json(respon);		
};

function cekPrima( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}
exports.prima = function(req, res){
	console.log('Bilangan: Prima');
	  	
	var respon = Config.base_response;
	var input = JSON.parse(JSON.stringify(req.body));
	var angka = input.angka;
	if(angka == ""){
		respon.is_success = false;
		respon.description = 'Angka Not Found!';
	} else if(isNumeric(angka)){
		respon.is_success = false;
		respon.description = 'Angka not valid';
	} else {
		var output = "";
		for(var i=2; i<angka; i++){
			if(cekPrima(i)){
				output+=" "+(i).toString();
			}
		}
		console.log(output);
		respon.is_success = true;
		respon.description = 'Success';
		respon.data = output;
	}
	res.json(respon);		
};

