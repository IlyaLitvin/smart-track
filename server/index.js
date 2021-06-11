const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const cors = require("cors");
const { graphqlHTTP } = require('express-graphql')
const logger = require("morgan");
const schema = require('./schema');
const graphQlResolvers = require('./resolvers');

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use('/graphql', (res, req, next) => {
  next()
}, graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: graphQlResolvers.resolvers,
  customFormatErrorFn: (err) => {
    console.log(err)
    return err
  }
}));

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();