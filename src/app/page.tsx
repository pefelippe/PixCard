import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-all"
    >
      <p className="font-bold text-xl">UmTrocadinho</p>
      <Coins />
    </Link>
  );
};

const Header = () => {
  return (
    <header className="fixed w-screen h-24  flex items-center">
      <div className="w-full flex max-w-7xl justify-between mx-auto items-center">
        <Logo />
        <div className="flex gap-4 items-center font-medium">
          <Link
            href="/login"
            className="rounded-full w-fit text-lg max-w-lg hover:text-primary/80 transition-all"
          >
            Login
          </Link>
          <Link href="/signup">
            <Button className="p-6 rounded-full w-fit text-lg max-w-lg hover:bg-primary/80 transition-all">
              Cadastrar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

const HeroText = () => {
  return (
    <div className="max-w-3xl  flex flex-col items-start justify-center text-start h-full w-full gap-7">
      <h1 className="text-8xl font-bold tracking-tight ">
        Crie seu card pessoal pix customizável.
      </h1>
      <h3 className="text-2xl font-normal tracking-normal text-muted">
        Crie uma conta e comece a receber doações Pix.
      </h3>
      <Button className="p-8 rounded-full text-xl max-w-sm w-full text-white hover:bg-primary/80 transition-all">
        Criar meu card
      </Button>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-start justify-center  max-w-7xl mx-auto ">
        <HeroText />
        <div className="w-full"></div>
      </main>
    </>
  );
}
