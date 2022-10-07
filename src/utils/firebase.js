import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { collection, getDocs } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBArsa4B0pNbc5NtkXt4gawlK-CfnFo-uA",
    authDomain: "twitter-clone-b37d7.firebaseapp.com",
    projectId: "twitter-clone-b37d7",
    storageBucket: "twitter-clone-b37d7.appspot.com",
    messagingSenderId: "327060969396",
    appId: "1:327060969396:web:eb6a7f5a4d54a6a81104e1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of post firebase
export default async function getPosts() {
    const postsCol = collection(db, 'posts');
    const postSnapshot = await getDocs(postsCol);
    const postList = postSnapshot.docs.map(doc => doc.data());
    return postList;
}

