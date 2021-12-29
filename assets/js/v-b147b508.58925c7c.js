"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[2525],{1969:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-b147b508",path:"/guide/linq-to-sql.html",title:"LinqToSql",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"特别说明",slug:"特别说明",children:[]},{level:2,title:"IQueryable",slug:"iqueryable",children:[]},{level:2,title:"Where",slug:"where",children:[]},{level:2,title:"Select(指定字段)",slug:"select-指定字段",children:[]},{level:2,title:"CaseWhen",slug:"casewhen",children:[]},{level:2,title:"Join",slug:"join",children:[]},{level:2,title:"LeftJoin",slug:"leftjoin",children:[]},{level:2,title:"From(多表查询)",slug:"from-多表查询",children:[]},{level:2,title:"GroupBy(分组)",slug:"groupby-分组",children:[]}],git:{updatedTime:1640742125e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"guide/linq-to-sql.md"}},7329:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="linqtosql" tabindex="-1"><a class="header-anchor" href="#linqtosql" aria-hidden="true">#</a> LinqToSql</h1><p>原本不支持 IQueryable 主要出于使用习惯的考虑，编写代码的智能总会提示出现一堆你不想使用的方法（对不起，我有强迫症），IQueryable 自身提供了一堆没法实现的方法，还有外部入侵的扩展方法，严重影响编码体验。如下图：</p><p><img src="https://user-images.githubusercontent.com/16286519/57295126-5dd7bd00-70fc-11e9-99c0-d1c46423afa2.png" alt="image"></p><p>v1.4.0+ 版本请使用以下命令安装（老版本不需要安装）：</p><blockquote><p>dotnet add package FreeSql.Extensions.Linq</p></blockquote><h2 id="特别说明" tabindex="-1"><a class="header-anchor" href="#特别说明" aria-hidden="true">#</a> 特别说明</h2><ul><li><p>请尽量不要在 ISelect 模式下的使用 Linq 方法：GroupJoin、Select、SelectMany、Join、DefaultIfEmpty；</p></li><li><p>如果一定要在 ISelect 中使用 .Select() 方法，请务必在 .ToList() 之前调用它；</p></li></ul><h2 id="iqueryable" tabindex="-1"><a class="header-anchor" href="#iqueryable" aria-hidden="true">#</a> IQueryable</h2><p>FreeSql 提供强大的数据查询对象 ISelect。</p><p>FreeSql.Extensions.Linq v1.4.0+ 实现了 IQueryable 查询对象常用功能，以便在各框架中交互使用。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//将 ISelect 转为 IQueryable</span>\n<span class="token class-name">IQueryable<span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span> queryable <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsQueryable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Linq 方法查询</span>\n<span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> queryable<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//将 IQueryable 还原为 ISelect</span>\n<span class="token class-name">ISelect<span class="token punctuation">&lt;</span>Studeng<span class="token punctuation">&gt;</span></span> <span class="token keyword">select</span> <span class="token operator">=</span> queryable<span class="token punctuation">.</span><span class="token function">RestoreToSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>注意：IQueryable 的实现目前不支持 GroupBy，可以考虑使用 RestoreSelect 方法转回 ISelect 进行查询</p><h2 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> Where</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id\n    <span class="token keyword">select</span> a\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="select-指定字段" tabindex="-1"><a class="header-anchor" href="#select-指定字段" aria-hidden="true">#</a> Select(指定字段)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id\n    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="casewhen" tabindex="-1"><a class="header-anchor" href="#casewhen" aria-hidden="true">#</a> CaseWhen</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id\n    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>\n        a<span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n        a<span class="token punctuation">.</span>name<span class="token punctuation">,</span>\n        testsub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>\n            time <span class="token operator">=</span> a<span class="token punctuation">.</span>age <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token punctuation">?</span> <span class="token string">&quot;大于&quot;</span> <span class="token punctuation">:</span> <span class="token string">&quot;小于或等于&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> Join</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId\n    <span class="token keyword">select</span> a\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId\n    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> b<span class="token punctuation">.</span>id <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t3 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId\n    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id\n    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> b<span class="token punctuation">.</span>id <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="leftjoin" tabindex="-1"><a class="header-anchor" href="#leftjoin" aria-hidden="true">#</a> LeftJoin</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId <span class="token keyword">into</span> temp\n    <span class="token keyword">from</span> tc <span class="token keyword">in</span> temp<span class="token punctuation">.</span><span class="token function">DefaultIfEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">select</span> a\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId <span class="token keyword">into</span> temp\n    <span class="token keyword">from</span> tc <span class="token keyword">in</span> temp<span class="token punctuation">.</span><span class="token function">DefaultIfEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> tc<span class="token punctuation">.</span>id <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t3 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId <span class="token keyword">into</span> temp\n    <span class="token keyword">from</span> tc <span class="token keyword">in</span> temp<span class="token punctuation">.</span><span class="token function">DefaultIfEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id\n    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> tc<span class="token punctuation">.</span>id <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="from-多表查询" tabindex="-1"><a class="header-anchor" href="#from-多表查询" aria-hidden="true">#</a> From(多表查询)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">from</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> b<span class="token punctuation">.</span>StudentId\n    <span class="token keyword">select</span> a\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">from</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> b<span class="token punctuation">.</span>StudentId\n    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> b<span class="token punctuation">.</span>id <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t3 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">from</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> b<span class="token punctuation">.</span>StudentId\n    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id\n    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> b<span class="token punctuation">.</span>id <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="groupby-分组" tabindex="-1"><a class="header-anchor" href="#groupby-分组" aria-hidden="true">#</a> GroupBy(分组)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id\n    <span class="token keyword">group</span> a <span class="token keyword">by</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> a<span class="token punctuation">.</span>name <span class="token punctuation">}</span> <span class="token keyword">into</span> g\n    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>\n        g<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>id<span class="token punctuation">,</span> g<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>name<span class="token punctuation">,</span>\n        cou <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        avg <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        sum <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        max <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Max</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        min <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Min</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>age<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',26),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);