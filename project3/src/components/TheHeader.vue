<template>
    <header class="header" :class="{ 'header--active': isMenuOpen }">
        <transition name="fade">
            <div v-if="isMenuOpen" class="dimmed" @click="isMenuOpen = false"></div>
        </transition>
        <div class="header__wrap">
            <h1 class="logo">
                <RouterLink to="/" class="logo__link">Start</RouterLink>
            </h1>
            <nav class="gnb">
                <ul class="gnb__list">
                    <li class="gnb__item"><RouterLink to="/">Home</RouterLink></li>
                    <li class="gnb__item"><RouterLink to="/Portfolio">Portfolio</RouterLink></li>
                    <li class="gnb__item"><RouterLink to="/Services">Services</RouterLink></li>
                </ul>
            </nav>
            <button class="button-navigation" :class="{ 'button-navigation--close': isMenuOpen }" @click="isMenuOpen = !isMenuOpen">
                <span>메뉴</span>
            </button>
        </div>
    </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

/* 상태 */
const isMenuOpen = ref(false);
const route = useRoute();
const MOBILE_WIDTH = 1024;

/* body lock */
const lockBody = () => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
};

const unlockBody = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
};

/* 메뉴 상태 감시 */
watch(isMenuOpen, (val) => {
    return val ? lockBody() : unlockBody();
});

/* 라우트 이동 시 자동 닫기 */
watch(
    () => route.fullPath,
    () => {
        isMenuOpen.value = false;
    }
);

/* 브레이크포인트 넘어가면 강제 종료 */
const mq = window.matchMedia(`(min-width: ${MOBILE_WIDTH}px)`);

const handleMQ = (e) => {
    if (e.matches) {
        isMenuOpen.value = false;
        unlockBody();
    }
};

/* ESC 누르면 닫기 */
const handleEsc = (e) => {
    if (e.key === 'Escape') {
        isMenuOpen.value = false;
    }
};

/* 라이프사이클 */
onMounted(() => {
    mq.addEventListener('change', handleMQ);
    window.addEventListener('keydown', handleEsc);
});

onUnmounted(() => {
    mq.removeEventListener('change', handleMQ);
    window.removeEventListener('keydown', handleEsc);
    unlockBody();
});
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $color-green;
    height: 12.3rem;
    @include flex-set;
    &__wrap {
        color: $color-white;
        @include inner-layout;
    }
    .logo {
        @include font-set($size: 4rem, $m-size: 3rem, $weight: 500, $color: $color-white, $opacity: 1);
        &__link {
            display: block;
            background: url(@/assets/images/logo.svg) no-repeat 0 50% / 7rem auto;
            padding-left: 8.8rem;
        }
    }
    .gnb {
        &__list {
            display: flex;
            gap: 3rem;
        }
        &__item {
            font-size: 2rem;
        }
    }
    .button-navigation {
        display: none;
    }
}

@include tablet {
    .header {
        height: 7rem;
        .logo {
            &__link {
                background-size: 4.5rem auto;
                padding-left: 5.5rem;
            }
        }
        .gnb {
            position: fixed;
            top: 0;
            right: -60%;
            width: 60%;
            height: 100vh;
            background-color: $color-green;
            transition:
                transform 0.5s ease,
                visibility 0.5s;
            transform: translate3d(0, 0, 0);
            &__list {
                @include flex-set($align: flex-start, $direction: column);
                padding: 7rem 2rem;
            }
        }
        .button-navigation {
            display: block;
            position: relative;
            width: 3.5rem;
            height: 3.5rem;
            span {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 2.4rem;
                height: 0.2rem;
                background-color: $color-white;
                transform: translate(-50%, -50%);
                border-radius: 4px;
                transition: all 0.5s;
                &:before,
                &:after {
                    content: '';
                    width: 100%;
                    height: 0.2rem;
                    position: absolute;
                    left: 0;
                    background-color: $color-white;
                    border-radius: 4px;
                    transition: all 0.5s;
                }
                &:before {
                    top: -0.8rem;
                }
                &:after {
                    top: 0.8rem;
                }
            }
            &--close {
                span {
                    background-color: transparent;
                    &:before {
                        top: 0;
                        transform: rotate(45deg);
                    }
                    &:after {
                        top: 0;
                        transform: rotate(-45deg);
                    }
                }
            }
        }
        &--active {
            .gnb {
                transform: translate3d(-100%, 0, 0);
            }
        }
    }

    .dimmed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); // 50% 불투명도
        //z-index: 1; // 사이드바보다는 낮고 메인 콘텐츠보다는 높게
        cursor: pointer;
    }

    // Vue Transition (Fade 효과)
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
}
</style>
