<!-- css-valid.vue - Vue SFC 中的 CSS 有效示例 -->

<template>
  <div class="button">OK</div>
  <div class="child">Child</div>
</template>

<style scoped>
.button {
  color: red;
  padding: 8px 16px;
}

/* Vue 3 深度选择器 */
:deep(.child) {
  color: blue;
}

/* Vue 3 全局选择器 */
:global(.global-class) {
  margin: 0;
}

/* Vue 3 插槽选择器 */
:slotted(.slot-content) {
  padding: 16px;
}
</style>

