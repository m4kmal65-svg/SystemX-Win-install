document.addEventListener("DOMContentLoaded", () => {
  const menus = document.querySelectorAll(".menu"),
    pages = document.querySelectorAll(".page"),
    title = document.getElementById("page-title");
  menus.forEach((menu) =>
    menu.addEventListener("click", () => {
      const target = menu.dataset.page;
      menus.forEach((x) => x.classList.remove("active"));
      menu.classList.add("active");
      pages.forEach((p) => p.classList.toggle("active", p.id === target));
      if (title) {
        const labels = {
          dashboard: "Dashboard",
          cpu: "CPU Monitor",
          ram: "Memory",
          gpu: "GPU",
          storage: "Storage",
          network: "Network",
        };
        title.textContent = labels[target] || "Dashboard";
      }
    }),
  );
});
