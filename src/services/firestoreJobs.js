/* =================================================
FIRESTORE JOB SERVICE
================================================= */

import { db } from "../firebase"

import {
collection,
addDoc,
getDocs,
deleteDoc,
updateDoc,
doc
} from "firebase/firestore"

/* =================================================
LOAD JOBS
================================================= */

export async function loadJobs(uid){

const snapshot = await getDocs(
collection(db,"users",uid,"jobs")
)

return snapshot.docs.map(d=>({
id:d.id,
...d.data()
}))

}

/* =================================================
ADD JOB
================================================= */

export async function addJobFirestore(uid,job){

await addDoc(
collection(db,"users",uid,"jobs"),
job
)

}

/* =================================================
DELETE JOB
================================================= */

export async function deleteJobFirestore(uid,id){

await deleteDoc(
doc(db,"users",uid,"jobs",id)
)

}

/* =================================================
UPDATE JOB
================================================= */

export async function updateJobFirestore(uid,id,data){

await updateDoc(
doc(db,"users",uid,"jobs",id),
data
)

}