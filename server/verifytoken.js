import Router from 'next/router';

export default function verifyToken(ctx) {
    let token;
    if (ctx.req) {
        token = ctx.req.headers.cookie?.split('token=')[1];
    } else {
        token = localStorage.getItem('token');
    }

    if (!token) {
        if (ctx.res) {
            ctx.res.writeHead(302, { Location: '/' });
            ctx.res.end();
        } else {
            Router.push('/');
        }
    }
}
