<template>
  <span class="diagonal_line"></span>
  <span class="diagonal_line2"></span>
  <div class="sooreh_page">
    <span class="sooreh_title" id="sooreh_title">(({{ sooreh.ar_name }}))</span>
    <p class="sooreh_p">
      {{ sooreh.arabic_text }}
    </p>
    <p v-if="tar == 1" class="sooreh_p_fa" :style="{ 'fontFamily': font2 }">
      {{ sooreh.fa_ansarian_text }}
    </p>
    <p v-if="tar == 2" class="sooreh_p_fa" :style="{ 'fontFamily': font2 }">
      {{ sooreh.fa_makarem_text }}
    </p>
    <p v-if="tar == 3" class="sooreh_p_fa" :style="{ 'fontFamily': font2 }">
      {{ sooreh.fa_maleki_text }}
    </p>
    <a href="#sooreh_title"><button class="up_btn">&#128314;</button></a>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "../store/sooreh";

export default defineComponent({
  name: "Open",
  props: ["id"],
  setup(props) {
    const store = useStore();
    type sooreh = {
      id: number;
      ar_name: string;
      pa_name: string;
      part: number[];
      arabic_text: string[];
      fa_ansarian_text: string[];
      fa_makarem_text: string[];
      fa_maleki_text: string[];
      mkORmd: boolean;
    };
    let sooreh = ref<sooreh>({
      id: 1,
      ar_name: "الحمد",
      pa_name: "ستایش",
      part: [1],
      mkORmd: true,
      arabic_text: [
        "بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ",
        "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        "الرَّحْمَـٰنِ الرَّحِيمِ",
        "مَالِكِ يَوْمِ الدِّينِ",
        "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      ],
      fa_ansarian_text: [
        "همه ستایش ها، ویژه خدا، مالک و مربّی جهانیان است.",
        "رحمتش بی اندازه و مهربانی اش همیشگی است.",
        "مالک و فرمانروای روز پاداش و کیفر است.",
        "[پروردگارا!] تنها تو را می پرستیم وتنها از تو کمک می خواهیم.",
        "ما را به راهِ راست راهنمایی کن.",
        "راه کسانی [چون پیامبران، صدّیقان، شهیدان و صالحان که به خاطر لیاقتشان] به آنان نعمتِ [ایمان، عمل شایسته و اخلاق حسنه] عطا کردی، هم آنان که نه مورد خشم تواند و نه گمراه اند.",
      ],
      fa_makarem_text: [
        "ستایش مخصوص خداوندی است که پروردگار جهانیان است.",
        "(خداوندی که) بخشنده و بخشایشگر است (و رحمت عام و خاصش همگان را فرا گرفته).",
        "(خداوندی که) مالک روز جزاست.",
        "(پروردگارا!) تنها تو را می‌پرستیم؛ و تنها از تو یاری می‌جوییم.",
        "ما را به راه راست هدایت کن...",
        "راه کسانی که آنان را مشمول نعمت خود ساختی؛ نه کسانی که بر آنان غضب کرده‌ای؛ و نه گمراهان.",
      ],
      fa_maleki_text: [
        "خدا را سپاس که صاحب‌اختیار جهانیان است",
        "بزرگوارِ مهربان است",
        "صاحب روز جزاست",
        "فقط تو را بندگی می‌کنیم و در این راه فقط از تو کمک می‌خواهیم",
        "ما را به راه درست زندگی ببر:",
        "راه کسانی که به آنان نعمت ویژه ای داده ای.<br>همانانی که نه گرفتار خشم تو شده‌اند و نه راه را گم کرده‌اند.",
      ],
    });
    onMounted(() => {
      for (let i = 0; i < 114; i++) {
        if (store.all_quran[i].id == props.id) {
          sooreh.value = store.all_quran[i];
        }
      }
    });
    let tarJson = localStorage.getItem("tar") || '"1"';
    let tar = ref(JSON.parse(tarJson));
    let fontJson = localStorage.getItem("font") || '"IRANsans"';
    let font2:string = ref(JSON.parse(fontJson));
    return {
      sooreh,
      tar,
      font2,
    };
  },
});
</script>
<style lang="scss">
@import "../assets/scss/__open.scss";
</style>
