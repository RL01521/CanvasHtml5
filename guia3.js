window.onload = function() {
    let canvas =
    document.getElementById("thelostcanvas");
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext ("2d");
        if (ctx){
            ctx.lineWidth = 15;
            ctx.strokeStyle = "yellow"

            ctx.beginPath();
            ctx.moveTo(50,100);
            ctx.lineTo(100,50);
            ctx.lineTo(150,100);
            ctx.lineTo(100,150);
            ctx.stroke();

            // Crear otra linea 
            ctx.beginPath();
            ctx.moveTo(200,100);
            ctx.lineTo(250,50);
            ctx.lineTo(300,100);
            ctx.lineTo(250,150);
            ctx.closePath();
            ctx.stroke();
        


        }else{
            alert("Navegador no soporta canvas 2D");
        }

    }
    
}