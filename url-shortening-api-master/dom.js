const  ham = document.querySelector('.ham')
const nav = document.querySelector('.linksnav')
const getlink = document.querySelector('form')
const input = document.querySelector('input')
const Copy = document.querySelector('.result button')
const search = document.querySelector('.search')
const result = document.querySelector('.result')
const newshort = document.querySelector('.shorttt')
const resultforres = document.querySelector('.resultforres')

ham.addEventListener('click', ()=>{

  ham.classList.toggle('active');
  nav.classList.toggle('show')

})



const update = async(link)=>{
  const short_link = await short(link)
  return short_link;

  
}





input.addEventListener('keyup', e=>{
  e.preventDefault();
 
  if (getlink.link.value.includes('.com')){
    input.style.border ='3px solid green'

    

  }else{
    input.style.border = '3px solid red';
    

  }

  

})
getlink.addEventListener('submit',e=>{
  e.preventDefault();



  const link=getlink.link.value.trim();
  getlink.reset();
  update(link)
  .then(data=> updateUI(data))
  .catch(err=> console.log(err))

  
 
  const updateUI = async(data) =>{

    console.log(data)
    if(data.ok === true){
      const shortt = data.result;
    
   
  
      const html=`
      <div class="resultflex">
  
      <div class="mainlink">
       <p> ${shortt.original_link}</p>
      </div>
      <div class="shortlink">
      <a href="${shortt.original_link}" target="_blank" class"shorttt">${shortt.short_link}</a>
      <button class"copybutton"> Copy </button>
      </div>
      </div>
    
      `
    //   const link = document.querySelector('.shorttt')
    // console.log(link.textContent)
      // link.setAttribute("href",`${shortt.short_link}`)
      

      
      result.innerHTML+=html;
      resultforres.innerHTML+=html
  // console.log(shortt.short_link)

  
  
  
  }else{
    
    const html =`
    <div class="resultflex">
  
    <div class="mainlink">
    
    </div>
    <div class="shortlink">
    <a style=" text-align:center; "> ${data.error}</a>
    
    </div>
    </div>
    `
 
  
    result.innerHTML+=html;
    resultforres.innerHTML+=html

  }
   
  
    





 
  
  }
  
  

})





