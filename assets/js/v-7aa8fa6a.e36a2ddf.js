"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[5003],{2883:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7aa8fa6a",path:"/guide/select-single-table.html",title:"单表查询",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"单表",slug:"单表",children:[]},{level:2,title:"WithSql",slug:"withsql",children:[]}],git:{updatedTime:1640742125e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"guide/select-single-table.md"}},1664:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="单表查询" tabindex="-1"><a class="header-anchor" href="#单表查询" aria-hidden="true">#</a> 单表查询</h1><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> <span class="token string">&quot;Data Source=127.0.0.1;Port=3306;User ID=root;Password=root;Initial Catalog=cccddd;Charset=utf8;SslMode=none;Max pool size=10&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//请务必定义成 Singleton 单例模式</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> CategoryId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="单表" tabindex="-1"><a class="header-anchor" href="#单表" aria-hidden="true">#</a> 单表</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token doc-comment comment">///SELECT a.`Id`, a.`Clicks`, a.`CategoryId`, a.`Title`, a.`CreateTime` </span>\n<span class="token comment">//FROM `Topic` a </span>\n<span class="token comment">//WHERE (a.`Id` = 10)</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>Id <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">||</span> a<span class="token punctuation">.</span>Clicks <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token doc-comment comment">///SELECT a.`Id`, a.`Clicks`, a.`CategoryId`, a.`Title`, a.`CreateTime` </span>\n<span class="token comment">//FROM `Topic` a </span>\n<span class="token comment">//WHERE (a.`Id` = 10 AND a.`Id` &gt; 10 OR a.`Clicks` &gt; 100)</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//SELECT a.`Id`, a.`Clicks`, a.`CategoryId`, a.`Title`, a.`CreateTime` </span>\n<span class="token comment">//FROM `Topic` a </span>\n<span class="token comment">//WHERE (a.`Id` in (1,2,3))</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="withsql" tabindex="-1"><a class="header-anchor" href="#withsql" aria-hidden="true">#</a> WithSql</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">WithSql</span><span class="token punctuation">(</span><span class="token string">&quot;select * from Topic where clicks &gt; ?val&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> val <span class="token operator">=</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//SELECT a.`Id`, a.`Clicks`, a.`CategoryId`, a.`Title`, a.`CreateTime` </span>\n<span class="token comment">//FROM (select * from Topic where clicks &gt; ?val) a </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>WithSql 使用多次为 UNION ALL 查询</p></blockquote>',7),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);