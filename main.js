// 增强版交互功能
document.addEventListener('DOMContentLoaded', () => {
    // 欢迎画面控制
    const enterBtn = document.querySelector('.enter-btn');
    enterBtn.addEventListener('click', () => {
        document.querySelector('.welcome-screen').classList.add('fade-out');
        setTimeout(() => {
            document.querySelector('.main-content').classList.remove('hidden');
            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800);
    });

    // 导航栏滚动平滑
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            if(!link.href.includes('#')) return;
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});
