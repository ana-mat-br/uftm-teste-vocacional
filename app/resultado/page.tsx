// Tela placeholder do resultado (D2). A versão final do D4 vai:
//   1. chamar /api/finalizar com o vetor
//   2. receber top 3 cursos + bixinho gerado pelo Haiku
//   3. salvar no Supabase
//   4. renderizar a Carta completa
//
// Por ora só lemos o localStorage e mostramos o que foi calculado, pra validar
// que o end-to-end do quiz funciona.

import ResultadoMock from "@/components/ResultadoMock";

export default function ResultadoPage() {
  return <ResultadoMock />;
}
