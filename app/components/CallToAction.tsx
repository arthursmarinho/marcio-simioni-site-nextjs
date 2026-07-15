import { Button } from "@/components/ui/button";
import { MessageSquare, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CallToAction() {
  const whatsappUrl =
    "https://wa.me/5541987624581?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";
  const emailUrl = "mailto:contato@marciosimioni.com.br?subject=Orçamento";

  return (
    <div className="grid grid-cols-2 h-250 bg-orange-600">
      <div className="flex flex-col justify-center items-center gap-4 ml-102">
        <div className="flex flex-col justify-start">
          <h1 className="text-5xl font-black text-white tracking-wider">
            Márcio Simioni
          </h1>
          <h2 className="text-black text-2xl font-semibold mt-2 ">
            Quer receber um orçamento?
          </h2>
          <hr className="w-48 h-1 bg-white my-4" />
          <p className="break-all text-white">
            <strong>Vamos dar o próximo passo juntos?</strong>
            <br /> Descubra como posso apoiar seu desenvolvimento.
          </p>
        </div>
      </div>

      <div className="flex justify-start items-center pl-8">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl border border-orange-100 flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Entre em contato agora
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Escolha o canal de sua preferência. Estou pronto para lhe atender
              e tirar suas dúvidas!
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-6 text-md rounded-xl flex items-center justify-center gap-3 transition-colors shadow-md">
              <a
                className="flex flex-row items-center gap-2 "
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>

            <div className="flex items-center my-1">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-3 text-xs text-gray-400 uppercase tracking-wider">
                ou
              </span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            <Button
              variant="outline"
              className="w-full border-2 border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-6 text-md rounded-xl flex items-center justify-center gap-3 transition-all"
            >
              <a className="flex flex-row items-center gap-2 " href={emailUrl}>
                <Mail className="w-5 h-5 text-gray-500" />
                Enviar um E-mail
              </a>
            </Button>
          </div>

          <div className="pt-2 border-t border-gray-100 text-xs text-gray-400 text-center flex flex-col gap-1">
            <span>WhatsApp: (41) 98762-4581</span>
            <span>E-mail: contato@marciosimioni.com.br</span>
          </div>
        </div>
      </div>
    </div>
  );
}
