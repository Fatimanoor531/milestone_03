// Get references to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

if (form) {
  // Handle Form Submission
  form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Display collected data
    const resumeHTML = `
      <h2>Resume</h2>
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Education</h3>
      <p><strong>Education:</strong> ${education}</p>
      <h3>Experience</h3>
      <p><strong>Experience:</strong> ${experience}</p>
      <h3>Skills</h3>
      <p><strong>Skills:</strong> ${skills}</p>
    `;

    if (resumeDisplayElement) {
      resumeDisplayElement.innerHTML = resumeHTML;
    } else {
      console.log("The resume display element is missing");
    }
  });
} 
