function getData(url) {
  let promise = new Promise((resolve, reject) => {
    let resquet = new XMLHttpRequest();

    resquet.onreadystatechange = function () {
      if (resquet.readyState === 4 && resquet.status === 200) {
        let dataJson = resquet.response;
        let data = JSON.parse(dataJson);
        resolve(data);
      } else if (resquet.readyState === 4) {
        reject(resquet.statusText);
      }
    };
    resquet.timeout = 10000;

    resquet.open("GET", url);
    resquet.send();
  });

  return promise;
}
