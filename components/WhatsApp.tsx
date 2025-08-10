import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function Page() {
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-green-500 p-0 text-white shadow-lg hover:bg-green-600"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
