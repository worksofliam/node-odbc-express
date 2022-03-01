const express = require(`express`);

const db = require(`./util/db`);
const app = express();

exports.setup = () => {

  app.use(express.json());

  // Eventually move into own route
  app.get(`/employee`, async (req, res) => {
    try {
      const result = await db.query(`SELECT * FROM SAMPLE.EMPLOYEE`);
      return res.json(result);

    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  });

  app.get(`/`, (req, res) => {
    res.send(`Hello world`);
  })

  return app;
}