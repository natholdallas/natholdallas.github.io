# tmux

## 用法

* 开启新 session

  `tmux`

* 开启新 session 并命名

  `tmux new -s my_session`

* 显示所有 session

  `tmux ls`

* 使用 session 编号接入

  `tmux attach -t 0`

* 使用 session 名称接入

  `tmux attach -t <session-name>`  
  简写:  
  `tmux a -t name`

* 使用 session 编号 kill

  `tmux kill-session -t 0`

* 使用 session 名称 kill

  `tmux kill-session -t <session-name>`

* 使用 session 编号切换

  `tmux switch -t 0`

* 使用 session 名称切换

  `tmux switch -t <session-name>`

* 重命名会话

  `tmux rename-session -t 0 <new-name>`

* 创建共享会话
  
  `tmux -S /tmp/shared_tmux`

* 连接共享会话
  
  `tmux -S /tmp/shared_tmux attach`

## 常用快捷键

* 选择需要跳转的 session 会话

  `ctrl+b s`

* 重命名当前会话

  `ctrl+b $`

* 断开当前 session

  `ctrl+b d`

* 在当前 session 中多加一个 window

  `ctrl+b c`

* 在一个 session 中的多个 window 中作出选择

  `ctrl+b w`

* 关闭当前 session 中的当前 window

  `ctrl+b x`

* 进入 tmux 翻屏模式, 实现上下翻页

  `ctrl+b [`

  * `hjkl` 或者 `方向键` 移动光标

  * `PageUp` `PageDown` 实现上下翻页（mac 可以用 fn + ↑ ↓ 实现上下翻页）

  * `q` 或者 `ctrl+c` 退出翻屏模式

* 其他常用快捷键

  关闭一个 session 中所有窗口:  
  `ctrl+b ！`

  将当前窗口分成左右两分:  
  `ctrl+b %`

  将当前窗口分成上下两分:  
  `ctrl+b "`

  让光标在不同的窗口中跳转:  
  `ctrl+b 方向键`

  按住 C+b 不放，同时按住方向键，可以调节光标所在窗口的大小:  
  `ctrl+b+方向键`
