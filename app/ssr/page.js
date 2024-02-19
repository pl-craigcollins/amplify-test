export const runtime = 'edge'

import { unstable_noStore } from "next/cache";

const getDate = () => {
  const date = new Date();
  const friendlyDate = date.toLocaleString();
  return friendlyDate;
};

export default async function Page() {
  unstable_noStore();

  return (
    <main>
      <h1>Serverside</h1>
      <p>{getDate()}</p>
    </main>
  );
}
