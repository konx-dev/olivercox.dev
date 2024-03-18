import { getHomepage } from '@/sanity/queries/homepage';

export default async function Home() {
  const homepage = await getHomepage();

  console.log(homepage);

  return (
    <section>
      <h1>Homepage</h1>
    </section>
  );
}
