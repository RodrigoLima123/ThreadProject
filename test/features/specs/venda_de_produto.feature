# language: pt
Funcionalidade: Venda de Produtos

Essa funcionalidade realiza a venda de produtos para clientes

Cenário: Adicionando Mouse
    Dado o cliente "José Maria"
    Quando o produto "Mouse" com quantidade 3 e valor 20.50 é adicionado
    Então o Sub Tot deve ser 61.50
    Então o Total deve ser 61.50

Cenário: Adicionando Teclado
    Dado o cliente "José Maria"
    Dado venda com Total de 61.50
    Quando o produto "Teclado" com quantidade 2 e valor 73.00 é adicionado
    Então o Sub Tot deve ser 146.00
    Então o Total deve ser  207.50

Cenário: Adicionando Teclado com quantidade zero
    Dado o cliente "José Maria"
    Dado venda com Total de 207.50
    Quando o produto "Teclado" com quantidade 0 e valor 73.00 é adicionado
    Então a mensagem "A quantidade deve ser no mínimo 1"
    Então o Total deve ser  207.50

Cenário: Adicionando Teclado com valor negativo
    Dado o cliente "José Maria"
    Dado venda com Total de 207.50
    Quando o produto "Teclado" com quantidade 1 e valor -73.00 é adicionado
    Então a mensagem "O valor deve ser maior que Zero"
    Então o Total deve ser  207.50

Cenário: Excluindo Teclado
    Dado o cliente "José Maria"
    Dado venda com Total de 207.50
    Dado item "Teclado" com Sub Tot no valor de 146.00
    Quando o produto "Teclado" é excluído
    Então mensagem "Teclado excluído com sucesso"
    Então o Total deve ser  61.50
