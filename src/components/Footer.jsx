import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

function CustomFooter() {
  return (
    <Footer container className="rounded-lg bg-gray-800 px-0 mx-0 w-full">
      <div className="w-full max-w-full px-4 py-6 lg:py-8">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-8">
          <div className="space-y-4 mb-8 md:mb-0">
            <div className="flex items-center gap-2">
              🧉
              <span className="self-center text-green-400 text-2xl font-semibold whitespace-nowrap bg-clip-text">
                MATECITO
              </span>
            </div>
            <div className="text-gray-300">
              <p>Tu tienda de mates favorita</p>
              <p>Envíos a todo el país</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Navegación" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/"
                  className="text-gray-300 hover:text-white"
                >
                  Inicio
                </Footer.Link>
                <Footer.Link
                  href="/category/mates"
                  className="text-gray-300 hover:text-white"
                >
                  Mates
                </Footer.Link>
                <Footer.Link
                  href="/category/yerba"
                  className="text-gray-300 hover:text-white"
                >
                  Yerba
                </Footer.Link>
                <Footer.Link
                  href="/category/accesorios"
                  className="text-gray-300 hover:text-white"
                >
                  Accesorios
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Ayuda" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Preguntas frecuentes
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Envíos
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Devoluciones
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Contacto
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Política de privacidad
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Términos y condiciones
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="my-6" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Matecito™"
            year={2025}
            className="text-gray-300"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="text-gray-300 hover:text-white"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-gray-300 hover:text-white"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="text-gray-300 hover:text-white"
            />
            <Footer.Icon
              href="#"
              icon={BsWhatsapp}
              className="text-gray-300 hover:text-white"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default CustomFooter;
