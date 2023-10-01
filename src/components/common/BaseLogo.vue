<script setup>
import IconLogo from '../icons/IconLogo.vue';
</script>

<template>
    <a href="#" class="base-logo">
        <IconLogo class="base-logo__icon" />
        <div class="base-logo__name">
            <p><span>Agency</span></p>
            <p>Creative</p>
        </div>
    </a>
</template>

<style lang="scss" scoped>
.base-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    
    svg {
        width: 32px;
        height: 30px;
    }

    &__name {
        display: flex;
        flex-direction: column;
        align-items: start;
        font-size: 12px;

        span {
            font-weight: 700;
            font-size: 14px;
        }
    }

    @media (min-width: $-s-desktop) {
        svg {
            width: 54px;
            height: 50px;
        }

        &__name {
            font-size: 14px;
    
            span {
                font-weight: 700;
                font-size: 16px;
            }
        }
    
    }
}
</style>