# Atividade-canvas

## HTML
Foi adicionado a estrutura básica do html com o "canvas".
Puxamos o javascript para o html.

## CSS
Foi adicionada uma borda de 4px.

## JavaScript
° Puxamos do html o elemento canvas e colocamos ele no contexto 2d;

° A variável "canvas" está sendo utilizada para criar um retângulo verde.
    -> para criação usamos: FillRect para definir o tamanho e o FillStyle para colorir.
    
° Criamos um circulo usando:
    -> beginPath para criar o objeto; O arc para definir a posição e tamanho; FillStyle para colorir e Fill para preencher.
    
° Criação da carinha: 
    -> criamos o objeto com o beginPath; Com a função arc foi usada para definir os círculos(os olhos, o rosto e a boca); MoveTo alterou as posições de cada circulo e curva;

º Para fazer uma linha: 
    -> beginPath para criar o objeto; MoveTo foi para especificar o ponto na tela ;Com o lineTo definimos a o ponto inicial e final, com o stroke desenhamos o caminho na tela.

° Arco:

    -> usa-se o arc para criar metade do círculo, entre os parênteses tem as coordenadas de x, y, raio, angulo e Math.PI; com o stroke desenhamos o arco na tela.

° colocando a imagem: 
    -> "let img=new image" é uma variável para chamar uma imagem; scr para encontrar a imagem dentro da pasta selecionada; Listener carrega a imagem na página e o drawImage um método para renderizá-lo na tela.
    
   
   <img src="img/image.png"/>
    
![ft breakout guia](https://github.com/GabrielFaria-cyber/Atividade-canvas/assets/127872183/e4e2a5f5-7536-459e-8850-cd9915a90e49)
![breakout](https://github.com/GabrielFaria-cyber/Atividade-canvas/assets/127872183/93503e68-1476-442c-92ce-346abe2cf728)
![breakout-antigo](https://github.com/GabrielFaria-cyber/Atividade-canvas/assets/127872183/a4b9ce84-6ea8-4cec-bf1a-655b2e1411aa)

![3bfe5b85-f1b3-448d-8f05-7afd7d906e04](https://github.com/user-attachments/assets/76601497-79ca-470a-b24f-7ce9930c7e47)

