import path from 'path';
import { mimeTypes } from './mimeTypes'; 

const server = http.createServer((req, res) => {
const url = req.url;
switch (url) {
     
    case '/':
        mainRouteController(res, "/index.html", ".html");
        res.statusCode = 200;
        res.end('Спасибо за запрос, скоро придумаю, что тебе ответить');
        break;
    case '/game':
        gameRouteController(res);
        res.statusCode = 200;
        res.end('Спасибо за запрос, скоро придумаю, что тебе ответить');
        break;
    case '/vote':
        voteRouteController(req, res);
        if (method !== 'POST') {
            res.statusCode = 405;
            res.end('Запрещённый метод запроса');
        } else {
            let body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                body = Buffer.concat(body).toString();
                console.log(body);
                res.statusCode = 200;
                res.end('Спасибо за голосование!');
            });
        }
        break;
    
default:
    defaultRouteController(res, url);
const extname = String(path.extname(url)).toLowerCase();
if (extname in mimeTypes) {
staticFile(res, url, extname);
} else {
res.statusCode = 404;
res.end("Not Found");
}
}
});

module.exports = gameRouteController;

