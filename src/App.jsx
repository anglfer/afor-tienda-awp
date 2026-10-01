import { useEffect, useState } from "react";
import PWABadge from "./PWABadge.jsx";
import "./App.css";

function BotonAGG({ onClick }) {
  return (
    <button className="bg-blue-500 text-white p-2 mr-2" onClick={onClick}>
      Agregar producto
    </button>
  );
}

function BotonQuitar({ onClick }) {
  return (
    <button className="bg-red-500 text-white p-2" onClick={onClick}>
      Disminuir producto
    </button>
  );
}

function BtnProducto(producto) {
  const [count, setCount] = useState(producto.stock);

  return (
    <div className="mt-3">
      <BotonAGG onClick={() => setCount((count) => count + 1)} />

      <BotonQuitar onClick={() => setCount((count) => count - 1)} />

      <div className="mt-2">Producto: {count}</div>
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

const productos = [
  {
    nombre: "ejemplo 1",
    descripcion: "este es el ejemplo 1 de la funcion",
    img: "/1images.jpg",
  },
  {
    nombre: "ejemplo2",
    descripcion: "esto es el ejemplo 2",
    img: "/2images.png",
  },
  {
    nombre: "ejemplo3",
    descripcion: "esto es el ejemplo 3",
    img: "/3images.png",
  },
  {
    nombre: "ejempl4",
    descripcion: "esto es el ejemplo 4",
    img: "/favicon.svg",
  },
];

function App() {
  const [productosVisibles, setProductosVisibles] = useState(0);

  useEffect(() => {
    let cancelado = false;
    const esperar = (milisegundos) =>
      new Promise((resolve) => setTimeout(resolve, milisegundos));

    async function cargarProductos() {
      await esperar(3000);

      for (let i = 0; i < productos.length; i++) {
        if (cancelado) return;
        setProductosVisibles(i + 1);

        if (i < productos.length - 1) {
          await esperar(1000);
        }
      }
    }

    cargarProductos();
    return () => {
      cancelado = true;
    };
  }, []);

  return (
    <div className="p-5">
      {productos.slice(0, productosVisibles).map((producto) => (
        <Producto key={producto.nombre} {...producto} />
      ))}
    </div>
  );
}

export default App;
