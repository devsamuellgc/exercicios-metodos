import { useFormatCpf } from "../../hooks/useFormatCpf";

export function TextCpf({ cpf }) {
  const { cpfFormatted } = useFormatCpf();

  return <p>{cpfFormatted(cpf)}</p>;
}
