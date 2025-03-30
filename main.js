// ===== 欢迎页功能 =====
if (document.querySelector('.welcome-screen')) {
    // 狗狗动画悬停控制
    document.querySelector('.dog').addEventListener('mouseenter', () => {
        document.querySelector('.tail').style.animationPlayState = 'paused';
    });
    
    // 按钮跳转转场
    document.querySelector('.enter-btn').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.welcome-screen').classList.add('fade-out');
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 1000);
    });
}

// ===== 主页面功能 =====
if (document.querySelector('#team')) {
    // 成员卡片悬停效果
    document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
    });
    
    // 滚动监听导航高亮
    window.addEventListener('scroll', () => {
        /* ...计算当前可见区域... */
    });
}

// ===== 测验页功能 =====
if (document.getElementById('quiz-container')) {
    // 倒计时器
    let timeLeft = 300;
    const timer = setInterval(() => {
        document.getElementById('time').textContent = --timeLeft;
        if (timeLeft <= 0) clearInterval(timer);
    }, 1000);
    
    // 题目动态加载
    /* ...AJAX或本地数据加载... */
}
