   export default {
     fetch(request: Request) {
       const url = new URL(request.url);
       if (url.pathname === '/admin') {
         // 管理后台逻辑（比如返回管理界面）
         return new Response('管理后台', { status: 200 });
       }
       // 默认返回 "Hello, World!"
       return new Response("Hello, World!", { status: 200 });
     },
   };
   
