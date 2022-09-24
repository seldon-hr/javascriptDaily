const user = { name: 'Geppeto', age: 38};
const admin = { admin: true, ...user };

console.log(admin);

/* 
El spread operator en este ejemplo se encarga de propagar el objeto user dentro del objeto admin.
Sin usar el spreado operator tendríamos un objeto anidado:

    {admin true, { name: 'Geppeto', age: 38} }

Justamente el spread operator se encarga de expandir user para evitar el anidamiento.
*/