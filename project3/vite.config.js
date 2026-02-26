import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    // 깃허브 배포용 경로 설정
    base: '/zyooning/project3/',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 1. 최신 Sass 컴파일러 API 사용 설정 (중요!)
                api: 'modern-compiler',
                // 2. 경로 끝에 세미콜론(;)이 정확히 붙어있는지 확인
                additionalData: `@use "@/assets/scss/index.scss" as *;`
            }
        }
    }
});
