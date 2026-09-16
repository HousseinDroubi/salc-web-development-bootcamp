const input_key = document.getElementById("input_key");
const input_value = document.getElementById("input_value");
const input_time_to_live = document.getElementById("input_time_to_live");
const value_text = document.getElementById("value_text");
const button_add = document.getElementById("button_add");
const button_show = document.getElementById("button_show");
const button_remove = document.getElementById("button_remove");

const addToStorage = () => {
    const key = input_key.value;
    const value = input_value.value;
    const time_to_live = 60 * 60 * 24 * input_time_to_live.value;
    document.cookie = `${key}=${value}; max-age=${time_to_live}`;
};

const removeFromStorage = () => {
    const key = input_key.value;
    document.cookie = `${key}=null; max-age=${0}`;
};

const showFromStorage = () => {
    const key = input_key.value;
    const cookies = decodeURIComponent(document.cookie);

    const array = cookies.split("; "); 

    const index = array.findIndex((element) => element.split("=")[0] === key);
    let value;
    if (!((array.length == 1 && array[0] == "") || index == -1))
        value = array[index].split("=")[1];
    else value = "";
        value_text.innerText = value;
};


button_add.addEventListener("click", addToStorage);
button_remove.addEventListener("click", removeFromStorage);
button_show.addEventListener("click", showFromStorage);