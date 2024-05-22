let list = document.getElementById("list");
let typing = document.getElementById("typing");
let course = document.getElementById("course");
let icon = document.getElementById("icon");
let input = document.querySelector(".my-input");
let input1 = document.querySelector(".my-input1");
let input2 = document.querySelector(".my-input2");

function lastMessage() {
  var scrol = document.querySelector(".scroll");
  scrol.scrollTop = scrol.scrollHeight;
}
function sendMessage() {
  let InpValue = event.target;
  lastMessage();

  if (event.keyCode === 13) {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> ${InpValue.value} </li></div>`;
    typing.style.display = "block";
    icon.style.display = "none";

    if (
      ["hi", "hey", "hello", "hy", "oye", "salam", "asalam o alaikum"].indexOf(
        InpValue.value.toLowerCase()
      ) !== -1
    ) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side">  Hello, Welcome to SMIT chatbot: </li>`;
        lastMessage();
      }, 2000);
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side ">Ap kesy ho? </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        lastMessage();
      }, 4000);
    } else if (
      [
        "theek",
        "mai theek",
        "set",
        "mast",
        "mai theek hoon",
        "allhamdullilah",
        "thik",
        "thk",
        "thik ho",
      ].indexOf(InpValue.value.toLowerCase()) !== -1
    ) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side"> Jee batayen addmissions ke hawale se apko kya madad chahiye?  </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        lastMessage();
      }, 2000);
    } else if (
      [
        "mujhy addmission lena hai",
        "mujhy addmission chahiye",
        "addmission lena hai",
        "addmission chahiye",
        "addmission chaiye",
      ].indexOf(InpValue.value.toLowerCase()) !== -1
    ) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side"> Jee zaroor batyen apko konse course main addmission lena hai?
        </li>`;
      }, 2000);
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side course-btn">
        <button class="left-side course" onclick = "webAndApp()" >Web and app development</button>
        <button class="left-side course" onclick = "python()">Python programming language</button>
        <button class="left-side course" onclick = "graphic()">Gaphic designing</button>
        <button class="left-side course" onclick = "gen()">Gen Ai and chatbot</button>
        <button class="left-side course" onclick = "animation()">3D animation</button></li>`;
        typing.style.display = "none";

        icon.style.display = "block";
        lastMessage();
      }, 4000);
    } else {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side"> Sorry samjh hi nahi aya ! Moye Moye 🕺🕺 </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        lastMessage();
      }, 2000);
    }
    InpValue.value = "";
  }
}

// courses function!
function webAndApp() {
  setTimeout(function abc() {
    list.innerHTML += `<div class="ul-div" ><li class="right-side">Web and app development</li></div>`;
    lastMessage();
  }, 1000);
  setTimeout(function abc() {
    list.innerHTML += `<li class="left-side"> Apna name batayen </li>`;
    typing.style.display = "none";
    icon.style.display = "block";
    input1.style.display = "block";
    input2.style.display = "none";
    input.style.display = "none";
    lastMessage();
  }, 3000);
}
function python() {
  setTimeout(function abc() {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> Python programming language </li></div>`;
    lastMessage();
  }, 1000);
  setTimeout(function abc() {
    list.innerHTML += `<li class="left-side"> Apna name batayen </li>`;
    typing.style.display = "none";
    icon.style.display = "block";
    input1.style.display = "block";
    input.style.display = "none";
    input2.style.display = "none";
    lastMessage();
  }, 3000);
}
function gen() {
  setTimeout(function abc() {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> Gen Ai and chatbot </li></div>`;
    lastMessage();
  }, 1000);
  setTimeout(function abc() {
    list.innerHTML += `<li class="left-side"> Apna name batayen </li>`;
    typing.style.display = "none";
    icon.style.display = "block";
    input1.style.display = "block";
    input.style.display = "none";
    input2.style.display = "none";
    lastMessage();
  }, 3000);
}
function graphic() {
  setTimeout(function abc() {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> Graphic designing </li></div>`;
    lastMessage();
  }, 1000);
  setTimeout(function abc() {
    list.innerHTML += `<li class="left-side"> Apna name batayen </li>`;
    typing.style.display = "none";
    icon.style.display = "block";
    input1.style.display = "block";
    input2.style.display = "none";
    lastMessage();

    input.style.display = "none";
  }, 3000);
}
function animation() {
  setTimeout(function abc() {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> 3D animation</li></div>`;
    lastMessage();
  }, 1000);
  setTimeout(function abc() {
    list.innerHTML += `<li class="left-side"> Apna name batayen </li>`;
    typing.style.display = "none";
    input1.style.display = "block";
    input.style.display = "none";
    icon.style.display = "block";
    input2.style.display = "none";
    lastMessage();
  }, 3000);
}

function sendName() {
  let InpName = event.target;
  lastMessage();

  if (event.keyCode === 13) {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> ${InpName.value} </li></div>`;
    if (isNaN(InpName.value.toLowerCase())) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side">Theek hai ab Apne Father ka name batao. </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        input1.style.display = "none";
        input.style.display = "none";
        input2.style.display = "block";
        lastMessage();
      }, 2000);
    } else {
      setTimeout(function abc() {
        lastMessage();

        list.innerHTML += `<li class="left-side"> Number koi name nhi huta </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        lastMessage();
      }, 2000);
    }

    InpName.value = "";
  }
}
function sendFatherName() {
  let InpFatherName = event.target;
  lastMessage();

  if (event.keyCode === 13) {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> ${InpFatherName.value} </li></div>`;
    if (isNaN(InpFatherName.value.toLowerCase())) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side">Theek hai ab Apne CNIC number humayen bejain.</li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        input.style.display = "none";
        input1.style.display = "none";
        input2.style.display = "block";
        lastMessage();
      }, 2000);
    } else if (!isNaN(InpFatherName.value)) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side">Theek hai shukriya CNIC ke liye humare addmission abi close hai</li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        input.style.display = "none";
        input1.style.display = "none";
        input2.style.display = "block";
        lastMessage();
      }, 2000);
    }

    InpFatherName.value = "";
  }
}
