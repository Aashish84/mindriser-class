const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("sucessful");
  }, 0);
});

console.log("start");

console.log(myPromise);

myPromise
  .then((res) => {
    console.log({ res });
  })
  .catch((err) => {
    console.log({ err });
  });

console.log("end");

(function a() {
  a();
})();
