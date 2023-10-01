<script setup>
import BaseButton from '../components/common/BaseButton.vue';
</script>

<template>
    <section class="container">
        <h1 class="home__title main-title">Make your dream <br>business goal come true</h1>
        <p class="home__intro base-text">
            when you need us for improve your business, then come with us to help your business have reach it, 
            you just sit and feel that goal
        </p>
        <BaseButton class="home__start-btn" label="Start Project"/>
        <div class="home__picture">
            <picture>
                <source srcset="">
            </picture>
        </div>
    </section>
</template>

<style lang="scss">
    .home {
        &__intro {
            text-align: center;
            color: $-c-white-soft;
            opacity: 0.6;
        }
    }
</style>