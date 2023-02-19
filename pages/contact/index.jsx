import Link from "next/link";
import { FaGithub, FaSpotify } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { StyledKofiButton } from "@/components/StyledKofiButton";
import Meta from "@/components/Meta";
import "@fontsource/dosis";

function Contact() {
  return (
    <div className="h-screen">
      <Meta
        title={"Contact | Beshoy Kamel"}
        keywords="beshoy kamel, bwkam, beshoy kamel github, bwkam github, how to contact beshoy kamel, how to contact bwka, beshoy kamel email, bwkam email"
        description="Beshoy Kamel's contact page"
        image="/home.jpg"
        width={1200}
        height={630}
      />
      <div className="flex h-full space-y-4 text-white text-4xl font-bold flex-col justify-center items-center">
        <h1>My 21th Century Things</h1>
        <div className="flex space-x-5 pt-3 ">
          <Link href="https://github.com/bwkam">
            <FaGithub />
          </Link>
          <Link href="https://open.spotify.com/user/9dw34x65deycigiow2gwla7aa?si=7251a74911e64cbd">
            <FaSpotify className="text-green" />
          </Link>
          <Link href="mailto: userdev987@gmail.com">
            <SiGmail className="text-red" />
          </Link>
        </div>
        <StyledKofiButton />
      </div>
    </div>
  );
}

export default Contact;
