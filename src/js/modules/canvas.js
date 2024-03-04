import { Column } from "./column.js";

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const container = document.querySelector('#container-education');
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;


const fontSize = 10;

context.font = `bold ${fontSize}px monospace`;


const columns = [];

const columnCount = canvas.width/fontSize;
for(let i = 0; i < columnCount; i++) {
    columns.push(new Column(i * fontSize, fontSize, canvas.height, context))
}


const column = new Column(100, fontSize, canvas.height, context);

function animate() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "green";
    columns.forEach(column =>column.drawSymbol() );

    setTimeout(() => requestAnimationFrame(animate), 50);
}
export default animate;