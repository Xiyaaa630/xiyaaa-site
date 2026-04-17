const trunk = document.querySelector("#trunk");
const branches = document.querySelectorAll(".branch");
const crown = document.querySelector("#crown");

function setupPath(path) {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
}

setupPath(trunk);
branches.forEach(setupPath);

const tl = gsap.timeline();

tl.to(trunk, {
  strokeDashoffset: 0,
  duration: 0.8,
  ease: "power2.out"
});

tl.to(branches, {
  strokeDashoffset: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: "power2.out"
}, "-=0.4");

tl.to(crown, {
  opacity: 0.6,
  scale: 1.05,
  transformOrigin: "center",
  duration: 0.5,
  ease: "power1.out"
}, "-=0.3");

tl.to("#intro", {
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  onComplete: () => {
    document.body.classList.add("loaded");
  }
});
