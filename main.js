// 欢迎画面关闭控制
document.querySelector('.enter-btn').addEventListener('click', function() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    
    // 淡出动画
    welcomeScreen.style.opacity = '0';
    
    // 动画完成后显示主内容
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        document.querySelector('.main-content').classList.remove('hidden');
    }, 1000);
});
