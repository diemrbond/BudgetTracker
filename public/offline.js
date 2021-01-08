function saveRecord(data){

    console.log("REACHED SAVE RECORD");
}

const request = window.indexedDB.open("offline-budget", 1);

// // Create schema
// request.onupgradeneeded = event => {
//   const db = event.target.result;

//   // Creates an object store with a listID keypath that can be used to query on.
//   const toDoListStore = db.createObjectStore("toDoList", {
//     keyPath: "listID"
//   });
//   // Creates a statusIndex that we can query on.
//   toDoListStore.createIndex("statusIndex", "status");
// };