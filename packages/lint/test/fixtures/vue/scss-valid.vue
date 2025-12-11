<!-- scss-valid.vue - Vue SFC 中的 SCSS 有效示例 -->

<template>
  <div class="block block--primary">
    <span class="block__element">Element</span>
  </div>
</template>

<style lang="scss" scoped>
$primary-color: #0366d6;

.block {
  display: inline-block;
  padding: 8px 16px;

  &__element {
    margin-right: 4px;
  }

  &--primary {
    background-color: $primary-color;
  }

  &:hover {
    opacity: 0.8;
  }
}

/* Vue 3 深度选择器 */
:deep(.child) {
  color: blue;
}
</style>

