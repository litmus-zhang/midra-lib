const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());

const GraphQLSchema = require('./graphql/schema/index');
const GraphQLResolvers = require('./graphql/resolvers/index');


app.use('/graphql', graphqlHTTP({
    schema: GraphQLSchema,
    rootValue: GraphQLResolvers,
    graphiql: true
}))

const startserver = () =>
{ 
    try {
        mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lsmjmlq.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`);

        app.listen(5000, () =>
{ 
    console.log('Server started on port 5000');
})

    } catch (error) {
        throw error;
    }
}


startserver();



