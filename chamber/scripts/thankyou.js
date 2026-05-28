const results = document.querySelector("#results");

const params = new URLSearchParams(window.location.search);

const firstName = params.get("fname");
const lastName = params.get("lname");
const email = params.get("email");
const phone = params.get("phone");
const organization = params.get("organization");
const timestamp = params.get("timestamp");

results.innerHTML = `
    <h2>Application Details</h2>

    <p><strong>First Name:</strong> ${firstName}</p>

    <p><strong>Last Name:</strong> ${lastName}</p>

    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Mobile Phone:</strong> ${phone}</p>

    <p><strong>Business Name:</strong> ${organization}</p>

    <p><strong>Submitted:</strong> ${timestamp}</p>
`;