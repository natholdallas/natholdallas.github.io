# Arch Linux

> [!NOTE]
> Github MD页面右上角可以打开目录树
>
> 本文所有引用部分均来自 archwiki
> Archlinux: <https://www.archlinux.org/>  
> Archlinuxcn: <https://www.archlinuxcn.org/>

## 目录

- [Arch Linux](#arch-linux)
  - [目录](#目录)
  - [安装教程](#安装教程)
    - [视频教程](#视频教程)
    - [1. 准备](#1-准备)
      - [硬件准备](#硬件准备)
      - [提前分配空闲分区](#提前分配空闲分区)
      - [获取系统信息](#获取系统信息)
        - [如何判断启动方式](#如何判断启动方式)
      - [插入U盘](#插入u盘)
      - [WIFI 网络连接](#wifi-网络连接)
      - [分区](#分区)
        - [创建分区](#创建分区)
        - [格式化分区](#格式化分区)
        - [挂载分区](#挂载分区)
    - [2. 安装](#2-安装)
      - [镜像源](#镜像源)
      - [更新密钥环](#更新密钥环)
      - [安装基本软件包](#安装基本软件包)
    - [3. 配置系统](#3-配置系统)
      - [3.1 导出分区表](#31-导出分区表)
      - [3.2 Chroot](#32-chroot)
      - [3.3 设置时区](#33-设置时区)
      - [3.4 设置地区](#34-设置地区)
      - [3.5 设置主机名](#35-设置主机名)
      - [3.6 初始化配置](#36-初始化配置)
      - [3.7 更改 root 密码](#37-更改-root-密码)
      - [3.8 网络管理器](#38-网络管理器)
      - [3.9 创建用户](#39-创建用户)
      - [3.10 更新系统时间](#310-更新系统时间)
      - [3.11 开机引导](#311-开机引导)
        - [GRUB](#grub)
          - [安装GRUB](#安装grub)
          - [os-prober 找不到其他系统](#os-prober-找不到其他系统)
          - [Grub 主题](#grub-主题)
        - [systemd-boot](#systemd-boot)
        - [rEFInd](#refind)
          - [rEFInd 主题](#refind-主题)
    - [4. 重启](#4-重启)
    - [5. 后续操作](#5-后续操作)
      - [考虑启用pacman的multilib和AUR](#考虑启用pacman的multilib和aur)
      - [安装桌面环境](#安装桌面环境)
      - [安装各种驱动](#安装各种驱动)
  - [驱动](#驱动)
    - [音频驱动](#音频驱动)
      - [OpenAL](#openal)
    - [显卡驱动](#显卡驱动)
      - [Vulkan](#vulkan)
      - [VA-API 视频加速](#va-api-视频加速)
      - [Nvidia VDPAU](#nvidia-vdpau)
      - [OpenCL](#opencl)
    - [计算加速](#计算加速)
      - [Intel oneAPI](#intel-oneapi)
  - [系统配置](#系统配置)
    - [修改内核参数](#修改内核参数)
    - [双显卡管理](#双显卡管理)
      - [双显卡切换](#双显卡切换)
      - [指定使用独立显卡](#指定使用独立显卡)
    - [功耗控制和电源管理](#功耗控制和电源管理)
    - [fstab](#fstab)
    - [Swap](#swap)
      - [Swap大小建议](#swap大小建议)
      - [创建swapfile](#创建swapfile)
    - [mkinitcpio的systemd钩子](#mkinitcpio的systemd钩子)
    - [休眠](#休眠)
      - [1. 添加休眠钩子](#1-添加休眠钩子)
      - [2. 添加休眠内核参数](#2-添加休眠内核参数)
      - [3. 启动休眠服务](#3-启动休眠服务)
    - [kernel-modules-hook](#kernel-modules-hook)
    - [zram](#zram)
    - [zswap](#zswap)
    - [Ananicy](#ananicy)
    - [性能优化](#性能优化)
    - [操作文件系统](#操作文件系统)
      - [修改分区 Label](#修改分区-label)
  - [pacman](#pacman)
    - [初始化密钥环](#初始化密钥环)
    - [多线程下载](#多线程下载)
    - [颜色](#颜色)
    - [pacman的其他软件仓库](#pacman的其他软件仓库)
      - [multilib软件仓库](#multilib软件仓库)
      - [Arch 用户软件仓库 (AUR)](#arch-用户软件仓库-aur)
        - [安装AUR助手](#安装aur助手)
        - [手动安装AUR软件包](#手动安装aur软件包)
      - [ALHP](#alhp)
      - [archlinuxcn软件仓库](#archlinuxcn软件仓库)
      - [Chaotic-AUR](#chaotic-aur)
      - [CachyOS](#cachyos)
    - [Arch Linux Archive](#arch-linux-archive)
    - [pacman 彩蛋](#pacman-彩蛋)
    - [pacman以及AUR助手常用命令](#pacman以及aur助手常用命令)
    - [软件包降级](#软件包降级)
  - [常用软件包/工具/命令](#常用软件包工具命令)
    - [KDE软件生态](#kde软件生态)
    - [老工具替代](#老工具替代)
    - [yay](#yay)
    - [paru](#paru)
      - [配置paru](#配置paru)
        - [paru 配置项含义](#paru-配置项含义)
    - [reflector](#reflector)
    - [samba](#samba)
    - [lscpu](#lscpu)
    - [fcrackzip](#fcrackzip)
    - [mangohud](#mangohud)
      - [mangohud with opengl](#mangohud-with-opengl)
      - [mangohud 快捷键](#mangohud-快捷键)
    - [gamemode](#gamemode)
    - [davfs](#davfs)
    - [zerotier](#zerotier)
    - [tailscale](#tailscale)
    - [sunshine](#sunshine)
      - [sunshine 配置虚拟显示器](#sunshine-配置虚拟显示器)
    - [moonlight](#moonlight)
    - [toilet](#toilet)
  - [技巧](#技巧)
    - [在 KDE 中使 GTK 程序使用 KDE 对话框以获得一致的外观](#在-kde-中使-gtk-程序使用-kde-对话框以获得一致的外观)
    - [关闭桌面环境特效](#关闭桌面环境特效)
    - [KDE 网络连接提示无法访问互联网但实际正常](#kde-网络连接提示无法访问互联网但实际正常)
    - [使用 sudo nvim 编辑文件时共享剪切板](#使用-sudo-nvim-编辑文件时共享剪切板)
    - [如何解除 sudo 锁定](#如何解除-sudo-锁定)
    - [KVM 显卡直通](#kvm-显卡直通)
    - [Proton 指定特定显卡运行](#proton-指定特定显卡运行)
    - [防止 ssh 断连](#防止-ssh-断连)
    - [关闭睿频](#关闭睿频)
    - [关闭 Intel 小核](#关闭-intel-小核)
    - [网速测试](#网速测试)
    - [preempt=full](#preemptfull)
  - [Wiki](#wiki)
    - [GNU/Linux 基础目录结构](#gnulinux-基础目录结构)
    - [WINE/PROTON 运行 Windows 应用/游戏](#wineproton-运行-windows-应用游戏)
      - [WINE 生态中的各种工具介绍](#wine-生态中的各种工具介绍)
      - [WINE/PROTON GUI 启动器](#wineproton-gui-启动器)

## 安装教程

可以配合官网步骤食用: <https://wiki.archlinux.org/title/Installation_guide>

> [!NOTE]
> 某些特殊符号, 例如 \<xxx\> 代表根据实际情况填写的必填项, \[xxx\] 代表可选项, 请根据上下文自行判断

> [!WARNING]
> 如果你是第一次安装 Arch, 请全程自行手动操作, 不要使用 archinstall 逃课  
> 如果你不熟悉 GNU/Linux, 建议先到其他有图形化安装的发行版 (Manjaro, Linux Mint, Ubuntu 等), 熟悉后再尝试 Arch  
> 如果你想用 Arch 作为第一个 GNU/Linux 发行版, 建议在身边有人传教的情况下尝试
>
> Arch Linux 安装过程没有图形界面, 所有编辑操作都是在终端  
> 本文默认你能使用任何一种终端编辑器, 不会用请自行学习后再来 (新手可以用 nano)

### 视频教程

BiliBili: <https://www.bilibili.com/video/BV1J34y1f74E>  
BiliBili: <https://www.bilibili.com/video/BV1XY4y1f77S>

### 1. 准备

#### 硬件准备

一个刻录了安装镜像的U盘, 一台电脑

#### 提前分配空闲分区

强烈建议提前分区一块空闲分区, 使用Windows自带的分区工具或PE提前分一块空闲分区

#### 获取系统信息

判断启动方式, 分区表类型

##### 如何判断启动方式

在 archiso 环境中, 可以用 `ls /sys/firmware/efi/efivars` 判断是否是 UEFI, 如果有输出, 则是 UEFI, 否则是 BIOS / Legacy

#### 插入U盘

重启, 在 BIOS/UEFI 界面选择通过U盘启动

#### WIFI 网络连接

有线网络会自动连接, 不需要手动连接

`ip link` 可以查看网络设备, 确保你的网络设备有被列出

`rfkill` 或者 `rfkill list` 查询网卡列表  
如果网卡被禁用(SOFT blocked)可以使用 `rfkill unblock <device>` 解锁设备  
如果 WIFI 未启用(HARD blocked), 使用 `ip link set <device> up` 启用设备

通过 `iwctl` 命令进入交互式环境配对设备  
使用 `station <device> scan` 扫描可用 WIFI  
使用 `station <device> get-networks` 列出可用 WIFI  
使用 `station <device> connect <SSID>` 连接 WIFI  
完成后按 `ctrl+d` 或输入 `exit` 即可退出, `ctrl+d` 算是 linux 下 cli 的通用退出快捷键了

安装完系统之后, 如果装了 `networkmanager` 可以用 `nmtui`、`nmcli` 连接 WIFI, archiso环境中用的是 `iwd`, 所以命令不同

#### 分区

##### 创建分区

可以用 `lsblk`、`lsblk -f`、`fdisk -l` 检查电脑中可用的硬盘

推荐使用 `cfdisk` 进行分区, `cfdist` 主界面可以按 h 查看帮助, 按 n 可以新建分区

> [!WARNING]
> 请勿对已经存在的分区使用 `cfdisk` 进行二次分区, 会导致分区损坏  
> ntfs文件系统分区建议提前使用Windows自带的分区程序或PE提前分一块空闲分区

几种主要的分区方案:

- 一个EFI分区(建议. 对于UEFI) + 一个Linux文件系统分区(必须) + 一个swap分区(可选)
- 一个EFI分区(建议. 对于UEFI) + 一个Linux文件系统分区(必须) + 一个swap分区(可选) + 一个home目录分区(可选)

如果电脑的启动方式是 UEFI, 需要单独分一个 EFI 分区, 大小推荐不小于 300MB, 如果是双系统推荐 500MB  
Windows/Linux 双系统本身已经有 EFI 分区了, 可以不用再分, 只需要把原来的 EFI 分区扩容到推荐大小即可

swap分区不推荐放第一个, 放后面的话以后如果需要修改比较方便, 对于swap分区/文件要分多大, 可以参考这里 [swap大小建议](#swap大小建议)

> [!NOTE]
> 也可以使用swapfile而非swap分区, 这样可以动态分配swap的大小, 无需调整分区, 可以等挂载完分区后再创建, [创建swapfile](#创建swapfile)  
> 在Arch安装过程中(非arch-chroot下), 请注意 swapfile 的文件路径, 例如系统根分区的临时挂载点是 /mnt, 那么应该把 dd 命令的 of 参数路径改成 /mnt/swapfile 或其他 /mnt 下的路径

然后对照下表设置分区的类型

| 分区          | 类型             |
| ------------- | ---------------- |
| efi           | EFI System       |
| Linux文件系统 | Linux Filesystem |
| swap          | Linux swap       |

`cfdisk` 编辑完之后记得 `Write`, 否则你的更改不会生效

##### 格式化分区

创建完分区之后, 需要格式化分区

- 对于 EFI 分区 (如果选择和 Windows 共用同一个 EFI 分区, 跳过这一步)

  ```bash
  mkfs.fat -F 32 /dev/efi_system_partition
  ```

- Linux 文件系统分区

  ```bash
  # mkfs.<格式>, 可以选择其他的格式, 如 btrfs 等 (善用 tab 键和 wiki)
  mkfs.ext4 /dev/root_partition
  ```

- swap 分区 (或者swapfile, 如果没有可以先跳过这一步, 详细看下方 Note)

  ```bash
  mkswap /dev/swap_partition
  ```

##### 挂载分区

- 首先挂载根分区到 `/mnt`

  ```bash
  mount /dev/<sda2> /mnt
  ```

- 挂载EFI分区和其他分区

  ```bash
  # EFI 分区推荐挂载点
  mount --mkdir /dev/<sda1> /mnt/boot

  ## 其他分区
  # 例如你单独分配了 home 目录的分区
  mount --mkdir /dev/<sda3> /mnt/home
  ```

- swap分区 (或者swapfile, 如果没有可以先跳过这一步, 详细看下方 Note)

  ```bash
  swapon /dev/swap_partition
  ```

> [!NOTE]
> 如果你要创建swapfile, 挂载完 `/mnt` 就可以创建了, 创建到 `/mnt/swapfile`, [创建swapfile](#创建swapfile)  
> 如果你提前创建了, `swapoff` 之后移动swapfile到 `/mnt` 下然后 `swapon` 即可

### 2. 安装

#### 镜像源

如果需要可以先配置镜像源, 调整 `/etc/pacman.d/mirrorlist` 中镜像的顺序即可 (此更改只在当前安装过程中生效)

推荐一个国内速度较快的镜像源

```conf
Server = http://mirrors.jlu.edu.cn/archlinux/$repo/os/$arch
```

#### 更新密钥环

如果安装镜像不是最新版本, 先更新 archlinux-keyring

```bash
# 这将更新软件包数据库和密钥环
pacman -Sy archlinux-keyring
```

#### 安装基本软件包

`linux-zen` 是一种性能较好的内核, 可以替换为其他内核, 例如 `linux`、`linux-lts`

`linux-headers` 是内核的头文件, dkms 会用到, 也可以需要时再安装

根据 CPU 选择安装 `intel-ucode` (Intel CPU) 或 `amd-ucode` (Amd CPU)  
这个安装项是可选的, 如果装不了可以不用管

`vi/vim/neovim` 是一种常用的终端文件编辑器, 不会用可以装 `nano`

```bash
pacstrap -K /mnt base base-devel linux-zen linux-zen-headers linux-firmware [intel-ucode/amd-ucode] [vi/vim/neovim/nano] networkmanager git
```

### 3. 配置系统

#### 3.1 导出分区表

```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

#### 3.2 Chroot

```bash
arch-chroot /mnt
```

#### 3.3 设置时区

```bash
# 复制时区文件
ln -sf /usr/share/zoneinfo/<Region>/<City> /etc/localtime
# 生成 /etc/adjtime
hwc/alock --systohc
```

#### 3.4 设置地区

编辑 `/etc/locale.gen`, 取消注释需要的地区, 然后运行

```bash
locale-gen
```

之后设置地区, 编辑 `/etc/locale.conf`, `LANG=你选择的地区`

```conf
LANG=en_US.UTF-8
```

#### 3.5 设置主机名

编辑 `/etc/hostname`, 文件内容就是主机名

#### 3.6 初始化配置

通常不需要自己创建新的 `initramfs`, 因为在执行 `pacstrap` 时安装了 linux 内核, 安装 linux 的过程会自动运行 `mkinitcpio`

如果是 LVM、 系统加密或 RAID 等分区配置, 请修改 `mkinitcpio.conf` 并用以下命令重新创建一个 `Initramfs`:

```bash
mkinitcpio -P
```

#### 3.7 更改 root 密码

```bash
passwd
```

#### 3.8 网络管理器

`pacman` 安装 `networkmanager`, 然后 `systemctl enable NetworkManager` 设置开机启动

#### 3.9 创建用户

推荐方式, 创建用户, 然后一个创建文件到 `/etc/sudoers.d/`, 并添加这段配置 `<username> ALL=(ALL:ALL) ALL` 以允许新用户使用 `sudo`

```bash
# 创建用户
useradd -m <username>
# 设置密码
passwd <username>
```

#### 3.10 更新系统时间

自动同步世界时

```bash
timedatectl set-ntp true
```

#### 3.11 开机引导

常见的引导方式有下面几种, 选择一个硬件支持的引导方式即可

| 引导方式                        | BIOS 固件 | UEFI 固件 | MBR 分区表 | GPT 分区表 |                    |
| ------------------------------- | --------- | --------- | ---------- | ---------- | ------------------ |
| [`GRUB`](#grub)                 | 支持      | 支持      | 支持       | 支持       | 不知道选啥就选这个 |
| [`systemd-boot`](#systemd-boot) | 不支持    | 支持      | 手动       | 支持       | 简单省事           |
| [`rEFInd`](#refind)             | 不支持    | 支持      | 支持       | 支持       | 双系统推荐         |
| syslinux                        | 支持      | 部分支持  | 支持       | 支持       |                    |

参考文档: <https://wiki.archlinuxcn.org/wiki/Arch_%E7%9A%84%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B#%E5%BC%95%E5%AF%BC%E5%8A%A0%E8%BD%BD%E7%A8%8B%E5%BA%8F>

> [!NOTE]  
> 以下出现的 `<esp>` 为 EFI 挂载点

##### GRUB

###### 安装GRUB

`efibootmgr` 是 UEFI 启动方式的依赖, 如果是 BIOS 启动可以不用安装
`os-prober` 是安装双系统推荐一并安装的依赖, 能够自动检测其他操作系统的 UEFI 启动项, 非双系统可以不安装

```bash
pacman -S grub [efibootmgr] [os-prober]
```

如果安装了 os-prober, 需要注意 os-prober 在新版 grub 默认禁用, 修改 `/etc/default/grub` 取消注释 `GRUB_DISABLE_OS_PROBER=false` 即可启用 os-prober

安装GRUB

- UEFI 安装方式

  确保你安装了 `efibootmgr`

  ```bash
  # 将 esp 改为你的 EFI 分区路径, 例如 --efi-directory=/boot
  grub-install [--target=x86_64-efi] --efi-directory=<esp> --bootloader-id=GRUB
  ```

- BIOS 安装方式

  ```bash
  grub-install /dev/xxx
  ```

最后生成 grub 配置, 记住此命令, 后续如果修改了 `/etc/default/grub` 或更换内核需要重新生成 grub 配置

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

###### os-prober 找不到其他系统

初次运行 grub-mkconfig 一般 os-prober 会找不到 Windows, 重启一次并重新生成 grub 配置就能检测到了

或者可以通过 `blkid <device>` 查找启动分区的 UUID, 然后将以下代码添加到 /boot/grub/grub.cfg

```conf
### BEGIN /etc/grub.d/30_os-prober ###
menuentry 'Microsoft Windows 10' {
  insmod part_gpt
  insmod fat
  insmod chain
  search --fs-uuid --no-floppy --set=root <UUID>
  chainloader
}
### END /etc/grub.d/30_os-prober ###
```

###### Grub 主题

- `grub-theme-vimix`

  Github: <https://github.com/Se7endAY/grub2-theme-vimix>

- Dark Matter

  GitLab: <https://gitlab.com/VandalByte/darkmatter-grub-theme>

- MineCraft

  GitLab: <https://github.com/Lxtharia/minegrub-world-sel-theme>

##### systemd-boot

systemd-boot 是 systemd 全家桶的一部分, 在 arch 不需要额外安装软件包

运行以下命令即可安装

```bash
bootctl --esp-path=<esp> install
```

systemd-boot 使用教程请看此处: <https://wiki.archlinuxcn.org/wiki/Systemd-boot>

##### rEFInd

```bash
pacman -S refind

refind-install
```

> [!WARNING]
> 当 refind-install 运行在chroot环境下 (例如：安装Arch Linux时的live环境) /boot/refind_linux.conf 内将会添加live系统的内核选项，而不是安装它的系统。
> 编辑 /boot/refind_linux.conf 并确保其中的 内核参数 对于你的系统是正确的，否则下次启动可能会出现内核错误。

- 配置

  配置文件路径 `<esp>/EFI/refind/refind.conf`

  ```conf
  # 引导时以图形代替文字
  use_graphics_for osx,linux,grub,windows

  # 是否折叠内核选项, 当有多个可选内核时折叠, 默认为 true
  fold_linux_kernels false

  # 填写任何内核变体版本字符串, 以便在 /boot/refind_linux.conf 中的 %v 可以正常工作
  extra_kernel_version_strings linux-zen,linux-cachyos
  ```

  更多信息可以看 archwiki: <https://wiki.archlinuxcn.org/wiki/REFInd#%E9%85%8D%E7%BD%AE>

###### rEFInd 主题

- refind-theme-regular
  github: <https://github.com/kmyi/refind-theme-regular>

主题文件一般放在 `<esp>/EFI/refind/themes/` 目录下, 然后在 `<esp>/EFI/refind/refind.conf` 中添加 `include themes/refind-theme-regular/theme.conf`

### 4. 重启

安装完引导之后 (可以先把后续操作做完再做这一步), 输入 `exit` 或按 `ctrl+d` 退出 chroot 环境, 然后输入 `reboot` 重启电脑

### 5. 后续操作

#### 考虑启用pacman的multilib和AUR

- [multilib软件仓库](#multilib软件仓库)
- [archlinuxcn软件仓库](#archlinuxcn软件仓库)
- [安装AUR助手](#安装aur助手)

#### 安装桌面环境

强烈建议创建一个非root用户再来使用桌面

- KDE

  可以参考 [KDE软件生态](#kde软件生态), 选择你需要的软件  
  sddm 是 kde 官方的会话管理器, 如果不喜欢也可以换成别的

  ```bash
  pacman -S sddm plasma dolphin konsole yakuake zen-browser spectacle ark filelight

  # 然后设置sddm开机自启, 重启电脑后自动显示登录界面
  systemctl enable sddm
  ```

#### 安装各种驱动

- [音频驱动](#音频驱动)
- [显卡驱动](#显卡驱动)

## 驱动

### 音频驱动

```bash
pacman -S pipewire pipewire-pulse pipewire-alsa pipewire-jack
# for multilib
pacman -S lib32-pipewire lib32-pipewire-jack
```

#### OpenAL

跨平台3D音频库

```bash
pacman -S openal
# for multilib
pacman -S lib32-openal
```

### 显卡驱动

- Mesa

  `mesa` - 开源 OpenGL 驱动, 支持所有主流显卡

  ```bash
  pacman -S mesa mesa-utils
  # for multilib
  pacman -S lib32-mesa-utils
  ```

- NVIDIA

  - 官方驱动

    NVIDIA 官方提供了闭源和开源两种内核驱动, 分别是 `nvidia` 和 `nvidia-open` (仅2060及以上)  
    nvidia-utils 中包含了 vulkan 驱动

    **注意: 对于非标准内核 (比如linux-zen), 请安装 nvidia-dkms / nvidia-open-dkms, 而不是 nvidia / nvidia-open**

    ```bash
    pacman -S nvidia nvidia-utils
    # for multilib
    pacman -S lib32-nvidia-utils
    ```

  - 社区驱动

    `nouveau` 已包含在内核模块中, 请不要安装官方驱动

#### Vulkan

- Mesa's Vulkan layers

  ```bash
  pacman -S vulkan-mesa-layers
  # for multilib
  pacman -S lib32-vulkan-mesa-layers
  ```

- AMD

  安装 Vulkan 驱动

  ```bash
  pacman -S vulkan-radeon
  # for multilib
  pacman -S lib32-vulkan-radeon

  # 另一种选择, 但是不推荐
  pacman -S amdvlk
  # for multilib
  pacman -S lib32-amdvlk
  ```

- Intel

  安装 Vulkan 驱动

  ```bash
  pacman -S vulkan-intel
  # for multilib
  pacman -S lib32-vulkan-intel
  ```

- NVIDIA

  - 官方驱动

    Vulkan 驱动含在 `nvidia-utils` 中

    ```bash
    pacman -S nvidia-utils
    ```

  - 社区驱动

    `vulkan-nouveau` 开源 NVIDIA Vulkan 驱动

    ```bash
    pacman -S vulkan-nouveau
    # for multilib
    pacman -S lib32-vulkan-nouveau
    ```

#### VA-API 视频加速

详情看这里: <https://wiki.archlinuxcn.org/wiki/%E7%A1%AC%E4%BB%B6%E8%A7%86%E9%A2%91%E5%8A%A0%E9%80%9F#%E5%AE%89%E8%A3%85>

- Intel

  对于新Intel显卡 - Intel Media Driver for VAAPI — Broadwell+ iGPUs

  ```bash
  pacman -S intel-media-driver
  ```

  对于旧Intel显卡 - VA-API implementation for Intel G45 and HD Graphics family

  ```bash
  pacman -S libva-intel-driver
  # for multilib
  pacman -S lib32-libva-intel-driver
  ```

  检验 VA-API: <https://wiki.archlinuxcn.org/wiki/%E7%A1%AC%E4%BB%B6%E8%A7%86%E9%A2%91%E5%8A%A0%E9%80%9F#%E6%A3%80%E9%AA%8C_VA-API>

- NVIDIA

  ```bash
  pacman -S libva-nvidia-driver
  ```

#### Nvidia VDPAU

```bash
pacman -S libvdpau
# [Optinal] driver using VAAPI
pacman -S libvdpau-va-gl
```

#### OpenCL

- Intel

  ```bash
  pacman -S intel-compute-runtime
  ```

- NVIDIA

  ```bash
  pacman -S opencl-nvidia
  # for multilib
  pacman -S lib32-opencl-nvidia
  ```

### 计算加速

#### Intel oneAPI

```bash
pacman -S intel-oneapi-compiler-shared-runtime
```

## 系统配置

### 修改内核参数

- `GRUB`

  通过 `/etc/default/grub` 修改内核参数, 完成后记得 `sudo grub-mkconfig -o /boot/grub/grub.cfg`

- `systemd-boot`

  通过 `/boot/loader/entries/arch.conf` 修改内核参数

- `refind`

  通过 `/boot/refind_linux.conf` 修改内核参数

### 双显卡管理

#### 双显卡切换

X11 默认只使用集显, 需要手动配置或使用 optimus-manager 自动配置使用独立显卡 (混合模式 or 只用独立显卡)

Wayland 默认混合模式, 无需额外配置即可使用独显, 但如果有只使用 iGPU 或 dGPU 的需求, 参考以下列出的软件

- optimus-manager

  官方说只支持 X11, 但 Wayland 似乎也能用

  支持 amd, nvidia dGPU

  - 安装

    可选择安装图形界面 `optimus-manager-qt`

    ```bash
    paru -S optimus-manager [optimus-manager-qt]
    ```

- envycontrol (NVIDIA dGPU 推荐)

  - 安装

    ```bash
    paru -S envycontrol
    ```

  - cli

    `envycontrol -q` - 查询当前模式

    `sudo envycontrol -s <mode>` - 切换模式, 可选项：`hybrid`、`integrated`、`nvidia`

    `sudo envycontrol -s hybrid --rtd3 3` - 切换混合模式并设置 RTD3, 可选项：1, 2 (默认), 3, 具体区别看官方文档

    `sudo envycontrol --reset` - 重置

  - 桌面环境适配

    - KDE Widget

      `Optimus GPU Switcher`: <https://store.kde.org/p/2138365>

#### 指定使用独立显卡

- switcheroo-control

  记得启用服务 `sudo systemctl enable --now switcheroo-control`

  - cli

    `switcherooctl launch <command>` - 用独显运行

  - 桌面环境适配

    然后你应该能在桌面环境编辑 .desktop 的属性时看到使用独立显卡的选项  
    或者在 .desktop 的 [Desktop Entry] 中添加以下内容

    ```desktop
    PrefersNonDefaultGPU=true
    X-KDE-RunOnDiscreteGpu=true
    ```

- nvidia-prime

  - cli

    `prime-run <command>` - 使用nvidia显卡运行

### 功耗控制和电源管理

- power-profiles-daemon

- tlp

- thermald

### fstab

archwiki: <https://wiki.archlinuxcn.org/wiki/Fstab>

> fstab(5)文件可用于定义磁盘分区，各种其他块设备或远程文件系统应如何装入文件系统。  
> 每个文件系统在一个单独的行中描述。这些定义将在引导时动态地转换为系统挂载单元，并在系统管理器的配置重新加载时转换。在启动需要挂载的服务之前，默认设置会自动 fsck 和挂载文件系统。例如，Systemd 会自动确保远程文件系统挂载（如 NFS 或 Samba ）仅在网络设置完成后启动。因此，在 /etc/fstab 中指定的本地和远程文件系统挂载应该是开箱即用的。有关详细信息，请参阅 systemd.mount(5) 。  
> mount命令将使用fstab，如果仅给出其中一个目录或设备，则填充其他参数的值。 这样做时，也将使用 fstab 中列出的挂载选项。  
> 编辑 `/etc/fstab`, 按照这样的格式编写

`<file system> <dir> <type> <options> <dump> <pass>`  
分别代表:

- `<file system>` 文件系统, 填写 `UUID=xxx`, 或者 `/dev/xxx`
- `<dir>` 挂载点, 对于 swap 或没有挂载点的分区, 填 `none`
- `<type>` 分区类型
- `<options>` 挂载选项  
  可选值(可多选, 用 `,` 分隔):
  - `defaults`: 默认
- `<dump>` 备份  
  此选项广泛用于 ext2/3 文件系统和磁带备份, 如今, 由于更新的文件系统和实用程序, 它已经过时了, 填 `0` 即可  
  可选值:
  - `0`: 不备份
  - `1`: 备份
- `<pass>` 系统启动后通过`fsck`检查  
  通常给根分区设置`1`其余分区设置`2`或`0`  
  可选值:
  - `0`: 不检查
  - `1`: 检查
  - `2`: 在1之后检查，但不一定检查

示例 :

```fstab
UUID=xxx  /    ext4 rw,relatime 0 1
UUID=xxxx /xxx ext4 defaults    0 2
```

### Swap

#### Swap大小建议

Gentoo 文档: <https://wiki.gentoo.org/wiki/Handbook:AMD64/Installation/Disks#What_about_swap_space.3F>

#### 创建swapfile

如果不想通过分区使用 swap, 可以创建 swapfile 作为 swap

以下命令中的 /swapfile 可以是你想要的任何路径, 常用的路径有 `/swapfile`、`/swap.img`

- 方式1 (Arch Linux 专用)

  ```bash
  mkswap -U clear --size 8G --file /swapfile
  ```

- 方式2 (快速, 所有发行版都支持)

  ```bash
  fallocate -l 8G /swapfile

  chmod 0600 /swapfile
  mkswap -U clear /swapfile
  ```

- 方式3

  ```bash
  # 创建指定大小的 swapfile, 示例中的实际大小为 1M x 8k = 8GB (bs x count)
  dd if=/dev/zero of=/swapfile bs=1M count=8k status=progress

  chmod 0600 /swapfile
  mkswap -U clear /swapfile
  ```

创建完成后, 可以选择立即挂载Swap

```bash
swapon /swapfile
```

最后写入 /etc/fstab (如果你是在Arch安装过程, 挂载了swap, 并且还未运行genfstab, 可以跳过这一步, genfstab 会帮你写入)

```bash
# ...
# Swap
/swapfile             none        swap        defaults    0 0
```

### mkinitcpio的systemd钩子

systemd钩子可异步加载内核模块, 速度相对udev快一些, 可能不支持老旧硬件  
mkinitcpio 默认的钩子组合是以udev为主的, 如果需要更换为systemd

编辑 `/etc/mkinitcpio.conf`, 找到 HOOKS 配置项, 并替换为以下内容  
HOOKS上面应该是有注释说明的, 注释中也有systemd配置的示例

```conf
HOOKS=(base systemd autodetect modconf kms keyboard sd-vconsole sd-encrypt block filesystems fsck)
```

### 休眠

#### 1. 添加休眠钩子

编辑 `/etc/mkinitcpio.conf` 文件, 找到 HOOKS 配置项

有两种情况

- 对于udev

  参考以下代码, 将 `resume` 添加到 udev 之后

  ```conf
  HOOKS=(base udev autodetect microcode modconf kms keyboard keymap consolefont block filesystems resume fsck)
  ```

- 对于systemd

  Systemd 钩子, 自带resume, 不需要手动添加

  ```conf
  HOOKS=(base systemd autodetect modconf kms keyboard sd-vconsole sd-encrypt block filesystems fsck)
  ```

> [!NOTE]
> 注意： 如果使用堆叠存储作为交换空间，例如 dm-crypt、RAID 或 LVM，则最终映射的设备必须在早期用户空间中可用，并且在恢复过程启动之前。也就是说，在这样的设置中，resume 钩子必须放在诸如 encrypt、lvm2 等钩子之后。

#### 2. 添加休眠内核参数

使用 `blkid /dev/nvme0n1p1`, 查看 UUID

示例:

```bash
❯ sudo blkid /dev/nvme0n1p1
/dev/nvme0n1p1: LABEL="archlinux" UUID="4483df75-6a1d-42a1-9a3e-66406b7a9cac" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="1cf11453-a83c-4dd9-9f88-28a24754818f"
```

然后将 `resume=UUID=xxxxxx` 写入到内核参数  
对于 swapfile, 需要额外加上 `resume_offset=xxxxxx`, 表示偏移量, 偏移量可以通过此命令快速获取 `filefrag -v <swap_file> | awk '$1=="0:" {print substr($4, 1, length($4)-2)}'`

获取 swapfile 偏移量示例:

```bash
❯ sudo filefrag -v /swap.img | awk '$1=="0:" {print substr($4, 1, length($4)-2)}'
3643392
```

完成后的内核参数示例:

```bash
... root=UUID=4483df75-6a1d-42a1-9a3e-66406b7a9cac rw splash resume=UUID=4483df75-6a1d-42a1-9a3e-66406b7a9cac resume_offset=3643392
```

#### 3. 启动休眠服务

- 对于 NVIDIA GPU, 需要启动 nvidia-resume, nvidia-persistenced 服务

### kernel-modules-hook

保留正在使用的内核模块, 防止内核升级时移除, 升级内核后可以不用立即重启

```bash
sudo pacman -S kernel-modules-hook
sudo systemctl enable --now linux-modules-cleanup
```

### zram

zram 在内存上创建压缩块设备, 通过压缩内存节省更多的内存空间  
利用 zram-generator 和 systemd-zram-generator 可以轻松创建 zram

- 安装

  ```bash
  sudo pacman -S zram-generator
  ```

- 配置

  编辑 `/etc/systemd/zram-generator.conf`, 添加如下内容:  
  具体细节看: `/usr/share/doc/zram-generator/zram-generator.conf.example`

  ```bash
  [zram0]
  compression-algorithm = zstd lz4 (type=huge)
  # zram 大小一般推荐为内存的 0.1 - 0.5
  zram-size = ram / 2
  swap-priority = 100
  fs-type = swap
  ```

  编辑 `/etc/sysctl.d/99-zram.conf`, 添加如下内容:

  ```bash
  vm.swappiness = 150
  ```

  配置完成后重启系统即可生效

- 不重启系统, 手动启动 zram

  编辑完所有配置后, 执行以下命令

  ```bash
  # systemd 会自动创建一个 /dev/zram0 设备
  sudo systemctl daemon-reload

  # 初始化 zram0 设备
  sudo /usr/lib/systemd/system-generators/zram-generator --setup-device zram0

  # 挂载 zram0
  sudo swapon -p 100 /dev/zram0

  # 加载 sysctl 配置
  sudo sysctl --system
  ```

- 运行状态

  运行 `zramctl` 即可看到 zram 设备的使用情况, 运行 `swapon -s` 可看到 swap 和 zram 分别的使用情况

### zswap

在写入 swap 之前, 会先在内存里压缩数据, 再写入 swap

### Ananicy

> Ananicy是一个用于自动调节可执行程序nice值的守护进程。nice值表示了在为特定可执行程序分配CPU资源时的优先级。

- 安装

  想激进一点可以装 cachyos-ananicy-rules

  ```bash
  sudo pacman -S ananicy-cpp ananicy-rules-git
  ```

- 启动服务

  ```bash
  sudo systemctl enable --now ananicy-cpp
  ```

> [!WARNING]
> ananicy-cpp 和 gamemode 都会修改游戏进程的 nice, 如果要一起用, 最好只让 ananicy-cpp 或 gamemode 其中一个管理游戏进程的 nice

### 性能优化

文档: <https://wiki.archlinuxcn.org/wiki/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96>

### 操作文件系统

#### 修改分区 Label

- ext4

  ```bash
  sudo e2label <device> <newlabel>
  ```

- btrfs

  ```bash
  # 对于已挂载的设备
  sudo btrfs filesystem label <mountpoint> <newlabel>
  # 否则
  sudo btrfs filesystem label <device> <newlabel>
  ```

- fat32

  ```bash
  sudo fatlabel <device> <newlabel>
  ```

- ntfs

  ```bash
  sudo ntfslabel <device> <newlabel>
  ```

## pacman

配置文件路径: `/etc/pacman.conf`  
镜像服务器列表路径: `/etc/pacman.d/mirrorlist`

### 初始化密钥环

一般正常安装 Archlinux 并不需要自己手动初始化密钥环, 某些情况例如 SteamOS 和 Termux 需要手动初始化

```bash
pacman-key --init
pacman-key --populate archlinux
```

### 多线程下载

在 pacman 配置文件找到并取消注释 `ParallelDownloads`

```confini
[options]
...
#VerbosePkgLists
ParallelDownloads = 5
...
```

### 颜色

在 pacman 配置文件中取消 `Color` 的注释

```confini
[options]
...
#UseSyslog
Color
#NoProgressBar
...
```

### pacman的其他软件仓库

#### multilib软件仓库

安装Steam或其他32位软件包需要此软件源, 在 pacman 配置文件中取消注释 multilib 部分

```conf
[multilib]
Include = /etc/pacman.d/mirrorlist
```

#### Arch 用户软件仓库 (AUR)

> Arch 用户软件仓库（Arch User Repository，AUR）是为用户而建、由用户主导的 Arch Linux 软件仓库。AUR 中的软件包以软件包生成脚本（PKGBUILD）的形式提供，用户自己通过 makepkg 生成包，再由 pacman 安装。创建 AUR 的初衷是方便用户维护和分享新软件包，并由官方定期从中挑选软件包进入 extra 仓库。本文介绍用户访问和使用 AUR 的方法。  
> 许多官方仓库软件包都来自 AUR。通过 AUR，大家相互分享新的软件包生成脚本（PKGBUILD 和其他相关文件）。用户还可以为软件包投票。如果一个软件包投票足够多、没有许可证问题、打包质量好，那么它就很有希望被收录进官方 community 仓库（以后就可以直接通过 pacman 或 abs 安装了）。

> [!WARNING]
> 警告： AUR 中的软件包是由其他用户编写的，这些 PKGBUILD 完全是非官方的，未经彻底审查。使用这些文件的风险由您自行承担。

##### 安装AUR助手

AUR助手帮你省去了上网站搜索AUR包, 克隆仓库手动执行命令的过程, 还能自动更新  
可选的 aur 助手有: [yay](#yay)、[paru](#paru), 使用 aur 助手代替 pacman

##### 手动安装AUR软件包

如果你没有AUR助手, 又需要安装AUR软件包, 可以通过以下步骤安装

首先确认AUR包名, 然后执行以下命令

```bash
git clone https://aur.archlinux.org/<包名>.git
cd <包名>
makepkg -si
```

#### ALHP

> Buildbot for Archlinux based repos with different x86-64 feature levels, -O3 and LTO.

文档: <https://github.com/an0nfunc/ALHP>

#### archlinuxcn软件仓库

> Arch Linux 中文社区仓库是由 Arch Linux 中文社区驱动的非官方软件仓库，包含许多官方仓库未提供的额外的软件包，以及已有软件的 git 版本等变种。一部分软件包的打包脚本来源于 AUR，但也有许多包与 AUR 不一样。

添加步骤: 将下面内容加入 pacman 配置文件末尾 `/etc/pacman.conf`

```conf
[archlinuxcn]
## 北京外国语大学 (北京) (ipv4, ipv6, http, https)
Server = https://mirrors.bfsu.edu.cn/archlinuxcn/$arch
```

> [!TIP]
> 更多archlinuxcn镜像服务器查看此处 <https://github.com/archlinuxcn/mirrorlist-repo>

然后安装 archlinuxcn 的密钥环

```bash
sudo pacman -Sy archlinuxcn-keyring
```

#### Chaotic-AUR

包含许多预编软件包 AUR 软件包的仓库

文档: <https://aur.chaotic.cx/docs>

#### CachyOS

CachyOS 官方仓库, CachyOS 专注于性能, 提供许多 v3, v4 包和优化后的 cachyos 内核

文档: <https://wiki.cachyos.org/features/optimized_repos/>

### Arch Linux Archive

> Arch Linux 存档库（Arch Linux Archive，简称 ala），以前称为 Arch Linux 回滚机（Arch Linux Rollback Machine，简称 ARM），保存了官方仓库快照、iso 镜像和引导程序包的历史版本。

编辑 `/etc/pacman.d/mirrorlist`, 注释或删除原有Server, 并加入以下内容, 或者给 `/etc/pacman.conf` 中的每个仓库单独设置 Server 也可以

```conf
Server=https://archive.archlinux.org/repos/<year>/<month>/<day>/$repo/os/$arch
```

文档: <https://wiki.archlinuxcn.org/wiki/Arch_Linux_Archive>

### pacman 彩蛋

在 pacman 配置中加入 `ILoveCandy`, 进度条会被替换成吃豆人

```confini
[options]
ILoveCandy
```

### pacman以及AUR助手常用命令

以下为个人理解, 有些地方可能并不准确或非官方叫法

pacman 使用方式和 vim 很像, 格式为一个Operator加n个Motion

常用的 Operator 有 `-S` (同步/安装)、`-R` (卸载)、`-Q` (查询本地)

| 常用命令                        | 描述                                                              |
| ------------------------------- | ----------------------------------------------------------------- |
| **通用**                        |                                                                   |
| `pacman -Syu`                   | 更新数据库(y)和软件包(u)                                          |
| `pacman -S <软件包>`            | 安装软件包                                                        |
| `pacman -Ss <regex>`            | 搜索软件包(s)                                                     |
| `pacman -Si <软件包>`           | 查看软件包信息(i)                                                 |
| `pacman -Syy`                   | 强制更新数据库(yy), 不建议使用, 浪费流量                          |
| `pacman -Syuu`                  | 更新数据库(y)并升级/降级软件包(uu)                                |
| `pacman -Rsn <软件包>`          | 删除软件包以及相关依赖(s)和配置文件(n)                            |
| `pacman -Rsnc <软件包>`         | 删除软件包以及相关依赖(s)和配置文件(n), 并且删除依赖它的软件包(c) |
| `pacman -Rsndd <软件包>`        | 强制删除软件包以及相关依赖(s)和配置文件(n), 忽略依赖问题(dd)      |
| `pacman -Rsnc $(pacman -Qdttq)` | 删除所有孤包                                                      |
| `pacman -Q`                     | 列出已安装的软件包                                                |
| `pacman -Qs <regex>`            | 搜索软件包(s)                                                     |
| `pacman -Qi <软件包>`           | 查看软件包信息(i)                                                 |
| `pacman -Ql <软件包>`           | 查看软件包安装的文件路径(l)                                       |
| `pacman -Qo <file>`             | 查询已安装的文件或命令所属软件包(o)                               |
| `pacman -Qdttq`                 | 列出孤包(dt), 即不被需要(tt)的软件包依赖(d), 不显示版本信息(q)    |
| `pacman -Qeq`                   | 列出自己安装的软件包(e), 不显示版本信息(q)                        |
| `pacman -Qen`                   | 列出自行安装(e)的存在于软件源中(n)的包, 可用于查看非AUR包         |
| `pacman -Qem`                   | 列出自行安装(e)的不在软件源中(m)的包, 可用于查看AUR包             |
| `pacman -Qetq`                  | 列出自己安装(e)的不被其他软件包依赖(t)的软件包, 不显示版本信息(q) |
| `pacman -Qk`                    | 校验软件包文件缺失(k)                                             |
| `pacman -Qkk`                   | 校验软件包文件完整性(kk)                                          |
| `pacman -F <file>`              | 查询文件或命令所属软件包                                          |
| `pacman -Fy`                    | 更新文件数据库(y)                                                 |
| `pacman -U <file>`              | 从文件安装软件包(package.tar.gz)                                  |
| **paru**                        |                                                                   |
| `paru -S --rebuild <软件包>`    | 重新构建并安装软件包(--rebuild)                                   |
| `paru --fm nvim -S <软件包>`    | 安装软件包, 并在安装之前编辑仓库, 例如修改 PKGBUILD (--fm)        |
| `paru -Ui --chroot`             | chroot 隔离下安装软件包, 避免依赖冲突                             |
| `paru -Gc <软件包>`             | 查看aur软件包评论                                                 |
| `paru -c`                       | 删除不再需要的软件包                                              |

### 软件包降级

- core / extra / multilib / community 仓库降级

  - 所有软件包降级

    [Arch Linux Archive](#Arch Linux Archive)

  - 降级单个软件包

    ```bash
    sudo downgrade <package_name>
    ```

- AUR 降级

  AUR包通常是git仓库, 所以只需要使用 nvim 或其他方式 reset/checkout 到你想要的版本

  ```bash
  paru --fm nvim -S <package_name>
  ```

## 常用软件包/工具/命令

| 软件包/工具/命令          | 描述                                  |
| ------------------------- | ------------------------------------- |
| [`yay`](#yay)             | Aur 助手                              |
| [`paru`](#paru)           | Aur 助手                              |
| `debtap`                  | deb 包转 pacman 包                    |
| **Shell**                 |                                       |
| `zsh`                     | shell                                 |
| `fish`                    | shell                                 |
| `fisher`                  | shell 扩展管理                        |
| **终端**                  |                                       |
| `konsole`                 | 终端                                  |
| `yakuake`                 | 下拉终端                              |
| `kitty`                   | 终端                                  |
| `wezterm`                 | 终端                                  |
| `foot`                    | 终端                                  |
| `ghostty`                 | 终端                                  |
| `cool-retro-term`         | 复古终端                              |
| **基础设施**              |                                       |
| `man`                     | 命令手册                              |
| `tldr(tealdeer)`          | 命令用例                              |
| `lspci`                   |                                       |
| `lsusb`                   |                                       |
| `watch`                   | 定时执行                              |
| `at`                      | 定时执行                              |
| `crontab`                 | 定时任务                              |
| `bluetoothctl`            | Bluetooth 管理                        |
| `btmgmt`                  | Bluetooth 管理                        |
| `tlp / tlp-rdw / tlpui`   | 电源管理                              |
| `power-profiles-daemon`   | 电源管理                              |
| `thermald`                | Intel 温控守护进程                    |
| `pamixer`                 |                                       |
| `brightnessctl`           |                                       |
| `authbind`                | 非root绑定特权端口                    |
| **分区管理**              |                                       |
| `efibootmgr`              | EFI 启动管理                          |
| `lsblk`                   |                                       |
| `cfdisk`                  |                                       |
| `df`                      |                                       |
| `du`                      |                                       |
| **归档/压缩管理**         |                                       |
| `tar`                     |                                       |
| `zip / unzip`             |                                       |
| `unarchiver`              |                                       |
| `ark`                     | 图形化归档/压缩管理                   |
| **网络**                  |                                       |
| `curl`                    | http 请求                             |
| `ss / netstat`            | 网络状态                              |
| `nftables`                | 安装 iptables-nft 包即可              |
| `whois`                   | 域名查询                              |
| `dig`                     | 域名解析工具                          |
| `nslookup`                | 域名解析工具                          |
| `nali`                    | ip归属查询                            |
| `dnsmasq`                 | DNS 服务                              |
| `traceroute`              | 网络路径分析                          |
| `nexttrace`               | 网络路径分析                          |
| `mtr`                     | traceroute 和 ping 功能的结合         |
| `openresolv`              | resolv.conf 管理                      |
| `nethogs`                 | 网络流量监听                          |
| `wireshark`               | 网络分析工具                          |
| [`samba`](#samba)         | 文件共享                              |
| **CPU**                   |                                       |
| [`lscpu`](#lscpu)         |                                       |
| `turbostat`               | CPU 温度频率监测                      |
| `cpupower`                |                                       |
| **Shell 工具**            |                                       |
| [`reflector`](#reflector) | pacman 镜像服务器地址生成             |
| `mirro-rs`                | 查找速度最快的 pacman 镜像服务器      |
| [`tmux`](./tmux.md)       | 终端复用                              |
| `bat`                     | better cat                            |
| `exa`                     | better ls                             |
| `fzf`                     | fuzzy finder                          |
| `yazi`                    | 终端下的文件管理器                    |
| `superfile`               | 终端下的文件管理器                    |
| `hyperfine`               | 命令行性能测试                        |
| **TUI 工具**              |                                       |
| `lazygit`                 | git TUI                               |
| `lazydocker`              | docker TUI                            |
| **运维 TUI 工具**         |                                       |
| `top`                     |                                       |
| `iftop`                   |                                       |
| `iotop`                   |                                       |
| `atop`                    |                                       |
| `btop`                    | 终端资源监视器                        |
| `pw-top`                  | pipewire top                          |
| `intel_gpu_top`           |                                       |
| `nvidia-smi`              |                                       |
| `nvtop`                   | 终端GPU监视器                         |
| `wavemon`                 | wifi 管理                             |
| `nmtui`                   | NetworkManager TUI                    |
| `bluetui`                 | Bluetooth TUI                         |
| `gping`                   | ping TUI                              |
| `gdu`                     | ping TUI                              |
| **GUI 工具**              |                                       |
| `pavu-control`            | pipewire GUI                          |
| `qpwgraph`                | 音频控制                              |
| `mission-center`          | 类 Windows 任务管理器                 |
| `cpu-x`                   | CPU 信息监测                          |
| `wev`                     | Wayland 操作事件提示                  |
| **hack**                  |                                       |
| [`fcrackzip`](#fcrackzip) | 压缩包破解                            |
| **系统维护/管理**         |                                       |
| `cockpit`                 | web UI 系统监控                       |
| `grafana`                 | web UI 系统监控                       |
| `drkonqi`                 | 日志查看工具                          |
| **开发**                  |                                       |
| `neovide`                 | nvim GUI                              |
| `sourcegit`               | git GUI                               |
| `blender`                 | 建模                                  |
| `aegisub`                 | 字幕编辑                              |
| **视频**                  |                                       |
| `vlc`                     | 视频播放器                            |
| `mpv`                     | 精简视频播放器                        |
| `kdenlive`                | 视频剪辑                              |
| `media-downloader`        | 视频下载                              |
| **音频**                  |                                       |
| `elisa`                   | 音乐播放器, 支持电台                  |
| `easyeffects`             | 音频效果                              |
| `cava`                    | 控制台音频可视化                      |
| **图像**                  |                                       |
| `gwenview`                | kde 图像查看器                        |
| `gimp`                    | 修图                                  |
| `inkscape`                | 矢量图编辑                            |
| `pureref`                 | 多图片查看, 钉图, 编辑                |
| **截图/录制**             |                                       |
| `obs-studio`              | 视频录制/推流                         |
| `spectacle`               | 屏幕截图/录制                         |
| `grim`                    | wayland 屏幕截图                      |
| `vhs`                     | 生成终端命令动图                      |
| **通信**                  |                                       |
| `thunderbird`             | 邮件                                  |
| **办公**                  |                                       |
| `okular`                  | PDF/MD 阅读                           |
| `onlyoffice`              | 仿微软办公套件                        |
| `calligra`                | KDE 推出的办公套件                    |
| **数学**                  |                                       |
| `qalculate`               | 计算器, 非常全面, 支持货币转换等功能  |
| `numbat`                  | 命令行计算器, 支持货币转换等功能      |
| `cantor`                  | 数学软件                              |
| **浏览器**                |                                       |
| `firefox`                 |                                       |
| `zen-browser`             | 基于Firefox的浏览器                   |
| `tor-browser`             | 很安全的基于Firefox的浏览器           |
| **游戏**                  |                                       |
| [`mangohud`](#mangohud)   | 游戏性能监控                          |
| `goverlay`                | mangohud 的图形化控制台               |
| [`gamemode`](#gamemode)   | 使用游戏模式运行游戏                  |
| `steam`                   | Steam 客户端                          |
| `heroic`                  | 第三方 Epic 客户端                    |
| `lutris`                  | 游戏管理器                            |
| `faugus-launcher`         | wine/proton 启动器                    |
| `zinkrun`                 | OpenGL 转 Vulkan (可直接通过环境变量) |
| `vkbasalt`                | 为 Vulkan 游戏提供额外的后处理        |
| **终端游戏**              |                                       |
| `gnugo`                   | 围棋                                  |
| `gnuchess`                | 象棋                                  |
| **磁盘管理**              |                                       |
| `gparted`                 | 分区工具                              |
| `partiionmanager`         | 分区工具                              |
| `etcher`                  | 刻录工具                              |
| `isoimagewriter`          | 刻录工具                              |
| **键盘/鼠标**             |                                       |
| `keyd`                    | 键盘按键重新映射                      |
| **下载/网盘**             |                                       |
| `motrix`                  | 下载工具                              |
| `alist`                   | 整合各种网盘                          |
| [`davfs`](#davfs)         | 可将 alist 网盘挂载到本地             |
| **远程/VPN/串流**         |                                       |
| `kdeconnect`              | 手机电脑局域网连接                    |
| `scrcpy`                  | Android 屏幕远程控制                  |
| `remmina`                 | 远程连接工具, 支持VNC/RDP等           |
| `rustdesk`                | 屏幕分享                              |
| `frpc / frps`             | 内网穿透                              |
| `npc / nps`               | 内网穿透                              |
| [`zerotier`](#zerotier)   | VPN                                   |
| [`tailscale`](#tailscale) | VPN                                   |
| [`sunshine`](#sunshine)   | 串流服务端                            |
| [`moonlight`](#moonlight) | 串流客户端                            |
| **代理**                  |                                       |
| `dae`                     | 通过内核分流的透明代理                |
| `daed`                    | dae core + web UI                     |
| `glider`                  | 绑定可走代理的 http / socks 端口      |
| `proxychains`             | 终端强制代理工具, 可代理ping流量      |
| `v2raya`                  | v2ray web UI                          |
| `clash-verge-rev`         | clash-meta GUI                        |
| **电台/DJ**               |                                       |
| `azuracast`               | 电台                                  |
| `mixxx`                   | DJ, 电台推流                          |
| **玩具**                  |                                       |
| `lolcat`                  | 渐变色输出                            |
| `sl`                      | 火车                                  |
| `cmatrix`                 | 黑客字幕                              |
| `figlet`                  | 艺术字                                |
| `pyfiglet`                | figlet Python 实现                    |
| [`toilet`](#toilet)       | 艺术字                                |
| `cowsay`                  | 奶牛说                                |
| `asciiquarium`            | 水族馆                                |
| `nyancat`                 | 彩虹猫                                |
| `carbonyl`                | 终端浏览器                            |
| `griddycode`              | 代码编辑器                            |
| `pipes.sh`                | 管道                                  |
| `cbonsai`                 | 盆栽                                  |
| **字体**                  |                                       |
| `noto-fonts-cjk`          | 中文                                  |
| `noto-fonts-emoji`        | 表情                                  |
| `noto-fonts-extra`        |                                       |
| `ttf-babelstone-han`      | 生僻字字体                            |
| `ttf-nerd-fonts-symbols`  |                                       |
| **编程字体**              |                                       |
| `ttf-fira-code`           | Fira Code                             |
| `ttf-firacode-nerd`       | Fira Code Nerd Font                   |
| `ttf-maple`               |                                       |
| `otf-codenewroman-nerd`   |                                       |
| `ttf-meslo-nerd`          |                                       |
| `Comic Code`              |                                       |
| **编程**                  |                                       |
| `vscode`                  |                                       |
| `mise`                    | 环境管理                              |
| `usage`                   |                                       |
| `python`                  |                                       |
| `uv`                      |                                       |
| `ruff`                    |                                       |
| `nodejs`                  |                                       |
| `deno`                    |                                       |
| `prettier`                |                                       |
| `eslint`                  |                                       |
| `biome`                   |                                       |
| `tokei`                   | 代码行数统计                          |
| **其他**                  |                                       |
| `teamspeak3`              | 语音服务器                            |
| `kanshi`                  | Wayland 动态显示屏切换                |
| `xdg-ninja`               | 检查家目录下的点文件的 XDG 支持情况   |
| `zbar`                    | 二维码条形码扫描                      |

### KDE软件生态

| 软件               | 描述                             |
| ------------------ | -------------------------------- |
| `dolphin`          | 文件管理                         |
| `konsole`          | 终端                             |
| `kate`             | 文件编辑器                       |
| `yakuake`          | 下拉终端                         |
| `ark`              | 归档/压缩文件管理                |
| `filelight`        | 图形化文件占用, 类似spacesnipper |
| `kdf`              | 磁盘使用量                       |
| `partitionmanager` | 分区工具                         |
| `spectacle`        | 屏幕截图/录制                    |
| `gwenview`         | 图片查看                         |
| `kdenlive`         | 视频剪辑工具                     |
| `elisa`            | 音乐播放器                       |
| `okular`           | PDF/MD 阅读                      |
| `calligra`         | 办公套件                         |
| `krdp`             | 远程桌面服务器                   |
| `sweeper`          | 垃圾清理                         |
| `kwalletmanager`   | KDE密钥管理                      |
| `kdeconnect`       | 跨平台的手机电脑局域网连接工具   |
| `isoimagewriter`   | U盘刻录                          |
| `cantor`           | 数学软件                         |
| `drkonqi`          | kde 日志查看工具                 |

### 老工具替代

替代品通常有更好的性能和更多的特性

| 工具       | 替代           | 相似    |
| ---------- | -------------- | ------- |
| `grep`     | `rg`           |         |
| `find`     | `fd`           |         |
| `cd`       | `zoxide`       |         |
| `ls`       | `eza`          |         |
| `cat`      | `bat`          |         |
| `du`       | `dust`         | `gdu`   |
| `df`       | `duf`          |         |
| `ping`     |                | `gping` |
| `iptables` | `iptables-nft` |         |
| `zlib`     | `zlib-ng`      |         |

### yay

- 安装

  ```bash
  sudo pacman -S --needed base-devel
  git clone https://aur.archlinux.org/yay-bin.git
  cd yay-bin
  makepkg -si
  ```

### paru

GitHub: <https://github.com/Morganamilo/paru>

- 安装

  ```bash
  sudo pacman -S --needed base-devel git
  git clone https://aur.archlinux.org/paru-bin.git
  cd paru-bin
  makepkg -si
  ```

#### 配置paru

配置文件路径: `/etc/paru.conf`

##### paru 配置项含义

- `BottomUp`: 搜索结果倒叙排序

- `Chroot`: 使用 chroot 隔离安装

### reflector

- cli

  按照速度自动生成 CN 镜像服务器列表

  ```bash
  sudo reflector -c CN --save /etc/pacman.d/mirrorlist
  ```

### samba

安装后需要先配置才能使用, 示例: `https://raw.githubusercontent.com/hmeqo/dotfiles/refs/heads/main/data/etc/samba/smb.conf`,
配置完成后启动服务 `smb.service`, 要支持 smb://xxx/ 路径访问需要服务 `nmb.service`

- 非 Windows 网络自动发现

  如果需要在非 Windows 上的文件夹中可被发现 (如 macOS Finder, Linux GUI 文件管理器), 需要安装 `avahi` 并启动服务 `avahi-daemon.service`

- Windows 网络自动发现

  Windows 10 1511 以及以上默认禁用了 samba 自动发现, 可以安装并启动 `wsdd` 服务,

- 用户共享文件

  请看Wiki: <https://wiki.archlinuxcn.org/wiki/Samba#%E5%90%AF%E7%94%A8_Usershare>

### lscpu

- 查看 cpu 分布情况

  ```bash
  lscpu -e
  ```

### fcrackzip

示例:

```bash
# -b 暴力破解
# -c 指定暴力破解包含的字符, 具体看help
# -l 指定密码长度, n 或者 n1-n2
fcrackzip -b -c 'aA1!' -l 6 example.zip
```

### mangohud

性能监测工具, 如果游戏是32位的, 需要安装32位的 mangohud

- 安装

  ```bash
  pacman -S mangohud
  # for multilib
  pacman -S lib32-mangohud
  ```

- 示例

  ```bash
  mangohud glxgears
  # Steam游戏参数
  mangohud %command%
  ```

  对于 steam 和 vulkan 游戏, 也可以这么写

  ```bash
  MANGOHUD=1 %command%

  ```

#### mangohud with opengl

对于 OpenGL, 可能需要 `--dlsym` 参数

```bash
mangohud --dlsym glxgears
```

#### mangohud 快捷键

- R_SHIFT + F12

  切换显示/隐藏HUD

- R_SHIFT + F11

  切换HUD的位置

- R_SHIFT + F10

  切换HUD的预设

- L_SHIFT + F2

  开始/结束Log

### gamemode

- 配置示例

  /etc/gamemode.ini: <https://github.com/FeralInteractive/gamemode/blob/master/example/gamemode.ini>

  ```bash
  [general]
  renice=5

  [gpu]
  apply_gpu_optimisations=accept-responsibility
  nv_powermizer_mode=1
  ```

### davfs

- 挂载本机 alist (非本机地址改一下 ip)

  添加 systemd 服务 `/etc/systemd/system/mnt-dav.mount`

  ```ini
  [Unit]
  Description=Mount WebDAV
  After=alist.service

  [Mount]
  What=http://127.0.0.1:5244/dav/
  Where=/mnt/dav
  Options=noauto,user,uid=hmeqo,gid=hmeqo
  Type=davfs
  TimeoutSec=60

  [Install]
  WantedBy=remote-fs.target
  ```

  编辑 `/etc/davfs2/secrets`, 添加如下内容

  ```conf
  http://127.0.0.1:5244/dav/ admin <your_password>
  ```

  最后启动 alist 和 mnt-dav.mount

  ```bash
  sudo systemctl start alist mnt-dav.mount
  ```

### zerotier

- 安装

  - Windows

    下载安装包

  - Android

    Google play

  - Linux

    ```bash
    sudo pacman -S zerotier-one
    ```

    需要 enable/start `zerotier-one` 服务

    ```bash
    sudo systemctl start zerotier-one
    ```

- 使用

  登录 [zerotier 网站](https://my.zerotier.com/login), 注册一个用户, 创建一个网络

  然后让所有需要穿透的设备加入这个网络

  - Windows / Mac

    有 GUI

  - Linux

    加入网络 `sudo zerotier-cli join <network_id>`

    `sudo zerotier-cli info` 查看当前设备��息 (留意第三列设备id)

    到 zerotier 网站 Members 板块勾选新加入的设备, 点击授权即可

    通过 `sudo zerotier-cli list-networks` 命令查看加入的网络和分配的局域网ip

- 搭建 zerotier moon 服务器

  服务器下载 zerotier-one 并加入网络

  到 /var/lib/zerotier-one 执行下面命令创建配置文件

  ```bash
  sudo zerotier-idtool initmoon identity.public | sudo tee moon.json
  ```

  编辑 moon.json, 将 `"stableEndpoints": []"` 改为 `"stableEndpoints": ["<SererIP>/9993"]"`, 例如 `["123.456.789.012/9993"]`

  然后生成 .moon 文件

  ```bash
  sudo mkdir moons.d
  sudo zerotier-idtool genmoon ./moon.json
  sudo mv *.moon moons.d
  ```

  最后重启 `zerotier-one` 服务

  ```bash
  sudo systemctl restart zerotier-one
  ```

- 使用 zerotier moon

  - Linux

    `sudo zerotier-cli listpeers` 确认找到搭建好的中继, 类似这样的字样 `200 listpeers <id> - -1 - LEAF`,
    其中 `<id>` 为服务器id, 也可以通过服务器运行 `sudo zerotier-cli info` 来查看id

    通过 `sudo zerotier-cli orbit <id> <id>` 连接 moon, 出现 `200 orbit OK` 表示成功,
    再次运行 `sudo zerotier-cli listpeers` 可以看到对应的行 LEAF 变成了 MOON (可能有延迟)

### tailscale

- 安装

  - Windows

    安装包

  - Android

    Google play 和 F-Droid

  - Linux

    ```bash
    sudo pacman -S tailscale
    ```

- 使用

  - Linux

    ```bash
    sudo systemctl start tailscaled
    sudo tailscale up  # Or use 'tailscale up --operator=$USER' to not require root.
    ```

    在tailscale网页控制台可以看到所有已连接设备的虚拟网络IP

  - Android

    打开 tailscale app, 登录账号, 点击连接

- derp 服务器搭建

  对于安装了ArchLinux的无域名只有IPv4的服务器

  从 AUR 或者 archlinuxcn 安装 `derp-ipcert`, 然后修改配置文件将 127.0.0.1 替换为你的服务器 IP, 启动服务

  ```bash
  paru -S derp-ipcert

  # 使用以下命令或手动替��服务器 IP
  sudo sed -i 's/127.0.0.1/<你的服务器IP>/g' /etc/derper/openssl.cnf /etc/conf.d/derper

  sudo systemctl enable --now derper
  ```

  记得给服务器防火墙开放 UDP 的 3478 和 TCP 的 10443,5100 端口 (或者你修改后的端口)

  最后在 tailscale 网页控制台添加以下内容到 json 配置中, 添加到最外层花括号内保存即可

  ```json
  "derpMap": {
  	"OmitDefaultRegions": true, // 是否忽略默认节点
  	"Regions": {
  		"901": {
  			"RegionID":   901,
  			"RegionCode": "Myself",
  			"RegionName": "Myself Region",
  			"Nodes": [
  				{
  					"Name":             "901a",
  					"RegionID":         901,
  					"DERPPort":         10443, // derper 的 https 端口
  					"HostName":         "", // 留空即可
  					"IPv4":             "123.456.789.012", // 改为你的服务器 IP
  					"InsecureForTests": true,
  				},
  			],
  		},
  	},
  },
  ```

### sunshine

sunshine 在 windows 和 linux 下都是通过 web 页面操作, 启动方式也很简单, 直接从启动菜单中运行 sunshine 或启动服务即可

#### sunshine 配置虚拟显示器

通过 sunshine 串流虚拟显示器, 实现另一台电脑充当副屏

windows 端可安装虚拟显示器软件如 parsec-vdd / virtual-display-driver,
2025 新版 sunshine 在视频和音频配置中填写虚拟显示器的ID, 虚拟显示器ID可在故障排除中找到

### moonlight

下载安装 moonlight-qt, 添加 sunshine 服务端所在 ip, 点击连接, 在 sunshine 服务端输入 ping 码和客户端的主机名即可

### toilet

- 示例

  ```bash
  toilet -f mono12 -F metal -t ArchLinux
  ```

## 技巧

### 在 KDE 中使 GTK 程序使用 KDE 对话框以获得一致的外观

安装 `xdg-desktop-portal-gtk` 和 `kdialog` 并设置环境变量 `GTK_USE_PORTAL=1`

### 关闭桌面环境特效

- xfce

  `xfconf-query -c xfwm4 -p /general/use_compositing -s false`

- mate (gnome)

  `gsettings set org.mate.Marco.general compositing-manager false`

### KDE 网络连接提示无法访问互联网但实际正常

KDE 通过此 uri 检测网络连接状态 `ping.archlinux.org`, 如果是挂代理的情况下无法访问, 将此 uri 过滤掉就行

### 使用 sudo nvim 编辑文件时共享剪切板

可以在 nvim 中执行 `:health clipboard` 检查剪切板是否工作, 如果没有, 通过 `:help clipboard` 查看如何配置

如果你是 x11 用户, 只需要安装 `xclip` 即可, wayland 用户安装 `wl-clipboard`,
需要注意的是, nvim 通过 `WAYLAND_DISPLAY` 环境变量检测 wayland 环境以确认是否使用 `wl-clipboard`,
所以需要传递该环境变量给 `sudo`, 可以通过 `sudo -E nvim [path]` 执行 nvim

### 如何解除 sudo 锁定

- 方法1:

  重启

- 方法2:

  对于非root用户, 可 su 切到 root, 然后执行

  ```bash
  faillock --user <username> --reset
  ```

- 方法3 (未验证有效性):

  禁用 `faillock`, 编辑 `/etc/pam.d/system-auth`, 注释 `pam_faillock.so` 所在行

### KVM 显卡直通

以 intel + nvidia 举例

首先需要知道显卡的PCI ID, 可以通过 lspci 查看, 值在末尾方括号中

```bash
$ lspci -nn | grep "NVIDIA"
# 显卡
01:00.0 VGA compatible controller [0300]: NVIDIA Corporation GA107M [GeForce RTX XXXX] [10de:25a0] (rev a1)
# 声卡 (如果没有输出声卡, 可以跳过)
01:00.1 Audio device [0403]: NVIDIA Corporation GA107 High Definition Audio Controller [10de:2291] (rev a1)
```

然后将参数传递到内核

- 方法一

  grub 或其他 bootloader 中添加内核参数, vfio-pci.ids 填写显卡和声卡(如果有)的PCI ID

  ```bash
  ... intel_iommu=on vfio-pci.ids=10de:25a0,10de:2291
  ```

- 方法二

  也可以不通过 bootloader, 在modprobe中配置, `/etc/modprobe.d/vfio.conf`

  ```modconf
  options vfio-pci ids=10de:25a0,10de:2291
  softdep nvidia pre: vfio-pci
  ```

通过 virt-manager 配置pci直通显卡即可, 在虚拟机配置中选择添加硬件, 选择 PCI Host Device, 选择直通的 PCI 设备即可

### Proton 指定特定显卡运行

对于 DXVK 可以用 `DXVK_FILTER_DEVICE_NAME="Device Name"`, 例如 `DXVK_FILTER_DEVICE_NAME="Intel"`  
Device Name 可以通过 `vulkaninfo | grep deviceName` 获取

### 防止 ssh 断连

`~/.ssh/config`

```sshconfig
Host *
  ServerAliveInterval 60
```

### 关闭睿频

如果你用的是 tlp 之类的电源管理, 可找对应设置直接关闭

如果用的电源管理没有这个选项 (例如 ppd), 或者你不用电源管理, 可以尝试以下方法

- `Intel`

  对于 Intel CPU, 可简单通过 /sys 关闭或启用睿频

  ```bash
  # 1 表示关闭, 0 表示启用
  echo 1 | sudo tee /sys/devices/system/cpu/intel_pstate/no_turbo
  ```

  对 /sys 的修改是临时的, 重启后会恢复默认值, 如果需要持久化, 可以考虑添加一个开机启动脚本或者 crontab 任务

  crontab 示例, 安装 crontab 任意实现, 将以下内容写入到 `/etc/cron.d/no_turbo` 或者 `/etc/crontab`:

  ```crontab
  @reboot root echo 1 > /sys/devices/system/cpu/intel_pstate/no_turbo
  ```

- `cpupower` (不推荐)

  如果你知道你的 cpu 在无睿频情况下的频率, 可以尝试这个方法

  安装 `cpupower`, 修改 `/etc/default/cpupower`, 写入如下内容

  ```conf
  # 改为你的 CPU 无睿频的频率
  max_freq="2.7GHz"
  ```

  然后启用服务 `sudo systemctl enable --now cpupower.service` 以持久化更改

### 关闭 Intel 小核

通过 `lscpu -e` 查看 cpu 分布情况,
然后通过 `echo 0 | sudo tee /sys/bus/cpu/devices/cpu{12,13,14,15}/online` (其中数字改为实际cpu核心编号) 使核心离线

### 网速测试

- 利用 dd 和 ssh 测试网速

  此方法通过 ssh 远程执行 dd 命令来测试网速, 需要能够远程执行命令

  ```bash
  dd if=/dev/zero | ssh <target_myserver> dd of=/dev/null status=progress
  ```

### preempt=full

判断实时内核是否完全启用, 可通过

```bash
$ sudo dmesg | grep -i preempt
Dynamic Preempt: full
```

如果没有, 在内核参数添加 `preempt=full` 然后重新启动

## Wiki

Archwiki: <https://wiki.archlinux.org/title/Main_page>

### GNU/Linux 基础目录结构

以下只是简短描述, 详情见: <https://www.freedesktop.org/software/systemd/man/latest/file-hierarchy.html>

- `/boot`

  存放启动镜像各种启动配置的文件夹

- `/dev` - devtmpfs

  设备目录, 例如和主板连接的硬盘, u盘, 鼠标, 键盘等设备都在这里显示

- `/etc`

  配置文件目录

- `/home`

  用户目录, 例如用户 `hmeqo` 的用户目录是 `/home/hmeqo`, 这个位置并非绝对的, 可以修改

- `/mnt`

  用于挂载其他分区, 例如将 windows 盘挂载到 `/mnt/windows`

- `/opt`

  用于存放软件包的目录, 通常是一些因某些原因不能把软件拆分开的商业软件

- `/proc` (proc)

  进程目录, 在这里可以看到当前正在运行的进程, 以及各种信息

- `/root`

  root 用户的家目录

- `/run` (tmpfs)

  用于存放运行时数据, 套接字, 和其他类似文件, 通常仅对特权程序可写

- `/srv`

  srv - Service Data, 用于存放服务的目录

- `/sys` (sysfs)

  一个虚拟内核文件系统, 主要提供与内核接口相关的 API

  例如临时关闭 Intel CPU 睿频: `echo 1 | sudo tee /sys/devices/system/cpu/intel_pstate/no_turbo`

- `/tmp` (tmpfs)

  临时文件目录

- `/usr`

  用于存放应用程序的目录

- `/var`

  用于存放数据的目录 (随时会变化的数据)

- `/bin` -> `/usr/bin`

- `/lib` -> `/usr/lib`

- `/lib64` -> `/usr/lib`

- `/sbin` -> `/usr/bin`

- `EFI`

  EFI 分区目录, 如果你把 EFI 分区挂载到了 `/boot`, 那么你可以在 `/boot/EFI` 中找到启动项  
  如果你的 EFI 挂载点是 `/`, 那么对应的 EFI 目录则是 `/EFI`

### WINE/PROTON 运行 Windows 应用/游戏

#### WINE 生态中的各种工具介绍

- Wine

  - 是什么: Wine 是一个开源兼容层, 允许在类 Unix 操作系统 (如 Linux、macOS) 上运行设计为在 Microsoft Windows 上运行的应用程序 (特别是那些使用 Win32 API 的应用程序)  
    其原理是重写了 Windows 的 dll

- DXVK

  DXVK 一个用于转换 DirectX9/10/11 API 为 Vulkan API 的兼容层, 能大幅度提升游戏性能, 甚至超越 Windows, DXVK 不止能用于 Linux, 也能在 Windows 上使用

- VKD3D

  VKD3D 一个用于转换 DirectX12 API 为 Vulkan API 的兼容层, 不过 VKD3D 不像 DXVK 那样已经发展了很久, VKD3D 的游戏性能在某些情况下可能只有 Windows 的 2/3

- Proton

  - 是什么: Proton 是 Valve 为其数字发行平台 Steam 开发的一个开源工具, 基于 Wine, 但专门为运行 Windows 游戏进行了优化  
    Proton 整合了 DXVK, VKD3D 等一系列工具, Valve 对 Proton 的更改都会回馈到上游 (Wine, DXVK, VKD3D 等), Proton 极大促进了 Linux 游戏/软件生态的发展
  - 与 Wine 的关系: Proton 构建于 Wine 之上, 使用 Wine 的代码库作为其核心, 并添加了 Valve 自己的补丁、优化和额外功能, 以提高游戏的兼容性和性能

- Proton-GE

  由 GloriousEggroll 创建的一个 Proton 定制版, 相比于 Proton, 整合了更多 Proton 没有或暂时没有的功能, 有更好的游戏兼容性

- Wine-GE (自 Wine-9.0 起不再维护)

  由 GloriousEggroll 创建的一个 Wine 定制版, Wine-GE 是为非 Steam 游戏分发的版本, 因为 Proton 是专为 Steam 开发, 有很多非 Steam 游戏不需要的功能

- UMU-Launcher

  由于 Proton 是专门为 Steam 游戏开发的, 在 Wine9.0 之前, 一般建议用 Wine-GE 运行非 Steam 游戏/应用, Proton-GE 运行 Steam 游戏  
  但在 9.0 之后, GE 作者不再分发 Wine-GE 版本, 转而开发了 UMU-Launcher, 用 Proton-GE 运行非 Steam 游戏/应用

- GPTK (Game Porting Toolkit)

  Apple 为 macOS 开发的基于 Wine 的游戏兼容层

> [!NOTE]
> Proton 能够以高性能运行 Windows 游戏, 主要功劳在于 DXVK 和 VKD3D  
> 各种利用 Wine 运行 Windows 游戏的启动器都默认帮你配好了 DXVK, VKD3D 等工具, 其游戏性能和 Proton 无太大区别

#### WINE/PROTON GUI 启动器

- Steam

  伟大无需多言

- lutris

  流行且通用的游戏/应用启动/管理工具

- heroic-games-launcher

  非官方 Epic 游戏启动器

- bottles

  UI 不错

- faugus-launcher

  利用 UMU-Launcher 的游戏/应用启动器

- CrossOver

  付费版 Wine
