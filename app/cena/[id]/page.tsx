import { notFound } from "next/navigation";
import { CENAS, getCena } from "@/data/cenas";
import CenaQuiz from "@/components/CenaQuiz";

// Pré-gera as páginas estáticas pras 9 cenas pontuáveis
export function generateStaticParams() {
  return CENAS.map((c) => ({ id: String(c.id) }));
}

export default async function CenaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cenaId = parseInt(id, 10);
  const cena = getCena(cenaId);
  if (!cena) notFound();

  const proximoIndex = CENAS.findIndex((c) => c.id === cenaId) + 1;
  const proximaCena = CENAS[proximoIndex] ?? null;
  const proximoId = proximaCena ? proximaCena.id : null;

  return <CenaQuiz cena={cena} proximoId={proximoId} />;
}
