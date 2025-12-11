<!-- basic-invalid.svelte - Svelte 组件中的样式无效示例（应触发错误） -->

<script>
  let active = true;
</script>

<style>
  .Button {
    colr: red; /* 拼写错误 -> 应触发 property-no-unknown */
    unknown-prop: 1; /* 未知属性 -> 应触发 property-no-unknown */
  }
</style>

<button class="Button">Bad</button>

