import { auth, db } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function createUserWithRole(
  email: string,
  password: string,
  name: string,
  role: "admin" | "coordinator" | "facilitator"
) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", userCred.user.uid), {
    name,
    email,
    role,
    createdAt: new Date(),
  });

  return userCred.user;
}
