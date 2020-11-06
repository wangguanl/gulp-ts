let num: number = 2,
  str: string = `1sas${num}`,
  arr: Array<object> = [{ a: 1 }, { b: 2 }],
  arr2: any[] = ["1", 2],
  arr3: [number, string] = [2, "1"],
  obj: object = {};
enum Weeks {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
console.log(Weeks);
let w: Weeks = Weeks.Monday;
console.log(w);

function rvoid(): void {
  //   return null;
}
console.log(rvoid());

function renum(): Weeks {
  return w;
}

function rFnP(num1: number, num2?: number): number {
  return num1 + num2;
}
console.log(rFnP(3, 12));

function rFn({
  dnum1,
  dnum2 = 456,
}: {
  dnum1: number;
  dnum2?: number;
}): number {
  return dnum1 + dnum2;
}
console.log(rFn({ dnum1: 1 }));

function rFn2(dnum1: number = 4, dnum2: number = 5): number {
  return dnum1 + dnum2;
}
console.log(rFn2());

function rsum(nums: number[]): number {
  return nums.reduce((a, b) => a + b);
}
console.log(rsum([3, 12, 4]));

let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

function arrs(a, ...b) {
  //   console.log(a, b);
  //   console.log(a, ...b);
  console.log({ ...b });
}
arrs(1, 2, 3, 4);
arrs(1, obj);

let obj2: object = { c: 1, b: 2, d: 3 };

console.log({ ...obj2, ddd: 123 });
console.log(Object.assign({ ddd: 123 }, obj2));
