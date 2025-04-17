# Minecraft 笔记

## Gamerule

死亡不掉落

```shell
/gamerule keepInventory false
```

防爆

```shell
/gamerule mobGriefing false
```

只需一个玩家睡觉跳过夜晚

```shell
/gamerule playersSleepingPercentage 0
```

玩家睡觉人数百分比过跳过夜晚

```shell
/gamerule playersSleepingPercentage 50
```

## 机制参考

### 矿物刷新

1. 煤炭 96
2. 铜矿 48
3. 铁矿 16
4. 金矿 -16
5. 钻石 -59
6. 青金石 0
7. 红石 -59
8. 绿宝石 256

## Scoreboard

生成死亡计分板

```shell
/scoreboard objectives add deathCount deathCount ["deathCount"]
```

设置生成位置

```shell
/scoreboard objectives setdisplay sidebar deathCount
```
