export  function loadCurrentUser (){
   return new Promise((resolve, reject )=> {
       setTimeout(()=> {
           resolve({
             name:"Albert Smith"
           })
       }, 1000)
   })
}