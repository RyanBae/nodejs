
//몽고DB 연결하기 
// 2가지 방법 
// 1. 몽고db api 사용
// 2. 몽구스 라이브러리 이용하여 사용.


module.exports = function(app, fs)
{
    app.get('/', function(req,res){
        res.render('index',{
            title: "MY HOMEPAGE",
            length: 5
        })
    });

    //read
    //list GET API
    app.get('/list', function (req, res) {
        fs.readFile( __dirname + "/../data/" + "user.json", 'utf8', function (err, data) {
            if(err){
                console.log(err);
            }
            console.log( data );
            res.end( data );
        });
     })

     //read
     //getUser GET API
     app.get('/getUser/:username', function(req,res){
        fs.readFile( __dirname + "/../data/user.json",'utf8',function(err,data){
            if(err){
                console.log(err)
            }
            console.log(data)
            var users = JSON.parse(data);
            res.json(users[req.params.username]);
        });
     })

     //create
     //POST addUser/:username
     //body:{"password":"__","name":"__"}
     app.post('/user/:username', function(req,res){
         var result = {};
         var username = req.params.username;

         //Check Req Validity
         if(!req.body["password"] || !req.body["name"]){
             result["success"] = 0;
             result["error"] = "invalid request";
             res.json(result);
             return;
         }

         //Load Data & Check Duplication
         fs.readFile( __dirname + "/../data/user.json", 'utf8', function(err, data){
            if(err){console.log(err)}
            var users = JSON.parse(data);
            if(users[username]){
                //Duplication Found
                result["success"] = 0;
                result["error"] = "duplicate";
                res.json(result);
                return;
            }

            //Add To Data
            users[username] = req.body;

            //Save Data
            fs.writeFile(__dirname+"/../data/user.json",
                        JSON.stringify(users, null, '\t'), 'utf8', function(err, data){
                            if(err){
                                console.log(err)
                            }
                            result = {"success":1};
                            res.json(result);
                        })
         })
     })
     //update
     app.put('/user/:user', function(req, res){
         var result = {};
         var user = req.params.user;

         //Check Req Validity
         if(!req.body["password"] || !req.body["name"]){
            result["success"] = 0;
            result["error"] = "invalid request";
            res.josn(result);
            return;
         }

         //Load Data
         fs.readFile( __dirname + "/../data/user.json", "utf8", function(err, data){
             var users = JSON.parse(data);
             //add/modify data
             users[user] = req.body;

             //save data
             fs.writeFile( __dirname + "/../data/user.json",
                            JSON.stringify(users, null, '\t'), 'utf8', function(err, data){
                                if(err){
                                    console.log(err)
                                }
                                result = {"success" : 1};
                                res.json(result);
                            })
         })


     })


     app.delete('/user/:user', function(req, res){
        var result = {};
        //load Data
        fs.readFile(__dirname + "/../data/user.json", 'utf8', function(err, data){
            var users = JSON.parse(data);

            //if not found
            if(!users[req.params.user]){
                result["success"] = 0;
                result["error"] = "not found";
                res.json(result);
                return;
            }

            //delete from data
            delete users[req.params.user];

            //save file
            fs.writeFile(__dirname + "/../data/user.json", 
                        JSON.stringify(users, null, '\t'), "utf8", function(err, data){
                if(err){
                    console.log(err)
                }
                result["success"] = 1;
                res.json(result);
                return;
            })

        })

     })




}