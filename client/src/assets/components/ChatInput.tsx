import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { socket } from "./ChatWindow";

type ChatInputProps = {
  message: string;
  setMessage: (newMessage: string) => void;
  setChats: (chats: object) => void;
  chats: object;
};
type previousChatType = {
  sent: boolean;
  message: string;
}[];
// const socket = io("http://localhost:3000");
export default function ChatInput({
  message,
  setMessage,
  setChats,
}: ChatInputProps) {
  // console.log(chats);
  //

  function addToChat() {
    if (message != "") {
      setMessage("");
      setChats((previousChat: previousChatType) => {
        console.log(previousChat);
        return [...previousChat, { message: message, sent: true }];
      });
    }
  }
  // useEffect(() => {
  //   socket.on("received_message", (data) => console.log(data));
  // }, [socket]);

  // if (message != "") {

  // }

  return (
    <div className="relative flex direction-row">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className=" rounded text-black focus:outline-none bg-white  w-full  p-3 sm:p-2"
      />
      <button
        onClick={addToChat}
        className="absolute top-2 right-2 pl-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
      >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nMXUoWrCURiG8R+YBibrwCWDJvuqyUsw7BKUBbt4B4YF68Bi9QL0Amyr5olRTNvQI8L5wxAZm36wFx5Oe/g453wvlAVmixHuI2Qp84FXNCJkKbPHDK0IWfrGEk8oRchSZoUe7iJkBRsMUImQpcwOY9TOZR10McQLppjjDe/4/EH6hQma/pAq2njOEy2wxiFLT2c/fLJ05Z2N8PDvr7mK+GfLWzdgn3fz8bcCF2RFa9SvkRQJ7bOwpj0CbCKTvq9T+YwAAAAASUVORK5CYII=" />
      </button>
      <button className="absolute top-3 right-14">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO2UTQrCMBCFP1ddeQItCOIV1K2H9BBSXCr+4F30AEKpq0IhMvAKJSq0aRYu+mBIZt7kvSGEwB9gCmRAodgDi5jiT8B5YbVJDINMggeZWRxV28UwKCRmwjVS1fIYBk7Rtt7LwLXYDwYMV/QBN7yiLldUaj/XWn7p6QzXOHzzftRrDINKhxNgJtEXcFGeiLe+INwlsPzBr8VbXxC2EjgBI4+z/Cze+oKQ6t+vTVbAWJPX4rn6grFpmPhhdeN7wya0a3joedpqea/Jo+ANkRyPwbnZnvoAAAAASUVORK5CYII=" />
      </button>
    </div>
  );
}
