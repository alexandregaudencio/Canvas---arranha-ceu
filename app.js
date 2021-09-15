var xBuffer = 0;
bgColor = "#ffffff";

//array com cores pré definidas
var buildingColors = [
 "#6a040f",'#dc2f02', "#370617",'#6a040f',
 '#f48c06', '#6a040f', '#ffba08', '#6a040f'
]

//armazena uma posição no eixo x para acréscimo posterior quando invocado a posição x de objeto retangular no DrawBuildings
function BufferX(x) {
    xBuffer+= x;
}

//Constrói retângulos a estrutura dos prédios e janelas.
function DrawBuilding(color, xScale, altura) {
    var canvas = document.querySelector("#canvas-id");
    var context = canvas.getContext('2d');
    context.fillStyle = color;
    context.fillRect(xBuffer, 100-altura, xScale, 300);
    DrawWindows(xBuffer,100-altura, xScale);
    BufferX(xScale);
}

//constrói a estrutura dos prédios com cores, larguras e alturas randomizadas.
function DrawBoxContructions() {
    for(var i = 1; i < 10; i++) {
        DrawBuilding(buildingColors[Math.floor(Math.random()*buildingColors.length)],
        40+RandomInterval(20), 
        40+Math.round(RandomInterval(4)*10));
    }
}

//Desenhajanelas com posições e escalas dimensionadas de acordo com cada estrutura de construções.
function DrawWindows(BoxPosX, posY, xScale) {
    var canvas = document.querySelector("#canvas-id");
    var context = canvas.getContext('2d');
    context.fillStyle = bgColor;

    for(var i = 1; i < 15; i++) {
        context.fillRect(BoxPosX+(0.2)*xScale,posY+0.3*xScale*i-5, 0.2*xScale, 0.2*xScale);
        context.fillRect(BoxPosX+(0.6)*xScale,posY+0.3*xScale*i-5, 0.2*xScale, 0.2*xScale);
    }
}


//Desenha estrelas com posições randomizadas
function DrawStars() {
    
    var canvas = document.querySelector("#canvas-id");
    var context = canvas.getContext('2d');

    for(var i = 0; i < 20; i++) {
        for(var j = 0; j < 20; j++) {
            context.beginPath();
            context.fillStyle = "white";
            context.arc(20*i+RandomInterval(10),20*j+RandomInterval(10),1,0, Math.PI*2);
            context.fill();
        }
    }
}

// Desenha uma estrada
function DrawStreet() {
    var canvas = document.querySelector("#canvas-id");
    var context = canvas.getContext('2d');
    context.fillStyle = '#555555';
    context.beginPath();
    context.fillRect(0, 140, 1000, 20);    

}

//método com retorno de um número aleatório com indo ao extremo inteiro de um argumento
function RandomInterval(dimension) {
    return (Math.random() - Math.random())*dimension;
}


//Carrega as estrelas, construções e estradas quando o documento HTML é carregado
onload = function() {
    DrawStars();
    DrawBoxContructions();
    DrawStreet();
    
}