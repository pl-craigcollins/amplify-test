const getDate = () => {
  const date = new Date();
  const friendlyDate = date.toLocaleString();
  return friendlyDate;
};

export default async function Page() {
  return (
    <main>
      <h1>Static page</h1>
      <p>{getDate()}</p>
    </main>
  );
}
