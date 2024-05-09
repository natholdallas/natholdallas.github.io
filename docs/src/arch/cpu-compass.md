# Linux 中的 CPU 指南

在 linux 下你可能需要通过下载一些软件包来处理 cpu 的相关问题

可能解决的问题

1. 风扇莫名其妙大声
2. cpu 频率太高

## 笔记本优化 `Power Saver` 模式

安装 `power-profiles-daemon`  
可以在 linux 开启 `Power Saver` 模式的包  
并且与 gnome / kde 桌面环境集成

```bash
paru -S power-profiles-daemon
```

## 关闭睿频

安装 `cpupower`  
可以在 linux 中查看自己睿频的工具 `linux-tools`

```bash
paru -S cpupower
```

输入以下命令查看信息，并找到相关词条
`frequency should be within xxx MHz and xxx GHz.`

```bash
cpupower frequency-info
```

其中 `xxx GHz` 就是当前 CPU 核心正常情况下的最大频率  
可以通过修改文件 `/etc/default/cpupower` 中的 `max_freq` 来实现限制睿频
