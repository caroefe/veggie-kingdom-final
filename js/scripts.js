$(document).ready(function () {

    'use strict';
    for (let i = 0; i < hamburguesas.length; i++) {


        $('#hamburguesas').append(
            '<div class="col-12 col-md-6 col-lg-6 px-3 py-4">' +
            '<div class="sc-product-item card">' +
            '<img class="card-img-top" data-name="product_image" src="img/productos/' + hamburguesas[i]['Imagen'] + '" alt="' + hamburguesas[i]['Nombre'] + '">' +
            '<div class="card-body d-flex flex-column">' +
            '<h3 data-name="product_name" class="card-title">' + hamburguesas[i]['Nombre'] + '</h3>' +
            '<p data-name="product_desc" class="card-text flex-row">' + hamburguesas[i]['Descripción'] + '</p>' +
            '<div class="d-flex justify-content-between align-items-center flex-wrap">' +
            '<div class="card-text fw-bold bg-azul">$ ' + hamburguesas[i]['Precio'] + '</div>' +
            '<button class="sc-add-to-cart btn btn-primary ">Agregar</button>' +
            '</div>' +
            '<input name="product_price" value="' + hamburguesas[i]['Precio'] + '" type="hidden">' +
            '<input name="product_id" value="' + hamburguesas[i] + '" type="hidden">' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    }
    for (let i = 0; i < milanesas.length; i++) {


        $('#milanesas').append(
            '<div class="col-12 col-md-6 col-lg-6 p-2">' +
            '<div class="sc-product-item card">' +
            '<img class="card-img-top" data-name="product_image" src="img/productos/' + milanesas[i]['Imagen'] + '" alt="' + milanesas[i]['Nombre'] + '">' +
            '<div class="card-body d-flex flex-column">' +
            '<h3 data-name="product_name" class="card-title">' + milanesas[i]['Nombre'] + '</h3>' +
            '<p data-name="product_desc" class="card-text flex-row">' + milanesas[i]['Descripción'] + '</p>' +
            '<div class="d-flex justify-content-between align-items-center flex-wrap">' +
            '<div class="card-text fw-bold bg-azul">$ ' + milanesas[i]['Precio'] + '</div>' +
            '<button class="sc-add-to-cart btn btn-primary ">Agregar</button>' +
            '</div>' +
            '<input name="product_price" value="' + milanesas[i]['Precio'] + '" type="hidden">' +
            '<input name="product_id" value="' + milanesas[i] + '" type="hidden">' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    }


    for (let i = 0; i < paraPicar.length; i++) {


        $('#paraPicar').append(
            '<div class="col-12 col-md-6 col-lg-6 p-2">' +
            '<div class="sc-product-item card">' +
            '<img class="card-img-top" data-name="product_image" src="img/productos/' + paraPicar[i]['Imagen'] + '" alt="' + paraPicar[i]['Nombre'] + '">' +
            '<div class="card-body d-flex flex-column">' +
            '<h3 data-name="product_name" class="card-title">' + paraPicar[i]['Nombre'] + '</h3>' +
            '<p data-name="product_desc" class="card-text flex-row">' + paraPicar[i]['Descripción'] + '</p>' +
            '<div class="d-flex justify-content-between align-items-center flex-wrap">' +
            '<div class="card-text fw-bold bg-azul">$ ' + paraPicar[i]['Precio'] + '</div>' +
            '<button class="sc-add-to-cart btn btn-primary ">Agregar</button>' +
            '</div>' +
            '<input name="product_price" value="' + paraPicar[i]['Precio'] + '" type="hidden">' +
            '<input name="product_id" value="' + paraPicar[i] + '" type="hidden">' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    }



    for (let i = 0; i < bebidas.length; i++) {


        $('#bebidas').append(
            '<div class="col-12 col-md-6 col-lg-6 p-2">' +
            '<div class="sc-product-item card">' +
            '<img class="card-img-top" data-name="product_image" src="img/productos/' + bebidas[i]['Imagen'] + '" alt="' + bebidas[i]['Nombre'] + '">' +
            '<div class="card-body d-flex flex-column">' +
            '<h3 data-name="product_name" class="card-title">' + bebidas[i]['Nombre'] + '</h3>' +
            '<p data-name="product_desc" class="card-text flex-row">' + bebidas[i]['Descripción'] + '</p>' +
            '<div class="d-flex justify-content-between align-items-center flex-wrap">' +
            '<div class="card-text fw-bold bg-azul">$ ' + bebidas[i]['Precio'] + '</div>' +
            '<button class="sc-add-to-cart btn btn-primary">Agregar</button>' +
            '</div>' +
            '<input name="product_price" value="' + bebidas[i]['Precio'] + '" type="hidden">' +
            '<input name="product_id" value="' + bebidas[i] + '" type="hidden">' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    }

    $('#smartcart').smartCart({

        cartItemTemplate: '<div class="d-flex">' +

            '<h3 class="h5 list-group-item-heading">{product_name}</h3>' +
            '</div>',

        lang: {
            cartTitle: 'Mis productos',
            checkout: 'Hacer pedido',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove: '×',
            cartEmpty: '¡Sin productos aún!<br />Comenzá a elegir'
        }
    });
});




