#!/usr/bin/env node

//index.js

var restify = require('restify');
var temporal = require('temporal');
var assert = require('assert');
var async = require('async');

var droneClient = restify.createJsonClient({
    url: 'http://localhost:7777'
});

var server = restify.createServer();
server.pre(restify.pre.userAgentConnection());

var port = process.env.PORT || 6767;
var extras = process.env.EXTRAS || false;
server.use(restify.bodyParser());

server.post('/drone-test/test', test_func );
server.post('/drone-test/test1', test1_func );
server.post('/drone-test/test2', test2_func );
server.post('/drone-test/test3', test3_func );
server.post('/drone-test/square', square_func );
server.post('/drone-test/M', M_func );
server.post('/drone-test/vsquare', vsquare_func );

function log_client_res(err, req, res, obj){
    assert.ifError(err);
    console.log('%d -> %j', res.statusCode, res.headers);
    console.log('%j', obj); 
}

var api_path = '/drone-api/drone';


function vsquare_func(req, res, next){
    temporal.queue([
        {
            delay: 1000,
            task:   function(){
                droneClient.post(api_path + '/takeOff', {}, function(e,rq,rs,ob){
                    log_client_res(e, rq, rs, ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/up', {speed:40,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });   
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/up', {speed:40,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });   
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/right', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/down', {speed:40,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });   
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/left', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/land', {}, function(e,rq,rs,ob){
                    log_client_res(e,rq,rs,ob);
                });
            
            }
        },
        {
            delay: 2000,
            task: function(){
                droneClient.get(api_path, function(e,rq,rs,ob){
                    log_client_res(e,rq,rs,ob);
                    res.json({message:"done with test sequence"});
                });
            }
        }
    ]);
    return next;
}





function M_func(req, res, next){
    temporal.queue([
        {
            delay: 1000,
            task:   function(){
                droneClient.post(api_path + '/takeOff', {}, function(e,rq,rs,ob){
                    log_client_res(e, rq, rs, ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/up', {speed:40,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });   
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/forward', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/turnLeft', {speed:40,steps:7},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
                
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/backward', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/turnRight', {speed:40,steps:14},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
                
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/forward', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/turnLeft', {speed:40,steps:7},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
                
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/backward', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/land', {}, function(e,rq,rs,ob){
                    log_client_res(e,rq,rs,ob);
                });
            
            }
        },
        {
            delay: 2000,
            task: function(){
                droneClient.get(api_path, function(e,rq,rs,ob){
                    log_client_res(e,rq,rs,ob);
                    res.json({message:"done with test sequence"});
                });
            }
        }
    ]);
    return next;
}

function square_func(req, res, next){
    temporal.queue([
        {
            delay: 1000,
            task:   function(){
                droneClient.post(api_path + '/takeOff', {}, function(e,rq,rs,ob){
                    log_client_res(e, rq, rs, ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/up', {speed:40,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });   
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/forward', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/right', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/backward', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/left', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneClient.post(api_path + '/land', {}, function(e,rq,rs,ob){
                    log_client_res(e,rq,rs,ob);
                });
            
            }
        },
        {
            delay: 2000,
            task: function(){
                droneClient.get(api_path, function(e,rq,rs,ob){
                    log_client_res(e,rq,rs,ob);
                    res.json({message:"done with test sequence"});
                });
            }
        }
    ]);
    return next;
}


function test3_func(req, res, next){
    temporal.queue([
        {
            delay: 1000,
            task:   function(){
                droneclient.post(api_path + '/takeoff', {}, function(e,rq,rs,ob){
                    log_client_res(e, rq, rs, ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneclient.post(api_path + '/up', {speed:40,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });   
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneclient.post(api_path + '/forward', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneclient.post(api_path + '/backward', {speed:20,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
            
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneclient.post(api_path + '/turnright', {speed:40,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                });
                
            }
        },
        {
            delay: 2000,
            task:   function(){
                droneclient.post(api_path + '/land', {}, function(e,rq,rs,ob){
                    log_client_res(e,rq,rs,ob);
                });
            
            }
        },
        {
            delay: 2000,
            task: function(){
                droneclient.get(api_path, function(e,rq,rs,ob){
                    log_client_res(e,rq,rs,ob);
                    res.json({message:"done with test sequence"});
                });
            }
        }
    ]);
    return next;
}

function test_func(req, res, next){
    //runs test sequence
    
    async.series([
    function(callback){ 
        droneClient.post(api_path + '/takeOff', {}, function(e,rq,rs,ob){
            log_client_res(e, rq, rs, ob);
            callback(null, 0);
        });
    }, function(callback){
        if(extras){
            droneClient.post(api_path + '/up', {speed:40,steps:20},
                 function(e,rq,rs,ob){
                    log_client_res(e,rq,rs,ob);
                    callback(null,0.5);
                 });   
        } else { callback(null, 0.5); }
    }, function(callback){
        setTimeout(function(){
            droneClient.post(api_path + '/forward', {speed:60,steps:20},
                    function(e,rq,rs,ob){
                        log_client_res(e,rq,rs,ob);
                        callback(null,1);
                    });
        }, 1000); 
    }, function(callback){
        setTimeout(function(){
          droneClient.post(api_path + '/frontFlip', {}, function(e,rq,rs,ob){
              log_client_res(e,rq,rs,ob);
              callback(null, 2);
          });
        }, 1000);
    }, function(callback){
        setTimeout(function(){
            droneClient.post(api_path + '/land', {}, function(e,rq,rs,ob){
                log_client_res(e,rq,rs,ob);
                callback(null, 3);
            });
        }, 1000);
    }, function(callback){
        droneClient.get(api_path, function(e,rq,rs,ob){
            log_client_res(e,rq,rs,ob);
            res.json({message:"done with test sequence"});
            callback(null, 4);
        });
    }
    ]);
    return next();
}

function test1_func(req, res, next){
    
    async.series([
    function(callback){ 
        droneClient.post(api_path + '/takeOff', {}, function(e,rq,rs,ob){
            log_client_res(e, rq, rs, ob);
            callback(null, 0);
        });
    }, function(callback){
        if(extras){
            droneClient.post(api_path + '/up', {speed:40,steps:20},
                 function(e,rq,rs,ob){
                    log_client_res(e,rq,rs,ob);
                    callback(null,0.5);
                 });   
        } else { callback(null, 0.5); }
    //}, function(callback){
    //    setTimeout(function(){
    //        droneClient.post(api_path + '/forward', {speed:60,steps:20},
    //                function(e,rq,rs,ob){
    //                    log_client_res(e,rq,rs,ob);
    //                    callback(null,1);
    //                });
    //    }, 1000); 
    //}, function(callback){
    //    setTimeout(function(){
    //      droneClient.post(api_path + '/frontFlip', {}, function(e,rq,rs,ob){
    //          log_client_res(e,rq,rs,ob);
    //          callback(null, 2);
    //      });
    //    }, 1000);
    }, function(callback){
        setTimeout(function(){
            droneClient.post(api_path + '/land', {}, function(e,rq,rs,ob){
                log_client_res(e,rq,rs,ob);
                callback(null, 3);
            });
        }, 1000);
    }, function(callback){
        droneClient.get(api_path, function(e,rq,rs,ob){
            log_client_res(e,rq,rs,ob);
            res.json({message:"done with test sequence"});
            callback(null, 4);
        });
    }
    ]);
    return next();

}
function test2_func(req, res, next){
    //runs test sequence
    
    async.series([
    function(callback){ 
        droneClient.post(api_path + '/takeOff', {}, function(e,rq,rs,ob){
            log_client_res(e, rq, rs, ob);
            callback(null, 0);
        });
    }, function(callback){
        if(extras){
            droneClient.post(api_path + '/up', {speed:40,steps:20},
                 function(e,rq,rs,ob){
                    log_client_res(e,rq,rs,ob);
                    callback(null,0.5);
                 });   
        } else { callback(null, 0.5); }
    //}, function(callback){
    //    setTimeout(function(){
    //        droneClient.post(api_path + '/forward', {speed:60,steps:20},
    //                function(e,rq,rs,ob){
    //                    log_client_res(e,rq,rs,ob);
    //                    callback(null,1);
    //                });
    //    }, 1000); 
    }, function(callback){
        setTimeout(function(){
          droneClient.post(api_path + '/frontFlip', {}, function(e,rq,rs,ob){
              log_client_res(e,rq,rs,ob);
              callback(null, 2);
          });
        }, 1000);
    }, function(callback){
        setTimeout(function(){
            droneClient.post(api_path + '/land', {}, function(e,rq,rs,ob){
                log_client_res(e,rq,rs,ob);
                callback(null, 3);
            });
        }, 1000);
    }, function(callback){
        droneClient.get(api_path, function(e,rq,rs,ob){
            log_client_res(e,rq,rs,ob);
            res.json({message:"done with test sequence"});
            callback(null, 4);
        });
    }
    ]);
    return next();
}

server.listen(port, function(){
    console.log('listening on port ' + port);
});

