const oracledb = require('oracledb');

class OracleDBConnector {
// Conectar a la base de datos
async connect() 
  {
    try {
      await oracledb.createPool({
        user: 'C##NVRS_GAMES',
        password: 'NVSG23',
        connectString: 'localhost:1521/orcl',
      });
      console.log('** CONNECTED TO ORACLE DATABASE **');
    } catch (err) {
      console.error('- AN ERROR HAS OCCURRED:', err.message);
    }
  }
// Aquí pondremos más métodos

async query(sql) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(sql);
      console.log('-- RESULT:', result.rows);
    } catch (err) {
      console.error('-- QUERY ERROR:', err.message);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error('-- CONNECTION ERROR:', err.message);
        }
      }
    }
  }
}


module.exports = OracleDBConnector;