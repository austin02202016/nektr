import { OptimizedImage } from "@/components/optimized-image"

export default function PreorderPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Preorder Mad Nektr</h1>

        <p className="mt-3 text-2xl">Get your hands on the latest flavor!</p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <OptimizedImage
            src="/images/can-mockup.png"
            alt="Mad Nektr Can"
            width={300}
            height={500}
            className="object-contain"
          />

          <div className="text-left">
            <h2 className="text-4xl font-bold">New Flavor: Electric Raspberry</h2>
            <p className="mt-3 text-xl">
              A shocking blend of sweet and tart raspberries that will electrify your taste buds.
            </p>
            <p className="mt-3 text-xl">Limited time offer: Preorder now and get 10% off!</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Preorder Now
            </button>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://madnektr.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Mad Nektr
        </a>
      </footer>
    </div>
  )
}
