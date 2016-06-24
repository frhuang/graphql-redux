import webpack from 'webpack';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import graphql from 'graphql';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
import schema from './data/schema.js';

var compiler = webpack(config);
var app = express();

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/'));

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

app.listen(3000, (err) => {
    console.log('listening on 3000');
});
