const Sequelize = require("sequelize");
const databaseName = "authorize-backend";

console.log("Opening database connection");
const PORT = process.env.PORT || 5432; /* NEW ADDITION */

let db

if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL, { logging: false });
}
 else {
  db = new Sequelize(`postgres://localhost:5432/${databaseName}`,  { logging: false });
 }

module.exports = db;