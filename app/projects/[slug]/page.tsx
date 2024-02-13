const page = ({ params }) => {
  return (
    <main>
      <h1>Project Name</h1>
      <h2>{params.slug}</h2>
    </main>
  );
};

export default page;
