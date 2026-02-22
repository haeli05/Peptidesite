import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FFFEF0] to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Welcome Back</CardTitle>
              <p className="text-[#444444]/80">Sign in to your Gold's Health account</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded-md" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input type="password" className="w-full p-2 border rounded-md" placeholder="••••••••" />
                </div>
                <Button className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] w-full font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Sign In</Button>
              </form>
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-[#FFDD00] hover:underline font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Forgot your password?</a>
              </div>
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-[#444444]/80 text-sm">Don't have an account?</p>
                <Button variant="outline" className="mt-2 w-full">Create Account</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
