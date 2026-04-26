import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { Filter } from 'bad-words'

const featureLength = 250
const filter = new Filter()

export async function joinWaitlist(email: string, featureRequest: string) {
  const normalizedEmail = email.trim().toLowerCase()
  const cleanedFeatureRequest = featureRequest.trim().slice(0, featureLength) 
   //takes away trailing and leading spaces and cuts the string to a maximize length

  if (!normalizedEmail) {
    throw new Error('Email is required')
  }

  if (featureRequest.length > featureLength) {
    throw new Error('Request is too long keep it under 250 characters please')
  }

  if (filter.isProfane(cleanedFeatureRequest)){
    throw new Error('Profanity is not allowed')
  }

  const docRef = doc(db, 'waitlist', normalizedEmail)

  await setDoc(docRef, {
    email: normalizedEmail,
    featureRequest: cleanedFeatureRequest,
    createdAt: serverTimestamp(),
  })
}