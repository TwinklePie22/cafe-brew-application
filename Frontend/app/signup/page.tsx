// "use client";

// import { useState } from "react"
// import { Button } from "../../components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
// import { Input } from "../../components/ui/input"
// import { Label } from "../../components/ui/label"
// import Link from "next/link"

// export default function Signup() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const handleSignup = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle signup logic here
//     console.log("Signup with", email, password)
//   }

//   return (
//     <div className="container mx-auto flex h-screen items-center justify-center">
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSignup} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <Button type="submit" className="w-full">
//               Sign Up
//             </Button>
//           </form>
//           <div className="mt-4 text-center text-sm">
//             Already have an account?{" "}
//             <Link href="/login" className="text-blue-500 hover:underline">
//               Login
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
'use client'; 

import { useState } from "react";
import { useRouter } from "next/navigation"; // Corrected import for Next.js router
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { signup } from '../../services/api'

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
// export const signup = (userData: { email: string; password: string }) => 
//   api.post('/user/signup', userData);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Redirect to login or dashboard after successful signup
        router.push("/dashboard");
      } else {
        // Handle signup error (e.g., show a message)
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
