import SideBar from "../components/SideBar.tsx";
import ChatWindow from "../components/ChatWindow.tsx";

function Home() {
  return (
    <div className="container mx-auto h-full  box-border">
      <div className="flex  gap-x-4 sm:gap-x-2 h-full  ">
        <SideBar />
        <ChatWindow />
      </div>
    </div>
  );
}

export default Home;
