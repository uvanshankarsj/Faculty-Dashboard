require("dotenv").config();
const app = require("express")();
const sequelize = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;
const routes = require("./routes/routes");
const {fillDummyData} = require("./scripts/fillDummyData");
const logger = require("logger")

morgan.token("data", (req, res) => {
  return JSON.stringify(req.body);
}); // returns body for logging

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

//routes
app.use(routes);

//db
async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

//error handler
const errorHandler = (error, request, response, next) => {
  logger.error(error.message);
  if (error.error.isJoi) {
    res.status(400).json({
      type: err.type,
      message: err.error.toString(),
    });
  }
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};

// this has to be the last loaded middleware.
app.use(errorHandler);

async function init() {
	await assertDatabaseConnectionOk();
  await sequelize.sync({ force: true});
  await fillDummyData();
	console.log(`Starting Sequelize`);
	app.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}.`);
	});
}

init();