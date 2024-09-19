function printDiamond(rows) {
  const totalLength = 2 * rows - 1; // total panjang baris
  for (let i = 0; i < totalLength ** 2; i++) {
    const row = Math.floor(i / totalLength) + 1;
    const col = i % totalLength;

    const currentRow = row <= rows ? row : 2 * rows - row;
    const numStars = 2 * currentRow - 1;
    const numSpaces = rows - currentRow;

    if (col < numSpaces) {
      process.stdout.write(" ");
    } else if (col < numSpaces + numStars) {
      process.stdout.write("*");
    } else {
      process.stdout.write("");
    }

    if (col === totalLength - 1) {
      console.log(); // ganti baris setelah mencapai akhir kolom
    }
  }
}

// Contoh: memanggil fungsi untuk mencetak berlian dengan 5 baris
printDiamond(5);
