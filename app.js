function toh(n, s, a, d) {
  if (n == 1) {
    console.log(`move disk 1 from ${s} -> ${d}`);
    return n;
  }
  toh(n - 1, s, d, a);
  console.log(`move disk ${n} from ${s} -> ${d}`);
  toh(n - 1, a, s, d);
}

let n = 3;
toh(n, "SRC", "AUX", "DEST");
