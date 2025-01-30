"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1399],{81358:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"auto-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError","title":"TalawaGraphQLError","description":"Admin Docs","source":"@site/docs/auto-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError.md","sourceDirName":"auto-docs/utilities/TalawaGraphQLError/classes","slug":"/auto-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError","permalink":"/docs/auto-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-api/edit/develop/docs/docs/auto-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"objects","permalink":"/docs/auto-docs/routes/objects/functions/objects"},"next":{"title":"ArgumentsAssociatedResourcesNotFoundExtensions","permalink":"/docs/auto-docs/utilities/TalawaGraphQLError/type-aliases/ArgumentsAssociatedResourcesNotFoundExtensions"}}');var t=a(86070),n=a(60385);const o={},i=void 0,l={},c=[{value:"Example",id:"example",level:2},{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new TalawaGraphQLError()",id:"new-talawagraphqlerror",level:3},{value:"Parameters",id:"parameters",level:4},{value:"__namedParameters",id:"__namedparameters",level:5},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/",children:"Admin Docs"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h1,{id:"class-talawagraphqlerror",children:"Class: TalawaGraphQLError"}),"\n",(0,t.jsxs)(r.p,{children:["Defined in: ",(0,t.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/c34688c69eb12a5eb721ebc8a0cd60b53e5fbf81/src/utilities/TalawaGraphQLError.ts#L260",children:"src/utilities/TalawaGraphQLError.ts:260"})]}),"\n",(0,t.jsxs)(r.p,{children:["This class extends the ",(0,t.jsx)(r.code,{children:"GraphQLError"})," class and is used to create graphql error instances with strict typescript assertion on providing the error metadata within the ",(0,t.jsx)(r.code,{children:"extensions"})," field. This assertion prevents talawa api contributers from returning arbitrary, undocumented errors to the talawa api graphql clients."]}),"\n",(0,t.jsx)(r.p,{children:"This also standardizes the errors that the client developers using talawa api can expect in the graphql responses, helping them design better UI experiences for end users. If necessary, the localization of the error messages(i18n) can be done within the graphql resolvers where this function is used."}),"\n",(0,t.jsxs)(r.p,{children:["The following example shows the usage of ",(0,t.jsx)(r.code,{children:"createTalawaGraphQLError"})," function within a graphql resolver for resolving the user record of the best friend of a user:"]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'export const user = async (parent, args, ctx) => {\n const existingUser = await ctx.drizzleClient.query.user.findFirst({\n     where: (fields, operators) => operators.eq(fields.id, args.input.id),\n });\n\n\tif (user === undefined) {\n\t\tthrow new TalawaGraphQLError({\n\t\t\textensions: {\n\t\t\t\tcode: "arguments_associated_resources_not_found",\n\t\t\t\tissues: [\n\t\t\t\t\t{\n\t\t\t\t\t\targumentPath: ["input", "id"],\n\t\t\t\t\t},\n\t\t\t\t],\n\t\t\t},\n\n     })\n\t}\n\n return user;\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"extends",children:"Extends"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"GraphQLError"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsx)(r.h3,{id:"new-talawagraphqlerror",children:"new TalawaGraphQLError()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"new TalawaGraphQLError"}),"(",(0,t.jsx)(r.code,{children:"__namedParameters"}),"): ",(0,t.jsx)(r.a,{href:"/docs/auto-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError",children:(0,t.jsx)(r.code,{children:"TalawaGraphQLError"})})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Defined in: ",(0,t.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/c34688c69eb12a5eb721ebc8a0cd60b53e5fbf81/src/utilities/TalawaGraphQLError.ts#L261",children:"src/utilities/TalawaGraphQLError.ts:261"})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(r.h5,{id:"__namedparameters",children:"__namedParameters"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"GraphQLErrorOptions"})," & ",(0,t.jsx)(r.code,{children:"object"})]}),"\n",(0,t.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/auto-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError",children:(0,t.jsx)(r.code,{children:"TalawaGraphQLError"})})}),"\n",(0,t.jsx)(r.h4,{id:"overrides",children:"Overrides"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"GraphQLError.constructor"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},60385:(e,r,a)=>{a.d(r,{R:()=>o,x:()=>i});var s=a(30758);const t={},n=s.createContext(t);function o(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);