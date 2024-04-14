// Decription: This is final sprint for winter 2024. 
// Date: April 5, 2024
// Author: Adewale Gbadamosi

// Function to dislay retirement details
function retirement(age) {
    if (age <= 12) return 'not Allowed'
    else if (age <= 19) return 'trainee or mentorship'
    else if (age <= 50) return 'active, not considered for retirement'
    else if (age <= 65) return 'consideration for retirement'
    else return 'Retirement'
}

// Function to dislay type of employment
function jobType(typeOfEmployment) {
    if (typeOfEmployment === 'Full-time') return 'permanent staff'
    else if (typeOfEmployment === 'Part-time') return 'temporary staff'
    else if (typeOfEmployment === 'Contract') return 'contract staff'
    else 'Not a staff of the compnay'
}

// Function to calculate years of employment
function calYearOfEmployment (dateOfJoining) {
    const date = new Date(dateOfJoining);
    let year = today.getFullYear() - date.getFullYear();
    return year
}

// Function to create HTML heading and write into HTML
function formatHTMLHeading (employee) {
    const newHeading = document.createElement('h2')
    newHeading.classList.add('heading');
    newHeading.textContent = `These are ${employee.length} lists of employees as of ${today}`;
    document.querySelector('body').appendChild(newHeading);
    }

// Function to create HTML div and write into HTML
function formatHTMLDiv (employee) {
    const newElement = document.createElement('div');
    newElement.classList.add('employee');
    newElement.textContent = `${employee.firstName} ${employee.lastName}`;
    document.querySelector('body').appendChild(newElement);
    }

// Today's date of the system
const today = new Date();

// Itineration through the JSON file
fetch('employment.json')
    .then(response => response.json())
    .then(employee => {
        formatHTMLHeading(employee);
        console.log(`These are ${employee.length} lists of employees as of ${today}`);
        for (let i = 0; i < employee.length; i++) {
            console.log(`${i + 1}. ${employee[i].firstName} ${employee[i].lastName}`)
             
        }
    })
    .catch(error => {
        console.error(error)
    })

// HTML function call and display of employee details and year of employement
fetch('employment.json')
    .then(response => response.json())
    .then(employment => {
        console.log('')
        console.log('***Employee Job Title and date of joining***')
        employment.forEach(employee => {
            console.log(`${employee.firstName} ${employee.lastName} is ${employee.jobTitle} joined on ${employee.dateOfJoining}`);
            formatHTMLDiv(employee)
    });
})

    .catch(error => {
        console.error(error)
})

// Retirement details function call
fetch('employment.json')
    .then(response => response.json())
    .then(employment => {
        console.log('')
        console.log('***Employee Retirement Details***')
        employment.forEach(employee => {
            console.log (`${employee.firstName} ${employee.lastName} is ${retirement(employee.age)}.`);     
    });
})
    .catch(error => {
        console.error(error)
    })

// Type of appointment function call
fetch('employment.json')
.then(response => response.json())
.then(employment => {
    console.log('')
    console.log('***Employee Type of Appointment Details***')
    employment.forEach(employee => {
        console.log (`${employee.firstName} ${employee.lastName} is a ${jobType(employee.typeOfEmployment)}.`);  
    });
})
.catch(error => {
    console.error(error)
})

// Years of employment function call
fetch('employment.json')
    .then(response => response.json())
    .then(employment => {
        console.log('')
        console.log('***Employee Years of Employment***')
        employment.forEach(employee => {
            console.log (`${employee.firstName} ${employee.lastName} has spent ${calYearOfEmployment(employee.dateOfJoining)} years with the company.`);      
    });
})
    .catch(error => {
        console.error(error)
    })

