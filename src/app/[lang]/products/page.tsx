export default function ProductsPage() {
  const products = [
    { id: 1, name: "Ноутбук" },
    { id: 2, name: "Смартфон" },
    { id: 3, name: "Планшет" },
  ];

  return (
    <main>
      <h1>Список продуктов</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>
              {product.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}