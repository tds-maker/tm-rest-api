export const DB_CONNECTION = process.env.MONGODB_STR
export const JWT_SECRET_KEY = process.env.JWT_ENCRYPTION
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION
export const PORT = process.env.PORT
export const PASSWORD_SECRET_KEY = process.env.SECRET_KEY
export const EMAIL_SUBJECT = process.env.EMAIL_SUBJECT
export const EMAIL_SENDER_ADRESS = process.env.EMAIL_SENDER_ADRESS
export const EMAIL_SENDER_NAME = process.env.EMAIL_SENDER_NAME
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
export const PDF_BUILDER_PATH = process.env.PDF_BUILDER_PATH
export const PDF_BUILDER_PATH_TEST = process.env.PDF_BUILDER_PATH_TEST
// export default {
//   connectionStr: {
//     dev: process.env.MONGODB_STR_DEV,
//     prod: process.env.MONGODB_STR_PROD
//   },
//   jwtSecretKey: process.env.JWT_ENCRYPTION,
//   jwtExpiration: process.env.JWT_EXPIRATION,
//   NODE_ENV: process.env.NODE_ENV,
//   port: process.env.PORT,
//   passwordSecretKey: process.env.SECRET_KEY,
//   email: {
//     subject: process.env.EMAIL_SUBJECT,
//     senderAdress: process.env.EMAIL_SENDER_ADRESS,
//     senderName: process.env.EMAIL_SENDER_NAME,
//     key: process.env.SENDGRID_API_KEY
//   },
//   pdf: {
//     path: process.env.PDF_BUILDER_PATH,
//     path_test: process.env.PDF_BUILDER_PATH_TEST
//   }
// };
