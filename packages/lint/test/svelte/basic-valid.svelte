<!-- basic-valid.svelte - Svelte 组件中的样式有效示例 -->

<script>
  let active = true;
</script>

<style>
  .button {
    color: red;
    padding: 8px 16px;
  }

  /* Svelte 全局选择器 */
  :global(body) {
    margin: 0;
  }

  :global(.global-class) {
    padding: 16px;
  }
</style>

<button class="button">OK</button>

