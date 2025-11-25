export async function getOfficers() {
    const response = await fetch('vfw_officers_contact.json');
    const data = await response.json();
    console.log(data.officers);
    return data.officers;
} testName = getOfficers();
