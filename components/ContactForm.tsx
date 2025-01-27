"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "d892c095-0556-46e5-8bf2-e42f2ca8fc27");

    const object = Object.fromEntries(formData);
    console.log(object);

    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        type="text"
        name="name"
        placeholder="Full Name"
        className="bg-zinc-900 border-zinc-800 placeholder:text-zinc-400"
      />

      <Input
        type="email"
        name="email"
        placeholder="Email"
        className="bg-zinc-900 border-zinc-800 placeholder:text-zinc-400"
      />
      <Textarea
        placeholder="Message"
        name="message"
        className="bg-zinc-900 border-zinc-800 placeholder:text-zinc-400 min-h-[160px]"
      />
      <Button
        type="submit"
        className="w-full bg-zinc-800 hover:bg-zinc-700 text-white"
      >
        Submit
      </Button>
    </form>
  );
}

// TODO: Fix Error
