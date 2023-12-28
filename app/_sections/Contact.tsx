"use client"
import BannerCard from "@/components/BannerCard";
import ContactD from "@/components/ContactD";
import MediaIcon from "@/components/MediaIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactData, Services, Media } from "@/constant"
import { SendHorizonal } from "lucide-react";

const Contact = () => {

  return (
    <div className="pt-[110px]  relative">
      <div className="flex items-center  justify-center">
        <BannerCard title="Tell Us" src="white-desk-work-study-aesthetics" />
      </div>
      <div className="flex   justify-between w-full  flex-col custom:flex-row   gap-y-10 gap-x-9">
        <form >
          <div className="flex flex-col custom:flex-row justify-center items-center gap-4 ">
            <Input type="text" placeholder="Name" className="bg-primary/85 outline-none border-none hover:ring-1 hover:ring-blue-900" />
            <Input type="email" placeholder="Email" className="bg-primary/85 border-none hover:ring-1 hover:ring-blue-900" />
          </div>
          <div className="flex justify-between flex-wrap  items-center gap-7 py-6">
            {
              ContactData.map((data) => (
                <ContactD key={data.name} name={data.name} icon={data.icon} />
              ))
            }
          </div>

          <div className="pb-5 ">
            <Textarea placeholder="Type your message here." className="h-[150px] bg-primary/85  border-none hover:ring-1 hover:ring-blue-900" />
          </div>
          <Button variant={"outline"} className="bg-primary/70 text-white border-none mb-[30px]">

            Send
            <SendHorizonal className="ml-2" />
          </Button>
        </form>
        <div className="flex  flex-col custom:flex-row     gap-6  glassmorphism p-6 text-muted-foreground sm:w-[500px] mb-6">
          <div className="flex flex-col  gap-6 ">
            <div>
              <p className="contactP">Services</p>
              {
                Services.map((text, index) => (
                  <Button key={index} className="mr-3 mb-2">{text}</Button>
                ))
              }
            </div>
            <div>
              <p className="contactP">Stay Connected</p>
              <div className="flex items-center gap-10 text-white">
                {
                  Media.map((item, index) => (
                    <MediaIcon item={item} key={index} />
                  ))
                }
              </div>

            </div>
            <div>
              <p className="contactP">START A PROJECT</p>
              <span>I’m available for freelance projects</span>
            </div>
          </div>
          <div>
            <p className="contactP">ABOUT
            </p>
            <span>Joshua is a professional web developer. Feel free to get in touch with me</span>
            <p className="contactP">EMAIL
            </p>
            <span>hello@josh.design</span>
            <p className="contactP">CALL
            </p>
            <span>120-240-9600</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
