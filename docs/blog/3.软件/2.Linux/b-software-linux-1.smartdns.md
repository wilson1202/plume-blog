---
title: Linux 下安装 SmartDNS
createTime: 2025/04/29 19:50:51
permalink: /article/gewr3ily/
tags:
  - dns
  - linux
---
## Linux安装

- 下载配套安装包，并上传到 Linux 系统中, 标准 Linux 系统（X86 / X86_64）请执行如下命令安装：

```bash
tar zxf smartdns.1.yyyy.MM.dd-REL.x86_64-linux-all.tar.gz
cd smartdns
chmod +x ./install
./install -i
```

- 树莓派或其他 Debian 系系统（ARM / ARM64）请执行如下命令安装：

```bash
dpkg -i smartdns.1.yyyy.MM.dd-REL.arm-debian-all.deb
```

::: caution 关注 **Ubuntu** 系统 **53** 端口占用问题

1. ubuntu系统下，`systemd-resolved`会占用 `TCP53` 和 `UDP53` 端口, 你需要手动解决端口占用问题或者修改 SmartDNS 监听端口。
2. 日志文件在 `/var/log/smartdns/smartdns.log`{.filepath}

:::

::: details 解决 53 端口占用问题

查看端口占用情况

```bash
lsof -i:53
```

**方案一：关闭 DNS 存根监听器，使其不再监听 53 端口**

1. 修改配置文件

   ```bash
   sudo nano /etc/systemd/resolved.conf
   ```

2. 取消注释并修改以下行

   ```ini title="resolved.conf"
   #DNSStubListener=yes
   DNSStubListener=no
   ```

3. 重启 `systemd-resolved` 使配置生效

   ```bash
   sudo systemctl restart systemd-resolved
   ```

**方案二：关闭 `systemd-resolved` 服务**

1. 立即停止

   ```bash
   sudo systemctl stop systemd-resolved
   ```

2. 永久禁用

   ```bash
   sudo systemctl disable systemd-resolved
   ```

:::

## 修改配置

安装完成后，可配置 SmartDNS 的上游服务器信息，一般情况下，只需要增加 `server`[`IP`]`:port` 和 `server-tcp`[`IP`]`:port` 配置项，请尽可能配置多个上游 DNS 服务器，包括国内外的服务器。具体配置参数请参考`配置文件`说明

- 配置文件

```bash
vi /etc/smartdns/smartdns.conf
```

::: info `/etc/smartdns/smartdns.conf`{.filepath} 配置包含如下基本内容：

```ini title="smartdns.conf"
# 指定监听的端口号
bind []:53 
# 指定上游服务器
server 1.1.1.1
server-tls 8.8.8.8
# 指定域名规则
address /example.com/1.2.3.4
domain-rules /example.com/ -address 1.2.3.4
```
:::

## 启动服务

```bash
systemctl enable smartdns
systemctl start smartdns
```

## 将 DNS 请求转发到 SmartDNS 解析

修改本地路由器的 DNS 服务器，将 DNS 服务器配置为 SmartDNS。

- 登录到本地网络的路由器中，配置树莓派，分配其静态 IP 地址。

- 修改 WAN 口或者 DHCP DNS 为树莓派 IP 地址。

>[!WARNING]
>1. 每款路由器配置方法不尽相同，请在网络上搜索对应配置方法。
>2. 华为等路由器可能不支持配置 DNS 为本地 IP，可修改电脑端或手机端的 DNS 服务器为树莓派 IP。

## 检测服务是否配置成功

- 执行

```bash
nslookup -querytype=ptr smartdns
```

- 查看命令结果中的 `name` 是否为 `smartdns` 或你的主机名，如果是则表示生效

```
$ nslookup -querytype=ptr smartdns
Server:         192.168.1.1
Address:        192.168.1.1#53

Non-authoritative answer:
smartdns        name = smartdns.
```

## 参考

[标准Linux系统 / 树莓派 - SmartDNS](https://pymumu.github.io/smartdns/install/linux/)
