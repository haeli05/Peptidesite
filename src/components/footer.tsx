import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-[#444444] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-[#FFDD00] mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>GOLD'S HEALTH</h3>
            <p className="text-white/80 text-sm">
              Premium prescriptions at the lowest prices. Delivered fast with free shipping.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Products</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/weight-loss" className="hover:text-[#FFDD00]">Weight Loss</Link></li>
              <li><Link href="/sexual-health" className="hover:text-[#FFDD00]">Better Intimacy</Link></li>
              <li><Link href="/daily-health" className="hover:text-[#FFDD00]">Daily Health</Link></li>
              <li><Link href="/hair" className="hover:text-[#FFDD00]">Hair Growth</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-[#FFDD00]">About</Link></li>
              <li><Link href="/faq" className="hover:text-[#FFDD00]">FAQs</Link></li>
              <li><Link href="/blog" className="hover:text-[#FFDD00]">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFDD00]">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Legal</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/terms" className="hover:text-[#FFDD00]">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#FFDD00]">Privacy Policy</Link></li>
              <li><Link href="/hipaa" className="hover:text-[#FFDD00]">HIPAA Notice</Link></li>
              <li><Link href="/telehealth" className="hover:text-[#FFDD00]">Telehealth Consent</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            © 2025 GOLD'S HEALTH. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            <Link href="/facebook" className="text-white/60 hover:text-[#FFDD00]">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
              </svg>
            </Link>
            <Link href="/instagram" className="text-white/60 hover:text-[#FFDD00]">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
              </svg>
            </Link>
          </div>
        </div>
        
        <p className="text-xs text-white/40 mt-8 text-center">
          Compounded in the USA. Prescription required. Individual results may vary.
        </p>
      </div>
    </footer>
  );
}
