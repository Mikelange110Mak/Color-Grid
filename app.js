const board = document.querySelector('#board'),
   SQARES_NUMBER = 500, //количество квадратиков
   colors = ['#1DF5A0', '#26C888', '#0BFFCF', '#25B89B', '#0AF1E0', '#2BB2A8', '#11DFF8', '#26A6B5', '#0EB9EC', '#227B95', '#189AF4', '#296B98', '#0B66E9', '#224D8B', '#0E46DC'];

for (let i = 0; i < SQARES_NUMBER; i++) {
   const square = document.createElement('div');  //добавить квадратик
   square.classList.add('square') //назначить квадратику класс
   board.append(square); //заапендить квадратик

   square.addEventListener('mouseover', setColor)

   square.addEventListener('mouseleave', removeColor)

}

function setColor(e) {
   const color = getRandomColor()
   const el = e.target
   el.style.backgroundColor = color;
   el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
   const el = e.target
   el.style.backgroundColor = '#1d1d1d';
   el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)];
}