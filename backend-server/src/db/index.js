const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "facdash",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "mysql",
      pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  }
);

const modelDefiners = [
  require("./models/faculty.model"),
  require("./models/student.model"),
  require("./models/admin.model"),
  require("./models/project.model"),
  require("./models/events.model"),
  require("./models/starredevents.model"),
  require("./models/course.model"),
  require("./models/assign.model"),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

module.exports = sequelize;
