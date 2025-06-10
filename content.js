// content.js
(function() {
  // 只在洛谷CF题目页面生效
  const match = window.location.pathname.match(/^\/problem\/CF(\d+)([A-Z])$/i);
  if (!match) return;
  const cfNum = match[1];
  const cfIndex = match[2].toUpperCase();
  const cfUrl = `https://codeforces.com/problemset/problem/${cfNum}/${cfIndex}`;

  // 创建跳转按钮
  const btn = document.createElement('button');
  btn.textContent = '跳转到 Codeforces 原题';
  btn.style.position = 'fixed';
  btn.style.top = '80px';
  btn.style.right = '40px';
  btn.style.zIndex = 9999;
  btn.style.background = '#f44336';
  btn.style.color = '#fff';
  btn.style.border = 'none';
  btn.style.padding = '10px 18px';
  btn.style.borderRadius = '6px';
  btn.style.cursor = 'pointer';
  btn.onclick = () => window.open(cfUrl, '_blank');

  document.body.appendChild(btn);
})();
