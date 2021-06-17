import http from 'http';

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write(`
        <html>
        <head><title>Enter Message</title></head>
        <body>
        <form action="/create-user" method="POST">
        <input type="text" name="input">
        <button type="submit">Send</button>
        </form></body>
        </html> 
        
        `);
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            res.write(`
            <html>
            <head>
            <title>
            My message 
            </title>
            </head> 
            <body>
            <h1>
                message = ${message}
            </h1>
            </body>
            </html> 
    `);
            return res.end();
        });

    }
});

server.listen(3000);