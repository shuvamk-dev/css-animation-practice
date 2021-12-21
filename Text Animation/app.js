const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < 10; i++) {
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}
