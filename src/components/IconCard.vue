<script setup>
defineProps({
    color: { type: String },
    text: { type: String },
    icon: { type:  Object },
})
</script>

<template>
    <div class="card">
        <div class="card__content">
            <div class="card__icon" :style="{background: color}">
                <component :is="icon"></component>
            </div>
            <p class="card__text">{{ text }}</p>
        </div>
    </div>
</template>

<style lang="scss">
    .card {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 262px;
        height: 269px;
        padding: 0 70px 0 70px;
        border-radius: 30px;
        border: 1px solid rgba($-c-black, 0.10);
        background: transparent;
        transition: $-e-base-transition;

        @media (prefers-color-scheme: dark) {
            border: 1px solid rgba($-c-white, 0.10);
        }

        &:hover {
            box-shadow: 4px 4px 30px 0px rgba($-c-black, 0.10);

            @media (prefers-color-scheme: dark) {
                background: #0b0f15;
            }
        }

        &__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            margin: 0 auto 27px;
            border-radius: 50%;
            color: $-c-white;

            @media (prefers-color-scheme: dark) {
                color: $-c-black;
            }
        }

        &__text {
            font-family: 'Quicksand';
            font-size: 16px;
            font-weight: 700;
            text-align: center;
            line-height: 24px;
            letter-spacing: 0.16px;
        }
    }
</style>