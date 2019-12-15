class Runtime {
  /**
   * @method getId
   *
   * @memberof chrome.runtime
   * @description Get the extension ID
   *
   * @example
   * (async (runtime) => {
   *     console.log(await runtime.getId());
   * })(new Runtime());
   */
  public getId(callback?: (err?: Error, id?: string) => number): Promise<string> {
    // instantiating a promise
    let promise = new Promise<string>((resolve, reject) => {
      // safeguarding
      if (chrome.runtime.id) {
        resolve(chrome.runtime.id);
      } else {
        reject(new Error('Can\'t find the id of undefined "runtime"'));
      }
    });
    // check if callback is passed
    if (callback && typeof callback == 'function') {
      // handle promise
      promise
        .then((id) => {
          callback(null, id);
        })
        .catch((error) => {
          callback(error, null);
        });
    } else {
      // return promise otherwise
      return promise;
    }
  }
}
