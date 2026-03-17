import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

import { usePublicAuth } from '../../context/PublicAuthContext';
import AuthInput from '../ui/AuthInput';
import Button from '../ui/Button';
import { FiX, FiMail, FiLock, FiUser, FiCheckCircle, FiArrowLeft, FiEye, FiEyeOff } from 'react-icons/fi';
import apiClient from '../../services/apiClient';

// --- Local Type Definitions ---
type AuthMode = 'login' | 'register' | 'forgot' | 'success' | 'contact';
interface LoginFormData { email: string; password: string; rememberMe: boolean; }
interface RegisterFormData { name: string; email: string; password: string; }
interface ForgotFormData { email: string; }

interface PublicAuthModalProps { isOpen: boolean; onClose: () => void; }

export default function PublicAuthModal({ isOpen, onClose }: PublicAuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const { login, user } = usePublicAuth();

  const { register: RLogin, handleSubmit: HLogin } = useForm<LoginFormData>({ defaultValues: { rememberMe: true } });
  const { register: RRegister, handleSubmit: HRegister, reset: resetRegister } = useForm<RegisterFormData>();
  const { register: RForgot, handleSubmit: HForgot, reset: resetForgot } = useForm<ForgotFormData>();
  const { register: RContact, handleSubmit: HContact, reset: resetContact } = useForm<{ message: string }>();

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setMode('login');
        setShowPassword(false);
        resetRegister();
        resetForgot();
        resetContact();
      }, 300);
    }
  }, [isOpen, resetRegister, resetForgot, resetContact]);

  // --- API Mutations ---
  const loginMutation = useMutation({
    mutationFn: async ({ email, password, rememberMe }: LoginFormData) => {
      const response = await login(email, password);
      if (!response.success) {
        throw new Error(response.error || 'Login failed');
      }
      return { rememberMe };
    },
    onSuccess: () => {
      toast.success("Welcome!");
      onClose();
    },
    onError: (err: any) => toast.error(err.message || 'Login failed.'),
  });

  const registerMutation = useMutation({
    mutationFn: async ({ name, email, password }: RegisterFormData) => {
      const response = await apiClient.post('/auth/register', { name, email, password });
      return response.data;
    },
    onSuccess: () => {
      toast.success(`Account created! You can now log in.`);
      setMode("login");
    },
    onError: (err: any) => toast.error(err.response?.data?.message || 'Registration failed.'),
  });

  const forgotMutation = useMutation({
    mutationFn: async ({ email }: ForgotFormData) => {
      // NOTE: Adjust endpoint to your actual forgot password if implemented later. 
      // For now we will just show a toast assuming it's hooked up or to be implemented.
      toast.error('Forgot password functionality requires email server setup.');
      throw new Error('Not implemented completely in new backend yet');
    },
    onSuccess: () => {
      setMode("success");
    },
    onError: (err: any) => {},
  });

  // --- Send message to API ---
  const sendMessageMutation = useMutation({
    mutationFn: async (data: { message: string }) => {
      if (!user) throw new Error("User not authenticated.");
      await apiClient.post("/messages", {
        uid: user.id,
        email: user.email,
        message: data.message,
      });
    },
    onSuccess: () => {
      toast.success("Your message has been sent!");
      resetContact();
      onClose();
    },
    onError: (err: any) => {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
    },
  });

  const onLogin: SubmitHandler<LoginFormData> = data => loginMutation.mutate(data);
  const onRegister: SubmitHandler<RegisterFormData> = data => registerMutation.mutate(data);
  const onForgot: SubmitHandler<ForgotFormData> = data => forgotMutation.mutate(data);
  const onSendMessage: SubmitHandler<{ message: string }> = data => sendMessageMutation.mutate(data);

  const formVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white dark:bg-slate-950 border dark:border-slate-800 p-8 text-left align-middle shadow-xl transition-all">
              <button
                onClick={onClose}
                className="cursor-pointer absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                <FiX size={20} />
              </button>

              <AnimatePresence mode="wait">
                {/* LOGIN */}
                {mode === 'login' && (
                  <motion.div key="login" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                    <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white">Welcome Back</h3>
                    <form className="mt-8 space-y-4" onSubmit={HLogin(onLogin)}>
                      <AuthInput id="email" label="Email Address" type="email" icon={<FiMail />} register={RLogin('email', { required: true })} />
                      <div className="relative">
                        <AuthInput id="password" label="Password" type={showPassword ? "text" : "password"} icon={<FiLock />} register={RLogin('password', { required: true })} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-800 dark:hover:text-white z-20">
                          {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                      </div>
                      <Button type="submit" isLoading={loginMutation.isPending} className="w-full !py-2.5 !text-base">Sign In</Button>
                      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                        Need an account?{" "}
                        <button type="button" onClick={() => setMode('register')} className="font-semibold text-blue-600 hover:underline cursor-pointer">Register Here</button>
                      </p>
                    </form>
                  </motion.div>
                )}

                {/* REGISTER */}
                {mode === 'register' && (
                  <motion.div key="register" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                    <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white">Create Account</h3>
                    <form className="mt-8 space-y-4" onSubmit={HRegister(onRegister)}>
                      <AuthInput id="reg-name" label="Full Name" type="text" icon={<FiUser />} register={RRegister('name', { required: true })} />
                      <AuthInput id="reg-email" label="Email Address" type="email" icon={<FiMail />} register={RRegister('email', { required: true })} />
                      <AuthInput id="reg-password" label="Password" type="password" icon={<FiLock />} register={RRegister('password', { required: true })} />
                      <Button type="submit" isLoading={registerMutation.isPending} className="w-full !py-2.5 !text-base cursor-pointer">Create Account</Button>
                      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                        Already have an account?{" "}
                        <button type="button" onClick={() => setMode('login')} className="cursor-pointer font-semibold text-blue-600 hover:underline">Login</button>
                      </p>
                    </form>
                  </motion.div>
                )}

                {/* FORGOT */}
                {mode === 'forgot' && (
                  <motion.div key="forgot" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                    <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white">Reset Password</h3>
                    <form className="mt-8 space-y-6" onSubmit={HForgot(onForgot)}>
                      <AuthInput id="forgot-email" label="Email Address" type="email" icon={<FiMail />} register={RForgot('email', { required: true })} />
                      <Button type="submit" isLoading={forgotMutation.isPending} className="w-full !py-2.5 !text-base">Send Reset Link</Button>
                      <div className="text-center text-sm mt-2">
                        <button type="button" onClick={() => setMode('login')} className="font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 flex items-center mx-auto cursor-pointer">
                          <FiArrowLeft className="mr-1" />Back to Login
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* SUCCESS */}
                {mode === 'success' && (
                  <motion.div key="success" variants={formVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto">
                      <FiCheckCircle className="text-emerald-500 dark:text-emerald-400" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-6">Success!</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Check your email for the reset link.</p>
                    <Button onClick={() => setMode('login')} className="w-full mt-8 !py-2.5">Back to Login</Button>
                  </motion.div>
                )}

                {/* CONTACT */}
                {mode === 'contact' && (
                  <motion.div key="contact" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                    <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white">Send a Message</h3>
                    <form className="mt-8 space-y-4" onSubmit={HContact(onSendMessage)}>
                      <textarea
                        placeholder="Your message..."
                        className="w-full border border-slate-300 dark:border-slate-700 rounded p-2 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                        {...RContact('message', { required: true })}
                      />
                      <Button type="submit" isLoading={sendMessageMutation.isPending} className="w-full !py-2.5 !text-base">Send Message</Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}





