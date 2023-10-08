<script setup>
import { ref } from 'vue';

import BaseButton from './common/BaseButton.vue';
import BaseLogo from './common/BaseLogo.vue';
import BurgerButton from './common/BurgerButton.vue';

const navigation = ref(null)
const burger = ref(null)
const body = document.querySelector('body')

const toggleMenu = () => {
    burger.value.classList.toggle('header__burger--active')
    navigation.value.classList.toggle('header__navigation--open')
    body.classList.toggle('fixed')
}
</script>

<template>
    <header class="header container">
        <BaseLogo class="header__logo" />
        <button ref="burger" class="header__burger" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav ref="navigation" class="header__navigation">
            <ul class="header__menu">
                <li class="header__menu-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="header__menu-item">
                    <router-link to="/about">About</router-link>
                </li>
                <li class="header__menu-item">
                    <router-link to="/services">Service</router-link>
                </li>
                <li class="header__menu-item">
                    <router-link to="/projects">Projects</router-link>
                </li>
                <li class="header__menu-item header__menu-item--contact-btn">
                    <BaseButton label="Contact Us" variant="outlined" />
                </li>
            </ul>
        </nav>
        <BaseButton class="header__contact-btn" label="Contact Us" variant="outlined" />
    </header>
</template>

<style lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    margin-bottom: 69px;

    &__burger {
        position: relative;
        width: 29px;
        height: 25px;

        span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: block;
            height: 1.5px;
            width: 18px;
            background: $-c-black-soft;
            transition: $-e-base-transition;

            @media (prefers-color-scheme: dark) {
                background: $-c-white-soft;
            }

            &:nth-child(1) {
                top: 5px;
            }

            &:nth-child(2) {
                width: 12px;
            }

            &:nth-child(3) {
                top: 19.5px;
            }
        }

        &--active {
            z-index: 55;

            span:nth-child(2) {
                width: 0;
            }

            span:nth-child(1) {
                top: 50%;
                left: 20%;
                transform: rotate(45deg) translateY(-50%);
            }

            span:nth-child(3) {
                top: 50%;
                left: 20%;
                transform: rotate(-45deg) translateY(-50%);
            }
        }
    }

    &__navigation {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100vw;
        height: 100vh;
        z-index: 54;
        transition: $-e-base-transition;

        &::before {
            content: '';
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
        }

        &--open {
            right: 0;
        }
    }

    &__menu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        height: 100%;
        width: 70%;
        padding: 50px 0 0 25px;
        background: $-c-white;
        border-radius: 25px 0 0 25px;
        margin-left: auto;
        box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
    }

    &__contact-btn {
        display: none;
    }
}

@media (min-width: $-s-desktop) {
    .header {
        margin-bottom: 68px;

        &__burger {
            display: none;
        }

        &__navigation {
            position: relative;
            top: auto;
            right: auto;
            height: auto;
            width: auto;
        }

        &__menu {
            flex-direction: row;
            width: auto;
            gap: 50px;
            padding: 0;
            background: transparent;
            box-shadow: none;
        }

        &__menu-item--contact-btn {
            display: none;
        }

        &__contact-btn {
            display: block;
        }
    }
}
</style>