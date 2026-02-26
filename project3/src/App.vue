<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
    <div class="wrap">
        <TheHeader />
        <main :class="['container', $route.name]">
            <RouterView />
        </main>
        <TheFooter />
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    @include flex-set($direction: column);
    min-height: 100vh;
}
.container {
    padding-top: 12.3rem;
    flex: 1;
    width: 100%;
    &.home {
        padding-bottom: 5.4rem;
    }
    &.portfolio {
        padding-bottom: 10rem;
    }
    &.services {
        padding-bottom: 13.5rem;
    }
}
@include tablet {
    .container {
        padding-top: 7rem;
        //padding: 7rem 0 3rem;
        &.home,
        &.portfolio {
            padding-bottom: 4rem;
        }
        &.services {
            padding-bottom: 6.8rem;
        }
    }
}
</style>
