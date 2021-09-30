<template>
  <img class="homeLogo" src="../assets/img/logo1.png" alt="" />
  <div class="search">
    <input
      type="text"
      class="input_home"
      placeholder="جستجو اسم سوره"
      v-model="searchInput"
    />
    <button type="submit" class="searchBtn" @click="search">جستجو</button>
  </div>
  <br />
  <br />
  <br />
  <div class="sooreBox">
    <div
      class="soore"
      v-for="item in quran_name"
      :key="item.id"
      @click="open(item.id)"
    >
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
    const quran_name = ref(store.all_quran);
    const router = useRouter();
    function open(id: number) {
      router.push({
        name: "Open",
        params: { id: id },
      });
    }
    let input_x = ref(0);
    let searchInput = ref("");
    function search() {
      if (searchInput.value == "") {
        alert("لطفا فیلد را پر کنید");
      } else {
        for (let i = 0; i < 114; i++) {
          if (
            searchInput.value == quran_name.value[i].ar_name ||
            searchInput.value == quran_name.value[i].pa_name
          ) {
            input_x.value = 1;
            router.push({
              name: "Open",
              params: {
                id: quran_name.value[i].id,
              },
            });
          }
        }
        if (input_x.value == 0) {
          alert("پیدا نشد");
        }
      }
    }
    return { quran_name, open, search, input_x, searchInput };
  },
});
</script>
<style lang="scss">
@import "../assets/scss/__home.scss";
</style>
