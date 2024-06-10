import ChatSection from './_components/ChatSection';
import Container from './_components/Container';
import LoginDialog from './_components/LoginDialog';
import VideoSection from './_components/VideoSection';

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <Container className="flex w-full py-10 h-full gap-10">
        <div className="flex flex-col h-full gap-10 flex-[1]">
          <VideoSection className=" bg-accent rounded-xl h-[50%] w-full overflow-hidden" type="remote" />
          <VideoSection className=" bg-accent rounded-xl h-[50%] w-full overflow-hidden" type="local" />
        </div>
        <div className="w-full h-full flex-1">
          <ChatSection className="bg-accent" />
        </div>
        <LoginDialog />
      </Container>
    </main>
  );
}
