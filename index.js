let string ="";
let buttons=document.querySelectorAll('.btn');
let click= new Audio("audio.mp3");

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        click.play();
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('input').value=string;
  
        }
        else if(e.target.innerHTML=='AC')
        {
            string="";
            document.querySelector('input').value=string;
  
        }
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;

        }
        

    })
})