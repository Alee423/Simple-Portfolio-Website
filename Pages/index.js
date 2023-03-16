    const text1 = document.getElementById('first');
    const text2 = document.getElementById('last');
    const text3 = document.getElementById('phone');
    const text4 = document.getElementById('email');
    const button1 = document.getElementById('btn1');
    const button2 = document.getElementById('bta-academic')
    const output= document.getElementById('output1');
 
       function fun1(){ 
          output.innerHTML = text1.value+" "+text2.value+" "+text3.value+" "+text4.value;
       }
       btn.addEventListener('click',fun1);  
     function fun2(){
        alert("Alee")
     }
     button2.addEventListener('click',fun2);
       
       