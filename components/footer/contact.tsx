import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-7 px-4 gap-4 items-center lg:place-items-center border-b-2">
      <div className="flex items-center space-x-2">
        <div>
          <MapPin />
        </div>
        <div>
          <p className="font-bold">Visit Us</p>
          <p className="text-sm text-slate-600">
            123 Fashion Street, New York, NY 10001
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div>
          <Phone />
        </div>
        <div>
          <p className="font-bold">Call Us</p>
          <p className="text-sm text-slate-600">
            <Link href={"tel:+2347025005130"} className="underline">
              +234 702 500 5130
            </Link>
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div>
          <MapPin />
        </div>
        <div>
          <p className="font-bold">Working Hours</p>
          <p className="text-sm text-slate-600">
            Mon - Fri: 9:00 AM - 6:00 PM
            <br />
            Sat - Sun: 10:00 AM - 4:00 PM
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div>
          <Mail />
        </div>
        <div>
          <p className="font-bold">Email Us</p>
          <p className="text-sm text-slate-600">
            <Link href={"mailto:info@wearmerce.com"} className="underline">
              info@wearmerce.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
