import React from "react";

type ChatProps = {
  chats: {
    sent: boolean;
    message: string;
  }[];
};

export default function Chat({ chats }: ChatProps) {
  //   type MessageObject = {
  //     id: string;
  //     sender: string;
  //     recipient: string;
  //     timestamp: string;
  //     message: string;
  //     attachments: string[];
  //     metadata: {
  //       messageType: string;
  //       readStatus: string;
  //     };
  //   };
  //   const messageObject: MessageObject = {
  //     id: "12345678-1234-1234-1234-123456789abc",
  //     sender: "user1",
  //     recipient: "user2",
  //     timestamp: "2023-10-10T14:30:00Z",
  //     message: "Hello, how are you?",
  //     attachments: ["https://example.com/image.jpg"],
  //     metadata: {
  //       messageType: "text",
  //       readStatus: "unread",
  //     },
  //   };
  console.log(chats);
  return (
    <div className="text-black grow flex overflow-y-auto flex-col gap-1">
      {chats?.map((message, index) =>
        !message.sent ? (
          <div
            key={index}
            className="whitespace-nowrap w-min bg-white rounded-md p-1 ml-4 mt-2 px-4"
          >
            {message.message}
          </div>
        ) : (
          <div key={index} className="w-full flex justify-end">
            <div className="whitespace-nowrap w-min bg-blue-200 rounded-md p-1 mt-2 flex flex-end px-4 mr-4">
              {message.message}
            </div>
          </div>
        )
      )}
    </div>
  );
}
