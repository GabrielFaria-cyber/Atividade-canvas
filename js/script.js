const canvas=document.getElementById('canvas');
const CTX=canvas.getContext('2d');
CTX.fillStyle='green';
CTX.fillRect(10,10,150,100);

CTX.beginPath();
CTX.arc(400, 150, 150, 0, Math.PI*2);
CTX.fillStyle='purple';
CTX.fill();

CTX.beginPath();
CTX.fillRect(20, 20);
CTX.fillStyle='blue';
