document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("load-products");
  const contenedor = document.getElementById("product-container");

  boton.addEventListener("click", function () {
    fetch("https://fakestoreapi.com/products?limit=9")
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (productos) {
        contenedor.innerHTML = ""; // Borra lo anterior

        for (let i = 0; i < productos.length; i++) {
          const producto = productos[i];

          const tarjeta = `
            <div class="col">
              <div class="card shadow-sm">
                <img src="${producto.image}" class="bd-placeholder-img card-img-top" style="object-fit: contain; height: 225px;" alt="${producto.title}">
                <div class="card-body">
                  <h5>${producto.title}</h5>
                  <p>${producto.description.substring(0, 100)}...</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button class="btn btn-sm btn-outline-secondary">View</button>
                      <button class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-body-secondary">$${producto.price}</small>
                  </div>
                </div>
              </div>
            </div>
          `;

          contenedor.innerHTML += tarjeta;
        }
      });
  });
});