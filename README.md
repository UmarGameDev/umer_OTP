# Umer OTP – Phone Number Verification (React Native / Expo + Firebase)

Quiz 4: OTP-based phone number verification (not email) using Firebase Authentication.

Flow: enter phone number -> request OTP by SMS -> enter the OTP -> verify -> success or failure message.
Runs on Android, iOS (Expo Go) and in the browser (Expo web).

## 1. Firebase setup (required before running)
1. Create a project at https://console.firebase.google.com.
2. Build > Authentication > Get started > Sign-in method > enable **Phone**.
3. Project settings > General > Your apps > add a **Web app** (`</>`) and copy its `firebaseConfig` into `firebase.js` (replace the `YOUR_...` values).
4. Authentication > Settings > Authorized domains: make sure `localhost` is listed.
5. Real SMS: use a real phone number with country code (e.g. `+92...`). Firebase sends a real SMS when the project is on the Blaze plan or within the free SMS quota for your region.
6. Testing without SMS: Authentication > Sign-in method > Phone > "Phone numbers for testing" lets you register a number with a fixed code. No SMS is sent for those numbers.

## 2. Run
```
npm install
npx expo start
```
- Press `w` to open it in the browser (http://localhost:8081, use `localhost`).
- Or scan the QR code with the **Expo Go** app on a phone (same Wi-Fi).
- Press `a` for an Android emulator.

## 3. How to use
1. Enter your phone number with country code and tap **Send OTP**.
2. Complete the reCAPTCHA.
3. Enter the 6-digit code from the SMS and tap **Verify OTP**.
4. A correct code shows "Login successful!" with the phone number and UID. A wrong code shows "Wrong code, try again."

## Project structure
| File | Purpose |
|------|---------|
| `App.js` | Screens and OTP logic (phone -> code -> result) |
| `firebase.js` | Firebase config and auth setup |
| `theme.js` | Colours and text |
| `screenshots/` | Screenshots and screen recording of the full flow |
