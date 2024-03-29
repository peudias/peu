import database from "infra/database.js"

async function status(request, response) {
    // updatedAt
    const updatedAt = new Date().toISOString();

    // versionPostgres
    const databaseVersionResult = await database.query("SHOW server_version;");
    const databaseVersionValue = databaseVersionResult.rows[0].server_version;

    // MaxConnections
    const databaseMaxConnectionsResult = await database.query("SHOW max_connections;");
    const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections;

    // UsedConnections
    const databaseName = process.env.POSTGRES_DB;
    console.log(`Banco de dados selecionado: ${databaseName}`);
    const databaseOpenedConnectionsResult = await database.query({
       text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
       values: [databaseName]
    });
    const databaseOpenedConnectionsValue = databaseOpenedConnectionsResult.rows[0].count;

    response.status(200).json({
      updated_at: updatedAt,
      dependencies: {
        database: {
          pg_version: databaseVersionValue,
          max_connections: parseInt(databaseMaxConnectionsValue),
          opened_connections: databaseOpenedConnectionsValue,
        }
      }
    });
  }
  
  export default status;
  