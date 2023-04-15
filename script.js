class Node {
    constructor(value, children = []) {
      this.value = value;
      this.children = children;
    }
  }
  
class Tree {
   constructor(root) {
      this.root = root;
   }
  
   countLeafNodes() {
      let count = 0;
      const leaf = (node) => {
        if (node.children.length === 0) {
          count++;
        } else {
          for (const child of node.children) {
            leaf(child);
          }
        }
      };
      leaf(this.root);
      return count;
    }
  
   
    findLongestPath() {
      let longestPath = 0;
      const long = (node, pathLength) => {
        if (node.children.length === 0) {
          if (pathLength > longestPath) {
            longestPath = pathLength;
          }
        } else {
          for (const child of node.children) {
            long(child, pathLength + 1);
          }
        }
      };
      long(this.root, 0);
      return longestPath;
    }
  
    isEquivalent(otherTree) {
      const equi = (node, otherNode) => {
        if (node.value !== otherNode.value) {
          return false;
        }
        if (node.children.length !== otherNode.children.length) {
          return false;
        }
        for (let i = 0; i < node.children.length; i++) {
          if (!equi(node.children[i], otherNode.children[i])) {
            return false;
          }
        }
        return true;
      };
      return equi(this.root, otherTree.root);
    }
  }

// example usage
const tree = new Tree(
    new Node(5, [
      new Node(3, [
        new Node(2),
        new Node(1),
        new Node(4),
      ]),
      new Node(7, [
        new Node(0, [
          new Node(8),
        ]),
      ]),
      new Node(6, [
        new Node(5),
        new Node(2),
      ]),
    ])
  );
  
  console.log(tree.countLeafNodes()); // 6
  console.log(tree.findLongestPath()); // 3

  const otherTree = new Tree(
    new Node(5, [
      new Node(3, [
        new Node(2),
        new Node(1),
        new Node(4),
      ]),
      new Node(7, [
        new Node(0, [
          new Node(8),
        ]),
      ]),
      new Node(6, [
        new Node(5),
        new Node(2),
      ]),
    ])
  );
  
  console.log(tree.isEquivalent(otherTree)); // true
  
  const differentTree = new Tree(
    new Node(5, [
      new Node(3, [
        new Node(2),
        new Node(1),
        new Node(4),
      ]),
      new Node(7, [
        new Node(0, [
          new Node(9), // different child value
        ]),
      ]),
      new Node(6, [
        new Node(5),
        new Node(2),
      ]),
    ])
  );
  
  console.log(tree.isEquivalent(differentTree)); // false


