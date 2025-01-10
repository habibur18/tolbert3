import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6">
            DFW #1 <span className="text-green-600">GARAGE DOOR</span> COMPANY
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl mb-8">
            Your trusted provider of high-quality <span className="text-green-600">garage door</span> solutions in the <span className="text-green-600">Dallas-Fort Worth</span> area
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="tel:469-909-0956">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: 469-909-0956
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact" className="text-green-600 hover:bg-green-600 hover:text-white">
                Get Free Estimate
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative aspect-video">
          <video className="rounded-lg shadow-lg" src="https://video.wixstatic.com/video/ce12da_94b2357d6bb04fe08783aaf375a5d0b2/720p/mp4/file.mp4" autoPlay loop muted controls />
        </div>
      </div>
    </section>
  );
}
