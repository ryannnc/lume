import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export async function joinWaitlist(email: string) {
  const normalizedEmail = email.trim().toLowerCase()

  if (!normalizedEmail) {
    throw new Error('Email is required')
  }

  const docRef = doc(db, 'waitlist', normalizedEmail)

  await setDoc(docRef, {
    email: normalizedEmail,
    createdAt: serverTimestamp(),
  })
}