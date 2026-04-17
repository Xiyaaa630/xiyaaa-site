const trunk = document.querySelector("#trunk");
const leaves = document.querySelectorAll(".leaf");
const tree = document.querySelector("#treeSVG");

// 初始化树干
const length = trunk.getTotalLength();
trunk.style.strokeDasharray = length;
trunk.style.strokeDashoffset = length;

// 时间轴（≈2秒）
const tl = gsap.timeline();

// 🌱 整体出现（从无到有 + 小）
tl.to(tree, {
  opacity: 1,
  scale: 0.6,
  duration: 0.3,
  ease: "power1.out"
});

// 🌿 树干生长
tl.to(trunk, {
  strokeDashoffset: 0,
  duration: 0.7,
  ease: "power2.out"
});

// 🍃 叶子长出
tl.to(leaves, {
  attr: { r: 35 },
  duration: 0.6,
  stagger: 0.06,
  ease: "back.out(1.6)"
}, "-=0.3");

// 🌳 整体“长大”（关键！）
tl.to(tree, {
  scale: 1.6,   // 👉 长到画面1/3
  duration: 0.6,
  ease: "power2.out"
}, "-=0.4");

// 🌬 微呼吸
tl.to(tree, {
  scale: 1.65,
  duration: 0.3,
  yoyo: true,
  repeat: 1,
  ease: "sine.inOut"
});

// 🚪 淡出
tl.to("#intro", {
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  onComplete: () => {
    document.body.classList.add("loaded");
  }
});
