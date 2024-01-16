export function useFormatCpf() {
  function cpfFormatted(value) {
    let cpf = value.replace(/\D/g, "");

    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    return cpf;
  }

  return { cpfFormatted };
}
