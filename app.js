let list = document.getElementById("list");
let typing = document.getElementById("typing");
let course = document.getElementById("course");
let icon = document.getElementById("icon");

function sendMessage() {
  let InpValue = event.target;
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
      }, 2000);
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side ">Ap kesy ho? </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
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
        list.innerHTML += `<li class="left-side"> Jee batayen mai apki kya madad karskta hoon?  </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
      }, 2000);
    } else if (
      [
        "mujhy addmission lena hai",
        "mujhy addmission chahiye",
        "addmission lena hai",
        "addmission chahiye",
        "addmission chaiye"
      ].indexOf(InpValue.value.toLowerCase()) !== -1
    ) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side"> Jee zaroor batyen apko konse course main addmission lena hai?
      
        </li>`;
      }, 2000);
    

      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side course-btn">
        <button class="left-side course">Web and app development</button>
        <button class="left-side course">Python programming language</button>
        <button class="left-side course">Gaphic designing</button>
        <button class="left-side course">Gen Ai and Chatbot</button>
        <button class="left-side course">3D animation</button>
        </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
      }, 4000);
      

    } 



    else {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side"> Sorry samjh hi nahi aya ! Moye Moye 🕺🕺 </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
      }, 2000);
    }
    InpValue.value = "";
  }
}
