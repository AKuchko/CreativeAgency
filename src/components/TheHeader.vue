<script setup>
import BaseButton from './common/BaseButton.vue';
import BaseLogo from './common/BaseLogo.vue';
import BurgerButton from './common/BurgerButton.vue';
</script>

<template>
    <header class="header container">
        <BaseLogo />
        <BurgerButton />
        <nav class="header__navigation">
            <ul class="header__menu">
                <li class="header__menu-item">
                    <a href="#">Home</a>
                </li>
                <li class="header__menu-item">
                    <a href="#">About</a>
                </li>
                <li class="header__menu-item">
                    <a href="#">Service</a>
                </li>
                <li class="header__menu-item">
                    <a href="#">Projects</a>
                </li>
            </ul>
        </nav>
        <BaseButton label="Contact Us" />
    </header>
</template>

<style lang="scss">
.header {
    padding-top: 40px;
}
</style>