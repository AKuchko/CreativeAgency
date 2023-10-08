<template>
    <button class="burger-button">
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>

<style lang="scss">
    .burger-button {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 29px;
        height: 25px;

        span {
            display: block;
            margin: 0 auto 5.5px auto;
            height: 1.5px;
            width: 18px;
            background: $-c-black-soft;

            @media (prefers-color-scheme: dark) {
                background: $-c-white-soft;
            }

            &:nth-child(2) {
                width: 12px;
            }
        }
    }
</style>