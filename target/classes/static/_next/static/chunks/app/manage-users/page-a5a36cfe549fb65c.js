(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{1160:function(e,r,t){Promise.resolve().then(t.bind(t,9477))},9477:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(7437),s=t(2265),l=t(6975),a=t(495),i=t(3102),o=t(7135);let d=e=>{let{open:r,onOpenChange:t,children:s}=e;return r?(0,n.jsx)("div",{className:"dialog-backdrop",onClick:()=>t(!1),children:(0,n.jsx)("div",{className:"dialog-content",onClick:e=>e.stopPropagation(),children:s})}):null},c=e=>{let{children:r}=e;return(0,n.jsx)("div",{className:"dialog-content-inner",children:r})},u=e=>{let{children:r}=e;return(0,n.jsx)("div",{className:"dialog-header",children:r})},f=e=>{let{children:r}=e;return(0,n.jsx)("h2",{className:"dialog-title",children:r})},m=e=>{let{children:r}=e;return(0,n.jsx)("div",{className:"dialog-footer",children:r})};function h(){let[e,r]=(0,s.useState)([]);(0,s.useEffect)(()=>{!async function(){try{let e=await fetch("/api/users"),t=await e.json();r(t)}catch(e){console.error("Error fetching users:",e)}}()},[]);let[t,h]=(0,s.useState)(!1),[x,g]=(0,s.useState)(null),p=e=>{g(e),h(!0)},b=t=>{r(e.filter(e=>e.id!==t))};return(0,n.jsxs)("div",{className:"container mx-auto p-4",children:[(0,n.jsx)("h1",{className:"mb-6 text-3xl font-bold",children:"Manage Users"}),(0,n.jsxs)(l.iA,{children:[(0,n.jsx)(l.xD,{children:(0,n.jsxs)(l.SC,{children:[(0,n.jsx)(l.ss,{children:"Name"}),(0,n.jsx)(l.ss,{children:"Email"}),(0,n.jsx)(l.ss,{children:"Role"}),(0,n.jsx)(l.ss,{children:"Actions"})]})}),(0,n.jsx)(l.RM,{children:e.map(e=>(0,n.jsxs)(l.SC,{children:[(0,n.jsx)(l.pj,{children:e.name}),(0,n.jsx)(l.pj,{children:e.email}),(0,n.jsx)(l.pj,{children:e.role}),(0,n.jsxs)(l.pj,{children:[(0,n.jsx)(a.z,{variant:"outline",size:"sm",className:"mr-2",onClick:()=>p(e),children:"Edit"}),(0,n.jsx)(a.z,{variant:"destructive",size:"sm",onClick:()=>b(e.id),children:"Delete"})]})]},e.id))})]}),(0,n.jsx)(d,{open:t,onOpenChange:h,children:(0,n.jsxs)(c,{children:[(0,n.jsx)(u,{children:(0,n.jsx)(f,{children:"Edit User"})}),(0,n.jsxs)("form",{onSubmit:t=>{t.preventDefault(),x&&(r(e.map(e=>e.id===x.id?x:e)),h(!1),g(null))},children:[(0,n.jsxs)("div",{className:"grid gap-4 py-4",children:[(0,n.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,n.jsx)(o._,{htmlFor:"name",className:"text-right",children:"Name"}),(0,n.jsx)(i.I,{id:"name",value:(null==x?void 0:x.name)||"",onChange:e=>g(x?{...x,name:e.target.value}:null),className:"col-span-3"})]}),(0,n.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,n.jsx)(o._,{htmlFor:"email",className:"text-right",children:"Email"}),(0,n.jsx)(i.I,{id:"email",value:(null==x?void 0:x.email)||"",onChange:e=>g(x?{...x,email:e.target.value}:null),className:"col-span-3"})]}),(0,n.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,n.jsx)(o._,{htmlFor:"role",className:"text-right",children:"Role"}),(0,n.jsx)(i.I,{id:"role",value:(null==x?void 0:x.role)||"",onChange:e=>g(x?{...x,role:e.target.value}:null),className:"col-span-3"})]})]}),(0,n.jsx)(m,{children:(0,n.jsx)(a.z,{type:"submit",children:"Save changes"})})]})]})})]})}},495:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var n=t(7437),s=t(2265),l=t(2974),a=t(2218),i=t(7440);let o=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:t,variant:s,size:a,asChild:d=!1,...c}=e,u=d?l.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(o({variant:s,size:a,className:t})),ref:r,...c})});d.displayName="Button"},3102:function(e,r,t){"use strict";t.d(r,{I:function(){return a}});var n=t(7437),s=t(2265),l=t(7440);let a=s.forwardRef((e,r)=>{let{className:t,type:s,...a}=e;return(0,n.jsx)("input",{type:s,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...a})});a.displayName="Input"},7135:function(e,r,t){"use strict";t.d(r,{_:function(){return d}});var n=t(7437),s=t(2265),l=t(7200),a=t(2218),i=t(7440);let o=(0,a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.f,{ref:r,className:(0,i.cn)(o(),t),...s})});d.displayName=l.f.displayName},6975:function(e,r,t){"use strict";t.d(r,{RM:function(){return o},SC:function(){return d},iA:function(){return a},pj:function(){return u},ss:function(){return c},xD:function(){return i}});var n=t(7437),s=t(2265),l=t(7440);let a=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:r,className:(0,l.cn)("w-full caption-bottom text-sm",t),...s})})});a.displayName="Table";let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("thead",{ref:r,className:(0,l.cn)("[&_tr]:border-b",t),...s})});i.displayName="TableHeader";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tbody",{ref:r,className:(0,l.cn)("[&_tr:last-child]:border-0",t),...s})});o.displayName="TableBody",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tfoot",{ref:r,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s})}).displayName="TableFooter";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tr",{ref:r,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});d.displayName="TableRow";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("th",{ref:r,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s})});c.displayName="TableHead";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("td",{ref:r,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});u.displayName="TableCell",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("caption",{ref:r,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",t),...s})}).displayName="TableCaption"},7440:function(e,r,t){"use strict";t.d(r,{cn:function(){return l}});var n=t(4839),s=t(6164);function l(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,n.W)(r))}}},function(e){e.O(0,[4,971,582,744],function(){return e(e.s=1160)}),_N_E=e.O()}]);