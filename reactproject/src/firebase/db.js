import { getFirestore, collection, query, where, getDocs, doc, getDoc, addDoc  } from "firebase/firestore";
import { app } from './config'

const db = getFirestore(app);

export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = []
    querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
    });

    return items
}

export const getItemsByCategory = async (category) => {
    const q = query(collection(db, "items"), where("category", "==", category));

    const querySnapshot = await getDocs(q);
    const items = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        items.push({ ...doc.data(), id: doc.id })
    });

    return items
}

export const getItem = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {...docSnap.data(), id: docSnap.id}
    } 
}

export const createOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
}
