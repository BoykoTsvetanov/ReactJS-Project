import firebase from "../config/firebase";

export function createData(data) {
  return firebase.firestore().collection("Travel").add(data);
}
export function getAll() {
  return firebase.firestore().collection("Travel").get();
}
export function get(id) {
  return firebase.firestore().collection("Travel").doc(id).get();
}
export function dlt(id) {
  return firebase.firestore().collection("Travel").doc(id).delete();
}
export function editData(id, data) {
  return firebase.firestore().collection("Travel").doc(id).update(data);
}
