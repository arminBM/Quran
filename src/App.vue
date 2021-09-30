<template>
  <router-view />
  <div id="nav">
     <router-link to="/"><button>صفحه نخست</button></router-link>
    <br>
    <br>
   <router-link to="/settings"><button>تنظیمات</button> </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useStore } from "./store/sooreh";

export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
});
</script>
