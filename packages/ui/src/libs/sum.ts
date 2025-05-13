export default function sum(...args: number[]) {
    const sum = args.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
}