window.onload = function() {
    let canvas =
    document.getElementById("thelostcanvas");
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext ("2d");
        if (ctx){
            ctx.lineWidth = 25;
            ctx.strokeStyle = "yellow"

            // iniciamos el arco
            ctx.beginPath();


            // 7,x, radio, angulo de salida, angulo de finalización
            ctx.arc(100,150,50, 1.1*Math.PI,1.9*Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(250,150,50, 1.1*Math.PI, 1.9 *Math.PI, true );

            ctx.beginPath();
            ctx.arc(300,300,50, 0, 2 *Math.PI);
            ctx.fill();
            ctx.stroke();

        


        }else{
            alert("Navegador no soporta canvas 2D");
        }

    }
    
}