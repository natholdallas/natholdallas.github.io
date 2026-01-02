# daed

## routing

```txt
# 默认进程配置
pname(NetworkManager, systemd-resolved, dnsmasq) -> direct

# 默认地址配置
dip(224.0.0.0/3, 'ff00::/8') -> direct
dip(geoip:private) -> direct

# 域名
domain(openrouter.ai) -> us
domain(chatgpt.com) -> us
domain(ping.archlinux.org) -> direct

# 服务器
dip(103.211.32.21) -> hk
dip(72.60.163.117) -> us

# 进程
pname(uuplugin) -> must_direct
pname(ssh, adb) -> direct
pname(tailscaled, zerotier-one, easytier-core) -> direct

# 广告拦截
domain(geosite:category-ads-all) -> block

# 蒸汽平台
domain(geosite:steam@cn, steamserver.net, steamcontent.com) -> direct

# 过滤中国网站
dip(geoip:cn) -> direct
domain(geosite:cn) -> direct

# 失败逻辑
fallback: hk
```

## dns

```txt
upstream {
  alidns: 'udp://223.5.5.5:53'
  googledns: 'tcp+udp://8.8.8.8:53'
}

routing {
  request {
    # Block AD
    qname(geosite:category-ads-all) -> reject
    qname(geosite:cn) -> alidns
    fallback: googledns
  }
}
```
