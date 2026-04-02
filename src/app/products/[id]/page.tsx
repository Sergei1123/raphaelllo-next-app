type Props = {
params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  return (
    <main>
      <h1>Продукт #{id}</h1>
      <p>Вы просматриваете продукт с идентификатором: {id}</p>
      <a href={`/products/${id}/comments`}>Перейти к комментариям</a>
    </main>
  );
}

