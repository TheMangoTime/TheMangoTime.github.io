<script>
// ====== ACCOUNT FUNCTIONS ======
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function signup(username, email, password) {
  const users = getUsers();
  if (users.find(u => u.email === email)) {
    return "User already exists";
  }
  users.push({
    username,
    email,
    password,
    createdAt: new Date().toLocaleDateString()
  });
  saveUsers(users);
  return "success";
}

function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return null;
  localStorage.setItem("currentUser", JSON.stringify(user));
  return user;
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

function protectPage() {
  if (!getCurrentUser()) {
    window.location.href = "login.html";
  }
}

// ====== NAVBAR AUTH BUTTONS ======
function renderAuthButtons() {
  const container = document.getElementById("auth-buttons");
  if (!container) return;

  const user = getCurrentUser();

  if (user) {
    container.innerHTML = `
      <a href="dashboard.html">Dashboard</a>
      <a href="profile.html">Profile</a>
      <a href="#" onclick="logout()">Logout</a>
    `;
  } else {
    container.innerHTML = `
      <a href="login.html">Login</a>
      <a href="signup.html">Sign Up</a>
    `;
  }
}
</script>
