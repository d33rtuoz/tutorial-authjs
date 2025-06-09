export default async function SpellPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <p>spell {slug}</p>
    </>
  );
}
