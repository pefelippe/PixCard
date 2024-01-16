import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex text-3xl items-center font-medium tracking-tighter gap-1 text-primary hover:text-primary/80 transition-all"
    >
      <p>Pix Card</p>{" "}
    </Link>
  );
};

const Header = () => {
  return (
    <header className="fixed w-full pt-8 flex items-center">
      <div className="w-full flex max-w-7xl justify-between mx-auto items-center">
        <Logo />
        <div className="flex gap-6 items-center font-medium">
          <Link
            href="/login"
            className="rounded-full w-fit text-lg max-w-lg hover:text-primary/80 transition-all"
          >
            Login
          </Link>
          <Link href="/signup">
            <Button className="py-7  text-lg w-fit px-6 text-white hover:bg-primary/80 transition-all">
              Criar Pix Card
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

const HeroText = () => {
  return (
    <div className=" flex flex-col items-start justify-center text-start h-full w-full gap-6 max-w-2xl">
      <h1 className="text-7xl font-bold tracking-tight ">
        Crie seu Pix Card e divulgue seu pix.
      </h1>

      <h3 className="text-2xl font-thin tracking-tight max-w-lg">
        Cadastre seu QR code e divulgue facilmente o seu pix ou do seu negócio.
      </h3>

      <Button className="p-7 rounded-sm text-xl max-w-md w-fit  text-white hover:bg-primary/80 transition-all">
        Criar Pix card
      </Button>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex h-full items-center justify-between  max-w-7xl mx-auto min-h-screen gap-6">
        <HeroText />
        <img
          className="w-fit h-[450px] object-cover w-full max-w-xl rounded-md"
          src="https://s2-valor.glbimg.com/uP6yiM8ITpz63ujLNl6Z8k9DHaU=/0x0:3926x2945/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2021/W/k/U87LFKSBqRyOkYWkl3RQ/david-dvoracek-qipe0upc0-u-unsplash.jpg"
        />
      </main>
    </>
  );
}
