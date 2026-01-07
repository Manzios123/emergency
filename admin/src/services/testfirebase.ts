import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export async function testFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    console.log("Firestore connected ✅");
    querySnapshot.forEach((doc) => console.log(doc.id, " => ", doc.data()));
  } catch (error) {
    console.error("❌ Firestore connection error:", error);
  }
}
