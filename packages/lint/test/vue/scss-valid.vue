<!-- scss-valid.vue - Vue SFC 中的 SCSS 有效示例 -->

<template>
  <div class="button button--primary">
    <span class="button__icon">Icon</span>
  </div>
</template>

<style lang="scss" scoped>
$primary-color: #0366d6;

.button {
  display: inline-block;
  padding: 8px 16px;

  &__icon {
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

