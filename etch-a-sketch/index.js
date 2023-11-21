function makegrid(container,num){
    for(let i = 0;i<num;i++){
        const div = document.createElement('div');

        let prop = getComputedStyle(container);
        let width = 1000;
        let k=1 ;
        for(k=1;k<100;k++){
            if( (num*k) >500)break;
        }
        let height=k-1;
        console.log(height);
        div.setAttribute('style','display:flex;');
        div.classList.add('second-level');
        for(let j=0;j<num;j++){
            const divchild = document.createElement('div');
            // divchild.textContent = `i is ${i} and j is ${j}`;
            divchild.style.width = ""+width+"px";
            console.log(height);
            divchild.style.height = ""+height+"px";     
            divchild.classList.add('third-level');
            div.appendChild(divchild);
        }
        container.appendChild(div);
    } 
}
function submitForm(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the value from the input element
     num = document.querySelector('input').value;

    // Check if the user entered something
    
}
let maindiv = document.createElement('div');
maindiv.classList.add('maindiv');
let body = document.querySelector('body');
body.appendChild(maindiv);
let num = prompt("enter the grid size : ");

makegrid(maindiv,num);
