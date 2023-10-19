import React, { useEffect, useState } from "react";
import TopUserBar from "./TopUserBar";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import { io } from "socket.io-client";

// export const socket = io("http://localhost:3000");
export default function ChatWindow() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState<{ message: string; sent: boolean }[]>([]);
  const [combinedChat, setCombinedChat] = useState([]);

  console.log(combinedChat);
  useEffect(() => {
    socket.emit("message", chats);
    return () => {
      socket.off("message", () => {
        console.log("off hit me");
      });
    };
  }, [chats]);
  let combined: object[];
  useEffect(() => {
    socket.on("received_message", (text) => {
      // setChats((prev) => prev.concat(text))
      console.log("THey hit me");
      combined = [...chats, ...text];
      console.log(combined);
      setCombinedChat(combined);
    });
  }, [chats]);
  // socket.on("text", (text) => setChats((prev) => prev.concat(text)));
  return (
    <div className="h-full w-full box-border bg-gray-200 flex flex-col justify-between ">
      <TopUserBar />
      <Chat chats={combinedChat} />

      <ChatInput
        message={message}
        setMessage={setMessage}
        setChats={setChats}
        chats={chats}
      />
    </div>
  );
}
