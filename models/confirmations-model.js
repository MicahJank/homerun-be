const db = require("../db/dbConfig.js");
const { first } = require("../db/dbConfig.js");

const insert = confirmation => {
  return db("confirmations")
    .insert(confirmation, "hash")
    .then(hash => {
      return hash[0];
    });
};

// used when the user wants to update their email
const updateHash = (hash, id) => {
  return db("confirmations")
          .where({ member_id: id })
          .update({ hash }, ["hash"])
          .first();
}

const getByHash = hash => {
  return db("confirmations")
    .where({ hash })
    .first();
};

const remove = member_id => {
  return db("confirmations")
    .where({ member_id })
    .del();
};

module.exports = {
  insert,
  getByHash,
  remove,
  updateHash
};
