import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query, serverTimestamp, updateDoc,
} from "firebase/firestore";
import { db } from "./firebaseApp";
import { storage } from "./firebaseApp";
import { ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

// Posztok kezelése

export const addPost = async (formData) => {
  const collectionRef = collection(db, "posts/");
  const newItem = { ...formData, timestamp: serverTimestamp() };
  const newDocRef = await addDoc(collectionRef, newItem);
};

export const readPost = async (id, setPost) => {
  const docRef = doc(db, "posts", id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPost({ ...docSnap.data(), id: docSnap.id });
    } else console.log("A dokumentum nem létezik!");
  } catch (err) {
    console.log(err);
  }
};

export const editPost = async (id, description, title) => {
  const docRef = doc(db, 'posts', id);
  await updateDoc(docRef, {description, title});

} 

//Képek kezelése

export const addPic = async (url) => {
    const collectionRef = collection(db, "images");
  const newItem = { photoUrl: url, timestamp: serverTimestamp() };
  const newDocRef = await addDoc(collectionRef, newItem);
}

//Vegyes függvények

export const uploadFile = async (folder, file) => {
  try {
    const fileRef = ref(storage, `${folder}/${v4() + file.name.slice(-4)}`);
    await uploadBytes(fileRef, file);
    const photoUrl = await getDownloadURL(fileRef);
    return photoUrl;
  } catch (err) {
    console.log("Hiba a fájlfeltöltés során:", err);
    throw err;
  }
};

export const readDatas = async (setDatas, folder) => {
  const collectionRef = collection(db, folder);
  const q = query(collectionRef);
  const unsubscribe = onSnapshot(q, (snapshot) => {
    setDatas(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });
  return unsubscribe;
};

export const deleteData = async (id, picId, folder) => {
  const delRef = ref(storage, picId);
  deleteObject(delRef).then();
  await deleteDoc(doc(db, folder, id));
};

//Hónap éneke szerkesztése
export const editSong = async (id, val, folder) => {
  const docRef = doc(db, folder, id);
  await updateDoc(docRef, {val});
}