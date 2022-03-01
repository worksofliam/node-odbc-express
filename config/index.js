const liblEnv = process.env.LOCAL_LIBL;

exports.connectionString = [
  `DRIVER=IBM i Access ODBC Driver`,
  `SYSTEM=${process.env.DB_HOST}`,
  `UID=${process.env.DB_ID}`,
  `Password=${process.env.DB_PASSWORD}`,
  `Naming=1`,
  `DBQ=,${liblEnv ? process.env[liblEnv] : `*USRLIBL`}`,
].join(`;`);