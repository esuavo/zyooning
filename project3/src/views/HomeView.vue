<template>
    <section class="section section--visual">
        <div class="section__inner">
            <div class="section__contents">
                <span class="section__label">WELCOME</span>
                <h3 class="section__title">Lorem ipsum dolor sit amet consectetur</h3>
                <p class="section__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
                    voluptate culpa nesciunt delectus iste?
                </p>
                <button type="button" class="section__button">Explore</button>
            </div>
            <div class="section__image">
                <img src="@/assets/images/hero_visual.svg" alt="협업과 소통을 상징하는 팀원들 일러스트" />
            </div>
        </div>
    </section>
    <section class="section section--feature-01">
        <div class="section__inner">
            <div class="section__contents">
                <span class="section__label">PARTNERS</span>
                <h3 class="section__title">Lorem Ipsum Dolor</h3>
                <h4 class="section__subject">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                <div class="partners">
                    <ul class="partners__list">
                        <li class="partners__item"><img src="@/assets/images/logo-google.svg" alt="Google" /></li>
                        <li class="partners__item"><img src="@/assets/images/logo-microsoft.svg" alt="Microsoft" /></li>
                        <li class="partners__item"><img src="@/assets/images/logo-airbnb.svg" alt="airbnb" /></li>
                        <li class="partners__item"><img src="@/assets/images/logo-facebook.svg" alt="facebook" /></li>
                        <li class="partners__item"><img src="@/assets/images/logo-spotify.svg" alt="Spotify" /></li>
                    </ul>
                </div>
                <button type="button" class="section__button">Learn More</button>
            </div>
        </div>
    </section>
    <section class="section section--feature-02">
        <div class="section__inner">
            <div class="section__image">
                <img src="@/assets/images/section_visual1.svg" alt="보안 시스템과 클라우드 서비스를 이용해 업무를 처리하는 사용자 일러스트" />
            </div>
            <div class="section__contents">
                <h3 class="section__title">Lorem ipsum dolor sit amet consectetur</h3>
                <p class="section__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
                    voluptate culpa nesciunt delectus iste?
                </p>
                <button type="button" class="section__button">Learn More</button>
            </div>
        </div>
    </section>
    <section class="section section--feature-03">
        <div class="section__inner">
            <div class="section__contents">
                <h3 class="section__title">Lorem ipsum dolor sit amet consectetur</h3>
                <p class="section__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
                    voluptate culpa nesciunt delectus iste?
                </p>
                <button type="button" class="section__button">Learn More</button>
            </div>
            <div class="section__image">
                <img src="@/assets/images/section_visual2.svg" alt="개인 데이터 보안 및 스마트 워킹 컨셉 일러스트" />
            </div>
        </div>
    </section>
    <section class="section section--feature-04">
        <div class="section__inner">
            <div class="section__contents">
                <span class="section__label">TEAM</span>
                <h3 class="section__title">Our Talents</h3>
                <h4 class="section__subject">Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,</h4>
                <div class="team">
                    <ul class="team__list">
                        <li class="team__item">
                            <article class="team__card">
                                <div class="team__avatar">
                                    <img src="@/assets/images/img-peglegge.svg" class="team__image" alt="peglegge (CEO)" />
                                </div>
                                <strong class="team__name">Peg Legge</strong>
                                <span class="team__role">CEO</span>
                            </article>
                        </li>
                        <li class="team__item">
                            <article class="team__card">
                                <div class="team__avatar">
                                    <img src="@/assets/images/img-richardguerra.svg" class="team__image" alt="richardguerra (CTO)" />
                                </div>
                                <strong class="team__name">Richard Guerra</strong>
                                <span class="team__role">CTO</span>
                            </article>
                        </li>
                        <li class="team__item">
                            <article class="team__card">
                                <div class="team__avatar">
                                    <img src="@/assets/images/img-alexandrastolz.svg" class="team__image" alt="alexandrastolz (DESIGNER)" />
                                </div>
                                <strong class="team__name">Alexandra Stolz</strong>
                                <span class="team__role">DESIGNER</span>
                            </article>
                        </li>
                        <li class="team__item">
                            <article class="team__card">
                                <div class="team__avatar">
                                    <img src="@/assets/images/img-janetbray.svg" class="team__image" alt="janetbray (DEVELOPER)" />
                                </div>
                                <strong class="team__name">Janet Bray</strong>
                                <span class="team__role">DEVELOPER</span>
                            </article>
                        </li>
                    </ul>
                </div>
                <button type="button" class="section__button">View Team</button>
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
    &__button {
        margin-top: 1rem;
    }
    &--visual {
        background-color: $color-green;
        padding-bottom: clamp(4rem, 6.78vw, 8rem);
        .section__contents {
            max-width: 41.6rem;
            align-items: flex-start;
            text-align: left;
        }
        .section__label {
            color: $color-white;
        }
        .section__title {
            @include font-set($m-size: 2.8rem, $color: $color-white);
        }
        .section__description {
            color: rgba($color-white, 0.75);
        }
        .section__button {
            color: $color-black;
            background-color: $color-white;
        }
    }
    &--feature-01 {
        margin-top: 6rem;
    }
    &--feature-02,
    &--feature-03 {
        margin-top: 7.3rem;
        .section__inner {
            gap: 11rem;
        }
        .section__contents {
            max-width: 47rem;
            align-items: flex-start;
            text-align: left;
        }
    }
    &--feature-04 {
        margin-top: 10rem;

        .section__button {
            margin-top: 3rem;
        }
    }
}
.partners {
    padding: 4rem 0 3rem;
    &__list {
        @include flex-set;
        gap: 6.8rem;
    }
}
.team {
    margin-top: 3rem;
    &__list {
        display: grid;
        width: 100%;
        max-width: 118rem;
        margin: 0 auto;
        grid-template-columns: repeat(4, 1fr);
        gap: 4.7rem;
        @media screen and (min-width: 1045px) and (max-width: 1080px) {
            gap: 3.5rem;
        }
        @media (max-width: 1044px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 3.5rem;
        }
        @media (max-width: 530px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
    &__card {
        @include card-box;
        padding: 2rem 2.5rem;
        text-align: left;
    }
    &__avatar {
        width: 17.5rem;
        height: 17.5rem;
        box-shadow: inset 0 0 0 1px $color-black;
        border-radius: $radius-round;
        padding-top: 1.5rem;
        overflow: hidden;
        margin: 0 auto 1.9rem;
    }
    &__image {
        width: 100%;
        height: 100%;
    }
    &__name {
        display: block;
        margin-bottom: 1.7rem;
        @include font-set($size: 2.4rem, $is-crimson: true);
    }
    &__role {
        @include font-set($size: 1.5rem, $opacity: 0.75);
    }
}

@include tablet {
    .section {
        &--visual {
            padding-top: 1.7rem;
            .section__contents {
                max-width: 100%;
            }
        }
        &--feature-01 {
            margin-top: 2.2rem;
        }
        &--feature-02 {
            .section__inner {
                @include flex-set($direction: column);
            }
        }
        &--feature-02,
        &--feature-03 {
            margin-top: 6rem;
            .section__inner {
                gap: 3rem;
            }
            .section__contents {
                max-width: 100%;
            }
        }
        &--feature-04 {
            margin-top: 4rem;
        }
    }
    .partners {
        &__list {
            @include flex-set($direction: column);
            gap: 4rem;
        }
        &__item {
            img {
                height: 3.5rem;
            }
        }
    }
}
</style>
