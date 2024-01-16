import { useRemoveNumberFromText } from "../../hooks/useRemoveNumberFromText";

export function Text({ textValue }) {
  const { removeNumbers } = useRemoveNumberFromText();

  return <p>{removeNumbers(textValue)}</p>;
}
