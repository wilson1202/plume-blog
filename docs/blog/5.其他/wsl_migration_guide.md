---
title: wsl_migration_guide
createTime: 2025/11/20 15:37:44
permalink: /blog/l603glcu/
---
# 如何将 WSL (Ubuntu) 从 C 盘迁移到 D 盘

WSL 发行版的文件（`ext4.vhdx`）会占用大量的 C 盘空间。本文档将指导您如何安全、完整地将您的 Ubuntu 发行版迁移到 D 盘，并解决导入后默认用户为 `root` 的问题。

<!-- more -->

## 准备工作

在开始之前,请在 PowerShell 中执行以下命令,确认您的发行版名称和状态:

```powershell
wsl -l -v
```

::: tip 提示
本文档以您的发行版名称 `Ubuntu` 和用户名为 `ub001` 作为示例。请在执行命令时替换为您的实际名称。
:::

## 第一步:数据迁移(导出与导入)

整个迁移过程通过 **导出** C 盘数据,**注销** C 盘发行版,然后 **导入** 到 D 盘来实现。

### 1.1 终止 WSL 实例

确保您要迁移的发行版已停止运行。

```powershell
# 如果发行版正在运行,必须先终止
wsl --terminate Ubuntu
```

### 1.2 导出发行版文件系统

将 `Ubuntu` 的文件系统完整导出为一个 `.tar` 归档文件到 D 盘的临时备份目录。

```powershell
# 1. 创建备份目录
mkdir D:\WSL_Backup

# 2. 执行导出操作(这个过程可能需要几分钟到几十分钟)
wsl --export Ubuntu "D:\WSL_Backup\ubuntu_export.tar"
```

::: note 注意
导出成功后,请在文件资源管理器中确认 `D:\WSL_Backup` 下已生成 `ubuntu_export.tar` 文件。
:::

### 1.3 注销原有发行版

成功导出后,您可以安全地注销 C 盘上的原有发行版,以释放 C 盘空间。

```powershell
wsl --unregister Ubuntu
```

::: danger 警告
此操作会删除 C 盘上发行版的所有数据。请务必确认导出文件已成功生成。
:::

### 1.4 导入到 D 盘的新位置

现在,将 `.tar` 文件导入到 D 盘上指定的安装目录,并确保它仍然使用 **WSL 2** 架构。

```powershell
# 1. 创建新的安装目录
mkdir D:\WSL_Distros\Ubuntu

# 2. 导入发行版到 D 盘
wsl --import Ubuntu "D:\WSL_Distros\Ubuntu" "D:\WSL_Backup\ubuntu_export.tar" --version 2
```

::: info 验证
运行 `wsl -l -v` 确认 `Ubuntu` 状态为 `Stopped`,版本为 `2`。您现在可以在 `D:\WSL_Distros\Ubuntu` 目录下找到新的磁盘文件 `ext4.vhdx`。
:::

## 第二步:配置默认用户(解决 Root 登录)

通过 `--import` 导入的发行版默认会以 `root` 用户身份启动。由于 PowerShell 配置注册表遇到兼容性问题,我们采用更可靠的 **`/etc/wsl.conf` 配置文件**来设置您的默认用户 `ub001`。

### 2.1 启动 WSL 并编辑配置文件

**① 启动 WSL(将以 root 身份登录):**

```powershell
wsl
```

**② 打开或创建 `/etc/wsl.conf` 文件:**

```bash
# 使用 vi 编辑器
vi /etc/wsl.conf
```

**③ 添加默认用户配置:**

在 vi 中按 `i` 键进入插入模式,并粘贴以下内容:

```ini
[user]
default=ub001
```

::: tip
请将 `ub001` 替换为您在 Ubuntu 中的实际用户名。
:::

**④ 保存并退出:**

按 `Esc` 键退出插入模式,然后输入 `:wq` 并按 `Enter`。

### 2.2 应用配置并验证

配置文件的更改需要终止实例才能生效。

**① 退出 Linux Shell:**

```bash
exit
```

**② 终止实例:**

```powershell
wsl --terminate Ubuntu
```

**③ 重新启动 WSL 并验证:**

```powershell
wsl
```

如果配置成功,您的提示符将显示:

```bash
ub001@Yusen:~$ 
```

## 第三步:清理工作(可选)

迁移成功并确认 `ub001` 登录正常后,您可以删除之前导出的 `.tar` 备份文件,以释放 D 盘空间。

```powershell
# 删除备份文件和目录
Remove-Item D:\WSL_Backup -Recurse -Force
```

::: important 完成
恭喜! 您已经成功将 WSL Ubuntu 发行版从 C 盘迁移到 D 盘,并配置了正确的默认用户。
:::

## 常见问题

::: details 为什么导入后默认是 root 用户?
使用 `wsl --import` 导入的发行版不会保留原有的默认用户配置,系统会默认使用 root 用户登录。需要通过 `/etc/wsl.conf` 文件手动指定默认用户。
:::

::: details 可以不注销原发行版直接导入吗?
可以,但这样会同时存在两个发行版(不同的名称),C 盘空间不会被释放。只有注销原发行版才能真正释放 C 盘空间。
:::

::: details 迁移后原来的配置和文件还在吗?
是的,迁移过程会完整保留所有文件、配置和已安装的软件包,就像是把整个文件系统"搬家"到了新位置。
:::

## 相关链接

- [WSL 官方文档](https://docs.microsoft.com/zh-cn/windows/wsl/)
- [WSL 基本命令参考](https://docs.microsoft.com/zh-cn/windows/wsl/basic-commands)
- [WSL 配置文件说明](https://docs.microsoft.com/zh-cn/windows/wsl/wsl-config)