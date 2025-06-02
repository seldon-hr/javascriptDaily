Conforme [Actualizar Valores desde un Hijo al Padre](https://www.notion.so/Actualizar-Valores-desde-un-Hijo-al-Padre-200673821c4c80cfbc3adf3661402cba?pvs=21) acerca de procesar y comunicar los valores de un componente, pero al padre, como si existieran múltiples `v-models`, esto con el uso de desatar eventos con `v-on`.

Cuando tenemos la situación de actualizar más de una propiedad conforme a un componente, por ejemplo, tenemos que un componente que se va a renderizar va a guardar varios valores.

Tenemos el componente de *MensajeConsecuente*. Este es un componente que va a guardar todos loa datos de un mensaje que se mande y que se desata con un snackBar. Entonces tenemos varios valores a recibir más allá del solo texto.

- `mensaje`
- `isScreenTime`
- `tiempoPantalla`
- `tipo`

Estas cuatro propiedades conforman lo que sería necesario para mandar el valor de `mensaje`. Entonces, tenemos que mensaje, recibiría texto; `isScreenTime`, un Boolean; `tiempoPantalla`; número si es que la propiedad precedente es true; `tipo`, un string sobre el tipo, warning, error, etc.

Por lo tanto estos cuatro valores se tienen que envolver dentro de un propiedad valor, que sería un objeto de cada una de estas, pero en vez de tener cada componente en el mismo template, con mucho más información, creamos este componente: *MensajeConsecuente*:

```html
<template>
	<v-text-field v-model="mensaje"/>
	<v-switch v-model="isScreenTime"/>
	<v-autocomplete v-model="tiempoPantalla"/>
	<v-autocomplete v-model="tipo">	
</template>
```

Aquí observamos que tenemos todos estos v-models para recibir un valor. Mientras que en el padre sería de la siguiente forma, para el puro get.

```html
<template>
	<mensaje-consecuente 
		:mensaje="cond.valor.mensaje"
		:isScreenTime="cond.valor.isScreenTime"
		:tiempoPantalla="cond.valor.tiempoPantalla"
		:tipo="cond.valor.tipo"
	/>
</template>
```

Aquí un componente que recibe su propiedades y conforme a su asignación, pero antes para que exista una comunicación bidireccional, biding. Tiene que existir la comunicación dentro de sus computadas del componentes y sus props. De esta manera, se recibe la prop padre, pero se comunica con la computada del hijo.

```jsx
props:{
		mensaje:{ type: 'String' },
},
computed:{
	localMensaje:{
		get(){
			return this.mensaje;
		},
		set(val){
			this.$emit("update:mensaje", val);
		}
	}
}
```

Donde en set, pasamos el valor, sin embargo, decimos que vamos a emitir un evento, y este evento, sería `update:mensaje`,  el cual sería un evento que debe tener vinculado el componente, pero en su renderización donde es llamado, es decir este componente en el set, del evento, sería así:

```html
<template>
	<mensaje-consecuente 
		:mensaje="cond.valor.mensaje"
		@update.mensaje="(val) => updateComponent(index, field: 'mensaje', value: val)"
		:isScreenTime="cond.valor.isScreenTime"
		@update.isScreentTime="() => (value){ return value.isScreenttime = val  }"
		:tiempoPantalla="cond.valor.tiempoPantalla"
		v-on:valor.tiempoPantalla="() => (value){ return value.tiempoPantalla = val }"
		:tipo="cond.valor.tipo"
	/>
</template>
```

Entonces, la computada localMensaje desata cada vez `update:Mensaje`, y aquí tenemos una función que va a ejecutar un valor. En este caso, `updateComponente`, la cual recibe varios valores, y son para que se actualice conforme a la situación de actualizar según la renderización de este componente por n de la lista que renderiza. Entonces, ya tendríamos esta comunicación bidireccional. Conforme a múltiples props, para un solo component.

Bueno, dentro de la función `updateComponent`, se emplea lo siguiente: una actualización según índice:

```jsx
updateComoponent({ commit }, {index, field, value }){
	commit('mutateComponent', {index, field, value});
}

mutateComponent(state, { index, field, value }){
	const componenetToAffect = state.listaComponents[index];
	if(componentToAffect){
		componentToAffect[field] = value;
	}
}
```