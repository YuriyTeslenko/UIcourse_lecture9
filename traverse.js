
function Traverse(name){
	var inohash=name.indexOf(".")++;
	var inodot=name.indexOf(".")++;

	if inodot=1{
		return element.getElementsByClassName(name);
	}
	if inohash=1 && (!inodot){
		return document.getElementById(name);
	}
	var name1=name.split(" ");
	return document.getElementById(name1[0]).getElementsByClassName(name1[1]);
}