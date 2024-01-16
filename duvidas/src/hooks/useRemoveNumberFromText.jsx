export function useRemoveNumberFromText() {
  function removeNumbers(value) {
    const text = value.replace(/[^A-Za-z]+/g, "");

    return text;
  }

  return { removeNumbers };
}
