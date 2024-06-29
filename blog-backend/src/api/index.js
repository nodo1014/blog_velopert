const Router = require('koa-router');
const posts = require('./posts');

const api = new Router();

// http://localhost:4000/api/posts
api.use('/posts', posts.routes());

// 라우터를 내보냅니다.
module.exports = api;
