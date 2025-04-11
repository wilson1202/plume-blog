---
title: ZFile
createTime: 2025/04/11 21:14:50
permalink: /article/vtzi3kg7/
tags:
  - zfile
  - 网盘
  - compose
  - unraid
---
## ZFile

<div style="text-align: center;">
  <img src="/images/b-software-docker-2.zfile/ZFile-icon.png" 
       alt="ZFile-icon" 
       style="height: 100px; width: auto; max-width: 100%; object-fit: contain;">
</div>


> Docker Hub：[https://hub.docker.com/r/zhaojun1998/zfile](https://hub.docker.com/r/zhaojun1998/zfile)
>
> Github：[https://github.com/zfile-dev/zfile⁠](https://github.com/zfile-dev/zfile)
>
> 官方网站：[https://www.zfile.vip/⁠](https://www.zfile.vip/)

## Compose 配置

```yaml
version: '3.3'
services:
    zfile:
        container_name: zfile
        restart: always
        ports:
            - '8080:8080' 
        volumes:
            - '/volume1/docker/zfile/db:/root/.zfile-v4/db'
            - '/volume1/docker/zfile/logs:/root/.zfile-v4/logs'
            - '/volume2/share/zfile:/data/file'
            - '/volume1/docker/zfile/application.properties:/root/application.properties' // [!code ++]
        image: zhaojun1998/zfile:latest
```

::: info **配置文件映射**

需要先在宿主机下载配置文件，然后映射到容器内: 下载 [`application.properties`](https://c.jun6.net/ZFILE/application.properties) 文件到 `/root/zfile/` 目录下, 此目录可自行更改, 命令如:

```bash
curl -k -o /volume1/docker/zfile/application.properties https://c.jun6.net/ZFILE/application.properties
```

**然后增加一个 `-v` 参数(见上面倒数第二行)，将此源文件映射到容器内（如修改宿主机的 `application.properties` 为其他路径, 则下面命令也要一起修改）, 如:**

> 提示: 启动容器后无法修改文件映射，需先 `docker rm -f zfile` 删除容器，再重新运行命令.

:::

## Unraid 配置

| 项目              | 参数                                                         | 备注       |
| ----------------- | ------------------------------------------------------------ | ---------- |
| 名称              | `ZFile`                                                      |            |
| 概述              | 空                                                           |            |
| 额外要求          | 空                                                           |            |
| 存储库            | `zhaojun1998/zfile`                                          |            |
| Registry URL      | [https://registry.hub.docker.com/r/zhaojun1998/zfile](https://registry.hub.docker.com/r/zhaojun1998/zfile) |            |
| 图标链接          | `/mnt/user/Pictures/docker-logos/ZFile-icon.png`             |            |
| WebUI             | 空                                                           |            |
| 额外参数          | 空                                                           |            |
| 发布参数          | 空                                                           |            |
| CPU 绑定          | 自定义                                                       |            |
| 网络类型          | `Bridge`                                                     |            |
| Use Tailscale     | 关                                                           |            |
| 控制台 shell 命令 | `Shell`                                                      |            |
| 特权              | 关                                                           |            |
| 路径              | 容器路径：`/root/.zfile-v4/db`；主机路径：`/mnt/user/appdata/ZFile/db` | 数据库路径 |
| 路径              | 容器路径：`/root/.zfile-v4/logs`；主机路径：`/mnt/user/appdata/ZFile/logs` | 日志路径   |
| 路径              | 容器路径：`/data/file`；主机路径：`/mnt/user/Work/`          | 存储路径   |
| 端口              | 容器端口：`8080`；主机端口：`8080`；连接类型：`TCP`          | 映射端口   |
