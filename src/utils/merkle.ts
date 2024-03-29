import { computePedersenHash } from './hash';

export class MerkleTree {
  public leaves: string[];

  public branches: string[][] = [];

  public root: string;

  public hashMethod: (a: any, b: any) => string;

  constructor(
    leafHashes: string[],
    hashMethod: (a: any, b: any) => string = computePedersenHash
  ) {
    this.hashMethod = hashMethod;
    this.leaves = leafHashes;
    this.root = this.build(leafHashes);
  }

  /**
   * Create Merkle tree
   * @param leaves hex-string array
   * @returns format: hex-string; Merkle tree root
   */
  private build(leaves: string[]): string {
    if (leaves.length === 1) {
      return leaves[0];
    }
    if (leaves.length !== this.leaves.length) {
      this.branches.push(leaves);
    }
    const newLeaves: string[] = [];
    for (let i = 0; i < leaves.length; i += 2) {
      if (i + 1 === leaves.length) {
        newLeaves.push(MerkleTree.hash(leaves[i], '0x0', this.hashMethod));
      } else {
        newLeaves.push(MerkleTree.hash(leaves[i], leaves[i + 1], this.hashMethod));
      }
    }
    return this.build(newLeaves);
  }

  /**
   * Create hash from ordered a and b, Pedersen hash default
   * @returns format: hex-string
   */
  static hash(
    a: any,
    b: any,
    hashMethod: (a: any, b: any) => string = computePedersenHash
  ) {
    const [aSorted, bSorted] = [BigInt(a), BigInt(b)].sort((x, y) => (x >= y ? 1 : -1));
    return hashMethod(aSorted, bSorted);
  }

  /**
   * Return path to leaf
   * @param leaf hex-string
   * @param branch hex-string array
   * @param hashPath hex-string array
   * @returns format: hex-string array
   */
  public getProof(leaf: string, branch = this.leaves, hashPath: string[] = []): string[] {
    const index = branch.indexOf(leaf);
    if (index === -1) {
      throw new Error('leaf not found');
    }
    if (branch.length === 1) {
      return hashPath;
    }
    const isLeft = index % 2 === 0;
    const neededBranch = (isLeft ? branch[index + 1] : branch[index - 1]) ?? '0x0';
    const newHashPath = [...hashPath, neededBranch];
    const currentBranchLevelIndex =
      this.leaves.length === branch.length
        ? -1
        : this.branches.findIndex((b) => b.length === branch.length);
    const nextBranch = this.branches[currentBranchLevelIndex + 1] ?? [this.root];
    return this.getProof(
      MerkleTree.hash(isLeft ? leaf : neededBranch, isLeft ? neededBranch : leaf, this.hashMethod),
      nextBranch,
      newHashPath
    );
  }
}

/**
 * Test Merkle tree path
 * @param root hex-string
 * @param leaf hex-string
 * @param path hex-string array
 * @param hashMethod hash method override, Pedersen default
 */
export function proofMerklePath(
  root: string,
  leaf: string,
  path: string[],
  hashMethod: (a: any, b: any) => string = computePedersenHash
): boolean {
  if (path.length === 0) {
    return root === leaf;
  }
  const [next, ...rest] = path;
  return proofMerklePath(root, MerkleTree.hash(leaf, next, hashMethod), rest, hashMethod);
}