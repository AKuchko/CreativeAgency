<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
</script>

<template>
    <section class="intro-section container">
        <h1 class="intro-section__title main-title">Make your dream <br>business goal come true</h1>
        <p class="intro-section__intro base-text">
            when you need us for improve your business, then come with us to help your business have reach it,
            you just sit and feel that goal
        </p>
        <BaseButton class="intro-section__start-btn" label="Start Project" center />
        <div class="intro-section__picture">
            <picture>
                <source srcset="">
                <!-- закончил тут, нужно скачать картинку в разных разрешениях -->
            </picture>
        </div>
    </section>
</template>

<style lang="scss">
    .intro-section {
        &__title {
            margin-bottom: 20px;
        }

        &__intro {
            text-align: center;
            text-wrap: balance;
            color: $-c-gray-soft;
            opacity: 0.6;
            margin-bottom: 20px;

            @media(prefers-color-scheme: dark) {
                color: $-c-white-soft;
            }
        }
    }
</style>