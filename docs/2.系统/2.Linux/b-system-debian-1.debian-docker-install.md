---
title: Debian Docker 安装
createTime: 2025/04/26 22:17:50
permalink: /article/6gyvz1x7/
tags:
  - docker
  - debian
  - linux
copyright:
  creation: runoob.com
  license: CC-BY-4.0
  source: https://www.runoob.com/docker/debian-docker-install.html
  author:
    name: runoob.com
    url: https://www.runoob.com/
---
Docker 支持以下的 64 位 Debian 版本：

- Debian Bookworm 12 （稳定版）
- Debian Bullseye 11 （旧稳定版）

支持的架构包括 x86_64（amd64）、armhf、arm64 和 ppc64le。

## 卸载旧版本

如果你之前安装过 Docker Engine 之前，你需要卸载旧版本，避免冲突：

```bash
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

## 使用官方安装脚本自动安装

安装命令如下：

```bash
 curl -fsSL https://get.docker.com -o get-docker.sh
 sudo sh get-docker.sh
```

## 手动安装

### 1. 更新软件包

首先，更新现有的软件包和包缓存：

```bash
sudo apt update
sudo apt upgrade
```

### 2. 安装依赖包

安装一些需要的依赖包，这些包允许 apt 使用 HTTPS 协议来访问 Docker 仓库：

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

### 3. 添加 Docker 官方 GPG 密钥

使用下面的命令来添加 Docker 官方的 GPG 密钥：

```bash
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

### 4. 添加 Docker 仓库

添加 Docker 官方的 APT 软件源：

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
# 更新
sudo apt-get update
```

### 5. 更新 APT 软件包缓存

添加仓库后，更新 APT 包索引：

```bash
sudo apt update
```

确保你现在从 Docker 官方仓库安装 Docker 而不是 Debian 默认仓库：

```bash
apt-cache policy docker-ce
```

你应该看到它指向 https://download.docker.com/，确保这就是官方的 Docker 仓库。

### 6. 安装 Docker

现在，你可以安装 Docker：

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 7. 启动并验证 Docker

启动 Docker 并设置为开机自启：

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

你可以使用以下命令来验证 Docker 是否安装成功：

```bash
sudo docker --version
```

运行以下测试命令确保 Docker 正常工作：

```bash
sudo docker run hello-world
```

## 卸载 docker

删除安装包：

```bash
sudo apt-get purge docker-ce
```

删除镜像、容器、配置文件等内容：

```bash
sudo rm -rf /var/lib/docker
```