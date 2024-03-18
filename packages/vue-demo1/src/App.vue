<script setup lang="ts">
import { isArray } from '@vue3-pnpm-monorepo/my-utils'
import { Button } from '@vue3-pnpm-monorepo/my-components'

import { requireImage } from '@/utils/index'

console.warn(`数据位：${isArray(['123'])}`)
</script>

<template>
    <div class="app-container">
        <ElImage :src="requireImage(`logo.png`)" />
        <div class="test-content">
            <Button /><br>
        </div>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
