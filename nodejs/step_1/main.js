
//node.js의 http모듈을 변수 http로 추출한다.
var http = require("http");

//http 모듈의 createServer 함수를 호출하여 서버 생성한다.
// request : 웹 요청 매개변수, response : 웹 응담 매개변수
http.createServer(function(request, response){
    
    //writeHead : 응답해더를 작성한다.
    //200 : 응답 성공, text/html: html 문서
    response.writeHead(200,{'Content-Type':'text/plain'});
    
    // end : 응답본문을 작성한다.
    response.end(a);

    //listen : 매개 변수로 포트와 호스트를 지정한다.
}).listen(8081,'127.0.0.1');

console.log("Server running at http://127.0.0.1:8081");

//비동기 평션 하나 만들고 포룸 돌아서 콘솔 찍음. 
//실행하다가 a를 실행을 하고 그 다음에 콘솔 로그 찍어 봄. 