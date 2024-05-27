import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      <Header /> {/* use Header */}

      <main className="">
        {/* Your content here */}
      </main>

      <Footer /> {/* use Footer */}
    </div>
  )
}