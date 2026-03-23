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
      <p className="text-slate-500 text-sm mt-1">
        Please fill out the form below to get in touch.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4 max-w-lg mx-auto">
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input {...field} placeholder="Your Name" className="w-full p-3 border border-slate-300 dark:border-neutral-700 rounded-lg bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-300 placeholder-slate-400 dark:placeholder-neutral-500 dark:[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#0a0a0a_inset_!important] dark:[&:-webkit-autofill]:[-webkit-text-fill-color:white_!important]" />}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input {...field} type="email" placeholder="Your Email" className="w-full p-3 border border-slate-300 dark:border-neutral-700 rounded-lg bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-300 placeholder-slate-400 dark:placeholder-neutral-500 dark:[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#0a0a0a_inset_!important] dark:[&:-webkit-autofill]:[-webkit-text-fill-color:white_!important]" />}
        />
        <Controller
          name="subject"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input {...field} placeholder="Subject" className="w-full p-3 border border-slate-300 dark:border-neutral-700 rounded-lg bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-300 placeholder-slate-400 dark:placeholder-neutral-500 dark:[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#0a0a0a_inset_!important] dark:[&:-webkit-autofill]:[-webkit-text-fill-color:white_!important]" />}
        />
        <Controller
          name="message"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <textarea {...field} placeholder="Your message..." rows={5} className="w-full p-3 border border-slate-300 dark:border-neutral-700 rounded-lg bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-300 placeholder-slate-400 dark:placeholder-neutral-500" />}
        />
        <Button type="submit" isLoading={mutation.isPending} className="w-full !py-3">
          Send Message
        </Button>
      </form>
    </div>
  );
}
