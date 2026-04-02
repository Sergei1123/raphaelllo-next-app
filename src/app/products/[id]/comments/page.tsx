type Props = {
  params: Promise<{ id: string }>;
};

export default async function CommentsPage({ params }: Props) {
  const { id } = await params;

  return (
    <main>
      <h1>Комментарии к продукту #{id}</h1>
      <p>Раздел комментариев для продукта с идентификатором: {id}</p>
    </main>
  );
}