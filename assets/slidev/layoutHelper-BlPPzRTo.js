function o(e){return e.startsWith("/")?"/talk"+e.slice(1):e}function s(e,i=!1,n="cover"){const t=e&&(e[0]==="#"||e.startsWith("rgb")),r={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?i?`linear-gradient(#0005, #0008), url(${o(e)})`:`url("${o(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:n};return r.background||delete r.background,r}export{s as h};
