
var Node = function(value){
	this.value = parseInt(value,10);	
	var next;	
};
Node.prototype.setNext = function(node){
	this.next = node;
}
Node.prototype.getNext = function(){
	return this.next;
}
var List = function(){
	var rootValue;
	this.currentValue = this.rootValue;
}

List.prototype.pushEnd = function(node){
	if(this.rootValue == undefined){
		this.rootValue =  node;
		this.currentValue = node;
	}
	else{
		this.currentValue.setNext(node);
		this.currentValue = node;
	}
}

List.prototype.pushBegin = function(node){
	if(this.rootValue == undefined){
		this.rootValue =  node;
		this.currentValue = node;
	}
  else{
		node.setNext(this.rootValue);
		this.rootValue = node;
	}
}

List.prototype.pushAt = function(index,node){
	if(index > this.length() || index < 0){
		console.log("Invalid index");
		return;
	}
	var tmpNode = this.rootValue;
	if(this.rootValue == undefined){
		this.rootValue =  node;
		this.currentValue = node;
	}
	else{
		if(index == 0){
			this.pushBegin(node);
			return;
		}
		for (var i = 0; i < index - 1; i++) {
			tmpNode = tmpNode.next;
		}
		var nextAfterInsert = tmpNode.next;
		tmpNode.setNext(node);
		node.setNext(nextAfterInsert);
	}
}

/*
some helpful methods
*/
/************************************************/

List.prototype.iterate = function (){
	var tmpNode = this.rootValue;
	while(tmpNode != undefined){
		console.log(tmpNode.value);
		tmpNode = tmpNode.getNext();
	}
}

List.prototype.isEmpty = function(){
	return this.rootValue == undefined ? true : false;
}

List.prototype.length = function(){
	var tmpNode = this.rootValue;
	var count = 0;
	while(tmpNode != undefined){
		tmpNode = tmpNode.next;
		++count;
	}
	return count;
}

/*********************************************/



var node1 = new Node(2);
var node2 = new Node(5);
var node3 = new Node (10);
var node4 = new Node (8);
var node5 = new Node (7);
var node6 = new Node (6);
var node7 = new Node (5);
var node8 = new Node (0);

var lst = new List();

lst.pushEnd(node1);
lst.pushEnd(node2);
lst.pushEnd(node3);
lst.pushEnd(node3);
lst.pushEnd(node4);
lst.pushEnd(node5);
lst.pushEnd(node6);
lst.pushEnd(node7);

lst.pushAt(6,node8);
lst.iterate();



