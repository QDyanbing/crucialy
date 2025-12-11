<!-- css-invalid.vue - Vue SFC 中的 CSS 无效示例（应触发错误） -->

<template>
  <div class="Button">Bad</div>
</template>

<style scoped>
.Button {
  colr: red; /* 拼写错误 -> 应触发 property-no-unknown */
  unknown-prop: 1; /* 未知属性 -> 应触发 property-no-unknown */
}
</style>

