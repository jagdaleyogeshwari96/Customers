var http=require('http');   

var customer =[{
    id:1,
	name:"Riya",
	amount:2500
	
	
},
{
 id:2,
	name:"supriya",
	amount:2500
	
}
	
]

var count=45;
count++;
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(customer));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");