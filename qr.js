const input=document.getElementById('qr-input');
const img=document.getElementById('qr-img');
const btn=document.getElementById('qr-btn');

btn.addEventListener('click',()=>{
    const inputvalue=input.value;
console.log(inputvalue);

if(!inputvalue){
    alert('please enter the url')
}else{
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`   }
    }
)



