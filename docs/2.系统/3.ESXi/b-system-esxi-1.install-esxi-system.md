---
title: 安装 ESXi 虚拟机
createTime: 2025/05/28 22:14:35
permalink: /article/emqdmjcr/
tags:
  - esxi
  - vm
---
## 调整系统分区大小

当 ESXi 安装程序窗口出现时，在 5 秒内按 **Shift+O** 来编辑启动选项。

在 `cdromBoot runweasel` 后面追加 `autoPartitionOSDataSize` 参数

```bash
<ENTER: Apply options and boot>
> cdromBoot runweasel autoPartitionOSDataSize=4096  # [!code word:autoPartitionOSDataSize=4096]
```

::: warning 默认单位为 **MB** ，例子为分配 **4G** 

:::

::: details [调整系统分区官方解决方案](https://knowledge.broadcom.com/external/article/345195/boot-option-to-configure-the-size-of-esx.html)

如果未指定 systemMediaSize，ESXi 7.0 Update 1c 系统存储默认占用 138GB，这是大多数服务器的推荐大小。更多信息，请参阅 [ESXi 7.0 Update1c release notes](https://docs.vmware.com/en/VMware-vSphere/7.0/rn/vsphere-esxi-70u1c.html#whatsnew)

systemMediaSize 引导选项接受以下参数以及用于 ESXi 系统分区的相应大小：

- `mini`：33GB，适用于单磁盘或嵌入式服务器
- `small`：69GB，适用于至少配备 512GB RAM 的服务器
- `max` ：所有可用空间，适用于多 TB 服务器

**方案一：在安装镜像启动主机时输入参数以调整启动选项**

使用安装镜像启动主机，当 ESXi 安装程序窗口出现时，在 5 秒内按下 **Shift+O** 以编辑启动选项。

```bash
<ENTER: Apply options and boot>
> cdromBoot runweasel systemMediaSize=min  # [!code word:systemMediaSize=min]
```

**方案二：修改启动镜像中的「boot.cfg」文件以调整启动选项**

编辑安装镜像中的 **boot.cfg** 文件，并将启动参数添加到 **kernelopt** 行中

```bash
kernelopt=runweasel systemMediaSize=small  # [!code word:systemMediaSize=small]
```

:::