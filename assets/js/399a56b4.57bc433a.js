"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4342],{77728:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"auto-docs/plugins/drizzleClient/functions/drizzleClient","title":"drizzleClient","description":"Admin Docs","source":"@site/docs/auto-docs/plugins/drizzleClient/functions/drizzleClient.md","sourceDirName":"auto-docs/plugins/drizzleClient/functions","slug":"/auto-docs/plugins/drizzleClient/functions/drizzleClient","permalink":"/docs/auto-docs/plugins/drizzleClient/functions/drizzleClient","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-api/edit/develop/docs/docs/auto-docs/plugins/drizzleClient/functions/drizzleClient.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"VenueAttachment","permalink":"/docs/auto-docs/graphql/types/VenueAttachment/VenueAttachment/variables/VenueAttachment"},"next":{"title":"plugins","permalink":"/docs/auto-docs/plugins/functions/plugins"}}');var s=i(86070),l=i(60385);const r={},c=void 0,o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"fastify",id:"fastify",level:3},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/",children:"Admin Docs"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"function-drizzleclient",children:"Function: drizzleClient()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"drizzleClient"}),"(",(0,s.jsx)(n.code,{children:"fastify"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Defined in: ",(0,s.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/c34688c69eb12a5eb721ebc8a0cd60b53e5fbf81/src/plugins/drizzleClient.ts#L22",children:"src/plugins/drizzleClient.ts:22"})]}),"\n",(0,s.jsxs)(n.p,{children:["Integrates a drizzle client instance on a namespace ",(0,s.jsx)(n.code,{children:"drizzleClient"})," on the global fastify instance."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"fastify",children:"fastify"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"FastifyInstance"}),"<",(0,s.jsx)(n.code,{children:"IncomingMessage"}),", ",(0,s.jsx)(n.code,{children:"ServerResponse"}),">"]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import drizzleClientPlugin from "~/src/plugins/drizzleClient";\n\nfastify.register(drizzleClientPlugin, {});\nconst user = await fastify.drizzleClient.query.usersTable.findFirst();\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},60385:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var t=i(30758);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);