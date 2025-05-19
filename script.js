
function calculateAge() {
    const birthDateInput = document.getElementById('birthDate').value;
    
    if (!birthDateInput) {
        document.getElementById('result').innerHTML = "Please enter a valid date!";
        return;
    }

    const birthDate = new Date(birthDateInput);
    const today = new Date();

    if (birthDate > today) {
        document.getElementById('result').innerHTML = "Birth date cannot be in the future!";
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Adjust for negative months/days
    if (ageDays < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
        ageMonths--;
    }
    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
    }

    document.getElementById('result').innerHTML = `
        Your Are:
        <strong>${ageDays}</strong> days/ 
        <strong>${ageMonths}</strong> months/ 
        <strong>${ageYears}</strong> years 
        old  
        
        
    `;
}














