import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="main">
      <div className="top-nav">
        <Link href="/page">Home</Link>
        <Link href="/schedule">Schedule</Link>
      </div>
      <div className="container">
        <Image 
        src="/content.png"
        width={576}
        height={324}
        alt="Pict"
        />
      </div>
      <h1>test</h1>
    </div>
  );
}
