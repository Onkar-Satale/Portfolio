import apiClient from './apiClient';

interface ContactFormData {
  subject: string;
  message: string;
}

export const sendMessage = async (data: ContactFormData) => {
  // Directly send the message to backend without token
  const response = await apiClient.post('/send-message', data);
  return response.data;
};
