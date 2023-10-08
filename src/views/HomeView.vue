<script setup>
import SectionAbout from '../components/sections/home/SectionAbout.vue';
import SectionIntro from '../components/sections/home/SectionIntro.vue';
import SectionPotfolio from '../components/sections/home/SectionPortfolio.vue';
import SectionServices from '../components/sections/home/SectionServices.vue';
</script>

<template>
    <div class="home">
        <SectionIntro class="home__section" />
        <SectionAbout class="home__section" />
        <SectionServices class="home__section" />
        <SectionPotfolio class="home__section" />
    </div>
</template>

<style lang="scss">
.home {
    &__section {
        margin-bottom: 99px;
    }
}
</style>