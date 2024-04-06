# 关于 Arch Linux

> 本文摘自 Arch Linux CN

## 摘要

Arch Linux 是一个针对 x86-64 平台独立开发的 GNU/Linux 发行版，遵循轻量、简洁、优雅的开发原则，借灵活的架构应用于各种环境。Arch 安装后只提供最基本的系统，用户可以根据自己的需求来搭建不同的系统环境。官方并不提供图形化的配置工具，多数系统配置是通过修改文本文件来进行的。Arch 尽力提供最新稳定版本的软件。

Arch Linux 使用 Pacman 作为包管理器，它在提供了一个简单的包管理器同时，也提供了一个易用的包构建系统，使用户能够轻松地管理和定制官方提供的、用户自己制作的、甚至是来自第三方的各种软件包。仓库系统也能够让用户轻松的构建和维护自己的编译脚本、软件包和仓库，这样将有助于社区的成长和建设。

Arch Linux 的基本安装包由 [core] 软件库提供。此外 [extra], [community] 和 [testing] 软件库则提供了大量的的高品质软件以满足你的需求。Arch Linux 同时也通过 Arch 用户软件仓库(AUR)提供了 [unsupported] 软件库，里面有大量的编译脚本，用户可以通过 `makepkg` 工具轻松地从源码中编译软件。

Arch Linux 采用“滚动升级”策略，这样可以实现“一次安装，永久更新”。升级到下一个“版本”的 Arch Linux 几乎不需要重新安装系统，只需一行命令，你就能轻松的享受到最新的 Arch Linux。

Arch Linux 努力和上游软件源码保持一致，只有使程序能够在 Arch Linux 正常编译运行的补丁才会被加入更新中。

总之，Arch Linux 是一个灵活、简洁的、满足有一定经验的 Linux® 用户的需求的发行版。它强大且易于管理的特性，使其成为可以完美胜任服务器和工作站的发行版。它可以变成任何你想要的样子。如果你也认为这是一个 GNU/Linux 发行版该做的，欢迎你来自由使用并参与其中，为社区做出贡献，欢迎来到 Arch Linux！

## Abstract

Arch Linux is an independently developed, x86-64 general purpose GNU/Linux distribution versatile enough to suit any role. Development focuses on simplicity, minimalism, and code elegance. Arch is installed as a minimal base system, configured by the user upon which their own ideal environment is assembled by installing only what is required or desired for their unique purposes. GUI configuration utilities are not officially provided, and most system configuration is performed from the shell by editing simple text files. Arch strives to stay bleeding edge, and typically offers the latest stable versions of most software.

Arch Linux uses its own Pacman package manager, which couples simple binary packages with an easy-to-use package build system. This allows users to easily manage and customize packages ranging from official Arch software to the user's own personal packages to packages from 3rd party sources. The repository system also allows users to easily build and maintain their own custom build scripts, packages, and repositories, encouraging community growth and contribution.

The minimal Arch base package set resides in the streamlined [core] repository. In addition, the official [extra], [extra-testing], and [core-testing] repositories provide several thousand high-quality packages to meet your software demands. Arch also offers the Arch Linux User Repository (AUR), which contains more than 49,000 build scripts, for compiling installable packages from source using the Arch Linux makepkg application.

Arch Linux uses a "rolling release" system which allows one-time installation and perpetual software upgrades. It is not generally necessary to reinstall or upgrade your Arch Linux system from one "version" to the next. By issuing one command, an Arch system is kept up-to-date and on the bleeding edge.

Arch strives to keep its packages as close to the original upstream software as possible. Patches are applied only when necessary to ensure an application compiles and runs correctly with the other packages installed on an up-to-date Arch system.

To summarize: Arch Linux is a versatile, and simple distribution designed to fit the needs of the competent Linux® user. It is both powerful and easy to manage, making it an ideal distro for servers and workstations. Take it in any direction you like. If you share this vision of what a GNU/Linux distribution should be, then you are welcomed and encouraged to use it freely, get involved, and contribute to the community. Welcome to Arch!
