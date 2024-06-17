#!/bin/bash


# 密码
password=${1}

## 登录阿里云hub
if [ -n "$password" ]; then
  docker login --username=142vip --password="$password"  registry.cn-hangzhou.aliyuncs.com
else
  docker login --username=142vip  registry.cn-hangzhou.aliyuncs.com
fi

