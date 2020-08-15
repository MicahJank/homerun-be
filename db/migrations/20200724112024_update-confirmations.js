exports.up = function(knex) {
    return knex.schema
      .table("confirmations", tbl => {
          tbl.varchar("email", 128)
             .unique()
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("confirmations")
  };
  