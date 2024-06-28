export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-black text-4xl text-[--deep-text]">Schedi</h1>
          <p className="text-xl opacity-100 text-[--mid-text]">Tu agenda preferida para administrar tu negocio y tus clientes</p>
        </div>
        <div className="grid text-center gap-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
          <a
            href="/register"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-[--mid-text]"
           
          >
            <h2 className="mb-3 text-2xl font-semibold text-[--dark-text]">
              Register <i className="ri-arrow-right-s-line"></i>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm text-[--mid-text]">
              Registrate gratuitamente en nuestra plataforma
            </p>
          </a>

          <a
            href="/login"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-[--mid-text]"
          
          >
            <h2 className="mb-3 text-2xl font-semibold text-[--dark-text]">
              Login <i className="ri-arrow-right-s-line"></i>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm text-[--mid-text]">
              Entrar a tu cuenta
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
