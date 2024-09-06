function signIn() {
    const role = document.getElementById("role").value;
    if (role === "student") {
        document.getElementById("studentDashboard").style.display = "block";
        document.getElementById("adminDashboard").style.display = "none";
    } else if (role === "admin") {
        document.getElementById("studentDashboard").style.display = "none";
        document.getElementById("adminDashboard").style.display = "block";
    }
}
