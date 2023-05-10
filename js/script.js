const canvas=document.getElementById('canvas');
const CTX=canvas.getContext('2d');
CTX.fillStyle='green';
CTX.fillRect(10,10,150,100);

CTX.beginPath();
CTX.arc(400, 150, 150, 0, Math.PI*2);
CTX.fillStyle='purple';
CTX.fill();

CTX.beginPath();
CTX.moveTo(75, 50);
CTX.line.To(100, 75);
CTX.fill();
