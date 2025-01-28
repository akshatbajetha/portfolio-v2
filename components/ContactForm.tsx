"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sendEmail } from "@/lib/actions";

export default function ContactForm() {
  const [status, setStatus] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await sendEmail(formData);
    setStatus(result);
    setIsPending(false);

    if (result.success) {
      // Reset the form
      const form = document.querySelector("form") as HTMLFormElement;
      form.reset();
    }
  }

  return (
    <div className="h-max flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-4">
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="min-h-[120px]"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Sending..." : "Send Message"}
            </Button>
            {status && (
              <div
                className={`text-center mt-4 ${
                  status.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
