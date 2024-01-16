import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "../page";

function page() {
  return (
    <div className="h-screen w-full flex">
      <div className="w-full p-8">
        <Logo />
      </div>
      <div className="w-full max-w-3xl bg-green-900 flex items-center justify-center ">
        <Card>
          <CardContent className="p-8 max-w-lg flex flex-col gap-4">
            <h1 className="text-4xl font-medium tracking-tighter">
              Crie uma conta, comece a receber doações Pix.
            </h1>
            <h2 className="text-xl font-normal">
              Não perca tempo e dinheiro, entre com sua conta Google.
            </h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default page;
