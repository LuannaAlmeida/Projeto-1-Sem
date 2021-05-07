var parar = 0;
while (parar == 0){
  
console.log ("Seja Bem Vindo a Laluna Store!")
console.log("")
console.log ("Camisetas a partir de R$20")
console.log("")
console.log ("Vestidos a partir de R$40")
console.log("")
console.log ("Calças a partir de R$60")
console.log("")

var camiseta = 20
var vestido = 40
var calça = 60

var expr = prompt("Escolha um produto")
if (expr == 'camiseta'){
 console.log ("camiseta selecionada")
console.log("")
console.log ("Qual a forma de pagamento? Trabalhamos com:")
var exps = prompt("crédito, dinheiro ou pix?")

switch (exps){

case 'crédito':
console.log ("crédito selecionado")
console.log("")
console.log("Vamos nos certificar de que você não é um robô")
console.log("Seu número de verificação: 4268") 
var expz = prompt("confirme seu número")

do {
  console.log("Verificação concluída!")
  } while(expz === 4268)
  console.log("Dados do cartão")
  var v = prompt ("Número do cartão")
  var v = prompt ("Data de vencimento")
  var v = prompt ("Vencimento")
  var v = prompt ("Senha") 

 for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)} 
 console.log("Obrigado por contar com nossos serviços")

break 
case 'dinheiro':
console.log("dinheiro selecionado")
console.log("Pagamento com dinheiro sai pela metade do preço")
console.log("Valor final")
console.log(camiseta /2)
for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)} 
 console.log("Obrigado por contar com nossos serviços")

break

case 'pix':
console.log("pix selecionado")
console.log("Nosso Pix é: 957029188")
console.log("Pagamento efetuado!")
for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)} 
 console.log("Obrigado por contar com nossos serviços")

break
}
break}
else if (expr == 'vestido'){
  console.log ("vestido selecionado")
  console.log("")
  console.log ("Qual a forma de pagamento? Trabalhamos com:")
  var exps = prompt("crédito, dinheiro ou pix?")
  switch (exps){
  

case 'crédito':
console.log ("crédito selecionado")
console.log("")
console.log("Vamos nos certificar de que você não é um robô")
console.log("Seu número de verificação: 4268") 
var expz = prompt("confirme seu número")

do {
  console.log("Verificação concluída!")
  } while(expz === 4268)
  console.log("Dados do cartão")
  var v = prompt ("Número do cartão")
  var v = prompt ("Data de vencimento")
  var v = prompt ("Vencimento")
  var v = prompt ("Senha") 

 for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)} 
 console.log("Obrigado por contar com nossos serviços")

break 
case 'dinheiro':
console.log("dinheiro selecionado")
console.log("Pagamento com dinheiro sai pela metade do preço")
console.log("Valor final")
console.log(vestido /2)
for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)} 
 console.log("Obrigado por contar com nossos serviços")

break

case 'pix':
console.log("pix selecionado")
console.log("Nosso Pix é: 957029188")
for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)} 
 console.log("Obrigado por contar com nossos serviços")

break
}
break}
else if (expr == 'calça'){
  console.log ("calça selecionada")
  console.log("")
  console.log ("Qual a forma de pagamento? Trabalhamos com:")
   var exps = prompt("crédito, dinheiro ou pix?")
  switch (exps){

case 'crédito':
console.log ("crédito selecionado")
console.log("")
console.log("Vamos nos certificar de que você não é um robô")
console.log("Seu número de verificação: 4268") 
var expz = prompt("confirme seu número")

do {
  console.log("Verificação concluída!")
  console.log("")
  } while(expz === 4268)
  console.log("Dados do cartão")
  var v = prompt ("Número do cartão")
  var v = prompt ("Data de vencimento")
  var v = prompt ("Vencimento")
  var v = prompt ("Senha") 
  console.log("")
 for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)} 
 console.log("Obrigado por contar com nossos serviços")

break 
case 'dinheiro':
console.log("dinheiro selecionado")
console.log("Pagamento com dinheiro sai pela metade do preço")
console.log("Valor final")
console.log(calça /2)
for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)} 
 console.log("Obrigado por contar com nossos serviços")

break

case 'pix':
console.log("pix selecionado")
console.log("Nosso Pix é: 957029188")
for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)} 
 console.log("Obrigado por contar com nossos serviços")

break
}
break}

else if (expr!= 'calça' && expr != 'vestido' && expr != 'camiseta'){
  console.log("tente novamente")
  console.log("")
}

}
