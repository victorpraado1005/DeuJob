import { useEffect, useContext } from 'react';

import { getDoc, doc } from 'firebase/firestore';
import { Context } from '../../Context/AuthContext';

import Header from '../../Components/Header';

import { db } from '../../utils/firebaseUtils';

export default function Home() {
  const { authenticated } = useContext(Context);

  if (authenticated === true) {
    const UserId = localStorage.getItem('UserID');
    console.debug(UserId);
  }

  const fetchBlogs = async () => {
    const docRef = doc(db, 'Mmf1VfLnzcDbqf4t2Q04', 'Victor');
    const docSnap = await getDoc(docRef);
    console.log(docSnap);
    // if (docSnap.exists()) {
    //   console.log('Document data:', docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log('No such document!');
    // }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Header />
    </>
  );
}
