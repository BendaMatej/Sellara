export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      <h1 className="text-4xl font-bold mb-4">Vítej na Sellara</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Sellara je platforma pro digitální prodej. Prodej své produkty, vytvoř si vlastní obchod a připoj se ke komunitě úspěšných prodejců!
      </p>
      <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
        Začít prodávat
      </button>
    </main>
  );
}
