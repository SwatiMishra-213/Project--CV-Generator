function generateCV() {
  document.getElementById("cv-name").innerText = document.getElementById("name").value;
  document.getElementById("cv-email").innerText = document.getElementById("email").value;
  document.getElementById("cv-phone").innerText = document.getElementById("phone").value;
  document.getElementById("cv-summary").innerText = document.getElementById("summary").value;
  document.getElementById("cv-education").innerText = document.getElementById("education").value;
  document.getElementById("cv-experience").innerText = document.getElementById("experience").value;
  document.getElementById("cv-projects").innerText = document.getElementById("projects").value;
  document.getElementById("cv-skills").innerText = document.getElementById("skills").value;

  // Image preview
  const file = document.getElementById("profile-img").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("cv-img").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Apply selected template style
  const template = document.getElementById("template-style").value;
  const cvTemplate = document.getElementById("cv-template");
  cvTemplate.className = `${template}-template`;
}

function downloadPDF() {
  const element = document.getElementById("cv-template");
  const opt = {
    margin: 0.3,
    filename: "generated_cv.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
}
