function stringToBytes(inputString: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(inputString);
}

class Hash {
  Hash32(str: string) {
    let offsetBasis = 0x811c9dc5;
    let hash = offsetBasis;
    for (var i = 0; i < str.length; ++i) {
      hash ^= str.charCodeAt(i);
      hash +=
        (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    }

    // console.log({ str, hash: hash, hashHex: (hash >>> 0).toString(16) });
    return hash >>> 0;
  }

  Hash64(str: string) {
    let offsetBasis = BigInt("0xcbf29ce484222325");
    let hash = offsetBasis;
    for (let i = 0; i < str.length; ++i) {
      hash ^= BigInt(str.charCodeAt(i));
      hash +=
        (hash << BigInt(1)) +
        (hash << BigInt(4)) +
        (hash << BigInt(5)) +
        (hash << BigInt(7)) +
        (hash << BigInt(8)) +
        (hash << BigInt(40));
    }

    console.log({ str, hash: hash, hashHex: hash.toString(16) });

    return hash;
  }
}

export default Hash;
