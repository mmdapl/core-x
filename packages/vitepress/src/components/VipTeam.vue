<script lang="ts" setup>
import { VPTeamMembers } from 'vitepress/theme'
import { vipTeamMembers } from '../core'
</script>

<template>
  <section id="team">
    <h2>团队介绍</h2>
    <VPTeamMembers :members="vipTeamMembers" size="small" />
  </section>
</template>
