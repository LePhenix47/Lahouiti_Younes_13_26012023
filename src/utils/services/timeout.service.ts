/**
 * Utility class service that creates and removes timeouts
 */
export class Timeout {
  id: number;
  arrayOfIds: number[];
  constructor() {
    this.id = 0;
    this.arrayOfIds = [];
  }

  /**
   * Sets a timeout with a callback function and the duration in milliseconds
   *
   * **Has to be assigned to a variable**
   *
   * Example:
   * ```js
   * const timeoutCreator = new Timeout();
   *
   * let firstTimeout = timeoutCreator.addTimeout(()=>{...}, 10_000);
   *  ```
   *    */
  addTimeout(callbackFunction: Function, milliseconds: number) {
    //@ts-ignore The setTimeout returns a number
    this.id = setTimeout(() => {
      callbackFunction();
    }, milliseconds);

    this.arrayOfIds.push(this.id);

    return this.id;
  }

  /**
   * Removes the timeout by its id
   *
   * Here's an example:
   * ```js
   * const timeoutCreator = new Timeout();
   *
   * let firstTimeout = timeoutCreator.addTimeout(()=>{...}, 10_000);
   *
   * timeoutCreator.removeTimeout(firstTimeout)
   * ```
   */
  removeTimeout(id: number) {
    const actualId: number = this.arrayOfIds.filter((idNumber: number) => {
      return idNumber === id;
    })[0];

    clearTimeout(actualId);

    this.arrayOfIds = this.arrayOfIds.filter((idNumber: number) => {
      return idNumber !== actualId;
    });
  }
}
