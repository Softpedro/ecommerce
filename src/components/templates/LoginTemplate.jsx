import LogoApp from "/src/assets/images/ecommerce_favicon.jpg";

function LoginTemplate({ children }) {
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container m-auto py-12 px-6 h-full flex align-center justify-center">
        <div className="flex justify-center items-center flex-wrap g-full g-6 text-gray-800">
          <div className="xl:w-10-20">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        src={LogoApp}
                        alt=""
                        width="80"
                        className="mx-auto w-48 mb-4 pt-4" />
                      <h4 className="text-xl font-semibold mt-1 mb-8 pb-1">Iniciar Sesion</h4>
                    </div>
                    { children }
                  </div>
                </div>
                <div className="bg-gradient lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                  <div className="text-white px-2 mx-6 my-16 md:px-12 md:mx-6">
                    <span className="text-xl font-semibold mb-6">
                      Más que un e-commerce...
                    </span>
                    <h4 className="text-4xl">somos una tienda en línea</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginTemplate