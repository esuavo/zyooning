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
        const buttons = document.querySelectorAll(".tabs__button");
        const contents = document.querySelectorAll(".tabs__contents");

        if (buttons.length === 0) return;

        buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                // 1. 모든 버튼과 컨텐츠에서 활성화 클래스 제거
                buttons.forEach(btn => btn.classList.remove("tabs__button--active"));
                contents.forEach(content => content.classList.remove("tabs__contents--active"));

                // 2. 클릭된 버튼과 해당 순서의 컨텐츠에 클래스 추가
                button.classList.add("tabs__button--active");
                contents[index].classList.add("tabs__contents--active");
            });
        });
    },
    themeHandler: function () {
        const btn = document.getElementById('theme-toggle');
        const html = document.documentElement;

        if (!btn) return;

        const updateBtnText = () => {
            const isDark = html.classList.contains("dark-mode");
            const newText = isDark ? "라이트테마로 변경하기" : "다크테마로 변경하기";

            btn.textContent = newText;
            btn.setAttribute("aria-label", newText);
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
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    ui.init();
    ui.tabActive();
    ui.themeHandler();
    ui.modal();
});