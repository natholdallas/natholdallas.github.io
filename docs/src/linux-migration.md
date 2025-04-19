# 关于你的下一台 ArchLinux 如何迁移

## 引言

稍微有点复杂，但是一步步来

## 包管理器同步

将旧电脑装有的包提炼到文件

```shell
pacman -Qeq > softwares.txt
```

将文件拷贝到新电脑之后在文件目录下执行

::: tip
如果你有使用 `aur` 包，那么将 `pacman` 换为 `yay` 或 `aur`
:::

```shell
cat softwares.txt | pacman -S -
```

## 配置 & 数据 同步

如果有条件，可以把 `~/.local` 和 `~/.config` 都备份下来

## etc 备份

最好把 /etc 目录也备份了
