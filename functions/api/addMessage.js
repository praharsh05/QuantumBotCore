

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {logger} = functions;

exports.addMessage = functions.https.onCall(async (data, context)=>{
  try {
    logger.log("Received message request data: ", data);

    // validate required fields
    if (!data.text || !data.userId) {
      logger.log("Required fields of text or user id missing");
      throw new functions.https.HttpsError(
          "Invalid argument",
          "Required field of text or user id is missing",
      );
    }

    const {text, userId} = data;

    // construct message data
    const messageData = {
      text,
      userId,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    // add message to user's message subcollection on firestore
    const messageRef = await admin
        .firestore()
        .collection("chats")
        .doc(userId)
        .collection("messages")
        .add(messageData);

    logger.log("Message added successfully, messageID: ", messageRef.id);

    // return success status and message ID
    return {status: "success", messageId: messageRef.id};
  } catch (error) {
    logger.log("Error adding message: ", error);

    // throw a structured error for the client
    throw new functions.https.HttpsError(
        "unknown",
        "An error occured while adding the message",
        error.message,
    );
  }
});
