This is a small API which has various demo and test sequences that control a rolling-spider drone via the [rolling-spider-server-api](https://github.com/emdarcher/rolling-spider-server-api), which uses the [node-rolling-spider](https://github.com/voodootikigod/node-rolling-spider) library to communicate with the drone.

By default this API runs on network port 6767 on the path `/drone-test/`.
For example to call the API to run the flip demo using the command line tool `curl`:
```
curl -X POST -H "Content-Type: application/json" -d '{}' http://localhost:6767/drone-test/flip
```

To control the drone, you must have an instance of [rolling-spider-server-api](https://github.com/emdarcher/rolling-spider-server-api) running. By default this API will expect to find that running on network port 7777 and with a base path of `/drone-api/drone`.
 
