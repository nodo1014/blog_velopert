require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const { PORT, MONGO_URI } = process.env; // require('dotenv').config();
const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// express 의 경우
// app.get("/", (req, res) => {
//     // res.send("안녕. 홈이얌");
//     res.render("home");
// })
router.get('/', ctx => {
  ctx.body = '홈';
  // console.log(ctx.response);
  // console.log(ctx.body)
});

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000; // port null 이면, 4000으로.
app.listen(4000, () => {
  console.log(`listening on ${port}`);
});
