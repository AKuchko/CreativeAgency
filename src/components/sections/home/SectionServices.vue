<script setup>
import ServiceCard from '@/components/IconCard.vue';
import IconGear from '@/components/icons/IconGear.vue';
import IconMonitor from '@/components/icons/IconMonitor.vue';
import IconPen from '@/components/icons/IconPen.vue';
import IconTv from '@/components/icons/IconTv.vue';
</script>

<template>
    <section class="home__section services-section container">
        <div class="services-section__flex-block">
            <div class="services-section__head">
                <p class="services-section__subtitle subtitle">Our Services</p>
                <h2 class="services-section__title title">Perfect and Fast Movement</h2>
            </div>
            <div class="services-section__content">
                <p class="services-section__paragraph base-text">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
                <a href="#" class="services-section__link base-text">
                    Read more
                    <IconArrowRight />
                </a>
            </div>
        </div>
        <div class="services-section__flex-block">
            <ul class="services-section__service-list">
                <li class="services-section__service">
                    <ServiceCard text="Social Media Management" :icon="IconMonitor" color="#377DFF" />
                </li>
                <li class="services-section__service">
                    <ServiceCard text="Search Engine Opimization" :icon="IconGear" color="#377DFF" />
                </li>
                <li class="services-section__service">
                    <ServiceCard text="Desing" :icon="IconPen" color="#377DFF"/>
                </li>
                <li class="services-section__service">
                    <ServiceCard text="Ads" :icon="IconTv" color="#377DFF"/>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
.services-section {
    &__subtitle {
        text-align: center;
    }

    &__title {
        text-align: center;
        margin: 10px 0 35px 0;
    }

    &__paragraph {
        text-align: center;
    }

    &__link {
        display: flex;
        align-items: center;
        gap: 10px;
        color: $-c-primary;
        font-weight: 700;
        line-height: normal;
        margin-top: 4px;

        @media(prefers-color-scheme: dark) {
            color: $-c-white-soft;
        }
    }

    &__service-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 35px;
        margin-top: 23px;
    }
}
</style>