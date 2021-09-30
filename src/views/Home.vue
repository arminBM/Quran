<template>
  <img class="homeLogo" src="../assets/img/logo1.png" alt="" />
  <div class="search">
    <input type="text" class="input_home" placeholder="جستجو اسم سوره" />
    <button type="submit" class="searchBtn">جستجو</button>
  </div>
  <br />
  <br />
  <br />
  <div class="sooreBox">
    <div class="soore" v-for="item in quran_name" :key="item.id" @click="open(item.id)">
      <p>
        <span>اسم:</span>&nbsp
        <span>{{ item.ar_name }}</span>
      </p>
      <p>
        <span>شماره</span>&nbsp
        <span>{{ item.id }}</span>
      </p>
      <p>
        <span>جزء:</span>&nbsp
        <span>{{ item.part }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/sooreh";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();
    const quran_name = store.all_quran;
    const router = useRouter();
    function open(id: number) {
      router.push({
        name: "Open",
        params: { id: id },
      });
    }
    return { quran_name, open };
  },
});
</script>
<style lang="scss">
@import "../assets/scss/__home.scss";
</style>
