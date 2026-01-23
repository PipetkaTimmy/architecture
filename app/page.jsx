import Link from "next/link";
import Counter from "@/components/Home/Counter";
import Desc from "@/components/Home/Desc";
import EventFeed from "@/components/Home/EventFeed/EventFeed";
import Mission from "@/components/Home/Mission/Mission";
import Map from "@/components/Home/Map/Map";

export default function Home() {
  return (
    <div>
      <section className="heroSection">
        <div className="heroComponents containerCustom">
          <Desc />
          <Counter />
        </div>
      </section>
      <div className="containerCustom p-21">
        <Mission />
        <EventFeed/>
        <Map/>
      </div>
      <Link href="/contacts" className="floatingCta">
        Оставить заявку
      </Link>
    </div>
  );
}
