<template>
  <div>
    <ul>
      <li v-for="x in items" :key="x">
        {{ x }}
      </li>
    </ul>
		<div></div>
  </div>
</template>

<script lang="ts" setup>
const items = [1, 2, 3]
</script>
