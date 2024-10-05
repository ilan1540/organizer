import {getFirestore, collection, onSnapshot,
  addDoc, doc,
  getDocs,
  setDoc,
   getDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'
import moment from 'moment'

// get timeStape from firebase
export const getStamp = () => {
  try  {
  const  stamp = serverTimestamp()
    return stamp
  } catch (err) {
  }
}

// add rec
export const addNewDoc = async (colName, rec) => {
  const collctionRef = collection(db, colName)
 // const createAt =  {'createAt':moment().format()}
 // const toSave = {...rec,createAt}
 // console.log(toSave )
  
  try {
    await addDoc(collctionRef,rec)
  } catch (err) {
    console.log(err)
  }
  
}


// update  set rec
export const setRec = async (colName, docId, rec) => {
  try  {
    await setDoc(doc(db, colName, docId), rec)
   // console.log('add123')
    console.log('רשומה נשמרה בהצלחה')
  } catch (err) {
    console.log('err- add123', err)
   // setFirebaseMass({err})
  }
 
}

// deled doc
export const delRec = async (colName,docId) => {
  await deleteDoc(doc(db, colName,docId))
}

// get all dataCollaction

export const getAll = async (colName,setDate) => {
  const colRef = collection(db, colName)
  const q = query(colRef,orderBy('billingDate'))
 await getDocs(q).then((snapsshot) => {
    let data =[]
    snapsshot.docs.forEach((doc) => {
      data.push({...doc.data(), id:doc.id})
    })
   setDate(data)
   console.log(data,colName)
  // return(data)
  })
    .catch(err => {
    console.log(err.message)
  })
}

// get taqle data

export const getData = async (colName ,setData) => {
 // console.log('colname=',colName)
  const allData = await getDocs(collection(db, colName));
 // console.log('allData=',allData)
allData.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  setData(doc && doc.data())
 //console.log(doc.id, " => ", doc.data());
});




  /*
  const ref = collection(db, 'sogIncome')
  const colRef = collection(db, colName)
  getDocs(ref)
  .then(snapshot => {
     console.log(snapshot)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })
*/
   const querySnapshot = await getDocs(collection(db, "sogIncomes"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});  
}

//read data collection options from firebase and put in contex
export const readOptions = async (setOptions) => {
  const colName = 'options' 
  const allData = await getDocs(collection(db, colName));
  allData.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  setOptions(doc && doc.data())
 //console.log(doc.id, " => ", doc.data());
});
  
  
}