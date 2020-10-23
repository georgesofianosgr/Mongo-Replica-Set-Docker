# Mongo Replica Set
This docker compose has 3 containers, each container has each own named volume. They are connected via a bridged network. You need to have docker setup to use it.

Current mongo version: ***4.0.0***

## How to setup

#### To create mongo containers run
```
docker-compose up -d
```

#### To initialize replicas run
```
./init.sh
```

#### If you need to remove containers & volumes
```
./clean
```

***Default Container names***  
mongo-node-x

***Default Volume names***  
mongo_mongo-x-volume

**Notes About Initialization**  
You need to initialize replica-set by running a script instead of using the entrypoint because in entrypoint mongod binds only localhost and it cannot reach hostnames.
