const dotenv = require("dotenv");
dotenv.config();

const service_account = {
  type: "service_account",
  project_id: "dudhwala-34f58",
  private_key_id: "4da408f8b2e0d8adabdba00515716b3ed05a1c6a",
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email:
    "firebase-adminsdk-j6fqd@dudhwala-34f58.iam.gserviceaccount.com",
  client_id: "101441836305799674954",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-j6fqd%40dudhwala-34f58.iam.gserviceaccount.com",
};

module.exports = service_account