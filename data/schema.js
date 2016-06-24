import goldbergs from './schema.json';
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

var goldbergType = new GraphQLObjectType({
    name: 'Goldberg',
    fields: {
        character: { type: GraphQLString },
        actor: { type: GraphQLString },
        role: { type: GraphQLString },
        traits: { type: GraphQLString },
        id: { type: GraphQLInt }
    }
});

var queryType = new GraphQLObjectType({
    name: 'query',
    description: "Goldberg query",
    fields: {
        goldberg: {
            type: goldbergType,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: function(_, args){
                return goldbergs[args.id];
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: queryType
});
export default schema;