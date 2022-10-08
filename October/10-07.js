var status = '😎';

setTimeout(() => {
   const status = '😍';
   
   const data = {
        status: '🥑', //Por el scope
        getStatus() {
            return this.status;
        },
   };
   console.log(data.getStatus());
}, 0);

/* 
Al llamar a getStatus debemos tener en cuenta el scope de las variables, recuerda que tanto let como
const tiene scope de bloque, por ende buscara una variable status dentro del bloque de data y regresara el
emoji de aguacate/palta.
*/