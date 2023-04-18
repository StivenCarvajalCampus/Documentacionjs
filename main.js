const doAsyncStuffWithPromises = (numero1, numero2, numero3, numero4)=>{
  const resultado = numero1+numero2-numero3/numero4
  return new Promise (resolve => {
      setTimeout(()=> {
          resolve(resultado)
      },500)
  })
}

doAsyncStuffWithPromises(1, 3, 2,5)
.then(resultado => console.log(resultado)) 


