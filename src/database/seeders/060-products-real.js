'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [

      // Chocolates
      {
        name: "Chocolate Biznikke Nevado",
        detail: "Bloque Biznikke Nevado x 120gr.",
        top_check: 1,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 80,
        image: "ChocolateBiznike.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Chocolate Cadbury Yogurt Frutilla",
        detail: "Chocolate Cadbury Frutilla x27gr, caja x12u.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 30,
        stock: 20,
        price: 1000,
        image: "Chocolatecadburyyogurtfrutilla.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Paraguita de Chocolate Felfort",
        detail: "Caja de chupetines Paraguita de chocolate felfort.",
        top_check: 1,
        offer_check: 1,
        offer_discount: 20,
        stock: 20,
        price: 1200,
        image: "Paraguitadechocolatefelfort.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Confites Rocklets",
        detail: "Confites Rocklets chocolate uni x 150 gs.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 15,
        stock: 20,
        price: 500,
        image: "confitesroklets.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Bocadito Tofi",
        detail: "Bocadito Tofi chocolate relleno de dulce de leche uni x 150 gs.",
        top_check: 1,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 600,
        image: "bocaditotofi.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Bocadito Cabsha",
        detail: "Bocadito Cabsha chocolate relleno de dulce de leche",
        top_check: 1,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 400,
        image: "bocaditocabsha.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caja Bon o Bon",
        detail: "Caja bocadito Bon o Bon chocolate leche",
        top_check: 1,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 600,
        image: "bocaditosbonobon.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      // #1
      {
        name: "Chocolate Cofler Blanco con Chocolinas",
        detail: "Chocolate cofler blanco con chocolinas 100gr x 1 uni",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 400,
        image: "chocolatecofleblancoconchoco.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Chocolate Cofler 3 Placeres",
        detail: "Chocolate cofler 3 placeres 100gr x 1 uni",
        top_check: 0,
        offer_check: 1,
        offer_discount: 10,
        stock: 20,
        price: 400,
        image: "chocolatecofler3placeres.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Chocolate Cofler Aireado Blanco",
        detail: "Chocolate cofler aireado blanco 50gr x 1 uni",
        top_check: 0,
        offer_check: 1,
        offer_discount: 15,
        stock: 20,
        price: 450,
        image: "chocolatecoflerblancoaireado.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Chocolate Cofler Aireado Negro",
        detail: "Chocolate cofler aireado Negro 50gr x 1 uni",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 450,
        image: "chocolatecofleraireadonegro.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Chocolate Cofler Block",
        detail: "Chocolate cofler block 20gr x 1 uni",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 350,
        image: "chocolatecoflerblock.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Chocolate Aguila Semi Amargo",
        detail: "Chocolate aguila semi amargo 150gr x 1 uni",
        top_check: 1,
        offer_check: 1,
        offer_discount: 10,
        stock: 20,
        price: 550,
        image: "chocolatecoflerblancorelleno.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Chocolate Cofler Blanco Relleno",
        detail: "Chocolate cofler blanco relleno ddl 50gr x 1 uni",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 550,
        image: "chocolatecoflerblancorelleno.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Chocolate Cofler Negro Relleno",
        detail: "Chocolate cofler negro relleno ddl 50gr x 1 uni",
        top_check: 0,
        offer_check: 1,
        offer_discount: 5,
        stock: 20,
        price: 550,
        image: "chocolatenegrorelleno.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Chocolate Arcor Leche con Mani",
        detail: "Chocolate arcor leche con mani 20gr x 1 uni",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 500,
        image: "chocolatearcormani.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      // Alfajores

      {
        name: "Alfajor Bagley Blanco Triple",
        detail: "Alfajor Bagley Blanco 73.5gr X 1 Uni.",
        top_check: 1,
        offer_check: 1,
        offer_discount: 20,
        stock: 20,
        price: 80,
        image: "Alfajorbagleyblancotriple.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Alfajor Bon o Bon Chocolate",
        detail: "Alfajor Bon o Bon Arcor 40gr X 1 Uni.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 50,
        image: "Alfajorbonobon.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Alfajor Bon o Bon Blanco",
        detail: "Alfajor Bon o Bon Arcor blanco 40gr X 1 Uni.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 10,
        stock: 20,
        price: 50,
        image: "alfajorbonobonblanco.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Alfajor Aguila",
        detail: "Alfajor aguila 40gr X 1 Uni.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 80,
        image: "alfajoraguila.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Alfajor Tofi Glaseado",
        detail: "Alfajor tofi glaseado 40gr x 1 uni.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 5,
        stock: 20,
        price: 50,
        image: "alfajortofiglaseado.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Alfajor Tofi Negro",
        detail: "Alfajor tofi negro 40gr x 1 uni",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 50,
        image: "alfajortofinegro.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Alfajor Tofi Negro Triple",
        detail: "Alfajor tofi negro triple 70gr x 1 uni",
        top_check: 0,
        offer_check: 1,
        offer_discount: 5,
        stock: 20,
        price: 70,
        image: "alfajortofinegro3.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Alfajor Tofi Blanco Triple",
        detail: "Alfajor tofi blanco triple 70gr x 1 uni",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 70,
        image: "alfajortofiblanco3.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Alfajor Cofler Block",
        detail: "Alfajor cofler block 60gr x 1 uni",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 70,
        image: "alfajorcolferblock.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Alfajor Bon o Bon Triple",
        detail: "Alfajor bon o bon triple 70gr x 1 uni",
        top_check: 0,
        offer_check: 1,
        offer_discount: 5,
        stock: 20,
        price: 70,
        image: "alfajorbonbon3.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Alfajor Tatin Blanco Triple",
        detail: "Alfajor tatin triple 70gr x 1 uni",
        top_check: 0,
        offer_check: 1,
        offer_discount: 5,
        stock: 20,
        price: 70,
        image: "alfajortatinblanco3.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Alfajor Jorgito Chocolate",
        detail: "Alfajor jorgito chocolate 50gr x 1 uni",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 550,
        image: "alfajorjorgito.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      // Caramelos

      {
        name: "Caramelos Pico Dulce Duros",
        detail: "Bolsa de caramelos pico dulce duro x 450gr.",
        top_check: 1,
        offer_check: 1,
        offer_discount: 20,
        stock: 20,
        price: 400,
        image: "Caramelosdurospicodulce.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caramelos Sugus Masticables",
        detail: "Bolsa de Caramelos Sugus masticables x 700gr.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 50,
        stock: 20,
        price: 1000,
        image: "Caramelosmasticablessugus.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caramelos Mogul Confitados",
        detail: "Bolsa de Caramelos confitados x 700gr.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 400,
        image: "caramelosconfitados.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caramelos Butter Toffees Coco",
        detail: "Bolsa de Caramelos butter coco x 700gr.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 10,
        stock: 20,
        price: 500,
        image: "caramelosbuttercoco.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caramelos Butter Toffees Dulce de Leche",
        detail: "Bolsa de Caramelos butter ddl x 700gr.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 500,
        image: "caramelosbutterddl.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caramelos Butter Toffees Menta",
        detail: "Bolsa de Caramelos butter menta x 700gr.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 25,
        stock: 20,
        price: 500,
        image: "caramelosbuttermenta.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caramelos Butter Toffees Bon o Bon",
        detail: "Bolsa de Caramelos butter bon o bon x 700gr.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 550,
        image: "caramelosbutterbonobon.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caramelos Butter Toffees Chocolate Blanco",
        detail: "Bolsa de Caramelos butter chocolate blanco x 700gr.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 500,
        image: "caramelosbutterchocolateblanco.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caramelos Menthoplus Sandia",
        detail: "Bolsa de Caramelos menthoplus sandia x 700gr.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 20,
        stock: 20,
        price: 400,
        image: "caramelosmenthoplussandia.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caramelos Menthoplus 2 Mentol",
        detail: "Bolsa de Caramelos menthoplus 2 mentol x 700gr.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 400,
        image: "caramelosmenthoplus2mentol.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caramelos Menthoplus Frutilla",
        detail: "Bolsa de Caramelos menthoplus frutilla x 700gr.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 10,
        stock: 20,
        price: 400,
        image: "caramelomenthoplusfrutilla.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Caramelos Menthoplus Limon",
        detail: "Bolsa de Caramelos menthoplus limon x 700gr.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 400,
        image: "caramelomenthopluslimon.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      // Gomitas

      {
        name: "Gomitas Mogul Ositos Extreme",
        detail: "Gomitas acido y dulce mogul ositos extreme.",
        top_check: 1,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 50,
        image: "Gomitasmogulositosextreme.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Gomitas Mogul Tiburoncitos",
        detail: "Gomitas dulces mogul tiburoncitos.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 10,
        stock: 20,
        price: 50,
        image: "Gomitasmogultiburoncitos.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
    
      {
        name: "Gomitas Mogul Frutilla Acidos",
        detail: "Gomitas dulces mogul frutilla acidos.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 65,
        image: "gomitasmogulfrutillaacido.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Gomitas Mogul Eucaliptus",
        detail: "Gomitas dulces mogul eucaliptus",
        top_check: 0,
        offer_check: 1,
        offer_discount: 5,
        stock: 20,
        price: 60,
        image: "gomitasmoguleucaliptus.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Gomitas Mogul Tutti Frutti",
        detail: "Gomitas dulces mogul tutti frutti",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 60,
        image: "gomitasmogultuttifrutti.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Gomitas Mogul Dinos",
        detail: "Gomitas dulces mogul dinos",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 55,
        image: "gomitasmoguldinos.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Gomitas Mogul Monstruitos",
        detail: "Gomitas dulces mogul mostro",
        top_check: 0,
        offer_check: 1,
        offer_discount: 5,
        stock: 20,
        price: 55,
        image: "gomitasmogulmostro.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Gomitas Mogul Rodajas Acidas",
        detail: "Gomitas dulces mogul rodajas",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 65,
        image: "gomitasmogulrodajas.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Gomitas Mogul Frutales",
        detail: "Gomitas dulces mogul frutales",
        top_check: 0,
        offer_check: 1,
        offer_discount: 10,
        stock: 20,
        price: 60,
        image: "gomitasmogulfrutales.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Gomitas Mogul Ositos",
        detail: "Gomitas dulces mogul ositos",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 60,
        image: "gomitasmogulositos.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Gomitas Mogul Frutilla y Crema",
        detail: "Gomitas dulces mogul frutilla y crema",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 60,
        image: "gomitasmogulfrutillaycrema.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Gomitas Dientitos",
        detail: "Gomitas dulces dientitos",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 65,
        image: "gomitasdientitos.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      
      // Galletitas

      {
        name: "Galletitas Saladix Snack Pizza",
        detail: "Galletitas saladix snack pizza x100gr, pack 6u.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 15,
        stock: 20,
        price: 600,
        image: "Galletitassaladixsnackpizza.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      
      {
        name: "Galletitas Cereal Mix",
        detail: "Galletitas cereal mix x100gr, pack 6u.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 500,
        image: "galletitascerealmix.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Galletitas Formis Dulce de Leche",
        detail: "Galletitas ddl x100gr, pack 6u.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 650,
        image: "galletitasformisddl.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Galletitas Formis Chocolate",
        detail: "Galletitas chocolate x100gr, pack 6u.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 15,
        stock: 20,
        price: 650,
        image: "galletitasformischocolate.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Galletitas Formis Frutilla",
        detail: "Galletitas frutilla x100gr, pack 6u.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 20,
        stock: 20,
        price: 650,
        image: "galletitasformisfrutilla.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Galletitas Chocolinas",
        detail: "Galletitas chocolinas x100gr, pack 6u.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 600,
        image: "galletitaschocolinas.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      
      {
        name: "Galletitas Cofler",
        detail: "Galletitas cofler x100gr, pack 6u.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 650,
        image: "galletitascofler.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Galletitas DOn Satur Salados",
        detail: "Galletitas don satur x100gr, pack 6u.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 650,
        image: "galletitasdonsatur.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Galletitas Don Satur Salados",
        detail: "Galletitas don satur x100gr, pack 6u.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 10,
        stock: 20,
        price: 550,
        image: "galletitasdonsatur.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Galletitas 9 de Oro",
        detail: "Galletitas 9 de oro x100gr, pack 6u.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 500,
        image: "galletitas9deoro.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Galletitas Pepitos",
        detail: "Galletitas pepitos x100gr, pack 6u.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 15,
        stock: 20,
        price: 6500,
        image: "galletitaspepitos.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

    ])
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
  }
};
