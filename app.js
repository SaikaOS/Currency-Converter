const amount_one = document.querySelector(".amount_one");
const amount_two = document.querySelector(".amount_two");
const select_one = document.querySelector(".select_one");
const select_two = document.querySelector(".select_two");
const allSelects = document.querySelectorAll("select");
const rateDiv = document.querySelector(".rate");
const swapBtn = document.querySelector(".swap");
const surprise = document.querySelector(".surprise");
const wrapper = document.querySelector(".wrapper");
const currencyFlag = document.querySelector(".currency-flag");

const BASE_API = "9ad8ecdfea02849b9faaed63";
let currentTheme = "sun";

function display() {
  axios
    .get(
      `https://v6.exchangerate-api.com/v6/${BASE_API}/latest/${select_one.value}`
    )
    .then((response) => {
      let rate = response.data.conversion_rates[select_two.value];
      amount_two.value = (amount_one.value * rate).toFixed(2);
      rateDiv.innerText = `1 ${select_one.value} = ${rate} ${select_two.value}`;
    });
}

function changeTheme() {
  document.body.classList.toggle("dark");
  if (currentTheme === "dark") {
    surprise.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 128 128"><path fill="#3C2B24" d="M99.92 64.57H28.08C20.34 64.57 14 71.51 14 79.99s6.34 15.42 14.08 15.42h71.84c7.75 0 14.08-6.94 14.08-15.42s-6.34-15.42-14.08-15.42z"></path><linearGradient id="IconifyId18132e248b78243237" x1="64" x2="64" y1="97.388" y2="34.579" gradientTransform="matrix(1 0 0 -1 0 128)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E0E0E0"></stop><stop offset="1" stop-color="#9E9E9E"></stop></linearGradient><path fill="url(#IconifyId18132e248b78243237)" d="M117.14 50.27c-.52-8.56-4.29-13.6-9.56-16.38c-4.18-2.21-9.3-3-14.5-3H34.92c-5.2 0-10.34.79-14.52 3c-5.26 2.79-9.02 7.83-9.54 16.39c-.7 11.48 3.7 21.66 10.59 26.5c2.64 1.87 5.66 2.94 8.89 2.99c.09.01.17.01.26.01c.12 0 .25 0 .37-.01H97.4c3.32 0 6.42-1.08 9.13-2.99c6.9-4.83 11.31-15.02 10.61-26.51z"></path><path fill="#70534A" d="M64 12.21c-34.67 0-44.06 24.4-44.06 59.52c0 34.93 17.06 52.2 44.06 52.2s44.06-17.27 44.06-52.2c0-35.12-9.39-59.52-44.06-59.52z"></path><path fill="#4A2F27" d="M40.63 105.31c-.38 0-.77-.15-1.06-.44a1.49 1.49 0 0 1 0-2.12l9.53-9.53c.59-.59 1.53-.59 2.12 0s.59 1.54 0 2.12l-9.53 9.53c-.29.29-.68.44-1.06.44zm46.74 0c-.38 0-.77-.15-1.06-.44l-9.53-9.53c-.59-.59-.59-1.54 0-2.12s1.54-.59 2.12 0l9.53 9.53c.59.59.59 1.54 0 2.12c-.29.29-.68.44-1.06.44zM42.91 90.5c-2.63 0-5.27-.85-7.28-2.54c-.63-.53-.71-1.48-.18-2.11c.53-.63 1.48-.71 2.11-.18c2.95 2.49 7.74 2.49 10.69 0c.63-.54 1.58-.46 2.11.18c.53.63.46 1.58-.18 2.11c-2 1.69-4.63 2.54-7.27 2.54zm42.18 0c-2.64 0-5.27-.85-7.28-2.54c-.63-.53-.71-1.48-.18-2.11c.53-.63 1.48-.71 2.11-.18c2.95 2.49 7.74 2.49 10.69 0c.63-.54 1.58-.46 2.11.18c.54.63.46 1.58-.18 2.11c-2 1.69-4.63 2.54-7.27 2.54zM42.98 54.37c-.6 0-1.16-.36-1.4-.95a1.5 1.5 0 0 1 .84-1.95c.37-.15 9.1-3.54 21.24-3.54c12.13 0 21.49 3.39 21.88 3.53c.78.29 1.18 1.15.89 1.92a1.5 1.5 0 0 1-1.93.89c-.09-.03-9.28-3.35-20.84-3.35c-11.58 0-20.05 3.3-20.14 3.33c-.17.09-.36.12-.54.12zm35.99-8.41c-.15 0-.3-.02-.45-.07c-.07-.02-6.86-2.14-14.52-2.14s-14.45 2.12-14.52 2.14a1.498 1.498 0 1 1-.9-2.86c.29-.09 7.28-2.28 15.42-2.28s15.13 2.19 15.42 2.28a1.498 1.498 0 0 1-.45 2.93z"></path><g fill="#1A1717"><ellipse cx="42.44" cy="77.34" rx="6.48" ry="6.71"></ellipse><ellipse cx="85.69" cy="77.34" rx="6.48" ry="6.71"></ellipse></g><path fill="#33251F" d="M69.07 89.56a1.63 1.63 0 0 0-.42-.11h-9.3c-.14.02-.28.05-.42.11c-.84.34-1.31 1.22-.91 2.14c.4.93 2.25 3.54 5.98 3.54s5.58-2.61 5.98-3.54s-.06-1.8-.91-2.14z"></path><path fill="#1A1717" d="M75.01 99.97c-4.19 2.49-17.91 2.49-22.1 0c-2.4-1.43-4.86.76-3.86 2.94c.98 2.15 8.47 7.13 14.95 7.13c6.47 0 13.87-4.98 14.85-7.13c.99-2.19-1.43-4.37-3.84-2.94z"></path><path fill="#9E9E9E" d="M52.53 64.89c-1.27-1.91-4.23-4.69-9.95-4.69s-8.68 2.78-9.96 4.69a2.21 2.21 0 0 0-.03 2.41c.36.55 1.43 1.06 2.62.6s3.5-1.81 7.37-1.84c3.87.03 6.19 1.38 7.37 1.84c1.18.46 2.25-.05 2.62-.6c.39-.59.53-1.57-.04-2.41zm42.94 0c-1.27-1.91-4.23-4.69-9.96-4.69s-8.68 2.78-9.96 4.69a2.21 2.21 0 0 0-.03 2.41c.36.55 1.43 1.06 2.62.6s3.5-1.81 7.37-1.84c3.87.03 6.18 1.38 7.37 1.84c1.18.46 2.25-.05 2.62-.6c.39-.59.53-1.57-.03-2.41z"></path></svg>';
    wrapper.style.background = "white";
    currentTheme = "sun";
  } else {
    surprise.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 128 128"><path fill="#EDC391" d="M99.92 64.57H28.08C20.34 64.57 14 71.51 14 79.99s6.34 15.42 14.08 15.42h71.84c7.75 0 14.08-6.94 14.08-15.42s-6.34-15.42-14.08-15.42z"></path><linearGradient id="IconifyId18132e248b78243239" x1="64" x2="64" y1="97.388" y2="34.579" gradientTransform="matrix(1 0 0 -1 0 128)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E0E0E0"></stop><stop offset="1" stop-color="#9E9E9E"></stop></linearGradient><path fill="url(#IconifyId18132e248b78243239)" d="M117.14 50.27c-.52-8.56-4.29-13.6-9.56-16.38c-4.18-2.21-9.3-3-14.5-3H34.92c-5.2 0-10.34.79-14.52 3c-5.26 2.79-9.02 7.83-9.54 16.39c-.7 11.48 3.7 21.66 10.59 26.5c2.64 1.87 5.66 2.94 8.89 2.99c.09.01.17.01.26.01c.12 0 .25 0 .37-.01H97.4c3.32 0 6.42-1.08 9.13-2.99c6.9-4.83 11.31-15.02 10.61-26.51z"></path><path fill="#F9DDBD" d="M64 12.21c-34.67 0-44.06 24.4-44.06 59.52c0 34.93 17.06 52.2 44.06 52.2s44.06-17.27 44.06-52.2c0-35.12-9.39-59.52-44.06-59.52z"></path><path fill="#EDBD82" d="M40.63 105.31c-.38 0-.77-.15-1.06-.44a1.49 1.49 0 0 1 0-2.12l9.53-9.53c.59-.59 1.53-.59 2.12 0s.59 1.54 0 2.12l-9.53 9.53c-.29.29-.68.44-1.06.44zm46.74 0c-.38 0-.77-.15-1.06-.44l-9.53-9.53c-.59-.59-.59-1.54 0-2.12s1.54-.59 2.12 0l9.53 9.53c.59.59.59 1.54 0 2.12c-.29.29-.68.44-1.06.44zM42.91 90.5c-2.63 0-5.27-.85-7.28-2.54c-.63-.53-.71-1.48-.18-2.11c.53-.63 1.48-.71 2.11-.18c2.95 2.49 7.74 2.49 10.69 0c.63-.54 1.58-.46 2.11.18c.53.63.46 1.58-.18 2.11c-2 1.69-4.63 2.54-7.27 2.54zm42.18 0c-2.64 0-5.27-.85-7.28-2.54c-.63-.53-.71-1.48-.18-2.11c.53-.63 1.48-.71 2.11-.18c2.95 2.49 7.74 2.49 10.69 0c.63-.54 1.58-.46 2.11.18c.54.63.46 1.58-.18 2.11c-2 1.69-4.63 2.54-7.27 2.54zM42.98 54.37c-.6 0-1.16-.36-1.4-.95a1.5 1.5 0 0 1 .84-1.95c.37-.15 9.1-3.54 21.24-3.54c12.13 0 21.49 3.39 21.88 3.53c.78.29 1.18 1.15.89 1.92a1.5 1.5 0 0 1-1.93.89c-.09-.03-9.28-3.35-20.84-3.35c-11.58 0-20.05 3.3-20.14 3.33c-.17.09-.36.12-.54.12zm35.99-8.41c-.15 0-.3-.02-.45-.07c-.07-.02-6.86-2.14-14.52-2.14s-14.45 2.12-14.52 2.14a1.498 1.498 0 1 1-.9-2.86c.29-.09 7.28-2.28 15.42-2.28s15.13 2.19 15.42 2.28a1.498 1.498 0 0 1-.45 2.93z"></path><g fill="#312D2D"><ellipse cx="42.44" cy="77.34" rx="6.48" ry="6.71"></ellipse><ellipse cx="85.69" cy="77.34" rx="6.48" ry="6.71"></ellipse></g><path fill="#DBA689" d="M69.07 89.56a1.63 1.63 0 0 0-.42-.11h-9.3c-.14.02-.28.05-.42.11c-.84.34-1.31 1.22-.91 2.14c.4.93 2.25 3.54 5.98 3.54s5.58-2.61 5.98-3.54s-.06-1.8-.91-2.14z"></path><path fill="#444" d="M75.01 99.97c-4.19 2.49-17.91 2.49-22.1 0c-2.4-1.43-4.86.76-3.86 2.94c.98 2.15 8.47 7.13 14.95 7.13c6.47 0 13.87-4.98 14.85-7.13c.99-2.19-1.43-4.37-3.84-2.94z"></path><path fill="#9E9E9E" d="M52.53 64.89c-1.27-1.91-4.23-4.69-9.95-4.69s-8.68 2.78-9.96 4.69a2.21 2.21 0 0 0-.03 2.41c.36.55 1.43 1.06 2.62.6s3.5-1.81 7.37-1.84c3.87.03 6.19 1.38 7.37 1.84c1.18.46 2.25-.05 2.62-.6c.39-.59.53-1.57-.04-2.41zm42.94 0c-1.27-1.91-4.23-4.69-9.96-4.69s-8.68 2.78-9.96 4.69a2.21 2.21 0 0 0-.03 2.41c.36.55 1.43 1.06 2.62.6s3.5-1.81 7.37-1.84c3.87.03 6.18 1.38 7.37 1.84c1.18.46 2.25-.05 2.62-.6c.39-.59.53-1.57-.03-2.41z"></path></svg>';
    wrapper.style.background = "rgb(214, 90, 49)";
    currentTheme = "dark";
  }
}

function dropFlag(el, select) {
  if (select.value == el.value) {
    let imgFlag = el.parentElement.querySelector(".flag");
    imgFlag.src = `flags/${select.value}.png`;
  }
}

allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    dropFlag(e.target, select);
    display();
  });
});

amount_one.addEventListener("input", display);
amount_two.addEventListener("input", display);
surprise.addEventListener("click", changeTheme);

let first_flag = select_one.parentElement.querySelector(".first_flag");
let second_flag = select_two.parentElement.querySelector(".second_flag");

swapBtn.addEventListener("click", () => {
  const temp = select_one.value;
  select_one.value = select_two.value;
  select_two.value = temp;
  const temp2 = first_flag.src
  first_flag.src = second_flag.src
  second_flag.src = temp2;
  display();
});

changeTheme();
display();
