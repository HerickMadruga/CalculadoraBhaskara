function pegar(){
    let a = Number(document.querySelector(".A").value);
    let b = Number(document.querySelector(".B").value);
    let c = Number(document.querySelector(".C").value);
    
    let delta = (b**2) - (4*a*c);
    if(delta<0)
    {
         document.querySelector(".X1").textContent = "x1 é: Não existe nos reais"; 
        document.querySelector(".X2").textContent = "x2 é: Não existe nos reais"; 
        document.querySelector(".Delta").textContent = "Delta é: " + delta;

    }
    else if(delta >= 0 )
    {
        let x1= (-b+(Math.sqrt(delta)))/(2*a);
        let x2= (-b-(Math.sqrt(delta)))/(2*a);
        document.querySelector(".X1").textContent = "x1 é: " + x1; 
        document.querySelector(".X2").textContent = "x2 é: " + x2; 
        document.querySelector(".Delta").textContent = "Delta é: " + delta; 
    }

}
window.onload = function(){
    pegar();
};