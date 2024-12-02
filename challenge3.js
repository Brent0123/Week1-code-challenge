// Function to calculate PAYE (Tax)
function calculatePAYE(salary) {
    let tax = 0;
    if (salary <= 288000) {
        tax = salary * 0.1;
    } else if (salary <= 388000) {
        tax = 28800 + (salary - 288000) * 0.25;
    } else if (salary <= 960000) {
        tax = 68800 + (salary - 388000) * 0.3;
    } else {
        tax = 188800 + (salary - 960000) * 0.35;
    }
    return tax;
}

// Function to calculate NHIF Deductions
function calculateNHIF(salary) {
    if (salary <= 5999) {
        return 150;
    } else if (salary <= 7999) {
        return 300;
    } else if (salary <= 11999) {
        return 500;
    } else if (salary <= 14999) {
        return 600;
    } else if (salary <= 19999) {
        return 750;
    } else if (salary <= 24999) {
        return 900;
    } else if (salary <= 29999) {
        return 1000;
    } else {
        return 1000;
    }
}

// Function to calculate NSSF Deductions
function calculateNSSF(salary) {
    if (salary <= 18000) {
        return salary * 0.06; // 6% of salary for Tier I
    } else {
        return (18000 * 0.06) + ((salary - 18000) * 0.06); // Tier I and Tier II
    }
}

// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let payee = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let totalDeductions = payee + nhif + nssf;
    let netSalary = grossSalary - totalDeductions;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        totalDeductions: totalDeductions,
        netSalary: netSalary
    };
}

// Example Usage:
let basicSalary = 50000; // Example basic salary
let benefits = 10000;    // Example benefits
let result = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary: " + result.grossSalary);
console.log("PAYE: " + result.payee);
console.log("NHIF: " + result.nhif);
console.log("NSSF: " + result.nssf);
console.log("Total Deductions: " + result.totalDeductions);
console.log("Net Salary: " + result.netSalary);
