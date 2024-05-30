type MinByKey = (array: any[], key: string) => any;
type MinByFunction = (array: any[], iteratee: (value: any, index: number, array: any[]) => any) => any;

interface NxStatic {
  minBy: MinByKey & MinByFunction;
}
