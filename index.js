
const config = require(`./config`);
const db = require(`./util/db`);

const port = process.env.PORT || 3000;

const app = require('./app');

async function startup() {
  await db.connect(config.connectionString);
  const server = await app.setup();

  server.listen(port, () => {
    console.log(`Server started on ${port}.`);
  });
}

startup();