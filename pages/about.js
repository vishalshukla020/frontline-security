import Image from "next/image";

export default function About() {
  return (
    <section className="about-us">
      <div className="container">
        <h1 className="h2">About</h1>
        <span className="underline"></span>

        <p className="p">
          We, the Frontline Security Guard Services, are the leader in the field
          of Security Guards of Every Requirement is Registered under the
          Private Security Agencies (Regulation) Act, 2005. We provide Security
          Guards Services, Armed Guards Security Services, Trained Security
          Guards Services, Gun Man Security Services, VIP and Executive Security
          services, Corporate Security Services, Industrial Security Guards
          Services, Domestic Security Guards Services, Project and Event
          Security Services, Personal Body guards, Security Guards Training,
          Security Guards Recruitment Services, Security supervisors, Guarding
          Services Lady Security Officers Lucknow India. These cost effective
          services successfully meet the desired requirement of our clients.
        </p>
        <p className="h2">
          For over 20 Years, we have put <span className="yellow">SAFETY </span>
          and <span className="yellow">SECURITY</span> first
        </p>
        <div className="about-picture">
          <Image src="/3.jpeg" layout="fill" alt="a" objectFit="cover" />
        </div>
      </div>
    </section>
  );
}
