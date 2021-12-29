"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[5045],{2307:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-5ccd7e2c",path:"/guide/read-write-splitting.html",title:"读写分离",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:1640742125e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"guide/read-write-splitting.md"}},3033:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="读写分离" tabindex="-1"><a class="header-anchor" href="#读写分离" aria-hidden="true">#</a> 读写分离</h1><p>FreeSql 支持数据库读写分离，本功能是客户端的读写分离行为，数据库服务器该怎么配置仍然那样配置，不受本功能影响，为了方便描术后面讲到的【读写分离】都是指客户端的功能支持。</p><p>各种数据库的读写方案不一，数据库端开启读写分离功能后，读写分离的实现大致分为以下几种：</p><p>1、nginx代理，配置繁琐且容易出错；</p><p>2、中件间，如MyCat；</p><p>3、在client端支持；</p><p>FreeSql 实现了第3种方案，支持一个【主库】多个【从库】，【从库】的查询策略为随机方式。</p><p>若某【从库】发生故障，将切换到其他可用【从库】，若已全部不可用则使用【主库】查询。</p><p>出现故障【从库】被隔离起来间隔性的检查可用状态，以待恢复。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> connstr <span class="token operator">=</span> <span class="token string">&quot;Data Source=127.0.0.1;Port=3306;User ID=root;Password=root;&quot;</span> <span class="token operator">+</span> \n    <span class="token string">&quot;Initial Catalog=cccddd;Charset=utf8;SslMode=none;Max pool size=10&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connstr<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseSlave</span><span class="token punctuation">(</span><span class="token string">&quot;connectionString1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;connectionString2&quot;</span><span class="token punctuation">)</span> <span class="token comment">//使用从数据库，支持多个</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//请务必定义成 Singleton 单例模式</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//读【从库】（默认）</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Master</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WhereId</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//强制读【主库】</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',10),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);