const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

const COLUMN = input.length - 1;
const ROW = input.length;

let OUTPUT = '';

console.log(`Total columns -> ${COLUMN}, Total rows -> ${ROW}`);

// Mostra a matriz atual
for (let column = 0; column <= input.length - 1; column++) {
  console.log(`Column: ${column} -> Row: ${input[column]}`);
}

// Percorre a matriz e faz uma leitura na diagonal
for (let row = 1; row <= ROW + COLUMN - 1; row++) {
  let start_column = Math.max(0, row - ROW);

  // Defini o numero de item(s) para a listagem
  let total_elements_line = Math.min(row, COLUMN - start_column, ROW);

  // Percorre a matriz e lista todos o(s) item(s) das linhas
  for (let j = 0; j < total_elements_line; j++) {
    const index_column = Math.min(ROW, row) - j - 1;

    const total_elements_in_line = input[index_column].length - 1;

    OUTPUT += `${
      input[index_column][total_elements_in_line - start_column - j]
    }  `;
  }

  console.log(OUTPUT);
  OUTPUT = '';
}
