// 欢迎画面关闭控制
document.querySelector('.enter-btn').addEventListener('click', function() {
  const welcomeScreen = document.querySelector('.welcome-screen');
  
  // 触发淡出动画
  welcomeScreen.classList.add('fade-out');
  
  // 动画完成后隐藏
  setTimeout(() => {
    welcomeScreen.style.display = 'none';
    document.querySelector('.main-content').classList.remove('hidden');
  }, 800); // 匹配CSS过渡时间
});

// 狗狗互动效果
const dog = document.querySelector('.dog');
if(dog) {
  // 鼠标悬停暂停动画
  dog.addEventListener('mouseenter', () => {
    dog.style.animationPlayState = 'paused';
    dog.querySelector('.tail').style.animationPlayState = 'paused';
  });
  
  // 鼠标离开恢复动画
  dog.addEventListener('mouseleave', () => {
    dog.style.animationPlayState = 'running';
    dog.querySelector('.tail').style.animationPlayState = 'running';
  });
}
