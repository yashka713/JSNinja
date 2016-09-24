function show() { 
for (var i = 0; i < arguments.length; i++) { 
if (arguments[i] < 0){ 
return false; 
}
if (typeof(arguments[i]) != "number") { 
return undefined; 
}
else return true; 
} 
} 

alert (show('bla'));

function show() { 
for (var i = 0; i < arguments.length; i++) { 
	if (arguments[i] < 0){ 
	return false; 
	}else if (arguments[i] > 0){ 
return true; 
	} 
} 
if (typeof(arguments[i]) != "number") { 
return undefined; 
} 

} 

alert (show('lalala'));