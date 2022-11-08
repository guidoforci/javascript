/*const productos = [
    {
        imagen: "./img/pan1.jpg",
        nombre: "Molde Multicereal",
        precio: 50,
        descripcion: "Elaborado con harinas de trigo, avena y centeno; compuesto por granos de maíz, soja, chía y lino, que aportan vitaminas y minerales; y un sabor exquisito. Finalmente, es horneado con aceitunas negras para saborizar y generar un aroma único.",
        codigo: 1,
        categoria: "panes",
        cantidad: 1
        
    },

    {
        imagen: "./img/pan2.jpg",
        nombre: "Bagel",
        precio: 45,
        descripcion: "Originario de Polonia. Se trata de un pan que posee un alto grado de fibra alimenticia, mayor densidad al paladar y con mucha menor cantidad de gluten por gramo. Antes de ser horneado se cocina en agua brevemente, dando como resultado un pan denso con una cubierta exterior ligeramente crujiente.",
        codigo: 2,
        categoria: "panes",
        cantidad: 1
    },

    {
        imagen: "./img/pan3.jpg",
        nombre: "Pan del Barrio",
        precio: 25,
        descripcion: "Pan de preparación similar a la Baguette, con un formato pequeño y una lluvia de queso provolone, que otorga distinción y brinda un toque de intensidad con mucho sabor. Presentan una miga suave y aireada; y una costra crocante y dorada.",
        codigo: 3,
        categoria: "panes",
        cantidad: 1
    },

    {
        imagen: "./img/pan4.jpg",
        nombre: "Baguettín Parisienne",
        precio: 27,
        descripcion: "Variedad de pan originaria de Francia que se caracteriza por una forma alargada. Crocante en su exterior y con un corazon suave y aireado. Es uno de los formatos de pan más populares, producidos y consumidos a nivel internacional.",
        codigo: 4,
        categoria: "panes",
        cantidad: 1
    },

    {
        imagen: "./img/pan5.jpg",
        nombre: "Mini Deutsche Brots",
        precio: 16,
        descripcion: "El pan alemán no es uno: son muchas recetas unidas a lo largo del tiempo en la zona germánica. No hay dos iguales, todos tienen una receta artesana propia y se diferencian enormemente por regiones. Aquí compilamos esas mezclas de harinas de trigo, malta y avena, que le da su característica de miga húmeda pero esponjosa, fragante y muy rico en fibra para homenajear la tradición.",
        codigo: 5,
        categoria: "panes",
        cantidad: 1
    },

    {
        imagen: "./img/pan6.jpg",
        nombre: "Croissant",
        precio: 23,
        descripcion: "Pieza de panadería con preparación al estilo parisino, crocante y aireada. Con una masa hojaldrada fina y varios días de descanso en el amasado previo a la cocción con el fin de generar múltiples capas.",
        codigo: 6,
        categoria: "panes",
        cantidad: 1
    },

    {
        imagen: "./img/pan7.jpg",
        nombre: "Brioche de Molde",
        precio: 74,
        descripcion: "Pan originario de Francia. También llamado pan de yema por su preparación e incorporación de mantequilla y azucar. Presenta una corteza que se dora antes de hornearla obteniendo así su color característico. Posee un sabor dulce, ideal para acompañar desayunos y meriendas.",
        codigo: 7,
        categoria: "panes",
        cantidad: 1
    },

    {
        imagen: "./img/pan8.jpg",
        nombre: "Pebetín Rioplatense",
        precio: 86,
        descripcion: "Un clásico de la panaderia argentina y uruguaya. Posee forma ovalada, corteza tostada y fina, miga esponjosa y se elabora con harina de trigo candeal. Ideal para pedir en sandwiches especiales.",
        codigo: 8,
        categoria: "panes",
        cantidad: 1
    },

    {
        imagen: "./img/pan9.jpg",
        nombre: "Ciabatta Tirabuzone",
        precio: 93,
        descripcion: "Pan producido originalmente en Liguria y elaborado con harina de trigo y levadura. Sazonado con aceite de oliva y finas hierbas que le dan sabor como el romero, la salvia y sal gruesa de mar. Pan suave, ligero, con mucho poro y que posee una corteza crujiente.",
        codigo: 9,
        categoria: "panes",
        cantidad: 1
    },

    {
        imagen: "./img/Expresso.jpg",
        nombre: "Expresso",
        precio: 75,
        descripcion: "Nuestro Expresso es un café equilibrado, con leves notas citricas, chocolate y un molido extra fino para obtener calidad y cuerpo intenso. Logrado a partir de la mezcla de granos provenientes de Costa Rica y Colombia. Ideal para personas que desean tomar un excelente café espresso de alta calidad.",
        codigo: 10,
        categoria: "cafés",
        cantidad: 1
    },

    {
        imagen: "./img/macchiato.jpg",
        nombre: "Caffè Macchiato",
        precio: 90,
        descripcion: "Es un café cortado típico de Italia, consiste en un expreso con una pequeña cantidad de leche caliente y espumada. Elaborado con una selección de los mejores granos de origen Arábica que se caracterizan por su sabor dulce con una baja acidez e intensidad media y un exquisito aroma. Ideal para personas que desean degustar un café con cuerpo cremoso.",
        codigo: 11,
        categoria: "cafés",
        cantidad: 1
    },

    {
        imagen: "./img/Latte.jpg",
        nombre: "Caffè Latte",
        precio: 59,
        descripcion: "Variedad nacida en Italia. Nuestro late es la combinación de una base de café expresso fino, de cuerpo ligero, con tueste medio, notas leves a caramelo y frutos secos. Sumado a ello, dos partes de leche al vapor y un centímetro de espuma como toque final.",
        codigo: 12,
        categoria: "cafés",
        cantidad: 1
    },

    {
        imagen: "./img/capuchino.jpg",
        nombre: "Capuchino",
        precio: 86,
        descripcion: "Capuchino de especialidad que se compone de 125 ml de leche al vapor y 25 ml de café expreso. Una combinación de perfecto equilibrio y proporción. La elaboración de este blend, con granos de Costa Rica aporta notas dulces y frutos secos, da vida a un café suave y delicado con cuerpo consistente a intenso y un exquisito aroma de sensaciones dulces. Por último, se incorpora leche montada con vapor para darle cremosidad.",
        codigo: 13,
        categoria: "cafés",
        cantidad: 1
    },
    
    {
    imagen: "./img/flatwhite.jpg",
    nombre: "Flat White",
    precio: 95,
    descripcion: "El Flat White logra un equilibrio en el sabor, cuerpo y aroma, con café de arabica proveniente de Colombia. Este blend cautiva los sentidos por su intensidad y calidad. Posee un delicado y presente sabor a café; y está hecho con una cantidad pequeña de leche cremada y una capa delgada de microespuma.",
    codigo: 14,
    categoria: "cafés",
    cantidad: 1
    },
];
*/