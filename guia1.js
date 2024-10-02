window.onload = function() {
    let canvas =
    document.getElementById("thelostcanvas");
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext ("2d");
        if (ctx){

            // Definimos los colores
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "#ff0000";
            ctx.lineWidth = 5;

            //x, y, w, h
            ctx.fillStyle(50,50,100,100);
            ctx.fillRect(50,50,100,100);

            // Crear un segundo cuadro
            ctx.fillStyle = "rgb(0,42,255)";
            ctx.fillRect(200,50,100,100);
            ctx.strokeRect(200,50,100,100);
            
        
        }else{
            alert("Navegador no soporta canvas 2D");
        }

    }
    
}