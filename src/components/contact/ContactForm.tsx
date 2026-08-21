import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Button from "../ui/Button";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const { control, handleSubmit, reset } = useForm<ContactFormData>({
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await fetch("https://api.web3forms.com/submit", { 
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: "7c30012f-a14c-4141-b8af-64707af29229",
          subject: `Portfolio Contact: ${data.subject}`,
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }
      return result;
    },
    onSuccess: () => {
      toast.success("Your message has been sent successfully!");
      reset();
    },
    onError: (error: any) => {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => mutation.mutate(data);

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 max-w-lg mx-auto">
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              placeholder="Your Name"
              className="w-full px-4 py-3 border-none rounded-lg bg-slate-100 dark:bg-black text-slate-900 dark:text-neutral-300 placeholder-slate-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-0 transition-colors duration-200 dark:[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#000000_inset_!important] dark:[&:-webkit-autofill]:[-webkit-text-fill-color:#d4d4d4_!important]"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border-none rounded-lg bg-slate-100 dark:bg-black text-slate-900 dark:text-neutral-300 placeholder-slate-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-0 transition-colors duration-200 dark:[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#000000_inset_!important] dark:[&:-webkit-autofill]:[-webkit-text-fill-color:#d4d4d4_!important]"
            />
          )}
        />
        <Controller
          name="subject"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              placeholder="Subject"
              className="w-full px-4 py-3 border-none rounded-lg bg-slate-100 dark:bg-black text-slate-900 dark:text-neutral-300 placeholder-slate-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-0 transition-colors duration-200 dark:[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#000000_inset_!important] dark:[&:-webkit-autofill]:[-webkit-text-fill-color:#d4d4d4_!important]"
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="Your message..."
              rows={4}
              className="w-full px-4 py-3 border-none rounded-lg bg-slate-100 dark:bg-black text-slate-900 dark:text-neutral-300 placeholder-slate-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-0 transition-colors duration-200 resize-none"
            />
          )}
        />
        <Button type="submit" isLoading={mutation.isPending} className="w-full !py-2.5">
          Send Message
        </Button>
      </form>
    </div>
  );
}
