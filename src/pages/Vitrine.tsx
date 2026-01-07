import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 w-full pt-20">
        <iframe
          src="https://lelepepe.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Vitrine Lelê Pepê"
        />
      </main>
    </div>
  );
};

export default Vitrine;
