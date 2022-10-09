import { DataSource } from "typeorm";
import { Users } from "./Entities/Users";

export const AppDataSource = new DataSource({
  type: "mysql",
  database: "graphql",
  username: "root",
  password: "",
  host: "localhost",
  port: 3306,
  logging: true,
  // synchronize: true,
  // ssl: true,
  entities: [Users],
});

// import { createConnection } from "typeorm"
// await createConnection({
//   type: "mysql",
//   database: "graphql",
//   username: "root",
//   password: "",
//   logging: true,
//   synchronize: false,
//   entities: [Users],
// });

