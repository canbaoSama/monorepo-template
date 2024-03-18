<script setup lang="ts">
import 'element-plus/dist/index.css'

import { ElButton } from 'element-plus'

function TestClick() {
    console.warn('点我干嘛')
}
</script>

<template>
    <ElButton type="primary" @click="TestClick">
        点击我
    </ElButton>
</template>

<style scoped></style>
