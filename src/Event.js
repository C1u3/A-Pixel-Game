class Events {
  callbacks = [];
  nextId = 0;

  // Fire event
  emit(eventName, value) {
    this.callbacks.forEach(stored => {
      if (stored.eventName === eventName) {
        stored.callback(value);
      }
    })
  }

  // Add event
  on(eventName, caller, callback) {
    this.nextId += 1;
    this.callbacks.push({
      id: this.nextId,
      eventName,
      caller,
      callback,
    });
    return this.nextId;
  }
  
  // Remove event
  off(id) {
    this.callbacks = this.callbacks.filter((stored) => stored.id !== id);
  }

  unsubscribe(caller) {
    this.callbacks = this.callbacks.filer((stored) => stored.caller !== caller);
  }
}

export const events = new Events();