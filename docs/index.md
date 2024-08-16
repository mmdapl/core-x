---
layout: home

hero:
  name: "@142vip/core-x"
  text: "X代表一切都有可能"
  tagline: "易学易用、性能出色，适用工程化的通用工具包"
  actions:
    - theme: brand
      text: 快速上手 →
      link: /packages/fairy-cli
    - theme: alt
      text: 408CSFamily
      link: https://github.com/142vip/408CSFamily
# 功能页
features:
  - title: 易学易用
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 性能出色
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 灵活多变
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: /api-examples
    rel: 'external'
---

<script setup>
import {  VPTeamPage,  VPTeamPageTitle,  VPTeamMembers,  VPTeamPageSection} from 'vitepress/theme';

import ContactAuthor from '@theme/components/ContactAuthor.vue';
import {teamMembers} from "@theme/components";

const coreMembers = [];
const partners = [];
</script>

## @142vip/core-x

### 贡献

<VPTeamMembers size="small" :members="teamMembers" />

## 赞赏列表

以下排名不分先后， **赞赏过的一定要微信跟我说呀！！！！！！**

<div>
  <a href="https://github.com/ChiefPing" target="_blank" style="margin: 5px">
    <img
        src="https://avatars2.githubusercontent.com/u/34122068?s=460&v=4"
        alt="ChiefPing"
        style="border-radius:5px;" width="50px"
    />
  </a>
  <a href="https://github.com/xiaoliuxin" target="_blank" style="margin: 5px">
    <img
        src="https://avatars2.githubusercontent.com/u/60652527?s=460&v=4"
        alt="xiaoliuxin"
        style="border-radius:5px;" width="50px"
    />
  </a>
</div>

## 赞助商

以下排名不分先后! 还木有收到赞助，哈哈哈，先留坑

## 贡献

> 感谢所有参与仓库建设的开发者

<a href="https://github.com/142vip/core-x/graphs/contributors">
  <img
    src="https://contrib.rocks/image?repo=142vip/core-x"
    alt="感谢向仓库提交PR的所有开发者"
    title="@142vip/core-x"
  />
</a>

## 趋势

<div style="text-align: center" align="center">
    <img
        src="https://api.star-history.com/svg?repos=142vip/core-x&type=Date"
        alt="Star History"
        style="border-radius: 5px"
    >
</div>

<ContactAuthor/>

<!-- #endregion we-media -->
