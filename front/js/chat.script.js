const script = document.querySelector("script[data-botid]");
const botid = script.getAttribute("data-botid");
const userid = script.getAttribute("data-userid");
const BASE_URL = "https://api.Measure My Size.ai/Measure My Size";
const ask_Question_API = BASE_URL + "/chatbot/ask_question";
let WidgetData = null;
var isLoading = false;
var checkFlag = true;
var isWidgetIcon = true;
let leadsFlag = false;
let LeadsData = null;
let messageCallCount = 0;
let chatInputBox;
let formsubmitted = false;
function toggleLeadsFlag(newLeadsFlag) {
  chatInputBox.disabled = newLeadsFlag;
  leadsFlag = newLeadsFlag;
}
const fetchData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/get-bot-leads?bot_id=${botid}`);
    const data = await response.json();
    if (data && data.settings && data.settings.length > 0) {
      LeadsData = data?.settings[0];
    } else {
    }
  } catch (err) {
    console.log(err);
  }
  try {
    const response = await fetch(`${BASE_URL}/widget?bot_id=${botid}`);
    const data = await response.json();
    WidgetData = data.widget;
    performAdditionalWork();
  } catch (err) {
    console.log(err);
  }
};
fetchData();
const performAdditionalWork = () => {
  var IoIosChatbubbles = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  IoIosChatbubbles.setAttribute("viewBox", "0 0 512 512");
  IoIosChatbubbles.setAttribute("fill", WidgetData["widget-color"]);
  IoIosChatbubbles.setAttribute("height", "1.5em");
  IoIosChatbubbles.setAttribute("width", "1.5em");
  var IoIosChatbubblesElement1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  IoIosChatbubblesElement1.setAttribute(
    "d",
    "M60.44 389.17c0 .07 0 .2-.08.38.03-.12.05-.25.08-.38zM439.9 405.6a26.77 26.77 0 01-9.59-2l-56.78-20.13-.42-.17a9.88 9.88 0 00-3.91-.76 10.32 10.32 0 00-3.62.66c-1.38.52-13.81 5.19-26.85 8.77-7.07 1.94-31.68 8.27-51.43 8.27-50.48 0-97.68-19.4-132.89-54.63A183.38 183.38 0 01100.3 215.1a175.9 175.9 0 014.06-37.58c8.79-40.62 32.07-77.57 65.55-104A194.76 194.76 0 01290.3 32c52.21 0 100.86 20 137 56.18 34.16 34.27 52.88 79.33 52.73 126.87a177.86 177.86 0 01-30.3 99.15l-.19.28-.74 1c-.17.23-.34.45-.5.68l-.15.27a21.63 21.63 0 00-1.08 2.09l15.74 55.94a26.42 26.42 0 011.12 7.11 24 24 0 01-24.03 24.03z"
  );
  var IoIosChatbubblesElement2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  IoIosChatbubblesElement2.setAttribute(
    "d",
    "M299.87 425.39a15.74 15.74 0 00-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78 201.78 0 01-128.82-58.75A199.21 199.21 0 0186.4 244.16C85 234.42 85 232 85 232a16 16 0 00-28-10.58s-7.88 8.58-11.6 17.19a162.09 162.09 0 0011 150.06C59 393 59 395 58.42 399.5c-2.73 14.11-7.51 39-10 51.91a24 24 0 008 22.92l.46.39A24.34 24.34 0 0072 480a23.42 23.42 0 009-1.79l53.51-20.65a8.05 8.05 0 015.72 0c21.07 7.84 43 12 63.78 12a176 176 0 0074.91-16.66c5.46-2.56 14-5.34 19-11.12a15 15 0 001.95-16.39z"
  );
  IoIosChatbubbles.appendChild(IoIosChatbubblesElement1);
  IoIosChatbubbles.appendChild(IoIosChatbubblesElement2);
  var BsFillChatFill = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  BsFillChatFill.setAttribute("fill", WidgetData["widget-color"]);
  BsFillChatFill.setAttribute("viewBox", "0 0 16 16");
  BsFillChatFill.setAttribute("height", "1.5em");
  BsFillChatFill.setAttribute("width", "1.5em");
  var BsFillChatFillElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  BsFillChatFillElement.setAttribute(
    "d",
    "M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15z"
  );
  BsFillChatFill.appendChild(BsFillChatFillElement);
  var FaRobot = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  FaRobot.setAttribute("viewBox", "0 0 24 24");
  FaRobot.setAttribute("fill", WidgetData["widget-color"]);
  FaRobot.setAttribute("height", "1.5em");
  FaRobot.setAttribute("width", "1.5em");
  var FaRobotElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  FaRobotElement.setAttribute(
    "d",
    "M21 10.975V8a2 2 0 00-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 00-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 00-2 2v2.998l-.072.005A.999.999 0 002 12v2a1 1 0 001 1v5a2 2 0 002 2h14a2 2 0 002-2v-5a1 1 0 001-1v-1.938a1.004 1.004 0 00-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z"
  );
  FaRobot.appendChild(FaRobotElement);
  var BiSupport = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  BiSupport.setAttribute("viewBox", "0 0 24 24");
  BiSupport.setAttribute("fill", WidgetData["widget-color"]);
  BiSupport.setAttribute("height", "1.5em");
  BiSupport.setAttribute("width", "1.5em");
  var BiSupportElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  BiSupportElement.setAttribute(
    "d",
    "M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 001-1v-5.143a1 1 0 00-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 00-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"
  );
  BiSupport.appendChild(BiSupportElement);
  var BsQuestionLg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  BsQuestionLg.setAttribute("fill", WidgetData["widget-color"]);
  BsQuestionLg.setAttribute("viewBox", "0 0 16 16");
  BsQuestionLg.setAttribute("height", "1.5em");
  BsQuestionLg.setAttribute("width", "1.5em");
  var BsQuestionLgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  BsQuestionLgElement.setAttribute("fill-rule", "evenodd");
  BsQuestionLgElement.setAttribute(
    "d",
    "M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 01-.5.5h-.77a.5.5 0 01-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777zM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14z"
  );
  BsQuestionLg.appendChild(BsQuestionLgElement);
  var BiBookBookmark = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  BiBookBookmark.setAttribute("viewBox", "0 0 24 24");
  BiBookBookmark.setAttribute("fill", WidgetData["widget-color"]);
  BiBookBookmark.setAttribute("height", "1.5em");
  BiBookBookmark.setAttribute("width", "1.5em");
  var BiBookBookmarkElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  BiBookBookmarkElement.setAttribute(
    "d",
    "M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4a2 2 0 00-2-2zm0 9l-2-1-2 1V4h4v7z"
  );
  BiBookBookmark.appendChild(BiBookBookmarkElement);
  var IoIosChatbubblesAvatar = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  IoIosChatbubblesAvatar.setAttribute("viewBox", "0 0 512 512");
  IoIosChatbubblesAvatar.setAttribute("fill", WidgetData["widget-color"]);
  IoIosChatbubblesAvatar.setAttribute("height", "1em");
  IoIosChatbubblesAvatar.setAttribute("width", "1em");
  var IoIosChatbubblesElement1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  IoIosChatbubblesElement1.setAttribute(
    "d",
    "M60.44 389.17c0 .07 0 .2-.08.38.03-.12.05-.25.08-.38zM439.9 405.6a26.77 26.77 0 01-9.59-2l-56.78-20.13-.42-.17a9.88 9.88 0 00-3.91-.76 10.32 10.32 0 00-3.62.66c-1.38.52-13.81 5.19-26.85 8.77-7.07 1.94-31.68 8.27-51.43 8.27-50.48 0-97.68-19.4-132.89-54.63A183.38 183.38 0 01100.3 215.1a175.9 175.9 0 014.06-37.58c8.79-40.62 32.07-77.57 65.55-104A194.76 194.76 0 01290.3 32c52.21 0 100.86 20 137 56.18 34.16 34.27 52.88 79.33 52.73 126.87a177.86 177.86 0 01-30.3 99.15l-.19.28-.74 1c-.17.23-.34.45-.5.68l-.15.27a21.63 21.63 0 00-1.08 2.09l15.74 55.94a26.42 26.42 0 011.12 7.11 24 24 0 01-24.03 24.03z"
  );
  var IoIosChatbubblesElement2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  IoIosChatbubblesElement2.setAttribute(
    "d",
    "M299.87 425.39a15.74 15.74 0 00-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78 201.78 0 01-128.82-58.75A199.21 199.21 0 0186.4 244.16C85 234.42 85 232 85 232a16 16 0 00-28-10.58s-7.88 8.58-11.6 17.19a162.09 162.09 0 0011 150.06C59 393 59 395 58.42 399.5c-2.73 14.11-7.51 39-10 51.91a24 24 0 008 22.92l.46.39A24.34 24.34 0 0072 480a23.42 23.42 0 009-1.79l53.51-20.65a8.05 8.05 0 015.72 0c21.07 7.84 43 12 63.78 12a176 176 0 0074.91-16.66c5.46-2.56 14-5.34 19-11.12a15 15 0 001.95-16.39z"
  );
  IoIosChatbubblesAvatar.appendChild(IoIosChatbubblesElement1);
  IoIosChatbubblesAvatar.appendChild(IoIosChatbubblesElement2);
  var BsFillChatFillAvatar = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  BsFillChatFillAvatar.setAttribute("fill", WidgetData["widget-color"]);
  BsFillChatFillAvatar.setAttribute("viewBox", "0 0 16 16");
  BsFillChatFillAvatar.setAttribute("height", "1em");
  BsFillChatFillAvatar.setAttribute("width", "1em");
  var BsFillChatFillElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  BsFillChatFillElement.setAttribute(
    "d",
    "M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15z"
  );
  BsFillChatFillAvatar.appendChild(BsFillChatFillElement);
  var FaRobotAvatar = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  FaRobotAvatar.setAttribute("viewBox", "0 0 24 24");
  FaRobotAvatar.setAttribute("fill", WidgetData["widget-color"]);
  FaRobotAvatar.setAttribute("height", "1em");
  FaRobotAvatar.setAttribute("width", "1em");
  var FaRobotElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  FaRobotElement.setAttribute(
    "d",
    "M21 10.975V8a2 2 0 00-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 00-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 00-2 2v2.998l-.072.005A.999.999 0 002 12v2a1 1 0 001 1v5a2 2 0 002 2h14a2 2 0 002-2v-5a1 1 0 001-1v-1.938a1.004 1.004 0 00-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z"
  );
  FaRobotAvatar.appendChild(FaRobotElement);
  var BiSupportAvatar = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  BiSupportAvatar.setAttribute("viewBox", "0 0 24 24");
  BiSupportAvatar.setAttribute("fill", WidgetData["widget-color"]);
  BiSupportAvatar.setAttribute("height", "1em");
  BiSupportAvatar.setAttribute("width", "1em");
  var BiSupportElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  BiSupportElement.setAttribute(
    "d",
    "M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 001-1v-5.143a1 1 0 00-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 00-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"
  );
  BiSupportAvatar.appendChild(BiSupportElement);
  var BsQuestionLgAvatar = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  BsQuestionLgAvatar.setAttribute("fill", WidgetData["widget-color"]);
  BsQuestionLgAvatar.setAttribute("viewBox", "0 0 16 16");
  BsQuestionLgAvatar.setAttribute("height", "1em");
  BsQuestionLgAvatar.setAttribute("width", "1em");
  var BsQuestionLgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  BsQuestionLgElement.setAttribute("fill-rule", "evenodd");
  BsQuestionLgElement.setAttribute(
    "d",
    "M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 01-.5.5h-.77a.5.5 0 01-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777zM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14z"
  );
  BsQuestionLgAvatar.appendChild(BsQuestionLgElement);
  var BiBookBookmarkAvatar = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  BiBookBookmarkAvatar.setAttribute("viewBox", "0 0 24 24");
  BiBookBookmarkAvatar.setAttribute("fill", WidgetData["widget-color"]);
  BiBookBookmarkAvatar.setAttribute("height", "1em");
  BiBookBookmarkAvatar.setAttribute("width", "1em");
  var BiBookBookmarkElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  BiBookBookmarkElement.setAttribute(
    "d",
    "M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4a2 2 0 00-2-2zm0 9l-2-1-2 1V4h4v7z"
  );
  BiBookBookmarkAvatar.appendChild(BiBookBookmarkElement);
  var chevron = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  chevron.setAttribute("fill", WidgetData["widget-color"]);
  chevron.setAttribute("viewBox", "0 0 16 16");
  chevron.setAttribute("height", "1em");
  chevron.setAttribute("width", "1em");
  var chevronpathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  chevronpathElement.setAttribute("fillRule", "evenodd");
  chevronpathElement.setAttribute(
    "d",
    "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
  );
  chevronpathElement.style.stroke = WidgetData["widget-color"];
  chevronpathElement.style.strokeWidth = "2px";
  chevron.appendChild(chevronpathElement);
  const screenHeight = window.innerHeight;
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute(
    "style",
    "display: flex;flex-direction: column;flex-grow: 1;justify-content: end;"
  );
  const leadsMessage = document.createElement("div");
  leadsMessage.setAttribute(
    "style",
    "background-color: white; display: flex; flex-direction: column; padding: 10px; border-radius: 12.48px;"
  );
  const closeButton = document.createElement("div");
  closeButton.textContent = "✖";
  closeButton.style.alignSelf = "flex-end";
  closeButton.addEventListener("click", () => {
    if (!leadsFlag) {
      leadsMessage.remove();
    }
  });
  const paragraph = document.createElement("p");
  paragraph.setAttribute(
    "style",
    " font-weight: 700; font-size: 13px; font-family: Satoshi, sans-serif;"
  );
  const messageText =
    LeadsData && LeadsData["lead_id"]
      ? LeadsData["message"]
      : "No message available";
  const textNode = document.createTextNode(messageText);
  paragraph.appendChild(textNode);
  const createInputDiv = (labelText, inputType, placeholderText, inputId) => {
    const inputDiv = document.createElement("div");
    inputDiv.setAttribute("style", "margin-bottom: 15px;");
    const inputLabel = document.createElement("label");
    inputLabel.setAttribute(
      "style",
      "display: block; margin-bottom: 5px; font-weight: 700; font-size: 13px; font-family: Satoshi, sans-serif;"
    );
    inputLabel.textContent = labelText;
    const inputField = document.createElement("input");
    inputField.setAttribute("type", inputType);
    inputField.setAttribute("placeholder", placeholderText);
    inputField.setAttribute("id", inputId);
    inputField.setAttribute(
      "style",
      "padding: 10px; width: calc(100% - 22px); border: 1px solid rgba(33, 33, 33, 0.12); border-radius: 8px; outline: none; transition: border-color 0.3s ease-in-out; color: #202020;"
    );
    inputField.required = true;
    if (inputType === "tel") {
      inputField.setAttribute("maxlength", "10");
      inputField.setAttribute("pattern", "[0-9]*");
      inputField.setAttribute("inputmode", "numeric");
      inputField.style.appearance = "textfield";
      inputField.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
      });
    }
    inputField.addEventListener("focus", () => {
      inputField.style.border = "2px solid #FF8321";
    });
    inputField.addEventListener("blur", () => {
      inputField.style.border = "1px solid rgba(33, 33, 33, 0.12)";
    });
    inputField.addEventListener("change", (event) => {
      inputField.value = event.target.value;
    });
    inputDiv.appendChild(inputLabel);
    inputDiv.appendChild(inputField);
    return inputDiv;
  };
  const nameDiv = createInputDiv(
    "Name",
    "text",
    "Enter your Name",
    "nameInput"
  );
  const emailDiv = createInputDiv(
    "Email",
    "email",
    "Enter your Email",
    "emailInput"
  );
  const phoneDiv = createInputDiv(
    "Phone Number",
    "tel",
    "Enter your Phone Number",
    "phoneInput"
  );
  let name;
  let email;
  let phone;
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  const flexContainer = document.createElement("div");
  flexContainer.setAttribute(
    "style",
    "display: flex; justify-content: space-between; align-items: center;"
  );
  function displayCustomToast(message) {
    const customToast = document.createElement("div");
    customToast.textContent = message;
    customToast.setAttribute(
      "style",
      "position: absolute; bottom: 5%; left: 50%; transform: translate(-50%, -50%); display: none; background-color: black; color: white; padding: 10px; border-radius: 8px; z-index: 9999; transition: opacity 0.3s ease-in-out; width: 209px; text-align: center; font-size: 13px; font-weight: 500;"
    );
    leadsMessage.appendChild(customToast);
    customToast.style.display = "block";
    setTimeout(() => {
      customToast.style.opacity = "0";
      setTimeout(() => {
        customToast.remove();
      }, 300);
    }, 3e3);
  }
  const nextButton = document.createElement("div");
  nextButton.textContent = "Next";
  nextButton.setAttribute(
    "style",
    "background-color: #FF8321; color: white; padding: 8px 20px; border-radius: 65px; cursor: pointer; font-size: 11px; font-weight: 700; font-family: Satoshi, sans-serif"
  );
  if (isLoading) {
    const loadingSign = document.createElement("span");
    loadingSign.textContent = "Loading...";
    loadingSign.style.marginLeft = "10px";
    nextButton.appendChild(loadingSign);
  }
  let step = 0;
  let count = 0;
  if (LeadsData && LeadsData["lead_id"] && LeadsData["name"]) {
    count++;
  }
  if (LeadsData && LeadsData["lead_id"] && LeadsData["email"]) {
    count++;
  }
  if (LeadsData && LeadsData["lead_id"] && LeadsData["phone"]) {
    count++;
  }
  const pageText = document.createElement("span");
  pageText.style.cssText =
    "font-family: Satoshi, sans-serif; font-weight: 500; font-size: 12px;";
  pageText.innerText = `${step} of ${count}`;
  function updateStepText() {
    step = Math.min(step, count);
    pageText.textContent = `${step} of ${count}`;
  }
  flexContainer.appendChild(pageText);
  flexContainer.appendChild(nextButton);
  leadsMessage.appendChild(closeButton);
  leadsMessage.appendChild(paragraph);
  if (LeadsData && LeadsData["lead_id"] && LeadsData["name"]) {
    leadsMessage.appendChild(nameDiv);
    leadsMessage.appendChild(flexContainer);
    step++;
    updateStepText();
    if (
      LeadsData &&
      LeadsData["lead_id"] &&
      !LeadsData["email"] &&
      !LeadsData["phone"]
    ) {
      nextButton.textContent = "Submit";
    }
  } else if (
    LeadsData &&
    LeadsData["lead_id"] &&
    !LeadsData["name"] &&
    LeadsData["email"]
  ) {
    step++;
    updateStepText();
    if (!LeadsData["phone"]) {
      nextButton.textContent = "Submit";
    }
    leadsMessage.appendChild(emailDiv);
    leadsMessage.appendChild(flexContainer);
  } else if (
    LeadsData &&
    LeadsData["lead_id"] &&
    !LeadsData["name"] &&
    !LeadsData["email"] &&
    LeadsData["phone"]
  ) {
    step++;
    updateStepText();
    leadsMessage.appendChild(phoneDiv);
    leadsMessage.appendChild(flexContainer);
    if (LeadsData["lead_id"] && !LeadsData["email"] && !LeadsData["name"]) {
      nextButton.textContent = "Submit";
    }
  }
  nextButton.addEventListener("click", () => {
    if (leadsMessage.contains(nameDiv)) {
      name = document.getElementById("nameInput")?.value;
      if (!name) {
        return;
      }
    }
    if (leadsMessage.contains(emailDiv)) {
      email = document.getElementById("emailInput")?.value;
      if (!email) {
        return;
      } else if (!validateEmail(email)) {
        displayCustomToast("Please enter a valid email address");
        return;
      }
    }
    if (leadsMessage.contains(phoneDiv)) {
      phone = document.getElementById("phoneInput")?.value;
      if (!phone) {
        return;
      }
    }
    if (
      step == 1 &&
      LeadsData["lead_id"] &&
      LeadsData["email"] &&
      !leadsMessage.contains(emailDiv)
    ) {
      leadsMessage.appendChild(emailDiv);
      leadsMessage.appendChild(flexContainer);
      step++;
      updateStepText();
      nextButton.textContent = "Next";
      if (!LeadsData["phone"]) {
        nextButton.textContent = "Submit";
      }
    } else if (
      step == 1 &&
      LeadsData["lead_id"] &&
      LeadsData["name"] &&
      !LeadsData["email"] &&
      LeadsData["phone"]
    ) {
      step++;
      updateStepText();
      leadsMessage.appendChild(phoneDiv);
      leadsMessage.appendChild(flexContainer);
      const phone = phoneDiv.querySelector("input").value;
      nextButton.textContent = "Submit";
    } else if (
      (step == 1 &&
        LeadsData["lead_id"] &&
        (leadsMessage.contains(nameDiv) || leadsMessage.contains(emailDiv)) &&
        LeadsData["phone"] &&
        !leadsMessage.contains(phoneDiv)) ||
      (step == 2 &&
        LeadsData["lead_id"] &&
        LeadsData["phone"] &&
        (leadsMessage.contains(nameDiv) || leadsMessage.contains(emailDiv)) &&
        !leadsMessage.contains(phoneDiv))
    ) {
      if (leadsMessage.contains(nameDiv) || leadsMessage.contains(emailDiv)) {
        step++;
        updateStepText();
      }
      nextButton.textContent = "Submit";
      leadsMessage.appendChild(phoneDiv);
      leadsMessage.appendChild(flexContainer);
      const phone = phoneDiv.querySelector("input").value;
      if (!phone) {
        return;
      }
    }
    if (nextButton.textContent.trim() === "Submit") {
      if (step === count) {
        if (leadsMessage.contains(nameDiv)) {
          name = document.getElementById("nameInput")?.value;
          if (!name) {
            return;
          }
        }
        if (leadsMessage.contains(emailDiv)) {
          email = document.getElementById("emailInput")?.value;
          if (!email) {
            return;
          } else if (!validateEmail(email)) {
            displayCustomToast("Please enter a valid email address");
            return;
          }
        }
        if (leadsMessage.contains(phoneDiv)) {
          phone = document.getElementById("phoneInput")?.value;
          if (!phone) {
            return;
          }
        }
        const formData = {
          name: name || "",
          email: email || "",
          phone: phone || "",
          session_id: session_Id,
          bot_id: botid,
        };
        isLoading = true;
        fetch(
          "http://ec2-3-85-181-206.compute-1.amazonaws.com:5000/Measure My Size/add-leads",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            isLoading = false;
            formsubmitted = true;
            toggleLeadsFlag(false);
            leadsMessage.removeChild(flexContainer);
            if (leadsMessage.contains(nameDiv)) {
              leadsMessage.removeChild(nameDiv);
            }
            if (leadsMessage.contains(emailDiv)) {
              leadsMessage.removeChild(emailDiv);
            }
            if (leadsMessage.contains(phoneDiv)) {
              leadsMessage.removeChild(phoneDiv);
            }
            const circleBackground = document.createElement("div");
            circleBackground.setAttribute(
              "style",
              ` width: 20px; height: 20px; border-radius: 50%; background-color: #4CB71A;display: flex;
               justify-content: center; align-items: center; margin: 20px auto 8px auto;position: relative;`
            );
            const tickMark = document.createElement("div");
            tickMark.innerHTML = `
               <svg width="12" height="6" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M0.878906 1.81641L2.53125 3.46875L5.79297 0.207031" stroke="white" stroke-width="1.7"/>
               </svg>
             `;
            circleBackground.appendChild(tickMark);
            const successMessage = document.createElement("p");
            successMessage.textContent = "Form submitted successfully!";
            successMessage.setAttribute(
              "style",
              `
               text-align: center;
               font-weight: 700;
               color: #4CB71A;
               font-size: 15px;
               `
            );
            leadsMessage.appendChild(circleBackground);
            leadsMessage.appendChild(successMessage);
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      }
    }
  });
  let FirstQuestions = null;
  fetch(BASE_URL + "/chatbot/questions?bot_id=" + botid)
    .then((response) => response.json())
    .then((data) => {
      const botMessage = document.createElement("div");
      botMessage.setAttribute(
        "style",
        "line-height: initial;font-size: 16px;color: " +
          WidgetData["bot-text-color"] +
          ";margin-bottom:7.52px;display: flex;align-self:flex-start;padding: 8px;max-width: 320px;background:  " +
          WidgetData["bot-background-color"] +
          ";    border-radius: 14px 14px 14px 0px;"
      );
      botMessage.innerText = WidgetData["first-message"];
      botMessage.classList.add("bot-message");
      chatMessages.appendChild(botMessage);
      FirstQuestions = data;
      for (var i = 0; i < data.quesions.length; i++) {
        var question = data.quesions[i].question;
        var questionElement = document.createElement("p");
        questionElement.innerText = question;
        questionElement.setAttribute(
          "style",
          "line-height: 20px; cursor: pointer;margin: 2px;   font-size: 14px;     padding: 4px 7px; background: #FFFFFF; border: 1.07379px solid #408CFD; border-radius: 8px; color: #408CFD"
        );
        questionElement.classList.add("question-list");
        questionContainer.appendChild(questionElement);
        if (LeadsData && LeadsData["collect_leads_at_start"]) {
          toggleLeadsFlag(true);
          chatMessages.appendChild(leadsMessage);
        } else {
          if (!leadsFlag) {
            chatMessages.appendChild(questionContainer);
          }
        }
        chatMessages.appendChild(supportButtonDiv);
      }
    })
    .catch((err) => console.log(err));
  const generateSessionId = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    const timestamp = Date.now().toString(36);
    return randomString + timestamp;
  };
  const session_Id = generateSessionId();
  localStorage.setItem("sessionId", session_Id);
  const dataChatName = "Chatbot";
  const chatRole = "question_answering";
  const chatbot_data = script.dataset;
  const alignmentStyle = "right";
  if (chatbot_data.button_Alignment === "left") {
    alignmentStyle = "left: 20px";
  } else if (chatbot_data.button_Alignment === "right") {
    alignmentStyle = "right: 20px";
  }
  const reactScript = document.createElement("script");
  reactScript.src =
    "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js";
  const reactDOMScript = document.createElement("script");
  reactDOMScript.src =
    "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js";
  const reactBootstrap = document.createElement("script");
  reactBootstrap.src =
    "https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js";
  document.body.appendChild(reactScript);
  document.body.appendChild(reactDOMScript);
  document.body.appendChild(reactBootstrap);
  const avatarContainer = document.createElement("div");
  avatarContainer.setAttribute("id", "avatarContainer");
  if (WidgetData["bot-avatar"] != "None") {
    avatarContainer.appendChild(eval(WidgetData["bot-avatar"] + "Avatar"));
  }
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  const floatMessageDiv = document.createElement("div");
  floatMessageDiv.setAttribute("id", "floatMessageDiv");
  const floatMsg = document.createElement("p");
  floatMsg.setAttribute("id", "floatMsg");
  floatMsg.textContent = WidgetData["first-message"];
  floatMsg.setAttribute("style", "margin:0;padding:7px");
  floatMessageDiv.appendChild(floatMsg);
  const buttonText = document.createElement("p");
  buttonText.setAttribute("id", "buttonText");
  buttonText.textContent = WidgetData["button-text"];
  const supportButtonDiv = document.createElement("div");
  supportButtonDiv.setAttribute("id", "supportButtonDiv");
  const supportLink = document.createElement("a");
  supportLink.setAttribute("href", WidgetData["support-link"]);
  supportLink.setAttribute("target", "_blank");
  if (WidgetData["support-button-text"].length > 0) {
    supportLink.innerHTML = WidgetData["support-button-text"];
  } else {
    supportLink.innerHTML = WidgetData["support-link"];
  }
  if (WidgetData["support-link"]) {
    supportButtonDiv.appendChild(supportLink);
  }
  const button = document.createElement("div");
  button.setAttribute("id", "chatButton");
  button.appendChild(eval(WidgetData["widget-icon"]));
  if (WidgetData["show-button-text"]) {
    button.appendChild(buttonText);
  }
  const chatBox = document.createElement("div");
  chatBox.setAttribute("id", "chatBox");
  chatBox.style.display = "none";
  const chatHeader = document.createElement("div");
  chatHeader.setAttribute("id", "chatHeader");
  const chatHeaderContainer = document.createElement("div");
  chatHeaderContainer.setAttribute("id", "chatHeaderContainer");
  const heading = document.createElement("p");
  heading.setAttribute("id", "heading");
  heading.innerText = WidgetData["heading"];
  chatHeaderContainer.appendChild(heading);
  const subheading = document.createElement("p");
  heading.setAttribute("id", "subheading");
  subheading.innerText = WidgetData["subheading"];
  chatHeaderContainer.appendChild(subheading);
  const chatMessages = document.createElement("div");
  chatMessages.setAttribute("id", "chatMessages");
  if (WidgetData["bot-avatar"] != "None") {
    chatHeader.appendChild(avatarContainer);
  }
  chatHeader.appendChild(chatHeaderContainer);
  const chatInputContainer = document.createElement("div");
  chatInputContainer.setAttribute("id", "chatInputContainer");
  const chatInput = document.createElement("div");
  chatInput.setAttribute("id", "chatInput");
  chatInputBox = document.createElement("input");
  chatInputBox.setAttribute("type", "text");
  chatInputBox.setAttribute("placeholder", "Type your message here");
  const chatSendButton = document.createElement("div");
  chatSendButton.innerHTML = `
  <svg width="17" height="17" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.1032 3.93278L4.36385 1.06312C0.508577 -0.867868 -1.07376 0.714469 0.857227 4.56974L1.44055 5.73638C1.60817 6.07832 1.60817 6.47391 1.44055 6.81585L0.857227 7.97579C-1.07376 11.8311 0.501872 13.4134 4.36385 11.4824L10.1032 8.61275C12.6778 7.32542 12.6778 5.22011 10.1032 3.93278ZM7.93751 6.77562H4.31691C4.04202 6.77562 3.81405 6.54766 3.81405 6.27276C3.81405 5.99787 4.04202 5.7699 4.31691 5.7699H7.93751C8.21241 5.7699 8.44038 5.99787 8.44038 6.27276C8.44038 6.54766 8.21241 6.77562 7.93751 6.77562Z" fill="#D2D2D2"/>
  </svg>`;
  const sendPathElement = chatSendButton.querySelector("path");
  chatSendButton.addEventListener("mouseover", function () {
    sendPathElement.style.fill = "gray";
  });
  chatSendButton.addEventListener("mouseout", function () {
    sendPathElement.style.fill = "#D2D2D2";
  });
  const typingLoader1 = document.createElement("div");
  typingLoader1.classList.add("typing-loader");
  const typingLoader2 = document.createElement("div");
  typingLoader2.classList.add("typing-loader");
  const typingLoader3 = document.createElement("div");
  typingLoader3.classList.add("typing-loader");
  const loaderContainer = document.createElement("div");
  loaderContainer.classList.add("typing-loader-container");
  loaderContainer.appendChild(typingLoader1);
  loaderContainer.appendChild(typingLoader2);
  loaderContainer.appendChild(typingLoader3);
  const powerderBydiv = document.createElement("div");
  powerderBydiv.setAttribute("id", "powerderBydiv");
  powerderBydiv.setAttribute(
    "style",
    " gap:2px; border-top: 1px solid lightgray;  display: flex;justify-content: center;font-size:14px; padding:8px 5px"
  );
  powerderBydiv.style.display =
    WidgetData["show-branded-text"] != undefined
      ? WidgetData["show-branded-text"]
        ? "flex"
        : "none"
      : "flex";
  const poweredByText = document.createElement("span");
  poweredByText.textContent = "Powered by ";
  const boldText = document.createElement("b");
  boldText.textContent = "Measure My Size";
  powerderBydiv.appendChild(poweredByText);
  powerderBydiv.appendChild(boldText);
  document.body.appendChild(root);
  root.appendChild(button);
  if (WidgetData["first-message-pop-up"]) {
    root.appendChild(floatMessageDiv);
  }
  root.appendChild(chatBox);
  chatBox.appendChild(chatHeader);
  chatBox.appendChild(chatMessages);
  chatBox.appendChild(chatInputContainer);
  chatInputContainer.appendChild(chatInput);
  chatInputContainer.appendChild(powerderBydiv);
  chatInput.appendChild(chatInputBox);
  chatInput.appendChild(chatSendButton);
  const styles = `
  .typing-loader {
    display: none;
    margin-right: 10px;
    width: 0.4em;
    height: 0.4em;
    border-radius: 50%;
    background-color: #4a4a4a;
    animation: typing-loader-animation 0.8s infinite;
    margin-top: 4px;
  }
  .typing-loader:nth-child(2) {
    animation-delay: 0.2s;
  }

  .typing-loader:nth-child(3) {
    animation-delay: 0.4s;
  }
  .typing-loader-container {
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  @keyframes typing-loader-animation {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

`;
  const style = document.createElement("style");
  style.innerHTML = styles;
  loaderContainer.appendChild(style);
  floatMessageDiv.setAttribute(
    "style",
    "    background: white;max-width: 300px;position: fixed; bottom: 80px; align-items: center; padding: 0 5px 0 5px; background: #bbbb1; border-radius : 14px 14px 0 14px ; " +
      WidgetData["widget-alignment"] +
      ":50px; z-index: 2147483000;animation-name: floatAnimation; animation-duration: 3s; animation-timing-function: ease-in-out; animation-iteration-count: infinite;box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
  );
  var keyframes = `@keyframes floatAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}`;
  var styleElement = document.createElement("style");
  styleElement.innerHTML = keyframes;
  document.head.appendChild(styleElement);
  supportButtonDiv.setAttribute(
    "style",
    "padding: 10px; background:#E7EBF1; align-self:flex-end ; display:flex ; justify-content : end"
  );
  supportLink.setAttribute(
    "style",
    "padding: 2px 6px; background:#E7EBF1; border: 1px solid gray;  border-radius: 8px; align-self:flex-end ; text-decoration: none; color: gray; display:flex ; justify-content : center;min-width: 60px;font-size: 16px"
  );
  button.setAttribute(
    "style",
    "position: fixed; bottom: 20px; align-items: center; background: " +
      WidgetData["button-color"] +
      "; border: none; border-radius: 50px; box-shadow: 0 1px 6px 0 rgba(0,0,0,.06), 0 2px 32px 0 rgba(0,0,0,.16); cursor: pointer; display: flex; height: 3rem; justify-content: center; " +
      WidgetData["widget-alignment"] +
      ":20px; padding: 0 10px 0 10px; min-width: 2rem; z-index: 2147483000;"
  );
  if (!WidgetData["show-button-text"]) {
    button.style.height = "4rem";
    button.style.width = "4rem";
    button.style.padding = 0;
  }
  buttonText.setAttribute("style", "color: white; padding: 5px;margin: 0;");
  chatBox.setAttribute(
    "style",
    "filter: drop-shadow(0px 0px 6.60504px rgba(0, 0, 0, 0.04)) drop-shadow(0px 2.20168px 4.40336px rgba(0, 0, 0, 0.1)); border-radius:15px; z-index: 2147483000;position: fixed; display:none; bottom: 90px; " +
      WidgetData["widget-alignment"] +
      ":20px; width: 450px; background-color: #fff;"
  );
  function updateChatBoxWidth() {
    if (window.innerWidth <= 767) {
      chatBox.style.width = "320px";
    } else {
      chatBox.style.width = "430px";
    }
  }
  updateChatBoxWidth();
  window.addEventListener("resize", updateChatBoxWidth);
  avatarContainer.setAttribute(
    "style",
    "background: #a0aec0;width: 2.5rem;height:  2.5rem;border-radius: 100%;display: flex;justify-content: center;align-items: center;"
  );
  chatHeader.setAttribute(
    "style",
    "gap: 15px; display:flex; flex-direction:row;  border-radius: 15px 15px 0px 0px;font-size: 22px;font-weight: bold; display:flex;justify-content: flex-start;background:" +
      WidgetData["header-color"] +
      ";#408CFD;padding: 15px;"
  );
  heading.setAttribute(
    "style",
    "font-weight: bold;line-height: 1.2;color: white;font-size: 18px;margin:0"
  );
  subheading.setAttribute(
    "style",
    "line-height: 1.2;color: white;font-size: 14px;font-weight: 400;margin:0"
  );
  chatMessages.setAttribute(
    "style",
    "padding: 10px;overflow: auto;font-size;display: flex;flex-direction: column;background:#E7EBF1;height:" +
      screenHeight * 0.6 +
      "px"
  );
  const mediaQuery = window.matchMedia("(max-height: 500px)");
  const handleMediaQuery = (mq) => {
    if (mq.matches) {
      chatMessages.style.height = "150px";
    } else {
      chatMessages.style.height = screenHeight * 0.6 + "px";
    }
  };
  handleMediaQuery(mediaQuery);
  mediaQuery.addEventListener("change", handleMediaQuery);
  chatInputBox.setAttribute(
    "style",
    "font-size: 16px;margin-left: 10px;width: 100%;min-width: 0px;outline: 2px solid transparent;outline-offset: 2px;appearance: none;border: none;border-color: inherit;background: inherit; padding: 5px; "
  );
  chatInput.setAttribute(
    "style",
    "display: flex;width:100%;padding: 10px 0px;"
  );
  chatSendButton.setAttribute(
    "style",
    "padding: 6px;border-radius: 5px;display: flex;align-self: center;margin-right: 10px;"
  );
  button.addEventListener("click", function () {
    floatMessageDiv.style.display = "none";
    if (chatBox.style.display == "block") {
      chatBox.style.display = "none";
    } else {
      chatBox.style.display = "block";
    }
    if (isWidgetIcon) {
      button.innerHTML = "";
      button.appendChild(chevron);
      if (WidgetData["show-button-text"]) {
        button.appendChild(buttonText);
      }
      isWidgetIcon = false;
    } else {
      button.innerHTML = "";
      button.appendChild(eval(WidgetData["widget-icon"]));
      if (WidgetData["show-button-text"]) {
        button.appendChild(buttonText);
      }
      isWidgetIcon = true;
    }
  });
  chatMessages.addEventListener("click", function (event) {
    var target = event.target;
    if (target.tagName.toLowerCase() === "p") {
      var clickedMessage = target.innerText;
      chatInputBox.value = clickedMessage;
    }
  });
  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  function messageCall() {
    messageCallCount++;
    while (chatMessages.hasChildNodes() && checkFlag) {
      chatMessages.removeChild(chatMessages.firstChild);
    }
    checkFlag = false;
    if (!checkFlag && !chatMessages.hasChildNodes()) {
      const botMessage = document.createElement("div");
      botMessage.setAttribute(
        "style",
        "line-height: initial;font-size: 16px;color: " +
          WidgetData["bot-text-color"] +
          ";margin-bottom:7.52px;display: flex;align-self:flex-start;padding: 8px;max-width: 320px;background:  " +
          WidgetData["bot-background-color"] +
          ";    border-radius: 14px 14px 14px 0px;"
      );
      botMessage.innerText = WidgetData["first-message"];
      botMessage.classList.add("bot-message");
      chatMessages.appendChild(botMessage);
    }
    const message = chatInputBox.value;
    if (!message.trim()) {
      return;
    }
    const userMessage = document.createElement("div");
    userMessage.setAttribute(
      "style",
      "line-height: initial;border-radius: 14px 14px 0 14px;padding: 8px;font-size: 16px;color: " +
        WidgetData["user-text-color"] +
        ";margin-bottom:7.52px;display: flex;align-self:flex-end; max-width: 320px;background: " +
        WidgetData["user-background-color"] +
        ""
    );
    userMessage.innerText = message;
    userMessage.classList.add("user-message");
    chatMessages.appendChild(userMessage);
    chatMessages.appendChild(supportButtonDiv);
    typingLoader1.style.display = "inline-block";
    typingLoader2.style.display = "inline-block";
    typingLoader3.style.display = "inline-block";
    const loaderMessage = document.createElement("div");
    loaderMessage.setAttribute(
      "style",
      "line-height: initial;font-size: 14px;color: " +
        WidgetData["bot-text-color"] +
        ";margin-bottom:7.52px;display: flex;align-self:flex-start;padding: 15px; max-width: 320px;background:  " +
        WidgetData["bot-background-color"] +
        "; border-radius: 0px 10px 10px 10px;"
    );
    loaderMessage.appendChild(loaderContainer);
    loaderMessage.classList.add("loader-message");
    chatMessages.appendChild(loaderMessage);
    scrollToBottom();
    supportButtonDiv.style.display = "none";
    const eventSource = new EventSource(
      ask_Question_API +
        "?user_id=" +
        userid +
        "&query=" +
        message +
        "&bot_id=" +
        botid +
        "&role=" +
        chatRole +
        "&session_id=" +
        session_Id
    );
    eventSource.addEventListener("open", (event) => {
      typingLoader1.style.display = "none";
      typingLoader2.style.display = "none";
      typingLoader3.style.display = "none";
      chatInputBox.disabled = true;
      var lastChild = chatMessages.lastChild;
      if (lastChild) {
        chatMessages.removeChild(lastChild);
      }
    });
    const botMessageDiv = document.createElement("div");
    botMessageDiv.setAttribute(
      "style",
      "display: flex;flex-direction: column; line-height: initial;font-size: 16px; color: " +
        WidgetData["bot-text-color"] +
        ";margin-bottom:7.52px;display: flex;align-self:flex-start;padding: 8px;max-width: 320px;background:  " +
        WidgetData["bot-background-color"] +
        ";    border-radius: 14px 14px 14px 0px;"
    );
    botMessageDiv.style.minWidth =
      WidgetData["citations"] == "true" ? "200px" : "auto";
    botMessageDiv.classList.add("bot-message");
    eventSource.addEventListener("message", (event) => {
      chatMessages.appendChild(botMessageDiv);
      const newData = event.data;
      const validJsonString = newData.replace(/'([^']*)'/g, '"$1"');
      const String = validJsonString.replace(/'/g, '"');
      const jsonData = JSON.parse(String);
      const valueOfWe = jsonData.data;
      if (valueOfWe == "###finish###") {
        if (LeadsData) {
          const collectLeadsAfterMessage = parseInt(
            LeadsData["collect_leads_after_message"],
            10
          );
          if (
            !isNaN(collectLeadsAfterMessage) &&
            messageCallCount === collectLeadsAfterMessage
          ) {
            toggleLeadsFlag(true);
            chatMessages.appendChild(leadsMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
          } else {
            chatInputBox.disabled = false;
          }
        }
        if (!leadsFlag) {
          chatInputBox.disabled = false;
        }
        eventSource.close();
        if (WidgetData["citations"] == "true") {
          const arrow = document.createElement("span");
          arrow.innerText = "▼";
          arrow.style.marginRight = "5px";
          arrow.style.cursor = "pointer";
          fetch(BASE_URL + "/chatbot/citation?session_id=" + session_Id)
            .then((response) => response.json())
            .then((data) => {
              const source = document.createElement("span");
              source.innerText = "Source";
              source.appendChild(arrow);
              source.setAttribute(
                "style",
                "display: flex;margin-top: 5px;gap: 5px;"
              );
              botMessageDiv.appendChild(source);
              const anchorContainer = document.createElement("div");
              anchorContainer.setAttribute(
                "style",
                "display:none;flex-direction: column;margin-top:5px"
              );
              for (let i = 0; i < data.source_documents.length; i++) {
                const url = data.source_documents[i];
                const anchor = document.createElement("a");
                anchor.setAttribute("href", url);
                anchor.setAttribute("target", "_blank");
                anchor.setAttribute(
                  "style",
                  "font-size: 15px;text-decoration: none; color: " +
                    WidgetData["bot-text-color"]
                );
                const linkIcon = document.createElement("span");
                linkIcon.innerText = "🔗";
                linkIcon.style.marginRight = "5px";
                anchor.appendChild(linkIcon);
                anchor.appendChild(document.createTextNode(url));
                anchorContainer.appendChild(anchor);
              }
              arrow.addEventListener("click", function () {
                if (anchorContainer.style.display === "none") {
                  anchorContainer.style.display = "flex";
                  arrow.innerText = "▲";
                } else {
                  anchorContainer.style.display = "none";
                  arrow.innerText = "▼";
                }
              });
              botMessageDiv.appendChild(anchorContainer);
              chatMessages.scrollTop = chatMessages.scrollHeight;
            })
            .catch((err) => console.log(err));
        }
      } else {
        if (valueOfWe.includes("\n\n")) {
          botMessageDiv.innerHTML += valueOfWe + "<br><br>";
        } else {
          botMessageDiv.innerHTML += valueOfWe;
        }
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    });
    eventSource.addEventListener("error", (event) => {
      chatInputBox.disabled = false;
      typingLoader1.style.display = "none";
      typingLoader2.style.display = "none";
      typingLoader3.style.display = "none";
    });
    chatInputBox.value = "";
  }
  chatSendButton.addEventListener("click", () => {
    messageCall();
  });
  chatInputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      messageCall();
    }
  });
};
