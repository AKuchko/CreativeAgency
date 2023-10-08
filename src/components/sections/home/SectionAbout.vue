<script setup>
import IconPlayCircle from '@/components/icons/IconPlayCircle.vue';
</script>

<template>
    <section class="about-us-section container">
        <div class="about-us-section__haed">
            <p class="about-us-section__subtitle subtitle">About us</p>
            <h2 class="about-us-section__title title">Our Teammate</h2>
        </div>
        <div class="about-us-section__content">
            <div class="about-us-section__flex-block">
                <div class="about-us-section__text">
                    <p class="about-us-section__paragraph base-text">
                        We move with make a Creative Strategy for help your business goal,
                        we help to improve your income by a
                        services we have. make your content look interesting and make people look for your business2</p>
                    <p class="about-us-section__paragraph base-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque
                        tempor at ut auctor maecenas,Lorem ipsum d
                    </p>
                </div>
                <div class="about-us-section__buttons">
                    <BaseButton label="About Us" />
                    <BaseButton variant="outlined">
                        <IconPlayCircle style="margin-right: 10px;" />
                        About us
                    </BaseButton>
                </div>
            </div>
            <div class="about-us-section__flex-block">
                <div class="about-us-section__picture">
                    <picture>
                        <source srcset="">
                        <!-- закончил тут, нужно скачать картинку в разных разрешениях -->
                    </picture>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.about-us-section {
    &__subtitle {
        text-align: center;
    }

    &__title {
        text-align: center;
        margin: 10px 0 35px 0;
    }

    &__text {
        margin-bottom: 35px;

        p:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    &__buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15.5px;
    }
}
</style>