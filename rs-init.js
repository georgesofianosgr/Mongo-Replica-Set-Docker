config = {
  _id: "rs1",
  members: [
    { _id: 0, host: "mongo-node-1:27017", priority: 2 },
    // { _id: 1, host: "mongo-node-2:27018", priority: 1 },
    // { _id: 2, host: "mongo-node-3:27019", priority: 1 }
  ]
};
rs.initiate(config);
rs.status();
