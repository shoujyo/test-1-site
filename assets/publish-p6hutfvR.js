import{a as e,i as t,n,o as r,r as i,t as a}from"./index-E-ESKFSg.js";var o=Uint8Array,s=Uint16Array,c=Int32Array,l=new o([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),u=new o([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),d=new o([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),f=function(e,t){for(var n=new s(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new c(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},p=f(l,2),m=p.b,h=p.r;m[28]=258,h[258]=28;var g=f(u,0);g.b;for(var _=g.r,v=new s(32768),y=0;y<32768;++y){var b=(y&43690)>>1|(y&21845)<<1;b=(b&52428)>>2|(b&13107)<<2,b=(b&61680)>>4|(b&3855)<<4,v[y]=((b&65280)>>8|(b&255)<<8)>>1}for(var x=(function(e,t,n){for(var r=e.length,i=0,a=new s(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new s(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var c;if(n){c=new s(1<<t);var l=15-t;for(i=0;i<r;++i)if(e[i])for(var u=i<<4|e[i],d=t-e[i],f=o[e[i]-1]++<<d,p=f|(1<<d)-1;f<=p;++f)c[v[f]>>l]=u}else for(c=new s(r),i=0;i<r;++i)e[i]&&(c[i]=v[o[e[i]-1]++]>>15-e[i]);return c}),S=new o(288),y=0;y<144;++y)S[y]=8;for(var y=144;y<256;++y)S[y]=9;for(var y=256;y<280;++y)S[y]=7;for(var y=280;y<288;++y)S[y]=8;for(var C=new o(32),y=0;y<32;++y)C[y]=5;var w=x(S,9,0),T=x(C,5,0),ee=function(e){return(e+7)/8|0},E=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new o(e.subarray(t,n))},D=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],O=function(e,t,n){var r=Error(t||D[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,O),!n)throw r;return r},k=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},A=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},j=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:I,l:0};if(i==1){var c=new o(n[0].s+1);return c[n[0].s]=1,{t:c,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var l=n[0],u=n[1],d=0,f=1,p=2;for(n[0]={s:-1,f:l.f+u.f,l,r:u};f!=i-1;)l=n[n[d].f<n[p].f?d++:p++],u=n[d!=f&&n[d].f<n[p].f?d++:p++],n[f++]={s:-1,f:l.f+u.f,l,r:u};for(var m=a[0].s,r=1;r<i;++r)a[r].s>m&&(m=a[r].s);var h=new s(m+1),g=M(n[f-1],h,0);if(g>t){var r=0,_=0,v=g-t,y=1<<v;for(a.sort(function(e,t){return h[t.s]-h[e.s]||e.f-t.f});r<i;++r){var b=a[r].s;if(h[b]>t)_+=y-(1<<g-h[b]),h[b]=t;else break}for(_>>=v;_>0;){var x=a[r].s;h[x]<t?_-=1<<t-h[x]++-1:++r}for(;r>=0&&_;--r){var S=a[r].s;h[S]==t&&(--h[S],++_)}g=t}return{t:new o(h),l:g}},M=function(e,t,n){return e.s==-1?Math.max(M(e.l,t,n+1),M(e.r,t,n+1)):t[e.s]=n},N=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new s(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},c=1;c<=t;++c)if(e[c]==i&&c!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[c]}return{c:n.subarray(0,r),n:t}},P=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},te=function(e,t,n){var r=n.length,i=ee(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},ne=function(e,t,n,r,i,a,o,c,f,p,m){k(t,m++,n),++i[256];for(var h=j(i,15),g=h.t,_=h.l,v=j(a,15),y=v.t,b=v.l,ee=N(g),E=ee.c,D=ee.n,O=N(y),M=O.c,ne=O.n,F=new s(19),I=0;I<E.length;++I)++F[E[I]&31];for(var I=0;I<M.length;++I)++F[M[I]&31];for(var L=j(F,7),R=L.t,z=L.l,B=19;B>4&&!R[d[B-1]];--B);var V=p+5<<3,H=P(i,S)+P(a,C)+o,U=P(i,g)+P(a,y)+o+14+3*B+P(F,R)+2*F[16]+3*F[17]+7*F[18];if(f>=0&&V<=H&&V<=U)return te(t,m,e.subarray(f,f+p));var W,G,K,q;if(k(t,m,1+(U<H)),m+=2,U<H){W=x(g,_,0),G=g,K=x(y,b,0),q=y;var J=x(R,z,0);k(t,m,D-257),k(t,m+5,ne-1),k(t,m+10,B-4),m+=14;for(var I=0;I<B;++I)k(t,m+3*I,R[d[I]]);m+=3*B;for(var re=[E,M],Y=0;Y<2;++Y)for(var X=re[Y],I=0;I<X.length;++I){var Z=X[I]&31;k(t,m,J[Z]),m+=R[Z],Z>15&&(k(t,m,X[I]>>5&127),m+=X[I]>>12)}}else W=w,G=S,K=T,q=C;for(var I=0;I<c;++I){var Q=r[I];if(Q>255){var Z=Q>>18&31;A(t,m,W[Z+257]),m+=G[Z+257],Z>7&&(k(t,m,Q>>23&31),m+=l[Z]);var $=Q&31;A(t,m,K[$]),m+=q[$],$>3&&(A(t,m,Q>>5&8191),m+=u[$])}else A(t,m,W[Q]),m+=G[Q]}return A(t,m,W[256]),m+G[256]},F=new c([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),I=new o(0),L=function(e,t,n,r,i,a){var d=a.z||e.length,f=new o(r+d+5*(1+Math.ceil(d/7e3))+i),p=f.subarray(r,f.length-i),m=a.l,g=(a.r||0)&7;if(t){g&&(p[0]=a.r>>3);for(var v=F[t-1],y=v>>13,b=v&8191,x=(1<<n)-1,S=a.p||new s(32768),C=a.h||new s(x+1),w=Math.ceil(n/3),T=2*w,D=function(t){return(e[t]^e[t+1]<<w^e[t+2]<<T)&x},O=new c(25e3),k=new s(288),A=new s(32),j=0,M=0,N=a.i||0,P=0,I=a.w||0,L=0;N+2<d;++N){var R=D(N),z=N&32767,B=C[R];if(S[z]=B,C[R]=z,I<=N){var V=d-N;if((j>7e3||P>24576)&&(V>423||!m)){g=ne(e,p,0,O,k,A,M,P,L,N-L,g),P=j=M=0,L=N;for(var H=0;H<286;++H)k[H]=0;for(var H=0;H<30;++H)A[H]=0}var U=2,W=0,G=b,K=z-B&32767;if(V>2&&R==D(N-K))for(var q=Math.min(y,V)-1,J=Math.min(32767,N),re=Math.min(258,V);K<=J&&--G&&z!=B;){if(e[N+U]==e[N+U-K]){for(var Y=0;Y<re&&e[N+Y]==e[N+Y-K];++Y);if(Y>U){if(U=Y,W=K,Y>q)break;for(var X=Math.min(K,Y-2),Z=0,H=0;H<X;++H){var Q=N-K+H&32767,$=Q-S[Q]&32767;$>Z&&(Z=$,B=Q)}}}z=B,B=S[z],K+=z-B&32767}if(W){O[P++]=268435456|h[U]<<18|_[W];var ie=h[U]&31,ae=_[W]&31;M+=l[ie]+u[ae],++k[257+ie],++A[ae],I=N+U,++j}else O[P++]=e[N],++k[e[N]]}}for(N=Math.max(N,I);N<d;++N)O[P++]=e[N],++k[e[N]];g=ne(e,p,m,O,k,A,M,P,L,N-L,g),m||(a.r=g&7|p[g/8|0]<<3,g-=7,a.h=C,a.p=S,a.i=N,a.w=I)}else{for(var N=a.w||0;N<d+m;N+=65535){var oe=N+65535;oe>=d&&(p[g/8|0]=m,oe=d),g=te(p,g+1,e.subarray(N,oe))}a.i=d}return E(f,0,r+ee(g)+i)},R=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),z=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=R[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},B=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),s=new o(a.length+e.length);s.set(a),s.set(e,a.length),e=s,i.w=a.length}return L(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},V=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},H=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8};function U(e,t){return B(e,t||{},0,0)}var W=function(e,t,n,r){for(var i in e){var a=e[i],s=t+i,c=r;Array.isArray(a)&&(c=V(r,a[1]),a=a[0]),ArrayBuffer.isView(a)?n[s]=[a,c]:(n[s+=`/`]=[new o(0),c],W(a,s,n,r))}},G=typeof TextEncoder<`u`&&new TextEncoder,K=typeof TextDecoder<`u`&&new TextDecoder;try{K.decode(I,{stream:!0})}catch{}function q(e,t){if(t){for(var n=new o(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(G)return G.encode(e);for(var i=e.length,a=new o(e.length+(e.length>>1)),s=0,c=function(e){a[s++]=e},r=0;r<i;++r){if(s+5>a.length){var l=new o(s+8+(i-r<<1));l.set(a),a=l}var u=e.charCodeAt(r);u<128||t?c(u):u<2048?(c(192|u>>6),c(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|e.charCodeAt(++r)&1023,c(240|u>>18),c(128|u>>12&63),c(128|u>>6&63),c(128|u&63)):(c(224|u>>12),c(128|u>>6&63),c(128|u&63))}return E(a,0,s)}var J=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&O(9),t+=r+4}return t},re=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=J(l);H(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&O(10),H(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(H(e,t,n.crc),H(e,t+4,a<0?-a-2:a),H(e,t+8,n.size)),H(e,t+12,c),H(e,t+14,d),t+=16,o!=null&&(H(e,t,u),H(e,t+6,n.attrs),H(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;H(e,t,+m),H(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},Y=function(e,t,n,r,i){H(e,t,101010256),H(e,t+8,n),H(e,t+10,n),H(e,t+12,r),H(e,t+16,i)};function X(e,t){t||={};var n={},r=[];W(e,``,n,t);var i=0,a=0;for(var s in n){var c=n[s],l=c[0],u=c[1],d=u.level==0?0:8,f=q(s),p=f.length,m=u.comment,h=m&&q(m),g=h&&h.length,_=J(u.extra);p>65535&&O(11);var v=d?U(l,u):l,y=v.length,b=z();b.p(l),r.push(V(u,{size:l.length,crc:b.d(),c:v,f,m:h,u:p!=s.length||h&&m.length!=g,o:i,compression:d})),i+=30+p+_+y,a+=76+2*(p+_)+(g||0)+y}for(var x=new o(a+22),S=i,C=a-i,w=0;w<r.length;++w){var f=r[w];re(x,f.o,f,f.f,f.u,f.c.length);var T=30+f.f.length+J(f.extra);x.set(f.c,f.o+T),re(x,i,f,f.f,f.u,f.c.length,f.o,f.m),i+=16+T+(f.m?f.m.length:0)}return Y(x,i,r.length,C,S),x}var Z=`# Publishing this folder

This folder is a finished static website exported from Lit Orbit: an orbit
view of one literature batch, "{{title}}". Your task is to publish it on
GitHub Pages, or to update a site that was published from an earlier export.
There is no build step and nothing to install beyond git and the GitHub CLI.

## Rules

- Do not edit, rename, reformat, delete or add files. \`index.html\`, \`assets/\`,
  \`site.json\` and the rest are the site exactly as its author exported it.
  Only run the commands below.
- Never ask for, type or store a password or a token. If \`gh auth status\` says
  the user is not signed in, ask them to run \`gh auth login\` themselves, and
  wait until they say it is done.
- The repository will be public, and so will every study in \`site.json\`.
  Before creating anything, tell the user that, confirm the repository name
  with them, and wait for a clear yes.
- If git has no \`user.name\` or \`user.email\`, ask the user what to use. Do not
  invent them.
- If a command fails, stop and tell the user what it said. Do not work around
  it some other way.

## Check first

\`\`\`
git --version
gh --version
gh auth status
\`\`\`

If git or gh is missing, tell the user where to get it
(https://git-scm.com/downloads, https://cli.github.com) and stop.

## Publish for the first time

Run these in this folder, with \`<name>\` the repository name the user confirmed:

\`\`\`
git init -b main
git add -A
git commit -m "Publish Lit Orbit site"
gh repo create <name> --public --source=. --push
gh api -X POST "repos/{owner}/{repo}/pages" -f "source[branch]=main" -f "source[path]=/"
\`\`\`

Type \`{owner}\` and \`{repo}\` as written: gh fills them in from this folder's
repository.

Then wait for the first build:

\`\`\`
gh api "repos/{owner}/{repo}/pages/builds/latest" --jq .status
\`\`\`

Run it again every 20 seconds or so until it prints \`built\`, which takes a
few minutes at most. If it prints \`errored\`, stop and report it. Then give the
user the address:

\`\`\`
gh api "repos/{owner}/{repo}/pages" --jq .html_url
\`\`\`

## Update a site published before

The user exported a new version and wants it to replace the one already
published. Ask which repository the site is in (\`<owner>/<name>\`), unless
this folder is already a git repository whose \`origin\` is that repository.

If this folder is not a git repository yet:

\`\`\`
git init -b main
git remote add origin https://github.com/<owner>/<name>.git
git fetch origin main
git reset origin/main
\`\`\`

\`git reset\` without \`--hard\` leaves every file in this folder as it is. It
only makes git compare them with what is published, so files the new export
no longer has are removed from the site by the commit below.

Then, in either case:

\`\`\`
git add -A
git commit -m "Update Lit Orbit site"
git push origin main
\`\`\`

GitHub Pages rebuilds on its own. Wait for \`built\` as above, then give the
user the address.
`,Q=`{{title}}
{{underline}}

This folder is a complete website: your batch, read the way you set it up in
Lit Orbit. It needs no build step and no server of its own, so any host of
static files can serve it. The steps below use GitHub Pages, which is free.

Anyone who opens the site can see every study in the batch and download it.


WHAT IS IN THIS FOLDER

  index.html, assets/, favicon.svg   the app
  site.json                          your batch and how it is read
  LICENSE.txt                        Lit Orbit's licence (MIT)
  THIRD-PARTY-LICENSES.md            the licences of the libraries it bundles
  README.txt, AGENTS.md, CLAUDE.md   instructions for publishing; not part of the site
  .gitignore, .nojekyll              settings for git and GitHub Pages; your computer
                                     may hide these two, which is fine


PUBLISH IT ON GITHUB PAGES, IN THE BROWSER

1. Sign in at github.com, then open https://github.com/new
   Give the repository a name - it becomes part of the address - choose
   Public, and click "Create repository".

2. On the new repository's page, click "uploading an existing file".
   Open this folder, select everything in it (Ctrl+A, or Cmd+A on a Mac) and
   drag the selection onto the page. Drag what is inside the folder, not the
   folder itself: index.html has to end up at the top of the repository.
   Click "Commit changes".

3. Open Settings, then Pages. Under "Build and deployment", set Source to
   "Deploy from a branch", the branch to "main" and the folder to "/ (root)",
   then click Save.

4. After a minute or two the address shows at the top of that page:

     https://<your-user-name>.github.io/<repository-name>/

   That is the link to put in your paper.


PUBLISH IT WITH CLAUDE CODE OR CODEX

If you use Claude Code or Codex, and have git and the GitHub CLI (gh)
installed, open this folder in it and ask it to publish the site on GitHub
Pages. AGENTS.md tells it how. It asks you before it creates anything, and
you sign in to GitHub yourself.


CHANGE THE SITE LATER

Open Lit Orbit at {{studioUrl}}
choose "Build your own", and load this folder's site.json as your file:
everything you set comes back. Change what you need, publish again, and
unzip the new download into a new folder. Then either upload its files to
your repository the way you did the first time - they replace the old ones,
and old files left behind do no harm - or open the new folder in Claude Code
or Codex and ask it to update the site.
`,$=`README.txt`,ie=`AGENTS.md`,ae=`CLAUDE.md`;function oe(t,r,a){let o=t.get(`index.html`);if(!o)throw Error(`The app has no index.html to publish.`);let s=new TextEncoder,c=r.title||`Lit Orbit`,l=Object.fromEntries(t);return l[`index.html`]=s.encode(n(new TextDecoder().decode(o),r)),l[e]=s.encode(i(r)),l[$]=s.encode(ue(Q,{title:c,underline:`=`.repeat(c.length),studioUrl:a})),l[ie]=s.encode(ue(Z,{title:c})),l[ae]=s.encode(`@AGENTS.md
`),l[`.gitignore`]=s.encode([`# How to publish this folder, not part of the site.`,$,ie,ae,``].join(`
`)),l[`.nojekyll`]=new Uint8Array,l}function se(e){return`${t(e)||`lit-orbit`}-site.zip`}async function ce(e,t){let n=await le(`./`),r=new Map;await Promise.all(n.map(async e=>{let t=await fetch(`./`+e.split(`/`).map(encodeURIComponent).join(`/`),{cache:`no-cache`}),n=!e.endsWith(`.html`)&&t.headers.get(`content-type`)?.includes(`text/html`);if(!t.ok||n)throw Error(`${e} could not be fetched from this server.`);r.set(e,new Uint8Array(await t.arrayBuffer()))}));let i=X(oe(r,e,t));a(new Blob([i.slice().buffer],{type:`application/zip`}),se(e.title))}async function le(e){let t=await fetch(e+r,{cache:`no-cache`}),n=t.ok?await t.json().catch(()=>null):null;if(!Array.isArray(n)||!n.every(e=>typeof e==`string`))throw Error(`${r} is missing, so this copy of Lit Orbit cannot publish: it was not served from a build (npm run build).`);return n}function ue(e,t){return e.replace(/\r\n/g,`
`).replace(/\{\{(\w+)\}\}/g,(e,n)=>t[n]??e)}export{ce as downloadSite};