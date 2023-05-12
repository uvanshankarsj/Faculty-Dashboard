const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./extra-setup");

const sequelize = new Sequelize(
  "facdash",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const modelDefiners = [
  require("./models/events.model"),
  require("./models/faculty.model"),
  require("./models/student.model"),
  require("./models/admin.model"),
  require("./models/user.model"),
  require("./models/crew.model"),
  require("./models/starredevents.model"),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);
module.exports = sequelize;
