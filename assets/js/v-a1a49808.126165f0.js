"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[5943],{5710:(t,d,e)=>{e.r(d),e.d(d,{data:()=>r});const r={key:"v-a1a49808",path:"/reference/api.html",title:"API 文档",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"FreeSqlBuilder",slug:"freesqlbuilder",children:[]},{level:2,title:"IFreeSql",slug:"ifreesql",children:[]},{level:2,title:"BaseRepository<TEntity, TKey>",slug:"baserepository-tentity-tkey",children:[]},{level:2,title:"ICodeFirst",slug:"icodefirst",children:[]},{level:2,title:"IDbFirst",slug:"idbfirst",children:[]},{level:2,title:"ISelect",slug:"iselect",children:[]},{level:2,title:"IInsert",slug:"iinsert",children:[]},{level:2,title:"IUpdate",slug:"iupdate",children:[]},{level:2,title:"IDelete",slug:"idelete",children:[]}],git:{updatedTime:1643287138e3,contributors:[{name:"IGeekFan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"reference/api.md"}},8380:(t,d,e)=>{e.r(d),e.d(d,{default:()=>$});var r=e(6252);const l=(0,r._)("h1",{id:"api-文档",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#api-文档","aria-hidden":"true"},"#"),(0,r.Uk)(" API 文档")],-1),n={href:"http://124.70.130.97:8082/api/FreeSql.html",target:"_blank",rel:"noopener noreferrer"},i=(0,r.Uk)("http://124.70.130.97:8082/api/FreeSql.html"),a=(0,r.uE)('<h2 id="freesqlbuilder" tabindex="-1"><a class="header-anchor" href="#freesqlbuilder" aria-hidden="true">#</a> FreeSqlBuilder</h2><table><thead><tr><th>方法</th><th>返回值</th><th>说明</th></tr></thead><tbody><tr><td>UseConnectionString</td><td>this</td><td>设置连接串</td></tr><tr><td>UseSlave</td><td>this</td><td>设置从数据库，支持多个</td></tr><tr><td>UseConnectionFactory</td><td>this</td><td>设置自定义数据库连接对象（放弃内置对象连接池技术）</td></tr><tr><td>UseAutoSyncStructure</td><td>this</td><td>【开发环境必备】自动同步实体结构到数据库，程序运行中检查实体创建或修改表结构</td></tr><tr><td>UseNoneCommandParameter</td><td>this</td><td>不使用命令参数化执行，针对 Insert/Update，也可临时使用 IInsert/IUpdate.NoneParameter()</td></tr><tr><td>UseGenerateCommandParameterWithLambda</td><td>this</td><td>生成命令参数化执行，针对 lambda 表达式解析</td></tr><tr><td>UseLazyLoading</td><td>this</td><td>开启延时加载功能</td></tr><tr><td>UseMonitorCommand</td><td>this</td><td>监视全局 SQL 执行前后</td></tr><tr><td><strong>UseNameConvert</strong></td><td>this</td><td>转换实体、属性名称 Entity Property -&gt; Db Filed</td></tr><tr><td>Build&lt;T&gt;</td><td>IFreeSql&lt;T&gt;</td><td>创建一个 IFreeSql 对象，注意：单例设计，不要重复创建</td></tr></tbody></table><h2 id="ifreesql" tabindex="-1"><a class="header-anchor" href="#ifreesql" aria-hidden="true">#</a> IFreeSql</h2>',3),o=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"属性"),(0,r._)("th",null,"返回值"),(0,r._)("th",null,"说明")])],-1),s=(0,r.Uk)("Ado"),h=(0,r._)("td",null,"IAdo",-1),u=(0,r._)("td",null,"数据库访问对象，封装了类似 SqlHelper 操作：ExecuteNonQuery/ExecuteScalar/ExecuteConnectTest 等",-1),g=(0,r.Uk)("Aop"),c=(0,r._)("td",null,"IAop",-1),b=(0,r._)("td",null,"所有 AOP 拦截方法都在这里",-1),y=(0,r.Uk)("CodeFirst"),m=(0,r._)("td",null,"ICodeFirst",-1),T=(0,r._)("td",null,"封装 CodeFirst 模式开发相关方法",-1),p=(0,r.Uk)("DbFirst"),_=(0,r._)("td",null,"IDbFirst",-1),I=(0,r._)("td",null,"封装 DbFirst 模式开发相关方法",-1),S=(0,r.Uk)("GlobalFilter"),f=(0,r._)("td",null,"GlobalFilter",-1),L=(0,r._)("td",null,"全局过滤设置，可默认附加为 Select/Update/Delete 条件",-1),q=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"方法"),(0,r._)("th",null,"返回值"),(0,r._)("th",null,"参数"),(0,r._)("th",null,"说明")])],-1),E=(0,r._)("tr",null,[(0,r._)("td",null,"Select<TEntity>"),(0,r._)("td",null,"ISelect<TEntity>"),(0,r._)("td",null,"无"),(0,r._)("td",null,"准备查询数据")],-1),C=(0,r._)("tr",null,[(0,r._)("td",null,"Insert<TEntity>"),(0,r._)("td",null,"IInsert<TEntity>"),(0,r._)("td",null,"无/TEntity/TEntity[]"),(0,r._)("td",null,"准备插入")],-1),D=(0,r._)("tr",null,[(0,r._)("td",null,"Update<TEntity>"),(0,r._)("td",null,"IUpdate<TEntity>"),(0,r._)("td",null,"无"),(0,r._)("td",null,"准备更新数据")],-1),k=(0,r._)("tr",null,[(0,r._)("td",null,"Delete<TEntity>"),(0,r._)("td",null,"IDelete<TEntity>"),(0,r._)("td",null,"无"),(0,r._)("td",null,"准备删除")],-1),U=(0,r._)("tr",null,[(0,r._)("td",null,"InsertOrUpdate<TEntity>"),(0,r._)("td",null,"IInsertOrUpdate<TEntity>"),(0,r._)("td",null,"无"),(0,r._)("td",null,"插入或更新数据")],-1),W=(0,r._)("td",null,"Transaction",-1),F=(0,r._)("td",null,"void",-1),x=(0,r._)("td",null,"Action",-1),w=(0,r.Uk)("开启事务（不支持异步），"),O=(0,r.Uk)("其他事务"),v=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"扩展方法"),(0,r._)("th",null,"返回值"),(0,r._)("th",null,"参数"),(0,r._)("th",null,"说明")])],-1),A=(0,r._)("tr",null,[(0,r._)("td",null,"Select<T1, T2, ... T10>"),(0,r._)("td",null,"ISelect"),(0,r._)("td",null,"无"),(0,r._)("td",null,"准备多表查询")],-1),Q=(0,r.Uk)("CreateDbContext"),B=(0,r._)("td",null,"DbContext",-1),G=(0,r._)("td",null,"无",-1),P=(0,r._)("td",null,"创建普通数据上下文档对象，该对象功能类似于 EFCore",-1),R=(0,r._)("tr",null,[(0,r._)("td",null,"SetDbContextOptions"),(0,r._)("td",null,"-"),(0,r._)("td",null,"Action"),(0,r._)("td",null,"设置此 IFreeSql 下 DbContext 选项设置")],-1),N=(0,r.Uk)("GetRepository"),M=(0,r.Uk)("<TEntity, TKey>"),J=(0,r._)("td",null,"BaseRepository",-1),K=(0,r._)("td",null,"无",-1),z=(0,r._)("td",null,"返回默认仓库功能实现",-1),H=(0,r.Uk)("CreateUnitOfWork"),V=(0,r._)("td",null,"IUnitOfWork",-1),Z=(0,r._)("td",null,"无",-1),j=(0,r._)("td",null,"创建基于仓储功能的工作单元，务必使用 using 包含使用",-1),Y=(0,r.uE)('<hr><h2 id="baserepository-tentity-tkey" tabindex="-1"><a class="header-anchor" href="#baserepository-tentity-tkey" aria-hidden="true">#</a> BaseRepository&lt;TEntity, TKey&gt;</h2><table><thead><tr><th>属性</th><th>返回值</th><th>说明</th></tr></thead><tbody><tr><td>EntityType</td><td>Type</td><td>仓储正在操作的实体类型，注意它不一定是 TEntity</td></tr><tr><td>UnitOfWork</td><td>IUnitOfWork</td><td>正在使用的工作单元</td></tr><tr><td>Orm</td><td>IFreeSql</td><td>正在使用的 Orm</td></tr><tr><td>DbContextOptions</td><td>DbContextOptions</td><td>正在使用的 DbContext 设置，修改设置不影响其他</td></tr><tr><td>DataFilter</td><td>IDataFilter&lt;TEntity&gt;</td><td>仓储过滤器，本对象内生效</td></tr><tr><td>Select</td><td>ISelect&lt;TEntity&gt;</td><td>准备查询数据</td></tr></tbody></table><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>AsType</td><td>void</td><td>Type</td><td>改变仓储正在操作的实体类型</td></tr><tr><td>Get</td><td>TEntity</td><td>TKey</td><td>根据主键，查询数据</td></tr><tr><td>Find</td><td>TEntity</td><td>TKey</td><td>根据主键，查询数据</td></tr><tr><td>Delete</td><td>int</td><td>TKey</td><td>根据主键删除数据</td></tr><tr><td>Delete</td><td>int</td><td>Lambda</td><td>根据 lambda 条件删除数据</td></tr><tr><td>Delete</td><td>int</td><td>TEntity</td><td>删除数据</td></tr><tr><td>Delete</td><td>int</td><td>IEnumerable&lt;TEntity&gt;</td><td>批量删除数据</td></tr><tr><td>Insert</td><td>-</td><td>TEntity</td><td>插入数据，若实体有自增列，插入后的自增值会填充到实体中</td></tr><tr><td>Insert</td><td>-</td><td>IEnumerable&lt;TEntity&gt;</td><td>批量插入数据</td></tr><tr><td>Update</td><td>-</td><td>TEntity</td><td>更新数据</td></tr><tr><td>Update</td><td>-</td><td>IEnumerable&lt;TEntity&gt;</td><td>批量更新数据</td></tr><tr><td>InsertOrUpdate</td><td>-</td><td>TEntity</td><td>插入或更新数据</td></tr><tr><td>FlushState</td><td>-</td><td>无</td><td>清除状态管理数据</td></tr><tr><td>Attach</td><td>-</td><td>TEntity</td><td>附加实体到状态管理，可用于不查询就更新或删除</td></tr><tr><td>Attach</td><td>-</td><td>IEnumerable&lt;TEntity&gt;</td><td>批量附加实体到状态管理</td></tr><tr><td>AttachOnlyPrimary</td><td>-</td><td>TEntity</td><td>只附加实体的主键数据到状态管理</td></tr><tr><td>SaveMany</td><td>-</td><td>TEntity, string</td><td>保存实体的指定 ManyToMany/OneToMany 导航属性（完整对比）</td></tr><tr><td>BeginEdit</td><td>-</td><td>List&lt;TEntity&gt;</td><td>准备编辑一个 List 实体</td></tr><tr><td>EndEdit</td><td>int</td><td>无</td><td>完成编辑数据，进行保存动作</td></tr></tbody></table><blockquote><p>状态管理，可实现 Update 只更新变化的字段（不更新所有字段），灵活使用 Attach 和 Update 用起来非常舒服。</p></blockquote><p>DbContext 与 BaseRepository 功能大致类似。</p><p>DbContext 自身 = 完整事务，BaseRepository 不一定有事务（可通过设置其 UnitOfWork 属性）。</p><hr><h2 id="icodefirst" tabindex="-1"><a class="header-anchor" href="#icodefirst" aria-hidden="true">#</a> ICodeFirst</h2><table><thead><tr><th>属性</th><th>返回值</th><th>说明</th></tr></thead><tbody><tr><td>IsAutoSyncStructure</td><td>bool</td><td>【开发环境必备】自动同步实体结构到数据库，程序运行中检查实体表是否存在，然后创建或修改</td></tr><tr><td>IsSyncStructureToLower</td><td>bool</td><td>是否转小写映射，适合 pgsql</td></tr><tr><td>IsSyncStructureToUpper</td><td>bool</td><td>是否转大写映射，适合 oracle、dameng</td></tr><tr><td>IsNoneCommandParameter</td><td>bool</td><td>是否不使用命令参数化执行，针对 Insert/Update</td></tr><tr><td>IsGenerateCommandParameterWithLambda</td><td>bool</td><td>是否生成命令参数化执行，针对 where lambda 表达式解析</td></tr><tr><td>IsLazyLoading</td><td>bool</td><td>是否开启延时加载导航属性对象，导航属性需要声明 virtual</td></tr><tr><td>IsConfigEntityFromDbFirst</td><td>bool</td><td>将数据库的主键、自增、索引设置导入，适合 DbFirst 模式，无须在实体类型上设置 [Column(IsPrimary)]。此功能目前可用于 mysql/sqlserver/postgresql/oracle，此功能会影响 IFreeSql 首次访问的速度。若使用 CodeFirst 创建索引后，又直接在数据库上建了索引，若无本功能下一次 CodeFirst 迁移时数据库上创建的索引将被删除</td></tr></tbody></table><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>GetComparisonDDLStatements&lt;TEntity&gt;</td><td>string</td><td>无</td><td>将实体类型与数据库对比，返回DDL语句</td></tr><tr><td>GetComparisonDDLStatements</td><td>string</td><td>Type[]</td><td>将多个实体类型与数据库对比，返回DDL语句</td></tr><tr><td>GetComparisonDDLStatements</td><td>string</td><td>Type, string</td><td>将实体类型与数据库对比，返回DDL语句(指定表名)</td></tr><tr><td>SyncStructure&lt;TEntity&gt;</td><td>bool</td><td>无</td><td>同步实体类型到数据库</td></tr><tr><td>SyncStructure</td><td>bool</td><td>Type[]</td><td>同步实体类型集合到数据库</td></tr><tr><td>SyncStructure</td><td>bool</td><td>Type, string</td><td>同步实体类型到数据库（指定表名）</td></tr><tr><td>ConfigEntity</td><td>ICodeFirst</td><td>Action&lt;TableFluent&lt;T&gt;&gt;</td><td>FluentAPI 配置实体的特性</td></tr><tr><td>GetTableByEntity</td><td>TableInfo</td><td>Type</td><td>获取类型在ORM内部的元数据</td></tr></tbody></table><hr><h2 id="idbfirst" tabindex="-1"><a class="header-anchor" href="#idbfirst" aria-hidden="true">#</a> IDbFirst</h2><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>GetDatabases</td><td>List&lt;string&gt;</td><td>无</td><td>获取所有数据库</td></tr><tr><td>GetTablesByDatabase</td><td>List&lt;DbTableInfo&gt;</td><td>string[]</td><td>获取指定数据库的表信息，包括表、列详情、主键、唯一键、索引、外键、备注</td></tr><tr><td>GetTableByName</td><td>DbTableInfo</td><td>string</td><td>获取指定单表信息，包括列详情、主键、唯一键、索引、备注</td></tr><tr><td>ExistsTable</td><td>bool</td><td>string</td><td>判断表名是否存在</td></tr></tbody></table><hr><h2 id="iselect" tabindex="-1"><a class="header-anchor" href="#iselect" aria-hidden="true">#</a> ISelect</h2><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>ToSql</td><td>string</td><td></td><td>返回即将执行的SQL语句</td></tr><tr><td>ToList</td><td>List&lt;T1&gt;</td><td></td><td>执行SQL查询，返回 T1 实体所有字段的记录，若存在导航属性则一起查询返回，记录不存在时返回 Count 为 0 的列表</td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>Lambda</td><td>执行SQL查询，返回指定字段的记录，记录不存在时返回 Count 为 0 的列表</td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>string field</td><td>执行SQL查询，返回 field 指定字段的记录，并以元组或基础类型(int,string,long)接收，记录不存在时返回 Count 为 0 的列表</td></tr><tr><td>ToOne</td><td>T1</td><td></td><td>执行SQL查询，返回 T1 实体所有字段的第一条记录，记录不存在时返回 null</td></tr><tr><td>Any</td><td>bool</td><td></td><td>执行SQL查询，是否有记录</td></tr><tr><td>Sum</td><td>T</td><td>Lambda</td><td>指定一个列求和</td></tr><tr><td>Min</td><td>T</td><td>Lambda</td><td>指定一个列求最小值</td></tr><tr><td>Max</td><td>T</td><td>Lambda</td><td>指定一个列求最大值</td></tr><tr><td>Avg</td><td>T</td><td>Lambda</td><td>指定一个列求平均值</td></tr><tr><td>【分页】</td><td></td><td></td><td></td></tr><tr><td>Count</td><td>long</td><td></td><td>查询的记录数量</td></tr><tr><td>Count</td><td>&lt;this&gt;</td><td>out long</td><td>查询的记录数量，以参数out形式返回</td></tr><tr><td>Skip</td><td>&lt;this&gt;</td><td>int offset</td><td>查询向后偏移行数</td></tr><tr><td>Offset</td><td>&lt;this&gt;</td><td>int offset</td><td>查询向后偏移行数</td></tr><tr><td>Limit</td><td>&lt;this&gt;</td><td>int limit</td><td>查询多少条数据</td></tr><tr><td>Take</td><td>&lt;this&gt;</td><td>int limit</td><td>查询多少条数据</td></tr><tr><td>Page</td><td>&lt;this&gt;</td><td>int pageIndex, int pageSize</td><td>分页</td></tr><tr><td>【条件】</td><td></td><td></td><td></td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>Lambda</td><td>支持多表查询表达式，多次使用相当于AND</td></tr><tr><td>WhereIf</td><td>&lt;this&gt;</td><td>bool, Lambda</td><td>支持多表查询表达式</td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>string, parms</td><td>原生sql语法条件，Where(&quot;id = ?id&quot;, new { id = 1 })</td></tr><tr><td>WhereIf</td><td>&lt;this&gt;</td><td>bool, string, parms</td><td>原生sql语法条件，WhereIf(true, &quot;id = ?id&quot;, new { id = 1 })</td></tr><tr><td>WhereCascade</td><td>&lt;this&gt;</td><td>Lambda</td><td>实现多表查询时，向每个表中附加条件</td></tr><tr><td>【分组】</td><td></td><td></td><td></td></tr><tr><td>GroupBy</td><td>&lt;this&gt;</td><td>Lambda</td><td>按选择的列分组，GroupBy(a =&gt; a.Name)</td></tr><tr><td>GroupBy</td><td>&lt;this&gt;</td><td>string, parms</td><td>按原生sql语法分组，GroupBy(&quot;concat(name, ?cc)&quot;, new { cc = 1 })</td></tr><tr><td>Having</td><td>&lt;this&gt;</td><td>string, parms</td><td>按原生sql语法聚合条件过滤，Having(&quot;count(name) = ?cc&quot;, new { cc = 1 })</td></tr><tr><td>Distinct</td><td>&lt;this&gt;</td><td></td><td>.Distinct().ToList(x =&gt; x.GroupName) 是对指定字段</td></tr><tr><td>【排序】</td><td></td><td></td><td></td></tr><tr><td>OrderBy</td><td>&lt;this&gt;</td><td>Lambda</td><td>按列排序，OrderBy(a =&gt; a.Time)，可多次使用</td></tr><tr><td>OrderByDescending</td><td>&lt;this&gt;</td><td>Lambda</td><td>按列倒向排序，OrderByDescending(a =&gt; a.Time)</td></tr><tr><td>OrderBy</td><td>&lt;this&gt;</td><td>string, parms</td><td>按原生sql语法排序，OrderBy(&quot;count(name) + ?cc&quot;, new { cc = 1 })</td></tr><tr><td>OrderByPropertyName</td><td>string, bool</td><td>按属性名字符串排序（支持导航属性）</td><td></td></tr><tr><td>【联表】</td><td></td><td></td><td></td></tr><tr><td>LeftJoin</td><td>&lt;this&gt;</td><td>Lambda</td><td>左联查询，可使用导航属性，或指定关联的实体类型</td></tr><tr><td>InnerJoin</td><td>&lt;this&gt;</td><td>Lambda</td><td>联接查询，可使用导航属性，或指定关联的实体类型</td></tr><tr><td>RightJoin</td><td>&lt;this&gt;</td><td>Lambda</td><td>右联查询，可使用导航属性，或指定关联的实体类型</td></tr><tr><td>LeftJoin</td><td>&lt;this&gt;</td><td>string, parms</td><td>左联查询，使用原生sql语法，LeftJoin(&quot;type b on b.id = a.id and b.clicks &gt; ?clicks&quot;, new { clicks = 1 })</td></tr><tr><td>InnerJoin</td><td>&lt;this&gt;</td><td>string, parms</td><td>联接查询，使用原生sql语法，InnerJoin(&quot;type b on b.id = a.id and b.clicks &gt; ?clicks&quot;, new { clicks = 1 })</td></tr><tr><td>RightJoin</td><td>&lt;this&gt;</td><td>string, parms</td><td>右联查询，使用原生sql语法，RightJoin(&quot;type b on b.id = a.id and b.clicks &gt; ?clicks&quot;, new { clicks = 1 })</td></tr><tr><td>From</td><td>&lt;this&gt;</td><td>Lambda</td><td>多表查询，3个表以上使用非常方便，目前设计最大支持10个表</td></tr><tr><td>【其他】</td><td></td><td></td><td></td></tr><tr><td>As</td><td>&lt;this&gt;</td><td>string alias = &quot;a&quot;</td><td>指定别名</td></tr><tr><td>Master</td><td>&lt;this&gt;</td><td></td><td>指定从主库查询（默认查询从库）</td></tr><tr><td>CommandTimeout</td><td>&lt;this&gt;</td><td>int</td><td>命令超时设置(秒)</td></tr><tr><td>WithTransaction</td><td>&lt;this&gt;</td><td>DbTransaction</td><td>设置事务对象</td></tr><tr><td>WithConnection</td><td>&lt;this&gt;</td><td>DbConnection</td><td>设置连接对象</td></tr><tr><td>WithLock</td><td>&lt;this&gt;</td><td>Enum</td><td>SqlServer NoLock 等特有的设置</td></tr><tr><td>ForUpdate</td><td>&lt;this&gt;</td><td>bool</td><td>排他更新锁，对不同的数据库已作适配，详细说明见注释</td></tr><tr><td>AsQueryable</td><td>IQueryable</td><td></td><td>将 ISelect 转换为 IQueryable，此方法主要用于扩展，比如：abp IRepository GetAll() 接口方法需要返回 IQueryable 对象。注意：IQueryable 方法污染较为严重，请尽量避免此转换</td></tr><tr><td>ToTreeList()</td><td>List&lt;TEntity&gt;</td><td>无</td><td>将父子关系的数据以 TreeList 的形式返回</td></tr><tr><td>AsTreeCte()</td><td>ISelect</td><td>(up, pathSelector, level)</td><td>递归查询父子关系表</td></tr></tbody></table><hr><h2 id="iinsert" tabindex="-1"><a class="header-anchor" href="#iinsert" aria-hidden="true">#</a> IInsert</h2><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>AppendData</td><td>&lt;this&gt;</td><td>T1 | IEnumerable&lt;T1&gt;</td><td>追加准备插入的实体</td></tr><tr><td>InsertIdentity</td><td>&lt;this&gt;</td><td>无</td><td>指明插入自增列</td></tr><tr><td>InsertColumns</td><td>&lt;this&gt;</td><td>Lambda</td><td>只插入的列</td></tr><tr><td>IgnoreColumns</td><td>&lt;this&gt;</td><td>Lambda</td><td>忽略的列</td></tr><tr><td>CommandTimeout</td><td>&lt;this&gt;</td><td>int</td><td>命令超时设置(秒)</td></tr><tr><td>WithTransaction</td><td>&lt;this&gt;</td><td>DbTransaction</td><td>设置事务对象</td></tr><tr><td>WithConnection</td><td>&lt;this&gt;</td><td>DbConnection</td><td>设置连接对象</td></tr><tr><td>ToSql</td><td>string</td><td></td><td>返回即将执行的SQL语句</td></tr><tr><td>OnDuplicateKeyUpdate</td><td>OnDuplicateKeyUpdate&lt;T1&gt;</td><td>无</td><td>MySql 特有的功能，On Duplicate Key Update</td></tr><tr><td>OnConflictDoUpdate</td><td>OnConflictDoUpdate&lt;T1&gt;</td><td>无</td><td>PostgreSQL 特有的功能，On Conflict Do Update</td></tr><tr><td>ExecuteAffrows</td><td>long</td><td></td><td>执行SQL语句，返回影响的行数</td></tr><tr><td>ExecuteIdentity</td><td>long</td><td></td><td>执行SQL语句，返回自增值</td></tr><tr><td>ExecuteInserted</td><td>List&lt;T1&gt;</td><td></td><td>执行SQL语句，返回插入后的记录</td></tr><tr><td>ExecuteSqlBulkCopy</td><td>void</td><td></td><td>SqlServer 特有的功能，执行 SqlBulkCopy 批量插入的封装</td></tr><tr><td>ExecutePgCopy</td><td>void</td><td></td><td>PostgreSQL 特有的功能，执行 Copy 批量导入数据</td></tr></tbody></table><hr><h2 id="iupdate" tabindex="-1"><a class="header-anchor" href="#iupdate" aria-hidden="true">#</a> IUpdate</h2><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>SetSource</td><td>&lt;this&gt;</td><td>T1 | IEnumerable&lt;T1&gt;</td><td>更新数据，设置更新的实体</td></tr><tr><td>IgnoreColumns</td><td>&lt;this&gt;</td><td>Lambda</td><td>忽略的列</td></tr><tr><td>Set</td><td>&lt;this&gt;</td><td>Lambda, value</td><td>设置列的新值，Set(a =&gt; a.Name, &quot;newvalue&quot;)</td></tr><tr><td>Set</td><td>&lt;this&gt;</td><td>Lambda</td><td>设置列的的新值为基础上增加，Set(a =&gt; a.Clicks + 1)，相当于 clicks=clicks+1</td></tr><tr><td>SetDto</td><td>&lt;this&gt;</td><td>object</td><td>根据 dto 更新的方法</td></tr><tr><td>SetRaw</td><td>&lt;this&gt;</td><td>string, parms</td><td>设置值，自定义SQL语法，SetRaw(&quot;title = ?title&quot;, new { title = &quot;newtitle&quot; })</td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>Lambda</td><td>表达式条件，仅支持实体基础成员（不包含导航对象）</td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>string, parms</td><td>原生sql语法条件，Where(&quot;id = ?id&quot;, new { id = 1 })</td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>T1 | IEnumerable&lt;T1&gt;</td><td>传入实体或集合，将其主键作为条件</td></tr><tr><td>WhereExists</td><td>&lt;this&gt;</td><td>ISelect</td><td>子查询是否存在</td></tr><tr><td>CommandTimeout</td><td>&lt;this&gt;</td><td>int</td><td>命令超时设置(秒)</td></tr><tr><td>WithTransaction</td><td>&lt;this&gt;</td><td>DbTransaction</td><td>设置事务对象</td></tr><tr><td>WithConnection</td><td>&lt;this&gt;</td><td>DbConnection</td><td>设置连接对象</td></tr><tr><td>ToSql</td><td>string</td><td></td><td>返回即将执行的SQL语句</td></tr><tr><td>ExecuteAffrows</td><td>long</td><td></td><td>执行SQL语句，返回影响的行数</td></tr><tr><td>ExecuteUpdated</td><td>List&lt;T1&gt;</td><td></td><td>执行SQL语句，返回更新后的记录</td></tr></tbody></table><hr><h2 id="idelete" tabindex="-1"><a class="header-anchor" href="#idelete" aria-hidden="true">#</a> IDelete</h2><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>Where</td><td>&lt;this&gt;</td><td>Lambda</td><td>表达式条件，仅支持实体基础成员（不包含导航对象）</td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>string, parms</td><td>原生sql语法条件，Where(&quot;id = ?id&quot;, new { id = 1 })</td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>T1 | IEnumerable&lt;T1&gt;</td><td>传入实体或集合，将其主键作为条件</td></tr><tr><td>WhereExists</td><td>&lt;this&gt;</td><td>ISelect</td><td>子查询是否存在</td></tr><tr><td>CommandTimeout</td><td>&lt;this&gt;</td><td>int</td><td>命令超时设置(秒)</td></tr><tr><td>WithTransaction</td><td>&lt;this&gt;</td><td>DbTransaction</td><td>设置事务对象</td></tr><tr><td>WithConnection</td><td>&lt;this&gt;</td><td>DbConnection</td><td>设置连接对象</td></tr><tr><td>ToSql</td><td>string</td><td></td><td>返回即将执行的SQL语句</td></tr><tr><td>ExecuteAffrows</td><td>long</td><td></td><td>执行SQL语句，返回影响的行数</td></tr><tr><td>ExecuteDeleted</td><td>List&lt;T1&gt;</td><td></td><td>执行SQL语句，返回被删除的记录</td></tr></tbody></table>',26),X={},$=(0,e(3744).Z)(X,[["render",function(t,d){const e=(0,r.up)("ExternalLinkIcon"),X=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[l,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",n,[i,(0,r.Wm)(e)])])]),a,(0,r._)("table",null,[o,(0,r._)("tbody",null,[(0,r._)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(X,{to:"/guide/ado.html"},{default:(0,r.w5)((()=>[s])),_:1})]),h,u]),(0,r._)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(X,{to:"/guide/aop.html"},{default:(0,r.w5)((()=>[g])),_:1})]),c,b]),(0,r._)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(X,{to:"/guide/code-first.html"},{default:(0,r.w5)((()=>[y])),_:1})]),m,T]),(0,r._)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(X,{to:"/guide/db-first.html"},{default:(0,r.w5)((()=>[p])),_:1})]),_,I]),(0,r._)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(X,{to:"/guide/filters.html"},{default:(0,r.w5)((()=>[S])),_:1})]),f,L])])]),(0,r._)("table",null,[q,(0,r._)("tbody",null,[E,C,D,k,U,(0,r._)("tr",null,[W,F,x,(0,r._)("td",null,[w,(0,r.Wm)(X,{to:"/guide/transaction.html"},{default:(0,r.w5)((()=>[O])),_:1})])])])]),(0,r._)("table",null,[v,(0,r._)("tbody",null,[A,(0,r._)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(X,{to:"/guide/db-context.html"},{default:(0,r.w5)((()=>[Q])),_:1})]),B,G,P]),R,(0,r._)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(X,{to:"/guide/repository.html"},{default:(0,r.w5)((()=>[N])),_:1}),M]),J,K,z]),(0,r._)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(X,{to:"/guide/unit-of-work.html"},{default:(0,r.w5)((()=>[H])),_:1})]),V,Z,j])])]),Y],64)}]])},3744:(t,d)=>{d.Z=(t,d)=>{const e=t.__vccOpts||t;for(const[t,r]of d)e[t]=r;return e}}}]);