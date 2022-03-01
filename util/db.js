const odbc = require("odbc");

const debug = process.env.DEBUG === `true`;

module.exports = class {
  pool;
  static async connect(connectionString) {
    this.pool = await odbc.pool({
      connectionString,
      initialSize: 5,
      maxSize: 10,
    });
  }

  /**
   * @param {string} sql 
   * @param {any[]} params 
   * @returns {Promise<any[]>}
   */
  static query(sql, params = []) {
    return this.pool.query(sql, params);
  }
}
