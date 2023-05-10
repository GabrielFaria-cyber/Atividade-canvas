const canvas=document.getElementById('canvas');
const CTX=canvas.getContext('2d');
CTX.fillStyle='green';
CTX.fillRect(10,10,150,100);

CTX.beginPath();
CTX.arc(400, 150, 150, 0, Math.PI*2);
CTX.fillStyle='purple';
CTX.fill();

CTX.beginPath();
CTX.arc(75, 300, 50, 0, Math.PI * 2, true); // Círculo exterior
CTX.moveTo(110, 300);
CTX.arc(75, 300, 35, 0, Math.PI, false);  // Boca (sentido horário)
CTX.moveTo(65, 290);
CTX.arc(60, 290, 5, 0, Math.PI * 2, true);  // Olho esquerdo
CTX.moveTo(95, 290);
CTX.arc(90, 290, 5, 0, Math.PI * 2, true);  // Olho direito
CTX.stroke();


