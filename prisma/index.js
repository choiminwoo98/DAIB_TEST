import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";

const prisma = new PrismaClient();

const typeDefs = `
  type User {
    email: String!
    name: String
    password:String
  }

  type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
  Query: {
    allUsers: () => {
      return prisma.user.findMany();
    },
  },
};

const server = new ApolloServer({ resolvers, typeDefs });
// server.listen({ port: 4000 });
server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
