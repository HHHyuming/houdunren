class HD {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECT = "reject";

  constructor(executor) {
    this.status = HD.PENDING;
    this.value = null;
    this.callbacks = [];

    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.status == HD.PENDING) {
      this.status = HD.FULFILLED;
      this.value = value;
      console.log("resolve");
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onFulfilled(value);
        });
      });
    }
  }
  reject(value) {
    if (this.status == HD.PENDING) {
      this.status = HD.REJECT;
      this.value = value;
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onRejected(value);
        });
      });
    }
  }

  then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
      onFulfilled = (value) => value;
    }

    if (typeof onRejected != "function") {
      onRejected = (value) => value;
    }
    return new HD((resolve, reject) => {
      if (this.status == HD.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            try {
              onFulfilled(value);
            } catch (error) {
              onRejected(error);
            }
          },
          onRejected: (value) => {
            try {
              onRejected(value);
            } catch (error) {
              onRejected(error);
            }
          },
        });
      }
      if (this.status == HD.FULFILLED) {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value);
            if (result instanceof HD) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            onRejected(error);
          }
        });
      }

      if (this.status == HD.REJECT) {
        setTimeout(() => {
          try {
            let reason = onRejected(this.value);
            if (reason instanceof HD) {
              reason.then(resolve, reject);
            } else {
              resolve(reason);
            }
          } catch (error) {
            onRejected(error);
          }
        });
      }
    });
  }
}
