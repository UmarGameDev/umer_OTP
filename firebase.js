import { Platform } from "react-native";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase web app config (Project settings > General > Your apps)
export const firebaseConfig = {
  apiKey: "AIzaSyA1fe0PLyshLxkWFEyVGut8C6NIaCbFxQk",
  authDomain: "smdquiz4-eb4ec.firebaseapp.com",
  projectId: "smdquiz4-eb4ec",
  storageBucket: "smdquiz4-eb4ec.firebasestorage.app",
  messagingSenderId: "779260451336",
  appId: "1:779260451336:web:6e19c49bd88ed702e38fbd",
  measurementId: "G-0KKWEJMQB6",
};

const alreadyInitialised = getApps().length > 0;
export const app = alreadyInitialised ? getApp() : initializeApp(firebaseConfig);

// On phones the auth session is kept in AsyncStorage; on web the default persistence is used.
export const auth =
  Platform.OS === "web" || alreadyInitialised
    ? getAuth(app)
    : initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
