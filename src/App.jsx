import { useState } from "react";
import PWABadge from "./PWABadge.jsx";
import "./App.css";

function BtnProducto(producto) {
  const [count, setCount] = useState(producto.stock);
  return (
    <div className="mt-3">
      <button
        className="bg-blue-500 text-white p-2 mr-2"
        onClick={() => setCount((count) => count + 1)}
      >
        Agregar producto
      </button>

      <button
        className="bg-red-500 text-white p-2"
        onClick={() => setCount((count) => count - 1)}
      >
        Eliminar producto
      </button>
      <div className="mt-2">producto: {count}</div>
    </div>
  );
}

function Producto(producto) {
  return (
    <div className="mb-6 border p-4">
      <section>
        <h1 className="text-xl font-bold">Producto: {producto.nombre}</h1>

        <p className="my-2">{producto.descripcion}</p>

        <img className="w-64" src={producto.img} alt="imagen del productos" />
      </section>
      <BtnProducto stock={producto.stock ?? 0} />
    </div>
  );
}

const esperar = (milisegundos) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milisegundos);
  });
};

async function CargarProductos() {
  await esperar(3000);

  return (
    <div className="p-5">
      <Producto
        nombre="ejemplo 1"
        descripcion="este es el ejemplo 1 de la funcion"
        img="/1images.jpg"
      />

      <Producto
        nombre="ejemplo2"
        descripcion="esto es el ejemplo 2"
        img="public\2images.png"
      />

      <Producto
        nombre="ejemplo3"
        descripcion="esto es el ejemplo 3"
        img="public\3images.png"
      />
      <Producto
        nombre="ejempl4"
        descripcion="esto es el ejemplo 4"
        img="public\favicon.svg.png"
      />
    </div>
  );
}

function App() {
  return <CargarProductos />;
}

export default App;
