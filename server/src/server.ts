import express from "express"
import { graphqlHTTP } from "express-graphql"
import cors from "cors";
import { schema } from "./schema";
import { AppDataSource } from "./db";

const main = async () => {
  // initialize db
  await AppDataSource.initialize();


  const app = express();
  app.use(cors());
  app.use(express.json())
  app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
  }))

  app.listen(5000, () => {
    console.log("running on port 5000");
  })
}
main().catch(err => console.log("MAIN ERR ", err))