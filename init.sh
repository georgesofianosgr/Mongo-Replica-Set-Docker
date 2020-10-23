#!/bin/sh
echo 'Initializing Replica Set'
docker exec -it mongo-node-1 mongo --port 27017 /rs-init.js
