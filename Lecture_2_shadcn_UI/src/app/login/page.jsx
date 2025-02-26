import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

function Login() {
    return (
      <div className="h-[100vh] flex justify-center items-center bg-black border-none">
        <Card className="w-[400px] h-[380px] bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <cardDescription className="text-sm text-gray-400">
              Enter your email below to login to your account.
            </cardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="text-sm">
                    Email
                  </Label>
                  <Input
                    className="border-2 border-gray-600 focus:border-pink-900 bg-black text-white px-3 py-2 rounded-md"
                    id="name"
                    placeholder="me@example.com"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    className="border-2 border-gray-600 focus:border-pink-900 bg-black text-white px-3 py-2 rounded-md"
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col text-xs">
            <div className="w-full">
              <Button variant="destructive" className="w-full bg-pink-900">
                Login
              </Button>
            </div>
            <div className="flex mt-4 justify-centre gap-6 ml-0 text-[13px]">
              <Button
                className="hover:text-gray-500 ml-0 pl-0 text-white"
                variant="link"
              >
                Forgot Password?
              </Button>
              <div className="ml-4 ">
                <p>
                  <span className="m-0 text-[13px] p-0 ">Need an account?</span>
                  <Button
                    className="m-0 p-1 underline hover:text-gray-500 text-white"
                    variant="link"
                  >
                    Signup
                  </Button>
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
}
export default Login;
