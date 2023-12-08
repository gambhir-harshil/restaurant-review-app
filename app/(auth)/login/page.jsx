"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { login } from "services/apiAuth";
import { toast } from "sonner";

import { Button } from "components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be atleast 6 characters",
  }),
});

const Login = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    try {
      await login(values);
      router.push("/");
      toast("Logged in sucessfully");
    } catch (err) {
      toast(err.message);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-full gap-16 p-8">
      <h1 className="text-5xl font-semibold">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button type="submit">Login</Button>
            <div className="flex gap-1 text-muted-foreground">
              New here?
              <Link href="/register" className="font-semibold text-primary">
                Register
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
