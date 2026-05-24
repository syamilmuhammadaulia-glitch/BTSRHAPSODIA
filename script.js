document.addEventListener("DOMContentLoaded", () => {
  const printBtn = document.getElementById("printBtn");

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      // Memanggil dialog print bawaan browser
      window.print();
    });
  }

  // Persiapan untuk update web interaktif nanti
  console.log("Sistem e-yearbook siap. Mode saat ini: Siap Cetak.");
});
