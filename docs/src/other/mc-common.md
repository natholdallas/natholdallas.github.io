# Minecraft 笔记

## Gamerule

```shell
/gamerule keepInventory false # 死亡不掉落

/gamerule mobGriefing false # 防爆

/gamerule playersSleepingPercentage 0 # 只需一个玩家睡觉跳过夜晚

/gamerule playersSleepingPercentage 50 # 玩家睡觉人数过跳过夜晚
```

## 机制

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

```shell
/scoreboard objectives add deathCount deadthCount ["deathCount"] # 生成死亡计分板
/scoreboard objectives setdisplay sidebar deathCount
```
