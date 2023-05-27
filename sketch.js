// Click izquierdo para cambiar de forma aleatoria los colores
// Mantener click derecho para hacer "eso"

function setup() {
  createCanvas(700,696)
  //fondo
    bg = loadImage('le-parc.jpg')
  
  
}

  // Lista de colores
    
    let colores = [
      {
      "colorRed" : 100,
      "colorGreen" : 200,
      "colorBlue" : 130
    }, {
      "colorRed" : 75,
      "colorGreen" : 150,
      "colorBlue" : 75
    }, {
      "colorRed" : 50,
      "colorGreen" : 100,
      "colorBlue" : 30
    },  {
      "colorRed" : 0,
      "colorGreen" : 50,
      "colorBlue" : 75
    },  {
      "colorRed" : 50,
      "colorGreen" : 100,
      "colorBlue" : 150
    },  {
      "colorRed" : 100,
      "colorGreen" : 0,
      "colorBlue" : 50
    },  {
      "colorRed" : 125,
      "colorGreen" : 25,
      "colorBlue" : 75
    },  {
      "colorRed" : 150,
      "colorGreen" : 50,
      "colorBlue" : 75
    },  {
      "colorRed" : 200,
      "colorGreen" : 50,
      "colorBlue" : 75
    },  {
      "colorRed" : 200,
      "colorGreen" : 75,
      "colorBlue" : 100
    },  {
      "colorRed" : 220,
      "colorGreen" : 150,
      "colorBlue" : 50
    },  {
      "colorRed" : 225,
      "colorGreen" : 175,
      "colorBlue" : 25
    },  {
      "colorRed" : 250,
      "colorGreen" : 200,
      "colorBlue" : 5
    },  {
      "colorRed" : 150,
      "colorGreen" : 200,
      "colorBlue" : 75
    },  {
      "colorRed" : 125,
      "colorGreen" : 200,
      "colorBlue" : 100
    },  {
      "colorRed" : 100,
      "colorGreen" : 200,
      "colorBlue" : 130
    }, 
    ] 
    


  function draw(){ 
    background(bg) ;
    
    scale(0.85)
    
  
    // ancho de linea
  strokeWeight(50);
    
    // Agregar color
    
        if (mouseIsPressed) {
          
          if (mouseButton == LEFT) {
          
      let colorRandom = {
        "colorRed" : Math.floor(Math.random() * 255),
        "colorGreen" : Math.floor(Math.random() * 255),
        "colorBlue" : Math.floor(Math.random() * 255)
      }    
      colores.unshift(colorRandom);                     
     } 
    }
    
     
    
    
  
  // circunferencia y su color
   
    
    stroke(colores[0].colorRed, 
          colores[0].colorGreen,
          colores [0].colorBlue, 250); 
    ellipse(410, 410, 750, 750);
    
  
  stroke(colores[1].colorRed, 
          colores[1].colorGreen,
          colores [1].colorBlue, 240);
  ellipse(410, 410, 700, 750);
    
  
  stroke(colores[2].colorRed, 
          colores[2].colorGreen,
          colores [2].colorBlue, 240);
   ellipse(410, 410, 650, 750);
  
  stroke(colores[3].colorRed, 
          colores[3].colorGreen,
          colores [3].colorBlue, 240);
   ellipse(410, 410, 600, 750);
  
  stroke(colores[4].colorRed, 
          colores[4].colorGreen,
          colores [4].colorBlue, 240);
   ellipse(410, 410, 550, 750);
  
  stroke(colores[5].colorRed, 
          colores[5].colorGreen,
          colores [5].colorBlue, 240);
   ellipse(410, 410, 500, 750);
  
   stroke(colores[6].colorRed, 
          colores[6].colorGreen,
          colores [6].colorBlue, 240);
   ellipse(410, 410, 450, 750);
  
  stroke(colores[7].colorRed, 
          colores[7].colorGreen,
          colores [7].colorBlue, 245);
   ellipse(410, 410, 400, 750);
  
  stroke(colores[8].colorRed, 
          colores[8].colorGreen,
          colores [8].colorBlue, 240);
   ellipse(410, 410, 350, 750);
  
  stroke(colores[9].colorRed, 
          colores[9].colorGreen,
          colores [9].colorBlue, 240);
  ellipse(410, 410, 300, 750);
  
  stroke(colores[10].colorRed, 
          colores[10].colorGreen,
          colores [10].colorBlue, 240);
  ellipse(410, 410, 250, 750);
  
  stroke(colores[11].colorRed, 
          colores[11].colorGreen,
          colores [11].colorBlue, 240);
  ellipse(410, 410, 200, 750);
  
  stroke(colores[12].colorRed, 
          colores[12].colorGreen,
          colores [12].colorBlue, 240);
  ellipse(410, 410, 150, 750);
  
   stroke(colores[13].colorRed, 
          colores[13].colorGreen,
          colores [13].colorBlue, 240);
  ellipse(410, 410, 100, 750);
  
  stroke(colores[14].colorRed, 
          colores[14].colorGreen,
          colores [14].colorBlue, 240);
  ellipse(410, 410, 50, 750);
    
     strokeWeight(30);
    
  
  stroke(colores[15].colorRed, 
         colores[15].colorGreen,
          colores [15].colorBlue, 240);
  ellipse(410, 410, 1, 750);
    
    
     
        if (mouseIsPressed) {
          
           
             
          
          if (mouseButton == RIGHT) {
            push()
             background(bg) ; 
          pop()
            
           push() 
            
            scale(5)
            
           translate(100,100);
            
            var angulo = mouseX/10 
            
            rotate(angulo);
            
             for (var x = 20; x < width; x += 20) {
    var mx = mouseX / 10;
    var desplazamientoA = random(-mx, mx);
    var desplazamientoB = random(-mx, mx);
    
            fill(255, 0)
    stroke(colores[0].colorRed, 
          colores[0].colorGreen,
          colores [0].colorBlue, 25); 
    ellipse(desplazamientoA, desplazamientoB, 750, 750);
    
  
  stroke(colores[1].colorRed, 
          colores[1].colorGreen,
          colores [1].colorBlue, 25);
  ellipse(desplazamientoA, desplazamientoB, 700, 750);
    
  
  stroke(colores[2].colorRed, 
          colores[2].colorGreen,
          colores [2].colorBlue, 25);
   ellipse(desplazamientoA, desplazamientoB, 650, 750);
  
  stroke(colores[3].colorRed, 
          colores[3].colorGreen,
          colores [3].colorBlue, 25);
   ellipse(desplazamientoA, desplazamientoB, 600, 750);
  
  stroke(colores[4].colorRed, 
          colores[4].colorGreen,
          colores [4].colorBlue, 25);
   ellipse(desplazamientoA, desplazamientoB, 550, 750);
  
  stroke(colores[5].colorRed, 
          colores[5].colorGreen,
          colores [5].colorBlue, 25);
   ellipse(desplazamientoA, desplazamientoB, 500, 750);
  
   stroke(colores[6].colorRed, 
          colores[6].colorGreen,
          colores [6].colorBlue, 25);
   ellipse(desplazamientoA, desplazamientoB, 450, 750);
  
  stroke(colores[7].colorRed, 
          colores[7].colorGreen,
          colores [7].colorBlue, 25);
   ellipse(desplazamientoA, desplazamientoB, 400, 750);
  
  stroke(colores[8].colorRed, 
          colores[8].colorGreen,
          colores [8].colorBlue, 25);
   ellipse(desplazamientoA, desplazamientoB, 350, 750);
  
  stroke(colores[9].colorRed, 
          colores[9].colorGreen,
          colores [9].colorBlue, 25);
  ellipse(desplazamientoA, desplazamientoB, 300, 750);
  
  stroke(colores[10].colorRed, 
          colores[10].colorGreen,
          colores [10].colorBlue, 25);
  ellipse(desplazamientoA, desplazamientoB, 250, 750);
  
  stroke(colores[11].colorRed, 
          colores[11].colorGreen,
          colores [11].colorBlue, 25);
  ellipse(desplazamientoA, desplazamientoB, 200, 750);
  
  stroke(colores[12].colorRed, 
          colores[12].colorGreen,
          colores [12].colorBlue, 25);
  ellipse(desplazamientoA, desplazamientoB, 150, 750);
  
   stroke(colores[13].colorRed, 
          colores[13].colorGreen,
          colores [13].colorBlue,25);
  ellipse(desplazamientoA, desplazamientoB, 100, 750);
  
  stroke(colores[14].colorRed, 
          colores[14].colorGreen,
          colores [14].colorBlue,25);
  ellipse(desplazamientoA, desplazamientoB, 50, 750);
    
     strokeWeight(30);
    
  
  stroke(colores[15].colorRed, 
         colores[15].colorGreen,
          colores [15].colorBlue, 25);
  ellipse(desplazamientoA, desplazamientoB, 1, 750);
                  
            }
    
        pop()
     } 
  	
  }
    
}