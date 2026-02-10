var ui = {
    tabActive: function () {
        const buttons = document.querySelectorAll(".tabs__button");
        const contents = document.querySelectorAll(".tabs__contents");

        if (buttons.length === 0) return;

        buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                const changeTab = () => {
                    buttons.forEach(btn => btn.classList.remove("tabs__button--active"));
                    contents.forEach(content => content.classList.remove("tabs__contents--active"));

                    button.classList.add("tabs__button--active");
                    contents[index].classList.add("tabs__contents--active");
                };

                if (!document.startViewTransition) {
                    changeTab();
                    return;
                }

                document.startViewTransition(() => {
                    changeTab();
                });
            });
        });
    },

    themeHandler: function () {
        const btn = document.querySelector(".theme-toggle");
        const body = document.body;
        if (!btn) return;

        // --- [1] 다크모드 초기 설정 (새로고침 시 유지) ---
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            body.classList.add("dark-mode");
        }

        // --- [2] 다크모드 토글 (startViewTransition 적용) ---
        btn.addEventListener("click", () => {
            // 내부 로직: 클래스 바꾸고 로컬스토리지 저장
            const toggleAndSave = () => {
                body.classList.toggle("dark-mode");
                const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
                localStorage.setItem("theme", currentTheme);
            };

            // 브라우저가 최신 페이드 효과(View Transitions)를 지원하지 않는 경우
            if (!document.startViewTransition) {
                toggleAndSave();
                return;
            }

            // 지원하는 경우 부드러운 화면 전환 실행
            document.startViewTransition(() => {
                toggleAndSave();
            });
        });

        // --- [3] 스크롤 시 버튼 위치 제어 ---
        let isFixed = false;
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;

            if (scrollY > 50 && !isFixed) {
                btn.classList.add("theme-toggle--fixed");
                isFixed = true;
            } else if (scrollY <= 50 && isFixed) {
                btn.classList.remove("theme-toggle--fixed");
                isFixed = false;
            }
        });
    }
}




document.addEventListener("DOMContentLoaded", () => {
    ui.tabActive();
    ui.themeHandler();
});