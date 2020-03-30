export default function(bindingElement: object, ...args: Function[]) {
  for (let functionToBind of args) {
    Object.assign(bindingElement, functionToBind);
  }
}
