import { unstable_cache } from "next/cache";

const getDate = unstable_cache(
  async () => {
    const date = new Date();
    const friendlyDate = date.toLocaleString();
    return friendlyDate;
  },
  ["date"],
  {
    revalidate: 60,
  }
);

export default async function Page() {
  const date = await getDate();
  return (
    <main>
      <h1>Static page with ISR</h1>
      <p>{date}</p>
    </main>
  );
}
