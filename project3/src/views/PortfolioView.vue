<template>
    <section class="section">
        <div class="section__inner">
            <div class="section__contents">
                <span class="section__label">WORKS</span>
                <h3 class="section__title">Portfolio</h3>
                <h4 class="section__subject">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                <div class="portfolio">
                    <ul class="portfolio__list">
                        <li class="portfolio__item">
                            <img src="@/assets/images/img-portfolio1.jpg" class="portfolio__image" alt="" />
                        </li>
                        <li class="portfolio__item">
                            <img src="@/assets/images/img-portfolio2.jpg" class="portfolio__image" alt="" />
                        </li>
                        <li class="portfolio__item">
                            <img src="@/assets/images/img-portfolio3.jpg" class="portfolio__image" alt="" />
                        </li>
                        <li class="portfolio__item">
                            <img src="@/assets/images/img-portfolio4.jpg" class="portfolio__image" alt="" />
                        </li>
                        <li class="portfolio__item">
                            <img src="@/assets/images/img-portfolio5.jpg" class="portfolio__image" alt="" />
                        </li>
                        <li class="portfolio__item">
                            <img src="@/assets/images/img-portfolio6.jpg" class="portfolio__image" alt="" />
                        </li>
                        <li class="portfolio__item">
                            <img src="@/assets/images/img-portfolio7.jpg" class="portfolio__image" alt="" />
                        </li>
                        <li class="portfolio__item">
                            <img src="@/assets/images/img-portfolio8.jpg" class="portfolio__image" alt="" />
                        </li>
                    </ul>
                </div>
                <button type="button" class="section__button">Learn More</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.section {
    margin-top: 3rem;
    &__button {
        margin-top: clamp(2rem, 5.5vw, 4.9rem);
    }
}
.portfolio {
    width: 100%;
    margin-top: clamp(2rem, 5.7vw, 6.7rem);

    &__list {
        @include flex-set($flex-wrap: wrap);
        gap: clamp(2rem, 4.6vw, 5.5rem);
        max-width: 118rem;
        margin: 0 auto;
    }

    &__item {
        flex: 0 0 calc((100% - clamp(2rem, 4.6vw, 5.5rem)) / 2);
        border: 1px solid $color-black;
        border-radius: $radius-base;
        overflow: hidden;
        aspect-ratio: 16 / 9;
    }

    &__image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.05);
        }
    }
}
@include mobile {
    .portfolio {
        margin-top: 3rem;
        &__item {
            flex-basis: 100%;
        }
    }
}
</style>
