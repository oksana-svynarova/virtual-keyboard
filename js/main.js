const CssClasses = {
  CONTAINER: "container",
  TITLE: "title",
  TEXTAREA: "textarea",
  TEXT: "text",
  WRAPPER: "wrapper",
  KEYBOARD: "keyboard",
  ROW: "row",
  KEY: "key",
  SPACE_KEY: "space_key",
  BACKSPACE_KEY: "backspace_key",
  TAB_KEY: "tab_key",
  DELETE_KEY: "delete_key",
  CAPS_LOCK_KEY: "caps-lock_key",
  ENTER_KEY: "enter_key",
  SHIFT_LEFT: "shift_left",
  SHIFT_RIGHT: "shift_right",
};

const ROWS = [
  {
    0: "`",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "0",
    11: "-",
    12: "=",
    13: "Backspace",
  },
  {
    0: "Tab",
    1: "q",
    2: "w",
    3: "e",
    4: "r",
    5: "t",
    6: "y",
    7: "u",
    8: "i",
    9: "o",
    10: "p",
    11: "[",
    12: "]",
    13: "Delete",
  },
  {
    0: "Caps Lock",
    1: "a",
    2: "s",
    3: "d",
    4: "f",
    5: "g",
    6: "h",
    7: "j",
    8: "k",
    9: "l",
    10: ";",
    11: "'",
    12: "Enter",
  },
  {
    0: "Shift",
    1: "z",
    2: "x",
    3: "c",
    4: "v",
    5: "b",
    6: "n",
    7: "m",
    8: ",",
    9: ".",
    10: "/",
    11: "↑",
    12: "Shift",
  },
  {
    0: "Ctrl",
    1: "Win",
    2: "Alt",
    3: "",
    4: "Alt",
    5: "←",
    6: "↓",
    7: "→",
    8: "Ctrl",
  },
];

function createElement(tagName, className, parentName) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  parentName.append(element);
  return element;
}

const section = createElement("main", CssClasses.CONTAINER, document.body);
const title = createElement("h1", CssClasses.TITLE, section);
const textarea = createElement("textarea", CssClasses.TEXTAREA, section);
const wrapper = createElement("wrapper", CssClasses.WRAPPER, section);
const text = createElement("p", CssClasses.TEXT, section);
const keyboard = createElement("section", CssClasses.KEYBOARD, wrapper);

for (let i = 0; i <= ROWS.length - 1; i += 1) {
  const row = createElement("div", CssClasses.ROW, keyboard);
  const countKeys = Object.keys(ROWS[i]).length;
  for (let j = 0; j <= countKeys - 1; j += 1) {
    const keyButton = createElement("button", CssClasses.KEY, row);
    keyButton.textContent = `${ROWS[i][j]}`;
    keyButton.setAttribute("keyName", `${ROWS[i][j]}`);
  }
}

const rows = [...keyboard.getElementsByClassName("row")];
const key = [...keyboard.getElementsByClassName("key")];
const spaceKey = keyboard.querySelector("button[keyName='']");
const shiftLeftKey = keyboard.querySelectorAll("button[keyName='Shift']")[0];
const shiftRightKey = keyboard.querySelectorAll("button[keyName='Shift']")[1];
const capsLockKey = keyboard.querySelector("button[keyName='Caps Lock']");
const enterKey = keyboard.querySelector("button[keyName='Enter']");
const deleteKey = keyboard.querySelector("button[keyName='Delete']");
const tabKey = keyboard.querySelector("button[keyName='Tab']");
const backspaceKey = keyboard.querySelector("button[keyName='Backspace']");
const ctrlLeftKey = keyboard.querySelectorAll("button[keyName='Ctrl']")[0];
const ctrlRightKey = keyboard.querySelectorAll("button[keyName='Ctrl']")[1];
const altLeftKey = keyboard.querySelectorAll("button[keyName='Alt']")[0];
const altRightKey = keyboard.querySelectorAll("button[keyName='Alt']")[1];

spaceKey.classList.add(CssClasses.SPACE_KEY);
shiftLeftKey.classList.add(CssClasses.SHIFT_LEFT);
shiftRightKey.classList.add(CssClasses.SHIFT_RIGHT);
capsLockKey.classList.add(CssClasses.CAPS_LOCK_KEY);
enterKey.classList.add(CssClasses.ENTER_KEY);
deleteKey.classList.add(CssClasses.DELETE_KEY);
tabKey.classList.add(CssClasses.TAB_KEY);
backspaceKey.classList.add(CssClasses.BACKSPACE_KEY);

title.textContent = "Virtual keyboard";
text.textContent = "It's developed in Windows OS";
