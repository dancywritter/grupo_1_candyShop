<div class="container">
<div class="row">
<div class= "col-md-12 mb-12 tituloForm">
<h1 class="col-md-8 col-mb-12">EDITANDO PRODUCTO <i>Id: <%= producto.idProducto %> Nombre: <%= producto.nombre %></i>
</div>
<div class="col-md-8 mb-12 contenidoForm">
<form action="/products/edit/<%= producto.idProducto %>?_method=put" method="post" enctype="multipart/form-data">
<div class="row">
<section class="detalleProducto col-md-12 mb-12">
<h5>DETALLE PRODUCTO</h5>
<label for="nombreProducto">Nombre del Producto:</label>
<input type="text" name="nombre" placeholder="Ej: Alfajor Jorgito" class="form-control" value="<%= producto.nombre %>">
<label for="categoria">Categoria del Producto:</label>
<div class="input-group mb-3 col-md-6">
<div class="input-group-prepend">
<label class="input-group-text" for="inputGroupSelect01">Categoria</label>
</div>
<select name="categoria" class="custom-select" id="inputGroupSelect01">
<option selected>Seleccione una opcion...</option>
<% if(producto.categoria == "Alfajores") { %>
    <option value="Alfajores" selected>Alfajores</option>
    <% } else { %>
        <option value="Alfajores">Alfajores</option>
        <% } %>
        <% if(producto.categoria == "Caramelos") { %>
            <option value="Caramelos" selected>Caramelos</option>
            <% } else { %>
                <option value="Caramelos">Caramelos</option>
                <% } %>
                <% if(producto.categoria == "Chocolates") { %>
                    <option value="Chocolates" selected>Chocolates</option>
                    <% } else { %>
                        <option value="Chocolates">Chocolates</option>
                        <% } %>
                        <% if(producto.categoria == "Gomitas") { %>
                            <option value="Gomitas" selected>Gomitas</option>
                            <% } else { %>
                                <option value="Gomitas">Gomitas</option>
                                <% } %>
                                </select>
                                </div>
                                <label for="detalleProdcutos">Detalle del Producto:</label>
                                <textarea class="form-control col-md-12 mb-12" id="detalleProductos" name="detalle" placeholder="<%= producto.detalle %>"></textarea>
                                </section>
                                <section class="precios col-12">
                                <h5 class="">PRECIO</h5>
                                <label for="Costo">Costo</label>
                                <input type="text" class="form-control" name="costo" required placeholder="Ej: $ 10.00" value="<%= producto.costo %>">
                                <label for="utilidad">Utilidad</label>
                                <input type="text" class="form-control" name="utilidad" required placeholder="Ej: % 50" value="<%= producto.utilidad %>">
                                <label for="precio">Precio</label>
                                <input type="text" class="form-control" name="precio" required placeholder="Ej: $ 15.00" value="<%= producto.precio %>">
                                </section>
                                <section class="masVendidos col-12">
                                <h5>MAS VENDIDOS</h5>
                                <div class="input-group mb-4 col-md-6">
                                <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Mas Vendidos</label>
                                </div>
                                <select name="masVendidos" class="custom-select" id="inputGroupSelect01">
                                <option selected>Seleccione una opcion...</option>
                                <% if(producto.masVendidos == "si") { %>
                                    <option value="SI" selected>SI</option>
                                    <% } else { %>
                                        <option value=SI>SI</option>
                                        <% } %>
                                        <% if(producto.masVendidos == "no") { %>
                                            <option value="NO" selected>NO</option>
                                            <% } else { %>
                                                <option value="NO">NO</option>
                                                <% } %>
                                                </select>
                                                </div>
                                                </section>
                                                <section class="oferta col-12">
                                                <h5>OFERTA</h5>
                                                <div class="input-group mb-4 col-md-6">
                                                <div class="input-group-prepend">
                                                <label class="input-group-text" for="inputGroupSelect01">Oferta</label>
                                                </div>
                                                <select name="oferta" class="custom-select" id="inputGroupSelect01">
                                                <option selected>Seleccione una opcion...</option>
                                                <% if(producto.oferta == "si") { %>
                                                    <option value="SI" selected>SI</option>
                                                    <% } else { %>
                                                        <option value=SI>SI</option>
                                                        <% } %>
                                                        <% if(producto.oferta == "no") { %>
                                                            <option value="NO" selected>NO</option>
                                                            <% } else { %>
                                                                <option value="NO">NO</option>
                                                                <% } %>
                                                                </select>
                                                                </div>
                                                                <div class="col-md-4 mb-12">
                                                                <label for="descuento">Descuento</label>
                                                                <input type="text" name="descuento" class="form-control" placeholder="Ej: % 10" value="<%= producto.descuento %>">
                                                                </div>
                                                                <div class="col-md-4 mb-12">
                                                                <label for="descuento">Precio Oferta</label>
                                                                <input type="text" name="precioOferta" class="form-control" placeholder="Ej: $ 10" value="<%= producto.precioOferta %>">
                                                                </div>
                                                                </section>
                                                                </div>
                                                                </div>
                                                                <div class="col-md-4 mb-12 contenedorImg">
                                                                <img src="/images/uploads/no-imagen.jpg" class="card-img-top imagenForm" alt="">
                                                                <input class="btn" type="file" name="imgProducto">
                                                                </div>
                                                                <button type="submit" class="btn btn-success btn-lg btn-block botonForm2 col-md-12 mb-12">Guardar Producto</button>
                                                                </form>
                                                                <form action="/products/delete/<%= producto.idProducto %>?_method=delete" method="POST">
                                                                <button type="submit" class="btn btn-danger btn-lg btn-block botonForm2 col-md-12 mb-12">Eliminar Producto</button>
                                                                </form>
                                                                </div>