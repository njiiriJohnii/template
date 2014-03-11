function Rabbit(adjective){
this.adjective=adjective
//this.species="rabbit"
}
var whiteRabbit=new Rabbit("white")
var blackRabbit=new Rabbit("black")
whiteRabbit.species="human"
//console.log(whiteRabbit.species)
//console.log(Rabbit.prototype)
Rabbit.prototype.species="rabbit"
console.log(whiteRabbit)
console.log(blackRabbit)
