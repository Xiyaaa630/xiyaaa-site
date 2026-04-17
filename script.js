const trunk = document.querySelector("#trunk");
const leaves = document.querySelectorAll(".leaf");

// 初始化树干“生长”
const length = trunk.getTotalLength();
trunk.style.strokeDasharray = length;
trunk.style.strokeDashoffset = length;

// 时间轴（≈2秒）
const tl = gsap.timeline();

// 🌱 树干长出来
tl.to(trunk, {
  strokeDashoffset: 0,
  duration: 0.9,
  ease: "power2.out"
});

// 🌿 叶子“长出来”
tl.to(leaves, {
  attr: { r: 35 },
  duration: 0.8,
  stagger: 0.08,
  ease: "back.out(1.7)"
}, "-=0.4");

// 🌸 微呼吸（梦幻感关键）
tl.to("#intro svg", {
  scale: 1.04,
  duration: 0.6,
  yoyo: true,
  repeat: 1,
  ease: "sine.inOut"
});

// 🌬 轻微漂浮
tl.to("#leaves", {
  y: -4,
  duration: 1,
  yoyo: true,
  repeat: 1,
  ease: "sine.inOut"
}, "-=0.6");

// 🚪 淡出进入主页
tl.to("#intro", {
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  onComplete: () => {
    document.body.classList.add("loaded");
  }
});
