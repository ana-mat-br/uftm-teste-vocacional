// TODO D3: implementar cena dinâmica do quiz
// Vai consumir data/cenas.ts e atualizar o vetor de eixos no localStorage

export default async function CenaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <main className="mx-auto flex min-h-screen max-w-[480px] flex-col items-center justify-center px-6 py-10 text-center">
      <p className="font-terminal text-base" style={{ color: "var(--text-dim)" }}>
        // cena {id} — em construção
      </p>
    </main>
  );
}
