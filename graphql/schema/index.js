const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        _id: ID
        email: String!
        password: String!
    }
    type Borrower {
        _id: ID!
        name: String!
        mobileNo: String!
        nationalID: String!
        dateBorrowed: String!
    }

    type AuthUser{
        userId: ID!
        token: String
        tokenExpiration: Int!
    }
    input BookInput {
        title: String!
        isbn: String!
        publishYear: Int!
        price: Int!
    }
    input UserInput{
        email: String!
        password: String!

    }

    type Book{
        _id: ID!
        title: String!
        isbn: String!
        publishYear: Int!
        price: Int!
        borrowed: Boolean
        borrower: Borrower
    }
    type RootQuery {
        books: [Book]
    }
    type RootMutation {
        borrowBook(bookId: ID!): Borrower!
        createUser(userInput: UserInput): User!
        login(email: String!, password: String!): AuthUser!
        addBook(bookInput: BookInput): Book
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }

`);