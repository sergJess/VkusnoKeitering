export function classListsAdd(node, listToAdd) {
  if (Array.isArray(listToAdd)) {
    for (let i = 0, length = listToAdd.length; i < length; i++) {
      node.classList.add(listToAdd[i]);
    }
    return;
  }
  if (typeof listToAdd == "string") {
    node.classList.add(listToAdd);
  }
}

export function classListsRemove(node, listToRemove) {
  if (Array.isArray(listToRemove)) {
    for (let i = 0, length = listToRemove.length; i < length; i++) {
      node.classList.remove(listToRemove[i]);
    }
    return;
  }
  if (typeof listToRemove == "string") {
    node.classList.remove(listToRemove);
  }
}
