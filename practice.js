const scrollReveal = ScrollReveal({
  distance: "90px",
  duration: 2500,
});

scrollReveal.reveal(".img-box", { origin: "left", delay: 250 });
scrollReveal.reveal(".text-box", { origin: "right", delay: 250 });
scrollReveal.reveal(".nav-bar", { origin: "bottom", delay: 250 });
