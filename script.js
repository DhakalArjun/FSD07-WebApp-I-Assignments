//class without encapsulation
// class Person {
//   constructor(fullName, address, email, image) {
//     this.fullName = fullName;
//     this.address = address;
//     this.email = email;
//     this.image = image;
//   }
// }

// class User extends Person {
//   constructor(fullName, address, email, image, userType) {
//     super(fullName, address, email, image);
//     this.userType = userType;
//   }
// }

//classes with encapsulation
class Person {
  constructor() {
    var fullName;
    var address;
    var email;
    var image;
  }
  getFullName() {
    return this.fullName;
  }
  getAddress() {
    return this.address;
  }
  getEmail() {
    return this.email;
  }
  getImage() {
    return this.image;
  }
  setFullName(fullName) {
    //apply validation here
    this.fullName = fullName;
  }
  setEmail(email) {
    //apply validation here
    this.email = email;
  }
  setAddress(address) {
    this.address = address;
  }
  setImage(image) {
    this.image = image;
  }
}

class User extends Person {
  constructor() {
    super();
    var userType;
  }
  getUserType() {
    return this.userType;
  }
  setUserType(userType) {
    this.userType = userType;
  }
}
// const person1 = new Person();
// person1.setFullName("Ram Prasad");
// person1.setAddress("Kathmandu, Nepal");
// person1.setEmail("ram@parasd.com");
// person1.setImage("/css/searchicon.png");
//console.log(person1);

//default data
const student1 = new User();
student1.setFullName("Arjun Dhakal");
student1.setAddress("Montreal, Canada");
student1.setEmail("arjun@dhakal.com");
student1.setUserType("Student");
student1.setImage("./images/arjun.jpg");
//console.log(student1);
const student2 = new User();
student2.setFullName("Marry Dicosta");
student2.setAddress("Montreal, Canada");
student2.setEmail("marry@dicosta.com");
student2.setUserType("Student");
student2.setImage("./images/student2.jpg");
//console.log(student2);
const student3 = new User();
student3.setFullName("John Smith");
student3.setAddress("Montreal, Canada");
student3.setEmail("john@smith.com");
student3.setUserType("Student");
student3.setImage("./images/student1.jpg");
//console.log(student3);

const teacher1 = new User();
teacher1.setFullName("Silviya Paskaleva");
teacher1.setAddress("Montreal, Canada");
teacher1.setEmail("silviya@paskaleva.com");
teacher1.setUserType("Teacher");
teacher1.setImage("./images/teacher1.jpg");
//console.log(teacher1);

const teacher2 = new User();
teacher2.setFullName("Gregory Prokopsi");
teacher2.setAddress("Montreal, Canada");
teacher2.setEmail("grepory@porkospi.com");
teacher2.setUserType("Teacher");
teacher2.setImage("./images/teacher2.jpg");
//teacher2.fullName = "Arjun Dhakal"; // for testing encapsulation - still not working
//console.log(teacher2);

let userArray = [];
userArray.push(student1);
userArray.push(teacher1);
userArray.push(student2);
userArray.push(teacher2);
userArray.push(student3);

// addButton.innerHTML = "Add New";
//const addButton = document.getElementById("addNewBtn");
const addNewForm = document.getElementById("AddNewForm");
const studentRadio = document.getElementById("studentRadio");
const teacherRadio = document.getElementById("teacherRadio");
const searchInput = document.getElementById("searchInput");
const dataList = document.querySelector("#dataList");
const inputImage = document.getElementById("inputImage");
const errorP = document.getElementById("errorP");
const successP = document.getElementById("successP");

function clearMsg() {
  errorP.textContent = "";
  successP.textContent = "";
}

function addNewUser() {
  // console.log("I am called");
  const userType = document.querySelector("#userType").value;
  const userFullName = document.getElementById("inputFullName").value;
  const userAddress = document.getElementById("inputAddress").value;
  const userEmail = document.getElementById("inputEmail").value;

  //validation
  //console.log(userType.options[userType.selectedIndex].value);
  //console.log(userType.value);
  var errorMsg = [];

  errorP.textContent = "";
  successP.textContent = "";
  if (userType == "Select an option") {
    errorMsg.push("Select a user type");
  }

  if (userFullName == null || userFullName == "") {
    if (errorMsg.length > 0) {
      errorMsg.push("<br>");
    }
    errorMsg.push("Full name is required");
  }
  if (userAddress == null || userAddress == "") {
    if (errorMsg.length > 0) {
      errorMsg.push("<br>");
    }
    errorMsg.push("Address is required");
  }
  if (userEmail == null || userEmail == "") {
    if (errorMsg.length > 0) {
      errorMsg.push("<br>");
    }
    errorMsg.push("Email is required");
  }
  if (errorMsg.length > 0) {
    errorMsg = errorMsg.join("");
    errorP.innerHTML = errorMsg;
  } else {
    var newUser = new User();
    newUser.setUserType(userType);
    newUser.setFullName(userFullName);
    newUser.setAddress(userAddress);
    newUser.setEmail(userEmail);
    newUser.setImage("./images/notAvailable.jpg");
    userArray.push(newUser);
    addNewForm.reset();
    successP.textContent = "New record successfully added";
  }
  displayData();
}
//display data
function displayData() {
  dataList.innerHTML = "";
  let userSelected;
  if (teacherRadio.checked) {
    userSelected = "Teacher";
  } else {
    userSelected = "Student";
  }
  //console.log(userArray[0].userType === userSelected);
  for (i = 0; i < userArray.length; i++) {
    if (userArray[i].userType === userSelected) {
      const modelId = "model" + i;
      const html = `     
      <div class="listElement mb-2 displayFlex">
      <p class="fullNameP col-4">${userArray[i].fullName}</p>
      <p class="addressP col-5">${userArray[i].address}</p>
      <div class="imageDiv col-3">
        <a href="#" data-bs-toggle="modal" data-bs-target="#${modelId}"
          ><img
            class="imageTag col-3"
            src="${userArray[i].image}"
            alt="studentImage"
        /></a>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id=${modelId}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Details</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            <img class="imageModal col-3" src="${userArray[i].image}" alt="studentImage"/>
            <p class="form-label">Full Name: ${userArray[i].fullName}</p>
            <p class="form-label">Address: ${userArray[i].address}</p>
            <p class="form-label">Email: ${userArray[i].email}</p>
            <p class="form-label">User Type: ${userArray[i].userType}</p> 
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> 
      `;
      dataList.insertAdjacentHTML("beforeend", html);
    }
  }
}

function myFunc() {
  var input, filter, divEle, fullNames, fullName, i, txtValue;
  input = document.getElementById("searchInput");

  filter = input.value.toUpperCase();
  divEle = document.getElementsByClassName("listElement");
  //console.log(divEle);
  fullNames = document.getElementsByClassName("fullNameP");
  //console.log(fullNames);
  for (i = 0; i < fullNames.length; i++) {
    fullName = fullNames[i];
    txtValue = fullName.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      divEle[i].style.display = "";
      //console.log(divEle[i]);
    } else {
      //divEle[i].classList.remove("displayFlex");
      divEle[i].style.display = "none";
    }
  }
}
