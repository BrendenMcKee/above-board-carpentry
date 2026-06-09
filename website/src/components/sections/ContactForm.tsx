"use client";

import { Button } from "@/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more about your project"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to send message");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-forest/5 p-8 text-center ring-1 ring-forest/10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-charcoal">Message sent!</h3>
        <p className="mt-2 text-muted">
          Thank you for reaching out. We&apos;ll get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-forest hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Your Name *" error={errors.name?.message}>
          <input
            {...register("name")}
            className={inputClass}
            placeholder="John Smith"
          />
        </Field>
        <Field label="Email *" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            className={inputClass}
            placeholder="you@email.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            className={inputClass}
            placeholder="(705) 555-0123"
          />
        </Field>
        <Field label="Project Type" error={errors.projectType?.message}>
          <select {...register("projectType")} className={inputClass}>
            <option value="">Select a type...</option>
            <option value="New Build">New Build</option>
            <option value="Renovation">Renovation / Cottage</option>
            <option value="Garage / Outbuilding">Garage / Outbuilding</option>
            <option value="ABC Store">ABC Store Inquiry</option>
            <option value="Other">Other</option>
          </select>
        </Field>
      </div>

      <Field label="Subject" error={errors.subject?.message}>
        <input
          {...register("subject")}
          className={inputClass}
          placeholder="Project inquiry"
        />
      </Field>

      <Field label="Your Message *" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about your project, location, and timeline..."
        />
      </Field>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
          {errorMsg}
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "loading"} className="w-full md:w-auto">
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-all placeholder:text-muted/50 focus:border-forest focus:ring-2 focus:ring-forest/10";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-charcoal">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
