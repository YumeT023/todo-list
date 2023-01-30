export const mapToProp = <A, P extends keyof A>(objects: Array<A>, key: P) => {
  return objects.map((item) => item[key]);
};
