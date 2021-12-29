"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[8391],{7053:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-28c3945c",path:"/en/guide/Query-from-Single-Table.html",title:"Query from Single Table",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Single Table",slug:"single-table",children:[]},{level:2,title:"WithSql",slug:"withsql",children:[]},{level:2,title:"Reference",slug:"reference",children:[]}],git:{updatedTime:1640742125e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"en/guide/Query-from-Single-Table.md"}},5223:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="query-from-single-table" tabindex="-1"><a class="header-anchor" href="#query-from-single-table" aria-hidden="true">#</a> Query from Single Table</h1><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Be sure to define as singleton mode</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> CategoryId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="single-table" tabindex="-1"><a class="header-anchor" href="#single-table" aria-hidden="true">#</a> Single Table</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token doc-comment comment">///SELECT a.`Id`, a.`Clicks`, a.`CategoryId`, a.`Title`, a.`CreateTime` </span>\n<span class="token comment">//FROM `Topic` a </span>\n<span class="token comment">//WHERE (a.`Id` = 10)</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>Id <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">||</span> a<span class="token punctuation">.</span>Clicks <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token doc-comment comment">///SELECT a.`Id`, a.`Clicks`, a.`CategoryId`, a.`Title`, a.`CreateTime` </span>\n<span class="token comment">//FROM `Topic` a </span>\n<span class="token comment">//WHERE (a.`Id` = 10 AND a.`Id` &gt; 10 OR a.`Clicks` &gt; 100)</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//SELECT a.`Id`, a.`Clicks`, a.`CategoryId`, a.`Title`, a.`CreateTime` </span>\n<span class="token comment">//FROM `Topic` a </span>\n<span class="token comment">//WHERE (a.`Id` in (1,2,3))</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="withsql" tabindex="-1"><a class="header-anchor" href="#withsql" aria-hidden="true">#</a> WithSql</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">WithSql</span><span class="token punctuation">(</span><span class="token string">&quot;select * from Topic where clicks &gt; @val&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> val <span class="token operator">=</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//SELECT a.`Id`, a.`Clicks`, a.`CategoryId`, a.`Title`, a.`CreateTime` </span>\n<span class="token comment">//FROM (select * from Topic where clicks &gt; @val) a </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>When <code>WithSql</code> is used multiple times, it will be converted to <code>UNION ALL</code> query</p></blockquote><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Query-from-Multi-Tables">《Query from Multi Tables》</a></li><li><a href="Return-Data">《Return Data》</a></li><li><a href="Linq-to-Sql">《LinqToSql》</a></li><li><a href="Repository-Layer">《Repository Layer》</a></li><li><a href="Lazy-Loading">《FreeSql Optimization: Lazy Loading》</a></li><li><a href="Greed-Loading">《FreeSql Optimization: Greed Loading》</a></li><li><a href="Expression-Function">《Expression Function》</a></li><li><a href="Performance">《Performance》</a></li><li><a href="Sharding-Tables-and-Database">《Sharding Tables and Database》</a></li><li><a href="Tenant">《Tenant》</a></li></ul>',9),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);