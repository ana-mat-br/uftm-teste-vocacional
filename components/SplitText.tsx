/**
 * Quebra texto em palavras (`whitespace-nowrap` evita quebra mid-word) e
 * cada palavra em letras com `className={letterClass}`. Animadores fazem
 * `querySelectorAll('.${letterClass}')` no ref do pai pra targetar cada span.
 */
type Props = {
  text: string;
  letterClass: string;
};

export default function SplitText({ text, letterClass }: Props) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <span key={ci} className={`${letterClass} inline-block`}>
              {char}
            </span>
          ))}
          {wi < words.length - 1 && (
            <span className={`${letterClass} inline-block`}>&nbsp;</span>
          )}
        </span>
      ))}
    </>
  );
}
