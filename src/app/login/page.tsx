import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#333333] pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-[#444444] mb-1" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Welcome Back</h1>
              <p className="text-[#444444]/60 text-sm">Sign in to your Gold Peptides account</p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-[#444444]/70">Email</label>
                <input type="email" className="w-full p-2.5 border border-[#444444]/15 rounded-lg text-sm focus:outline-none focus:border-[#FFDD00]" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[#444444]/70">Password</label>
                <input type="password" className="w-full p-2.5 border border-[#444444]/15 rounded-lg text-sm focus:outline-none focus:border-[#FFDD00]" placeholder="••••••••" />
              </div>
              <Button className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] w-full font-bold rounded-lg py-2.5" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Sign In</Button>
            </form>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-[#FFDD00] hover:underline font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Forgot your password?</a>
            </div>
            <div className="mt-6 pt-6 border-t border-[#444444]/10 text-center">
              <p className="text-[#444444]/60 text-sm mb-3">Don&apos;t have an account?</p>
              <Button variant="outline" className="w-full font-semibold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Create Account</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
