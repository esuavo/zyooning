var ui = {
    init: function () {
        let resizeTimer;
        window.addEventListener('resize', () => {
            // 1. 리사이즈 시작하자마자 애니메이션 속도를 0으로 강제 고정
            document.documentElement.style.setProperty('--trans-speed', '0s');

            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // 2. 리사이즈 멈추고 0.1초 뒤에 다시 0.3s로 복구
                document.documentElement.style.removeProperty('--trans-speed');
            }, 100);
        });
    },
    tabActive: function () {
        const buttons = document.querySelectorAll('.tabs__button');
        const contents = document.querySelectorAll('.tabs__contents');

        if (buttons.length === 0) return;

        contents.forEach((content, idx) => {
            if (idx === 0) {
                // 첫 번째 탭 콘텐츠
                content.classList.add('tabs__contents--active');
                content.setAttribute('aria-hidden', 'false');
            } else {
                // 나머지 탭 콘텐츠들
                content.classList.remove('tabs__contents--active');
                content.setAttribute('aria-hidden', 'true');
            }
        });

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // 1. 모든 버튼과 컨텐츠에서 상태 제거
                buttons.forEach((btn) => {
                    btn.classList.remove('tabs__button--active');
                    btn.setAttribute('aria-selected', 'false');
                });
                contents.forEach((content) => {
                    content.classList.remove('tabs__contents--active');
                    content.setAttribute('aria-hidden', 'true');
                });

                // 2. 선택된 요소 활성화
                button.classList.add('tabs__button--active');
                button.setAttribute('aria-selected', 'true');
                contents[index].classList.add('tabs__contents--active');
                contents[index].setAttribute('aria-hidden', 'false');
            });
        });
    },
    themeHandler: function () {
        const btn = document.getElementById('theme-toggle');
        const html = document.documentElement;

        if (!btn) return;

        const updateBtnText = () => {
            const isDark = html.classList.contains('dark-mode');
            const newText = isDark ? '라이트테마로 변경하기' : '다크테마로 변경하기';

            btn.textContent = newText;
            btn.setAttribute('aria-label', newText);
        };

        // 초기 설정
        function applyInitialTheme() {
            const isDarkMode = localStorage.getItem('darkMode') === 'true';
            html.classList.toggle('dark-mode', isDarkMode);
            updateBtnText();
        }

        // 토글 함수
        function toggleDarkMode() {
            const isDarkMode = html.classList.toggle('dark-mode');
            btn.classList.add('is-animated');
            localStorage.setItem('darkMode', isDarkMode);
            updateBtnText();
            setTimeout(() => {
                btn.classList.remove('is-animated');
            }, 300);
        }

        applyInitialTheme();
        btn.addEventListener('click', toggleDarkMode);
    },
    modal: function () {
        const modal = document.querySelector('.modal');
        const openBtn = document.querySelector('.modal__open');
        if (!modal || !openBtn) return;

        // 1. 내부 전용 열기 함수 (이 스코프 안에서만 유효)
        const openModal = () => {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

            document.body.classList.add('body--locked');
            modal.classList.add('modal--active');
        };

        // 2. 내부 전용 닫기 함수
        const closeModal = () => {
            modal.classList.remove('modal--active');

            setTimeout(() => {
                document.body.classList.remove('body--locked');
                document.documentElement.style.removeProperty('--scrollbar-width');
            }, 300); // CSS transition 시간에 맞춰 조절
        };

        // --- 실행부 ---

        // 열기 버튼 클릭
        openBtn.addEventListener('click', openModal);

        // 닫기 (배경 및 닫기 버튼 클릭)
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__wrapper') || e.target.classList.contains('modal__close')) {
                closeModal();
            }
        });
    },
    counter: function (el) {
        const fullText = el.innerText;
        const target = parseInt(fullText.replace(/[^0-9]/g, ''));
        const hasPlus = fullText.includes('+');

        // 일정한 속도를 원하시면 1500ms(1.5초) 정도가 적당합니다.
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // 핵심: 이징 공식(Math.pow 등)을 제거하고 'progress'만 사용
            const currentCount = Math.floor(progress * target);

            el.innerText = currentCount + (hasPlus ? '+' : '');

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // 끝까지 도달했을 때 확실하게 값 고정
                el.innerText = target + (hasPlus ? '+' : '');
            }
        };

        requestAnimationFrame(animate);
    },

    init: function () {
        const targets = document.querySelectorAll('.facts__num');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.counter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 },
        );

        targets.forEach((el) => observer.observe(el));
    },
};

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    ui.init();
    ui.tabActive();
    ui.themeHandler();
    ui.modal();
    ui.counter();
});
