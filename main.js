let fNameBox = document.getElementById("fNameBox")
let fNameError = document.getElementById("fNameError")
let lNameBox = document.getElementById("lNameBox")
let lNameError = document.getElementById("lNameError")
let pNumberBox = document.getElementById("pNumberBox")
let pNumberError = document.getElementById("pNumberError")
let emailBox = document.getElementById("emailBox")
let emailError = document.getElementById("emailError")
let addressBox = document.getElementById("addressBox")
let addressError = document.getElementById("addressError")
let cityBox = document.getElementById("cityBox")
let cityError = document.getElementById("cityError")
let stateBox = document.getElementById("stateBox")
let stateError = document.getElementById("stateError")
let dobBox = document.getElementById("dobBox")
let dobError = document.getElementById("dobError")
let countryBox = document.getElementById("countryBox")
let countryError = document.getElementById("countryError")
let grade1Option = document.getElementById("grade1Option")
let grade1Error = document.getElementById("grade1Error")
let grade2Option = document.getElementById("grade2Option")
let grade2Error = document.getElementById("grade2Error")
let subject3Option = document.getElementById("subject3Option")
let subject3Error = document.getElementById("subject3Error")
let grade3Option = document.getElementById("grade3Option")
let grade3Error = document.getElementById("grade3Error")
let subject4Option = document.getElementById("subject4Option")
let subject4Error = document.getElementById("subject4Error")
let grade4Option = document.getElementById("grade4Option")
let grade4Error = document.getElementById("grade4Error")
let subject5Option = document.getElementById("subject5Option")
let subject5Error = document.getElementById("subject5Error")
let grade5Option = document.getElementById("grade5Option")
let grade5Error = document.getElementById("grade5Error")
let subject6Option = document.getElementById("subject6Option")
let subject6Error = document.getElementById("subject6Error")
let grade6Option = document.getElementById("grade6Option")
let grade6Error = document.getElementById("grade6Error")
let subject7Option = document.getElementById("subject7Option")
let subject7Error = document.getElementById("subject7Error")
let grade7Option = document.getElementById("grade7Option")
let grade7Error = document.getElementById("grade7Error")
let subject8Option = document.getElementById("subject8Option")
let subject8Error = document.getElementById("subject8Error")
let grade8Option = document.getElementById("grade8Option")
let grade8Error = document.getElementById("grade8Error")
let checkBoxError = document.getElementById("checkBoxError")
let checkBoxx = document.getElementById("checkBoxx")
let qual = document.getElementById("qual")
let qualBT = document.getElementById("qualBT")
let btn = document.getElementById("btn")
const ctx = document.getElementById('myChart').getContext('2d');

let fNameBoxValue, lNameBoxValue, pNumberBoxValue, emailBoxValue, addressBoxValue, cityBoxValue, stateBoxValue, dobBoxValue, countryPoints, grade1OptionValue, grade2OptionValue, subject3OptionValue, grade3OptionValue, subject4OptionValue, grade4OptionValue, subject5OptionValue, grade5OptionValue, subject6OptionValue, grade6OptionValue, subject7OptionValue, grade7OptionValue, subject8OptionValue, grade8OptionValue, cDate, dateDiff, yearz, gradeAdd, gradeAvg, gradePoints, yearzPoints

btn.addEventListener("click", function () {
    validData()
})

function validData() {
    if (fNameBox.value == "") {
        fNameError.innerHTML = "first Name is required*"
    } else { fNameError.innerHTML = "" } 
    
    if (lNameBox.value == "") {
        lNameError.innerHTML = "last Name is required*"
    } else { lNameError.innerHTML = "" }

    if (pNumberBox.value == "") {
        pNumberError.innerHTML = "phone number is required*"
    } else { pNumberError.innerHTML = "" }

    if (emailBox.value == "") {
        emailError.innerHTML = "email is required*"
    } else { emailError.innerHTML = "" }

    if (addressBox.value == "") {
        addressError.innerHTML = "address is required*"
    } else { addressError.innerHTML = "" }

    if (cityBox.value == "") {
        cityError.innerHTML = "city is required*"
    } else { cityError.innerHTML = "" }

    if (stateBox.value == "") {
        stateError.innerHTML = "state is required*"
    } else { stateError.innerHTML = "" }

    if (dobBox.value == "") {
        dobError.innerHTML = "date of birth is required*"
    } else { dobError.innerHTML = "" }

    if (countryBox.value == "") {
        countryError.innerHTML = "country  is required*"
    } else { countryError.innerHTML = "" }

    if (grade1Option.value == "") {
        grade1Error.innerHTML = "grade is required*"
    } else { grade1Error.innerHTML = "" }

    if (grade2Option.value == "") {
        grade2Error.innerHTML = "grade is required*"
    } else { grade2Error.innerHTML = "" }

    if (subject3Option.value == "") {
        subject3Error.innerHTML = "Subject 3 is required*"
    } else { subject3Error.innerHTML = "" }

    if (grade3Option.value == "") {
        grade3Error.innerHTML = "grade is required*"
    } else { grade3Error.innerHTML = "" }

    if (subject4Option.value == "") {
        subject4Error.innerHTML = "Subject 4 is required*"
    } else { subject4Error.innerHTML = "" }

    if (grade4Option.value == "") {
        grade4Error.innerHTML = "grade is required*"
    } else { grade4Error.innerHTML = "" }

    if (subject5Option.value == "") {
        subject5Error.innerHTML = "Subject 5 is required*"
    } else { subject5Error.innerHTML = "" }

    if (grade5Option.value == "") {
        grade5Error.innerHTML = "grade is required*"
    } else { grade5Error.innerHTML = "" }

    if (subject6Option.value == "") {
        subject6Error.innerHTML = "Subject 6 is required*"
    } else { subject6Error.innerHTML = "" }

    if (grade6Option.value == "") {
        grade6Error.innerHTML = "grade is required*"
    } else { grade6Error.innerHTML = "" }

    if (subject7Option.value == "") {
        subject7Error.innerHTML = "Subject 7 is required*"
    } else { subject7Error.innerHTML = "" }

    if (grade7Option.value == "") {
        grade7Error.innerHTML = "grade is required*"
    } else { grade7Error.innerHTML = "" }

    if (subject8Option.value == "") {
        subject8Error.innerHTML = "Subject 8 is required*"
    } else { subject8Error.innerHTML = "" }

    if (grade8Option.value == "") {
        grade8Error.innerHTML = "grade is required*"
    } else { grade8Error.innerHTML = "" }

    if (checkBoxx.checked == false) {
        checkBoxError.innerHTML = "accept terms and conditions*"
    } else { checkBoxError.innerHTML = "" }

    if (fNameBox.value !== "" && lNameBox.value !== "" && pNumberBox.value !== "" && emailBox.value !== "" && addressBox.value !== "" && cityBox.value !== "" && stateBox.value !== "" && countryBox.value !== "" && dobBox.value !== "" && grade1Option.value !== "" && grade2Option.value !== "" && subject3Option.value !== "" && grade3Option.value !== "" && subject4Option.value !== "" && grade4Option.value !== "" && subject5Option.value !== "" && grade5Option.value !== "" && subject6Option.value !== "" && grade6Option.value !== "" && subject7Option.value !== "" && grade7Option.value !== "" && subject8Option.value !== "" && grade8Option.value !== "" && checkBoxx.checked == true ) {
        acceptValues()
    }
}

function acceptValues() {
    fNameBoxValue = fNameBox.value
    lNameBoxValue = lNameBox.value
    pNumberBoxValue = pNumberBox.value
    emailBoxValue = emailBox.value
    addressBoxValue = addressBox.value
    cityBoxValue = cityBox.value
    stateBoxValue = stateBox.value
    dobBoxValue = new Date(dobBox.value)
    cDate = new Date()
    dateDiff = cDate - dobBoxValue
    yearz = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365.35))
    countryPoints = parseInt(countryBox.value)
    grade1OptionValue = parseInt(grade1Option.value)
    grade2OptionValue = parseInt(grade2Option.value)
    subject3OptionValue = subject3Option.value
    grade3OptionValue = parseInt(grade3Option.value)
    subject4OptionValue = subject4Option.value
    grade4OptionValue = parseInt(grade4Option.value)
    subject5OptionValue = subject5Option.value
    grade5OptionValue = parseInt(grade5Option.value)
    subject6OptionValue = subject6Option.value
    grade6OptionValue = parseInt(grade6Option.value)
    subject7OptionValue = subject7Option.value
    grade7OptionValue = parseInt(grade7Option.value)
    subject8OptionValue = subject8Option.value
    grade8OptionValue = parseInt(grade8Option.value)
    gradeAdd = grade1OptionValue + grade2OptionValue + grade3OptionValue + grade4OptionValue + grade5OptionValue + grade6OptionValue + grade7OptionValue + grade8OptionValue
    gradeAvg = gradeAdd / 8
    gradePoints = gradeAvg
    processValues()
}

function processValues() {

    if (yearz < 17) {
        yearzPoints = 0
    } else if (yearz <= 24) {
        yearzPoints = 100
    } else if (yearz <= 30) {
        yearzPoints = 80
    } else if (yearz <= 35) {
        yearzPoints = 50
    } else if (yearz <= 40) {
        yearzPoints = 30
    } else if (yearz >= 41) {
        yearzPoints = 10
    } else { yearzPoints = 0 }
    
    resultt()
}
let stats, myChart
function resultt(){
    stats=countryPoints+gradePoints+yearzPoints

    if (stats >= 150){
        StatRecord()
    }else {
        alert("Opps! You are not qualified for this Scholarship")
    }
    exitApp()
}

function StatRecord(){
    qual.innerHTML = "CONGRATULATIONS!\n You are Qualified for Qclass Scholarship\nBelow is statistics of your record"
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['COUNTRY', 'GRADE', 'YEARS'],
            datasets: [{
                label: 'AVERAGE POINTS',
                data: [countryPoints, gradePoints, yearzPoints],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    qualBT.innerHTML="Your average point is "+ stats
}

function exitApp(){
fNameBox.value = ""
fNameError.value = ""
lNameBox.value = ""
lNameError.value = ""
pNumberBox.value = ""
pNumberError.value = ""
emailBox.value = ""
emailError.value = ""
addressBox.value = ""
addressError.value = ""
cityBox.value = ""
cityError.value = ""
stateBox.value = ""
stateError.value = ""
dobBox.value = ""
dobError.value = "" 
countryBox.value = "" 
countryError.value = ""
grade1Option.value = ""
grade1Error.value = ""
grade2Option.value = ""
grade2Error.value = ""
subject3Option.value = ""
subject3Error.value = ""
grade3Option.value = ""
grade3Error.value = ""
subject4Option.value = ""
subject4Error.value = ""
grade4Option.value = ""
grade4Error.value = ""
subject5Option.value = ""
subject5Error.value = ""
grade5Option.value = ""
grade5Error.value = ""
subject6Option.value = ""
subject6Error.value = ""
grade6Option.value = ""
grade6Error.value = ""
subject7Option.value = ""
subject7Error.value = ""
grade7Option.value = "" 
grade7Error.value = ""
subject8Option.value = ""
subject8Error.value = ""
grade8Option.value = ""
grade8Error.value = ""
checkBoxError.value = ""
grade4Option.value = ""
}
