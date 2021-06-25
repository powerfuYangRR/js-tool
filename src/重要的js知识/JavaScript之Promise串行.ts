function runPromiseByQueue(promises: any[]) {
  promises.reduce(
    (previousPromise, nextPromise) => previousPromise.then(() => nextPromise()),
    Promise.resolve()
  );
}

const createPromise = (time: number, id: number) => () =>
  new Promise<void>((solve) =>
    setTimeout(() => {
      console.log("promise", id);
      solve();
    }, time)
  );

console.log(
  runPromiseByQueue([
    createPromise(3000, 1),
    createPromise(2000, 2),
    createPromise(1000, 3)
  ])
);
