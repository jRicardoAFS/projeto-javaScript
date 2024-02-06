const produtos = [
    {
        id: 1,
        nome: "Cheeseburger Clássico",
        descricao: "Hambúrguer suculento com queijo derretido, alface e tomate fresco.",
        preco: 12.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg"
    },
    {
        id: 2,
        nome: "Pizza de Pepperoni",
        descricao: "Pizza com molho de tomate, queijo derretido e generosas fatias de pepperoni.",
        preco: 16.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg"
    },
    {
        id: 3,
        nome: "Sanduíche de Frango BBQ",
        descricao: "Sanduíche com peito de frango grelhado, molho barbecue, alface e cebola roxa.",
        preco: 10.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg"
    },
    {
        id: 4,
        nome: "Taco de Carne Asada",
        descricao: "Taco tradicional com carne de churrasco, cebola, coentro e molho picante.",
        preco: 8.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg"
    },
    {
        id: 5,
        nome: "Wrap de Vegetais",
        descricao: "Wrap saudável com mix de vegetais frescos, queijo feta e molho de iogurte.",
        preco: 9.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg"
    },
    {
        id: 6,
        nome: "Sushi Combo",
        descricao: "Combinação de sushi com sashimi, nigiri e rolos variados.",
        preco: 18.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg"
    },
    {
        id: 7,
        nome: "Salada Caesar com Frango",
        descricao: "Salada clássica Caesar com pedaços de frango grelhado e croutons.",
        preco: 11.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg"
    },
    {
        id: 8,
        nome: "Batata Frita com Queijo e Bacon",
        descricao: "Batatas fritas cobertas com queijo derretido e pedaços de bacon crocante.",
        preco: 7.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg"
    },
    {
        id: 9,
        nome: "Cachorro-Quente",
        descricao: "Cachorro-quente clássico com salsicha, molho, cebola e mostarda.",
        preco: 6.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg"
    },
    {
        id: 10,
        nome: "Nachos Supremos",
        descricao: "Nachos cobertos com queijo, guacamole, sour cream e pimentões.",
        preco: 14.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg0"
    },
    {
        id: 11,
        nome: "Burrito de Carne",
        descricao: "Burrito recheado com carne, arroz, feijão, queijo e salsa.",
        preco: 13.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg1"
    },
    {
        id: 12,
        nome: "Crepes de Nutella",
        descricao: "Crepes finos recheados com Nutella e morangos frescos.",
        preco: 8.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg2"
    },
    {
        id: 13,
        nome: "Salada de Frutas",
        descricao: "Salada fresca de frutas da estação com molho de mel.",
        preco: 5.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg3"
    },
    {
        id: 14,
        nome: "Milkshake de Baunilha",
        descricao: "Milkshake cremoso de baunilha com chantilly.",
        preco: 4.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg4"
    },
    {
        id: 15,
        nome: "Donuts Glaceados",
        descricao: "Donuts fofos cobertos com glacê colorido.",
        preco: 2.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg5"
    },
    {
        id: 16,
        nome: "Tiramisu",
        descricao: "Clássica sobremesa italiana Tiramisu.",
        preco: 6.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg6"
    },
    {
        id: 17,
        nome: "Wrap de Salmão",
        descricao: "Wrap com salmão defumado, cream cheese e rúcula.",
        preco: 11.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg7"
    },
    {
        id: 18,
        nome: "Ceviche de Camarão",
        descricao: "Ceviche fresco com camarões, limão e coentro.",
        preco: 15.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg8"
    },
    {
        id: 19,
        nome: "Poke Bowl",
        descricao: "Bowl com arroz, peixe cru, abacate e molho de soja.",
        preco: 17.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg9"
    },
    {
        id: 20,
        nome: "Cheesecake de Morango",
        descricao: "Cheesecake cremoso com cobertura de morango.",
        preco: 8.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg0"
    },

];
const pedidos = [
    { id_pedido: 10234, dt: "14/01/2024", total: 119.90 },
    { id_pedido: 34353, dt: "15/01/2024", total: 444.90 },
    { id_pedido: 54474, dt: "16/01/2024", total: 1139.90 },
    { id_pedido: 88443, dt: "17/01/2024", total: 1434.90 },
    { id_pedido: 37903, dt: "18/01/2024", total: 32.90 },
    { id_pedido: 98465, dt: "19/01/2024", total: 342.90 },
    { id_pedido: 45742, dt: "20/01/2024", total: 567.90 },
    { id_pedido: 84256, dt: "21/01/2024", total: 1195.90 },
    { id_pedido: 33376, dt: "22/01/2024", total: 345.90 },
    { id_pedido: 25643, dt: "23/01/2024", total: 4353.90 },
    { id_pedido: 99836, dt: "24/01/2024", total: 345.90 },
    { id_pedido: 24582, dt: "25/01/2024", total: 1319.90 },
];
const carrinho = [
    {
        id: 1,
        nome: "Cheeseburger Clássico",
        preco: 12.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg",
        quantidade: 2,
    },
    {
        id: 1,
        nome: "Hamburger Clássico",
        preco: 9.99,
        foto: "https://static.vecteezy.com/ti/fotos-gratis/t2/22336910-carne-hamburguer-isolado-ilustracao-ai-generativo-gratis-foto.jpg",
        quantidade: 5,
    },
];
export { produtos, pedidos, carrinho }
