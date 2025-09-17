// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "ocill" && password === "20") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil 👻",
      text: "Selamat datang yang Ultah",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "cake/Birthdaycake.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login nya gagal 🥰",
      text: "Coba cek lagi username sama passwordnya ya:)",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}