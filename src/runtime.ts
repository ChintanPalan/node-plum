class Runtime {
  /**
   * @method getId
   * @memberof Runtime
   * @description Get the extension ID
   * @scope chrome.runtime
   *
   * @example
   * (async (runtime) => {
   *     console.log(await runtime.getId());
   * })(new Runtime());
   */
  public getId(callback?: (err?: Error, id?: string) => void): Promise<string> {
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

  /**
   * @name getLastError
   * @memberof Runtime
   * @description Get the last error message
   * @scope chrome.runtime
   *
   * @example
   * (async (runtime) => {
   *     console.log(await runtime.getLastError());
   * })(new Runtime());
   */
  public getLastError(callback?: (lastError?: string) => void): Promise<string> {
    // instantiating a promise
    let promise = new Promise<string>((resolve) => {
      // safeguarding
      if (chrome.runtime.lastError && chrome.runtime.lastError.message) {
        resolve(chrome.runtime.lastError.message);
      } else {
        resolve(undefined);
      }
    });

    // check if callback is passed
    if (callback && typeof callback == 'function') {
      // handle promise
      promise.then(callback);
    } else {
      // return promise otherwise
      return promise;
    }
  }
}
