export function isMatch(s: string, p: string): boolean {
  const lenS = s.length;
  const lenP = p.length;
  const map: { [key: string]: boolean } = {};

  const check = (idxS: number, idxP: number) => {
    if (map[`${ idxS }:${ idxP }`] !== undefined) return map[`${ idxS }:${ idxP }`]
    if (idxS > lenS) return false
    if (idxS === lenS && idxP === lenP) return true

    if (p[idxP] === '.' || p[idxP] === s[idxS]) {
      map[`${ idxS }:${ idxP }`] = p[idxP + 1] === '*' ? check(idxS + 1, idxP) || check(idxS, idxP + 2) : check(idxS + 1, idxP + 1)
    } else {
      map[`${idxS}:${idxP}`] = p[idxP + 1] === '*' ? check(idxS, idxP + 2) : false
    }

    return map[`${idxS}:${idxP}`]
  }

  return check(0, 0);
}
