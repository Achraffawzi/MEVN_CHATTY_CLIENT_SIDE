<template>
  <div class="searchInputWrapper">
    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    <input type="text" placeholder="Search for a friend" />
  </div>
</template>

<script>
  export default {
  name: "SearchInput"
  }
</script>

<style lang="scss" scoped>
.searchInputWrapper {
  background-color: $input-grey-bg;
  padding: 0px 5px;
  margin: 10px 0;
  border-radius: 100px;
  overflow: hidden;
  @include flex(row, start, center, nowrap);

  svg {
    color: $text-grey;
    margin-left: 5px;
  }

  input {
    flex: 1;
    padding: 15px 0;
    outline: none;
    border: none;
    background: transparent;
    margin-left: 10px;
    color: $white;
  }
}
</style>
