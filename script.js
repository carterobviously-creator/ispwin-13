const desktop = document.getElementById("desktop");

function toggleStart() {
  document.getElementById("startMenu").classList.toggle("hidden");
}

function openApp(name) {
  const win = document.createElement("div");
  win.className = "window";
  win.innerHTML = `<h3>${name}</h3><div>${getAppContent(name)}</div>`;
  win.style.top = Math.random()*200 + "px";
  win.style.left = Math.random()*300 + "px";
  desktop.appendChild(win);
}

function getAppContent(name) {
  if (name === "notes") {
    return `<textarea style="width:100%;height:120px;"></textarea>`;
  }
  if (name === "browser") {
    return `<input placeholder="url"><iframe style="width:100%;height:100px;"></iframe>`;
  }
  if (name === "store") {
    return generateStore();
  }
  return "App";
}

function generateStore() {
  let html = "<h4>App Store</h4>";
  for (let i = 1; i <= 50; i++) {
    html += `<div>
      App ${i}
      <button onclick="installApp('App ${i}')">Install</button>
    </div>`;
  }
  return html;
}

function installApp(name) {
  alert(name + " installed!");
}
