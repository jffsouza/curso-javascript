function MeuObjeto(){
    console.log(MeuObjeto.prototype)
}

/* Quando você cria um objeto através da função construtora usando New
o protótipo deste objeto automaticamente aponta para a função deste objeto.prototype */

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto___ === obj2.__proto___)
console.log(MeuObjeto.prototype === obj1.__proto___)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumo

// Estritamente igual ao objeto.
console.log((new MeuObjeto).__proto___=== MeuObjeto.prototype) 
// MeuObjeto (função) tem o atributo __proto__ e por padrão aponta para Function.prototype
console.log(MeuObjeto.__proto___ === Function.prototype) 

console.log(Function.prototype.__proto___ === Object.prototype)
console.log(Object.prototype.__proto___ === undefined)