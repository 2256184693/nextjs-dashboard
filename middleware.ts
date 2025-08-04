import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher 配置项用于指定哪些路由会被此中间件（middleware）拦截和处理。
  // 这里的正则表达式：'/((?!api|_next/static|_next/image|.*\.png$).*)'
  // 作用是：匹配所有路径，但排除以下几类：
  // 1. 以 /api 开头的接口请求
  // 2. 以 /_next/static 或 /_next/image 开头的 Next.js 静态资源和图片优化请求
  // 3. 以 .png 结尾的图片资源
  // 这样可以避免中间件拦截 API 路由、Next.js 静态资源和 PNG 图片请求，只对其他页面路由生效。
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};