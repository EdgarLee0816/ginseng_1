document.addEventListener("DOMContentLoaded", () => {
    const smoothScroll = document.getElementById("smoothScroll");
    const buttons = [...document.querySelectorAll('#position button')];
    const sections = [...document.querySelectorAll("#smoothScroll section")];

    let currentIndex = 0;
    let isScrolling = false;
    let touchStartY = 0;

    // 공통 함수: 섹션 및 버튼 상태 업데이트
    const updateActiveState = (index) => {
        buttons.forEach((btn, i) => btn.classList.toggle('active', i === index));
        sections[index].scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // 공통 함수: 스크롤 동작 처리
    const handleScroll = (delta) => {
        if (isScrolling) return;

        isScrolling = true;
        setTimeout(() => isScrolling = false, 1000);

        currentIndex = Math.min(Math.max(currentIndex + delta, 0), buttons.length - 1);
        updateActiveState(currentIndex);
    };

    // 휠 이벤트 처리
    smoothScroll.addEventListener('wheel', (e) => {
        e.preventDefault();
        handleScroll(Math.sign(e.deltaY));
    });

    // 터치 이벤트 처리
    smoothScroll.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
    });

    smoothScroll.addEventListener("touchend", (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const delta = touchStartY - touchEndY;

        if (Math.abs(delta) > 30) { // 터치 움직임의 임계값
            handleScroll(delta > 0 ? 1 : -1);
        }
    });

    // 버튼 클릭 이벤트 처리
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            currentIndex = index;
            updateActiveState(currentIndex);
        });
    });
});
