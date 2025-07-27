import ExtentionList from "@/components/extention/extentionList";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div className="max-w-[80%] flex  flex-col gap-7 m-auto mt-[20px]">
      <Header/>
     <ExtentionList/>
    </div>
  );
}
