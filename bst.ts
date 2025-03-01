// Binary Search Tree Implementation
export class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  root: BSTNode | null;

  constructor() {
    this.root = null;
  }

  // EASY: Insert a value into the BST
  insert(value: number): void {
    // TODO: Implement insert method
    let curr = this.root;
    if(curr === null){
      this.root = new BSTNode(value);
      return;
    }
    while(true){
      if(value <= curr.value){
        if(curr.left === null){
          curr.left = new BSTNode(value);
          return;
        }else{
          curr = curr.left;
        }
      }else{
        if(curr.right === null){
          curr.right = new BSTNode(value);
          return;
        }else{
          curr = curr.right;
        }
      }
    }

  }

  // EASY: Check if a value exists in the BST
  contains(value: number): boolean {
    let curr = this.root;
   
    while(true){
      if(curr === null){
        return false;
      }
      else if(curr.value === value){
        return true;
      }
      else if(value < curr.value){
          curr = curr.left;
      }else if(value > curr.value){
          curr = curr.right;
      }
    }
  }

  // MEDIUM: Find the minimum value in the BST
  findMin(): number | null {
    let curr = this.root;
    while(true){
      if(curr === null){
        return null;
      }
      else if(curr.left === null){
        return curr.value;
      }
      curr = curr.left;
    }
  }

  // MEDIUM: Find the maximum depth of the BST
  maxDepth(): number {
    let result = 0;

    function dfsr(next: BSTNode | null, depth: number){
      if(next !== null){
        if(depth > result){
          result = depth;
        }

        dfsr(next.left, depth + 1);
        dfsr(next.right, depth + 1);
      }
    }

    dfsr(this.root, 0);
  
    return result;
  }

  // MEDIUM: Depth-First Search (DFS) Traversal
  dfs(): number[] {
    const result : number[] = [];
     
    function dfsr(next: BSTNode | null){
      if(next !== null){
        result.push(next.value);

        dfsr(next.left);
        dfsr(next.right);
      }
    }

    dfsr(this.root);
    return result;
  }

  // MEDIUM: Breadth-First Search (BFS) Traversal
  bfs(): number[] {
    const result : number[] = [];

    if(this.root === null){
      return [];
    }
    const queue : BSTNode[] = [];
    queue.push(this.root);
    while(queue.length > 0){
      const next = queue.shift();
      if(next !== undefined){
        result.push(next.value);

        if(next.left !== null){
          queue.push(next.left);
        }

        if(next.right !== null){
          queue.push(next.right);
        }

      }

    }
    return result;
  }
}

// Test Cases
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);

console.log("BST Contains 7:", bst.contains(7)); // Expected: true
console.log("BST Min Value:", bst.findMin()); // Expected: 3
console.log("BST Max Depth:", bst.maxDepth()); // Expected: 2
console.log("BST DFS Traversal:", bst.dfs()); // Expected: [10, 5, 3, 7, 15, 13, 17] (or similar)
console.log("BST BFS Traversal:", bst.bfs()); // Expected: [10, 5, 15, 3, 7, 13, 17] (or similar)