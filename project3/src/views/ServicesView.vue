<template>
    <section class="section">
        <div class="section__inner">
            <div class="section__contents">
                <span class="section__label">PLANS</span>
                <h3 class="section__title">Our Services</h3>
                <h4 class="section__subject">Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,</h4>
                <article class="plans">
                    <ul class="plans__list">
                        <li class="plans__item">
                            <div class="plans__card">
                                <h5 class="plans__title">Basic</h5>
                                <div class="plans__price">
                                    <strong class="plans__amount">$100</strong>
                                    <span class="plans__period">/month</span>
                                </div>
                                <p class="plans__description">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam
                                </p>
                                <ul class="plans__features">
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                </ul>
                                <button type="button" class="section__button plans__button">Learn More</button>
                            </div>
                        </li>
                        <li class="plans__item">
                            <div class="plans__card">
                                <h5 class="plans__title">Plus</h5>
                                <div class="plans__price">
                                    <strong class="plans__amount">$250</strong>
                                    <span class="plans__period">/month</span>
                                </div>
                                <p class="plans__description">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam
                                </p>
                                <ul class="plans__features">
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                </ul>
                                <button type="button" class="section__button plans__button">Learn More</button>
                            </div>
                        </li>
                        <li class="plans__item">
                            <div class="plans__card">
                                <h5 class="plans__title">Pro</h5>
                                <div class="plans__price">
                                    <strong class="plans__amount">$400</strong>
                                    <span class="plans__period">/month</span>
                                </div>
                                <p class="plans__description">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam
                                </p>
                                <ul class="plans__features">
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                    <li class="plans__feature-item">
                                        <span class="plans__feature-text">Lorem ipsum, dolor sit</span>
                                    </li>
                                </ul>
                                <button type="button" class="section__button plans__button">Learn More</button>
                            </div>
                        </li>
                    </ul>
                </article>
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
}
.plans {
    width: 100%;
    margin-top: clamp(4rem, 6.6vw, 7.8rem);

    &__list {
        @include flex-set;
        max-width: 118rem;
        margin: 0 auto;
        gap: clamp(3.5rem, 6.9vw, 8.15rem);
    }

    &__item {
        flex-shrink: 1;
        width: 100%;
        max-width: 33.9rem;
        min-width: 0;
    }

    &__card {
        @include card-box;
        padding: clamp(3rem, 3.9vw, 4.6rem) clamp(2rem, 2.5vw, 3rem);
    }

    &__title {
        @include font-set($size: clamp(1.3rem, 1.2vw, 1.5rem));
    }

    &__amount {
        @include font-set($size: clamp(2.8rem, 3.4vw, 4rem), $weight: 700);
    }

    &__period,
    &__description {
        @include font-set($size: clamp(1.2rem, 1.2vw, 1.5rem), $opacity: 0.5);
        word-break: keep-all;
    }

    &__description {
        margin-top: clamp(0.8rem, 0.85vw, 1rem);
    }

    &__features {
        margin-top: clamp(2.5rem, 4vw, 5rem);
    }

    &__feature-item {
        margin-top: clamp(0.8rem, 0.85vw, 1rem);
        &:first-child {
            margin-top: 0;
        }
    }

    &__feature-text {
        @include font-set($size: clamp(1.3rem, 1.2vw, 1.5rem));
        @include flex-set($justify: flex-start, $align: flex-start, $text-align: left);

        &:before {
            content: '';
            flex-shrink: 0;
            width: 1.8rem;
            height: 1.4rem;
            background: url(@/assets/images/icon-check.svg) no-repeat 0 0 / contain;
            margin: 0.3rem 1.5rem 0 0;
        }
    }

    &__button {
        // 버튼이 박스 밖으로 나가지 않게 비율 조정
        width: clamp(14rem, 14.4vw, 17rem);
        height: clamp(4rem, 4vw, 4.8rem);
        font-size: clamp(1.6rem, 1.7vw, 2rem);
        margin: clamp(3rem, 3.8vw, 4.5rem) auto 0;
    }
}

@include mobile {
    .plans {
        &__list {
            //gap: 5rem;
            @include flex-set($direction: column);
        }
        &__item {
            // max-width: 33.9rem;
            // width: 100%;
        }
    }
}
@include mobile {
}
</style>
