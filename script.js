function fakeTX(prefix) {
  return prefix + Math.floor(Math.random() * 1000000);
}

function show(screen) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screen).classList.add("active");
}

function enterSystem() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("welcome").innerText = "Welcome, " + name;
  show("dashboard");
}

function home() {
  show("landing");
}

function showPanel(id) {
  document.querySelectorAll(".panel").forEach(p => p.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function markAttendance() {
  document.getElementById("attendanceResult").innerText =
    "Attendance stored on Algorand → TX: " + fakeTX("ALGO");
}

function castVote() {
  let name = document.getElementById("voteName").value;
  document.getElementById("voteResult").innerText =
    "Vote cast for " + name + " → TX: " + fakeTX("VOTE");
}

function issueCert() {
  let skill = document.getElementById("certSkill").value;
  document.getElementById("certResult").innerText =
    skill + " certificate issued → TX: " + fakeTX("CERT");
}

function addProject() {
  let skills = ["HTML", "CSS", "JavaScript"];
  let output = document.getElementById("skillOutput");
  output.innerHTML = "";
  skills.forEach(s => {
    let div = document.createElement("div");
    div.className = "skill";
    div.innerText = s;
    output.appendChild(div);
  });
}

function runAgents() {
  document.getElementById("agentResult").innerText =
    "Automation complete → TX: " + fakeTX("AUTO");
}
