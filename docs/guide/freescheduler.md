# FreeScheduler

FreeScheduler 是利用 IdleBus 实现的轻量化定时任务调度，支持临时的延时任务和重复循环任务(可持久化)，可按秒，每天/每周/每月固定时间，自定义间隔执行，支持 .NET Core 2.1+、.NET Framework 4.0+ 运行环境。

开源地址：[https://github.com/2881099/FreeScheduler](https://github.com/2881099/FreeScheduler)

扩展资料：[《.NET 定时任务 -- FreeScheduler 支持 cron、持久化、可变定时设置》](https://www.cnblogs.com/FreeSql/p/16623030.html)

## 快速开始

> dotnet add package FreeScheduler

> Install-Package FreeScheduler

```c#
static Lazy<Scheduler> _schedulerLazy = new Lazy(() => new Scheduler(new MyTaskHandler()));
static Scheduler scheduler => _schedulerLazy.Value;
```

## 临时任务(不可持久化)

```c#
void Callback()
{
    Console.WriteLine("时间到了");
    scheduler.AddTempTask(TimeSpan.FromSeconds(10), Callback); //下一次定时
}

scheduler.AddTempTask(TimeSpan.FromSeconds(10), Callback);
```

| Method | 说明 |
| -- | -- |
| string AddTempTask(TimeSpan, Action) | 创建临时的延时任务，返回 id |
| bool RemoveTempTask(string id) | 删除任务(临时任务) |
| bool ExistsTempTask(string id) | 判断任务是否存在(临时任务) |
| int QuantityTempTask | 任务数量(临时任务) |

## 普通任务

```c#
class MyTaskHandler : FreeScheduler.TaskHandlers.TestHandler
{
    public override void OnExecuting(Scheduler scheduler, TaskInfo task)
    {
        //todo..
    }
}
```

## 持久化任务

```c#
// 使用 FreeSql 持久化任务
class MyTaskHandler : FreeScheduler.TaskHandlers.FreeSqlHandler
{
    public MyTaskHandler(IFreeSql fsql) : base(fsql) { }

    public override void OnExecuting(Scheduler scheduler, TaskInfo task)
    {
        Console.WriteLine($"[{DateTime.Now.ToString("HH:mm:ss.fff")}] {task.Topic} 被执行");

        //强制使任务完成
        //task.Status = TaskStatus.Completed;
    }
}
```

Redis 持久化请安装：

> dotnet add package FreeScheduler.TaskHandlers.FreeRedis

> Install-Package FreeScheduler.TaskHandlers.FreeRedis

## 管理任务

```c#
// 使用 FreeSql 或者 SQL 查询 TaskInfo、TaskLog 两个表进行分页显示
fsql.Select<TaskInfo>().Count(out var total).Page(pageNumber, 30).ToList();
fsql.Select<TaskLog>().Count(out var total).Page(pageNumber, 30).ToList();

//暂停任务
scheduler.PauseTask(id);
//恢复暂停的任务
scheduler.ResumeTask(id);
//删除任务
scheduler.RemoveTask(id);
```

## API (循环任务/可持久化)

```c#
//每5秒触发，执行N次
var id = scheduler.AddTask("topic1", "body1", round: -1, 5);

//每次 不同的间隔秒数触发，执行6次
var id = scheduler.AddTask("topic1", "body1", new [] { 5, 5, 10, 10, 60, 60 });

//每天 20:00:00 触发，指定utc时间，执行N次
var id = scheduler.AddTaskRunOnDay("topic1", "body1", round: -1, "20:00:00");

//每周一 20:00:00 触发，指定utc时间，执行1次
var id = scheduler.AddTaskRunOnWeek("topic1", "body1", round: 1, "1:20:00:00");

//每月1日 20:00:00 触发，指定utc时间，执行12次
var id = scheduler.AddTaskRunOnMonth("topic1", "body1", round: 12, "1:20:00:00");

//自定义间隔
var id = scheduler.AddTaskCustom("topic1", "body1", "0/1 * * * * ? ");
class MyCustomTaskHandler : FreeScheduler.ITaskIntervalCustomHandler
{
    public TimeSpan? NextDelay(TaskInfo task)
    {
        //利用 cron 功能库解析 task.IntervalArgument 得到下一次执行时间
        //与当前时间相减，得到 TimeSpan，若返回 null 则任务完成
        return TimeSpan.FromSeconds(5);
    }
}
```

| Method | 说明 |
| -- | -- |
| void ctor(ITaskHandler) | 指定任务调度器（单例） |
| string AddTask(string topic, string body, int round, int seconds) | 创建循环定时任务，返回 id |
| string AddTask(string topic, string body, int[] seconds) | 创建每轮间隔不同的定时任务，返回 id |
| string AddTaskRunOnDay(..) | 创建每日循环任务，指定utc时间，返回 id |
| string AddTaskRunOnWeek(..) | 创建每周循环任务，指定utc时间，返回 id |
| string AddTaskRunOnMonth(..) | 创建每月循环任务，指定utc时间，返回 id |
| string AddTaskCustom(string topic, string body, string expression) | 创建自定义任务，返回 id |
| bool RemoveTask(string id) | 删除任务 |
| bool ExistsTask(string id) | 判断任务是否存在 |
| bool ResumeTask(string id) | 恢复已暂停的任务 |
| bool PauseTask(string id) | 暂停正在运行的任务 |
| TaskInfo[] FindTask(lambda) | 查询正在运行中的任务 |
| int QuantityTask | 任务数量 |
