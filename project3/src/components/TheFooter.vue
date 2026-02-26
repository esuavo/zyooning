<template>
    <footer class="footer">
        <div class="footer__wrap">
            <ul class="footer__list">
                <li class="footer__item">
                    <a href="#" @click.prevent><img src="@/assets/images/icon-facebook.svg" alt="facebook" /></a>
                </li>
                <li class="footer__item">
                    <a href="#" @click.prevent><img src="@/assets/images/icon-instagram.svg" alt="instagram" /></a>
                </li>
                <li class="footer__item">
                    <a href="#" @click.prevent><img src="@/assets/images/icon-twitter.svg" alt="twitter" /></a>
                </li>
                <li class="footer__item">
                    <a href="#" @click.prevent><img src="@/assets/images/icon-pinterest.svg" alt="pinterest" /></a>
                </li>
                <li class="footer__item">
                    <a href="#" @click.prevent><img src="@/assets/images/icon-tiktok.svg" alt="tiktok" /></a>
                </li>
                <li class="footer__item">
                    <a href="#" @click.prevent><img src="@/assets/images/icon-whatsapp.svg" alt="whatsapp" /></a>
                </li>
                <li class="footer__item">
                    <a href="#" @click.prevent><img src="@/assets/images/icon-youtube.svg" alt="youtube" /></a>
                </li>
            </ul>
            <p class="footer__copyright">&copy; Start, 2022. All rights reserved</p>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
    background-color: $color-green;
    width: 100%;
    height: 12.5rem;
    @include flex-set;
    &__wrap {
        @include inner-layout;
        @include tablet {
            @include flex-set($direction: column);
            gap: 2rem;
        }
    }
    &__list {
        @include flex-set;
        gap: 2rem;
    }
    &__copyright {
        @include font-set($size: 2rem, $color: $color-white);
    }
}
</style>
