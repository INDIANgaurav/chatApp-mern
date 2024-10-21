import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;
    const getConverstation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!getConverstation) {
      getConverstation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      getConverstation.messages.push(newMessage._id);
    }
    await getConverstation.save();

    return res.status(200).json({
      message: "Message sent successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMesaage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    return res.status(200).json(conversation?.messages);
  } catch (error) {
    console.log(error);
  }
};
