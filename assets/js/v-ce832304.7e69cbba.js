"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[2070],{3141:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-ce832304",path:"/en/guide/type-mapping.html",title:"Entity Relationship",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Custom Navigation Relationship",slug:"custom-navigation-relationship",children:[]},{level:2,title:"Detect Navigation Properties",slug:"detect-navigation-properties",children:[]},{level:2,title:"Naming convention (no need to specify Navigate)",slug:"naming-convention-no-need-to-specify-navigate",children:[{level:3,title:"One-to-One",slug:"one-to-one",children:[]},{level:3,title:"Many-to-One",slug:"many-to-one",children:[]},{level:3,title:"One-to-Many",slug:"one-to-many",children:[]},{level:3,title:"Parent and Children",slug:"parent-and-children",children:[]},{level:3,title:"Many-to-Many",slug:"many-to-many",children:[]}]},{level:2,title:"Reference",slug:"reference",children:[]}],git:{updatedTime:1643287138e3,contributors:[{name:"IGeekFan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"en/guide/type-mapping.md"}},2423:(n,s,a)=>{a.r(s),a.d(s,{default:()=>w});var e=a(6252);const p=(0,e.uE)('<h1 id="entity-relationship" tabindex="-1"><a class="header-anchor" href="#entity-relationship" aria-hidden="true">#</a> Entity Relationship</h1><p>Navigation properties are one of FreeSql&#39;s characteristic functions, which can be configured by agreement or customized configuration of the relationship between objects.</p><p>Navigation properties have five configuration relationships: OneToMany, ManyToOne, ManyToMany, OneToOne, and Parent.</p><p>With navigation properties, multi-table query is very convenient. Directly using navigation objects in lambda expressions can get the IDE&#39;s BUFF blessing.</p><ul><li>Naming convention,or not (need to specify Navigate attribute association);</li><li>If there is no association relationship, you can specify the <code>On</code> condition when querying, <code>LeftJoin(a =&gt; a.Parent.Id == a.ParentId)</code>;</li><li>If there is an association relationship, just use the navigation object directly, and the <code>On</code> condition will be automatically attached;</li></ul>',5),t={href:"https://www.cnblogs.com/kellynic/p/13575053.html",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("《What problems can navigation properties solve?》"),c=(0,e.uE)('<h2 id="custom-navigation-relationship" tabindex="-1"><a class="header-anchor" href="#custom-navigation-relationship" aria-hidden="true">#</a> Custom Navigation Relationship</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//Navigation properties, OneToMany</span>\n<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>song_tag<span class="token punctuation">.</span>song_id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>song_tag<span class="token punctuation">&gt;</span></span> Obj_song_tag <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token comment">//Find the song_id property in song_tag and associate it with this ENTITY.PrimaryKey</span>\n\n<span class="token comment">//Navigation properties, ManyToOne/OneToOne</span>\n<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>song_id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Song</span> Obj_song <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token comment">//Find the song_id property in THIS ENTITY and associate it with the Song.PrimaryKey</span>\n\n<span class="token comment">//Navigation properties, ManyToMany</span>\n<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span>ManyToMany <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">tag_song</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>tag<span class="token punctuation">&gt;</span></span> tags <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><hr><p>You can also use FluentApi to set the navigation relationship externally:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConfigEntity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>YOUR_ENTITY<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a\n    <span class="token punctuation">.</span><span class="token function">Navigate</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>roles<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">MANY_TO_MANY_MID_ENTITY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Navigate</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>users<span class="token punctuation">,</span> <span class="token string">&quot;uid&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Priority: Attribute&gt; FluentApi</p><blockquote><p>Note:</p></blockquote><ol><li><p>Set <code>Column(IsIgnore = true)</code> on Property, then the navigation property will be invalid</p></li><li><p>The string set by Navigate is the property name of the type, NOT THE TABLE IR FIELD NAME.</p></li></ol><h2 id="detect-navigation-properties" tabindex="-1"><a class="header-anchor" href="#detect-navigation-properties" aria-hidden="true">#</a> Detect Navigation Properties</h2><p>How to detect whether a navigation property is configured to take effect:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> tbref <span class="token operator">=</span> fsql<span class="token punctuation">.</span>CodeFirst\n    <span class="token punctuation">.</span><span class="token function">GetTableByEntity</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">T</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">GetTableRef</span><span class="token punctuation">(</span><span class="token string">&quot;Children&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Method signature:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GetTableRef(string propertyName, bool isThrow);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="naming-convention-no-need-to-specify-navigate" tabindex="-1"><a class="header-anchor" href="#naming-convention-no-need-to-specify-navigate" aria-hidden="true">#</a> Naming convention (no need to specify Navigate)</h2><h3 id="one-to-one" tabindex="-1"><a class="header-anchor" href="#one-to-one" aria-hidden="true">#</a> One-to-One</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">UserExt</span> UserExt <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">UserExt</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id、UserExtId、UserExt_id</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">User</span> User <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',16),l={href:"https://github.com/2881099/FreeSql/issues/45",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("《How to add data in one-to-one mode?》"),i=(0,e.uE)('<h3 id="many-to-one" tabindex="-1"><a class="header-anchor" href="#many-to-one" aria-hidden="true">#</a> Many-to-One</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Group</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、GroupId、Group_id</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id</span>\n\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> AGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> AGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> BGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> BGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="one-to-many" tabindex="-1"><a class="header-anchor" href="#one-to-many" aria-hidden="true">#</a> One-to-Many</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Group</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、GroupId、Group_id</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> AUsers <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> BUsers <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id</span>\n\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> AGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> AGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> BGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> BGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',4),r={href:"https://github.com/2881099/FreeSql/issues/46",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("《How to add data in one-to-many mode?》"),d=(0,e.uE)('<h3 id="parent-and-children" tabindex="-1"><a class="header-anchor" href="#parent-and-children" aria-hidden="true">#</a> Parent and Children</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Group</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、GroupId、Group_id</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> ParentId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//ParentId、Parent_id</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> Parent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Group<span class="token punctuation">&gt;</span></span> Childs <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>The parent-children relationship is similar to One-to-Many mode. You can also refer to this link:</p>',3),b={href:"https://github.com/2881099/FreeSql/issues/46",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("《How to add data in one-to-many mode?》"),m=(0,e.uE)('<h3 id="many-to-many" tabindex="-1"><a class="header-anchor" href="#many-to-many" aria-hidden="true">#</a> Many-to-Many</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Song</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span> Tags <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">Song_tag</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Song_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Song</span> Song <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Tag_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Tag</span> Tag <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">Tag</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> Parent_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Tag</span> Parent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span> Songs <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span> Tags <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>Song, Tag, Song_tag, these three entities use the four relationships: OneToMany, ManyToOne, Parent, and ManyToMany.</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Entity-Attributes">《CodeFirst Mode, Part 1: Entity Attributes》</a></li><li><a href="FluentApi-Mode">《CodeFirst Mode, Part 2: FluentApi》</a></li><li><a href="Custom-Attributes">《CodeFirst Mode, Part 3: Custom Attributes》</a></li><li><a href="Type-Mapping">《CodeFirst Mode, Part 4: Type Mapping》</a></li><li><a href="Import-Entity-Configuration-from-Database">《Import Entity Configuration from Database》</a></li></ul>',5),g={},w=(0,a(3744).Z)(g,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[(0,e._)("a",t,[o,(0,e.Wm)(a)])]),c,(0,e._)("p",null,[(0,e._)("a",l,[u,(0,e.Wm)(a)])]),i,(0,e._)("p",null,[(0,e._)("a",r,[k,(0,e.Wm)(a)])]),d,(0,e._)("p",null,[(0,e._)("a",b,[y,(0,e.Wm)(a)])]),m],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);