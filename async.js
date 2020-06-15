// Async JS
// - Promise
// -
// -

const promiseFunction = new Promise((resolve, reject) => {
  resolve(1);
  reject("Failde");
});

//High Order Function

//Callback
promiseFunction.then((res) => res + 1).then((res) => console.log(res));

//Callback Hell
const callBackHell = () => {
  setTimeout(() => {
    console.log("func1");
    setTimeout(() => {
      console.log("func2");
    }, 1000);
  }, 1000);
};
callBackHell();

const asyncAwait = async () => {
  const timeoutFunction = () => {
    setTimeout(() => console.log("Success 1"), 2000);
  };
  timeoutFunction();
  console.log("Succes 2");
};

asyncAwait();
