<template>
  <h1>Vuex Hooks</h1>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useYdStore } from '@/hooks/use-store';

export default defineComponent({
  setup() {
    const store = useYdStore();
    return {
      message: store.getters['user/isLogin2'],
    };
  },
});
</script>
