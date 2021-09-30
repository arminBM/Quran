<template>
  <div class="settings">
    <div class="settings_input">
      <p class="settings_p">ترجمه:</p>
      <input type="radio" value="1" id="tar1" name="tar" v-model="tar"/>
      <label for="tar1">انصاریان</label>
      <input type="radio" value="2" id="tar2" name="tar" v-model="tar"/>
      <label for="tar2">مکارم</label>
      <input type="radio" value="3" id="tar3" name="tar" v-model="tar"/>
      <label for="tar3">مالکی</label>
    </div>
    <div class="settings_input">
      <p class="settings_p">فونت:</p>
      <input type="radio" value="IRANsans" id="font1" name="font"  v-model="font"/>
      <label for="font1">فونت 1</label>
      <input type="radio" value="neirizi" id="font2" name="font"  v-model="font"/>
      <label for="font2">فونت 2</label>
      <input type="radio" value="yekan" id="font3" name="font"  v-model="font"/>
      <label for="font3">فونت 3</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";


export default defineComponent({
  name: "Settings",
  setup() {
    let tarJson = localStorage.getItem("tar") || '"1"';
    let tar = ref(JSON.parse(tarJson));
    watchEffect(() => {
      localStorage.setItem("tar", JSON.stringify(tar.value));
    });
    let fontJson = localStorage.getItem("font") || '"IRANsans"';
    let font = ref(JSON.parse(fontJson));
    watchEffect(() => {
      localStorage.setItem("font", JSON.stringify(font.value));
    });
    return {
      tar,
      font
    };
    }
});
</script>

<style lang="scss">
@import "../assets/scss/__settings.scss";
</style>
