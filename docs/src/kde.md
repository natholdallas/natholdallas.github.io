# KDE

将 meta 修饰键修改为 Overview

```bash
kwriteconfig6 --file kwinrc --group ModifierOnlyShortcuts --key Meta "org.kde.kglobalaccel,/component/kwin,,invokeShortcut,Overview"
qdbus6 org.kde.KWin /KWin reconfigure
```

重新加载启动项

```bash
kbuildsycoca6
```

清理无效的快捷键

```bash
qdbus6 org.kde.kglobalaccel /component/kwin org.kde.kglobalaccel.Component.cleanUp
```

导出桌面布局

```bash
qdbus6 org.kde.plasmashell /PlasmaShell org.kde.PlasmaShell.dumpCurrentLayoutJS > org.kde.plasma.desktop-layout.js
```

清理剪切板

```bash
qdbus6 org.kde.klipper /klipper org.kde.klipper.klipper.clearClipboardHistory
```
