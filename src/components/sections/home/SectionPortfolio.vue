<script setup>
import imageCardSrc1 from '/images/imagecard-1.webp';
import imageCardSrc2 from '/images/imagecard-2.webp';
import imageCardSrc3 from '/images/imagecard-3.webp';

import ImageCard from '@/components/ImageCard.vue';
</script>

<template>
    <section class="portfolio-section container">
        <div class="portfolio-section__head">
            <p class="portfolio-section__subtitle subtitle">Our Portfolio</p>
            <h2 class="portfolio-section__title title">What do we do</h2>
        </div>
        <div class="portfolio-section__content">
            <div class="portfolio-section__text">
                <p class="portfolio-section__paragraph base-text">
                    all projects that we have already done , proven can help to use more comfortable, then can used by client from our business
                </p>
            </div>
            <ul class="portfolio-section__project-list">
                <li class="portfolio-section__project">
                    <ImageCard text="Design Byte App" :image-src="imageCardSrc3"/>
                </li>
                <li class="portfolio-section__project">
                    <ImageCard text="Cloud App" :image-src="imageCardSrc2"/>
                </li>
                <li class="portfolio-section__project">
                    <ImageCard text="Design Furniture App" :image-src="imageCardSrc1"/>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
    .portfolio-section {
        &__subtitle {
            text-align: center;
            margin-bottom: 10px;
        }

        &__title {
            text-align: center;
            margin-bottom: 34px;
        }

        &__text {
            text-align: center;
            max-width: 674px;
            margin: auto;
        }
        
        &__project-list {
            display: flex;
            flex-wrap: wrap-reverse;
            justify-content: center;
            gap: 54px;
            margin-top: 34px;
        }
    }
</style>