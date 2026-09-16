const input_key = document.getElementById("input_key");
const input_value = document.getElementById("input_value");
const value_text = document.getElementById("value_text");
const button_add = document.getElementById("button_add");
const button_show = document.getElementById("button_show");
const button_remove = document.getElementById("button_remove");
const button_clear = document.getElementById("button_clear");

const addToStorage = () => {
    const key = input_key.value;
    const value = input_value.value;
    sessionStorage.setItem(key, value);
};

const removeFromStorage = () => {
    const key = input_key.value;
    sessionStorage.removeItem(key);
};

const showFromStorage = () => {
    const key = input_key.value;
    const value = sessionStorage.getItem(key);
    value_text.innerText = value;
};

const clearStorage = () => {
    sessionStorage.clear();
};

button_add.addEventListener("click", addToStorage);
button_remove.addEventListener("click", removeFromStorage);
button_show.addEventListener("click", showFromStorage);
button_clear.addEventListener("click", clearStorage);