const branches = [
  { name: "CSE", img: "Untitled design (9).png", desc: "Computer Science Engineering Question Papers", link: "cse.html" },
  { name: "ECE", img: "Untitled design (10).png", desc: "Electronics & Communication Engineering Papers", link: "ece.html" },
  { name: "EEE", img: "Untitled design (11).png", desc: "Electrical & Electronics Engineering Papers", link: "eee.html" },
  { name: "MECH", img: "Untitled design (12).png", desc: "Mechanical Engineering Papers", link: "mech.html" }
];

function createSections(containerId, data, isDiploma = false) {
  const container = document.getElementById(containerId);
  data.forEach(branch => {
    const div = document.createElement("div");
    div.classList.add("section");
    const link = document.createElement("a");
    link.href = isDiploma ? branch.link.replace(".html", "_diploma.html") : branch.link;
    link.innerHTML = `
      <img src="${branch.img}" alt="${branch.name}">
      <h3>${branch.name}</h3>
      <p>${branch.desc}</p>
    `;
    div.appendChild(link);
    container.appendChild(div);
  });
}

createSections("ecet-sections", branches, false);
createSections("diploma-sections", branches, true);
