export interface TermAndCondition {
  id: string;
  title: string;
  content: string;
  imagePath?: string | null;
  order?: number; // optional since you don’t need it
}

const STATIC_TERMS: TermAndCondition[] = [
  {
    "id": "disclaimer",
    "title": "Disclaimer of Warranties",
    "content": "This website is provided on an 'AS IS' and 'AS AVAILABLE' basis. Use of the service is at your own risk. The service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement."
  },
  {
    "id": "acceptance",
    "title": "Acceptance of Terms",
    "content": "By accessing and using this website, you agree to comply with the following terms and conditions. If you do not agree with any part of these terms, please do not use this website."
  },
  {
    "id": "changes",
    "title": "Changes to Terms",
    "content": "I reserve the right, at my sole discretion, to modify or replace these Terms at any time."
  },
  {
    "id": "user-conduct",
    "title": "User Conduct and Submissions",
    "content": "You are solely responsible for the content of your submissions (e.g., messages sent through the contact form). You agree not to use the service to send any material which is knowingly false, defamatory, abusive, harassing, or obscene. Spam, flooding, advertisements, and chain letters are also forbidden."
  },
  {
    "id": "governing-law",
    "title": "Governing Law",
    "content": "These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. My failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
  },
  {
    "id": "limitation",
    "title": "Limitation of Liability",
    "content": "In no event shall I, Satale Onkar K, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service."
  },
  {
    "id": "prohibited",
    "title": "Prohibited Uses",
    "content": "You agree not to use this website in any way that: Is unlawful, illegal, fraudulent, or harmful. Attempts to gain unauthorized access to the server, hosting environment, or any connected database. Uses any automated system, including 'robots' or 'spiders,' to access the site for any purpose without my express written permission."
  },
  {
    "id": "termination",
    "title": "Termination",
    "content": "I reserve the right to terminate or suspend your account and bar access to the contact service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms."
  },
  {
    "id": "intellectual",
    "title": "Intellectual Property",
    "content": "The Service and its original content, including but not limited to the design, text, graphics, project case studies, and logos, are the exclusive property of Satale Onkar K and are protected by copyright and other intellectual property laws. My work may not be used in connection with any product or service without my prior written consent."
  },
  {
    "id": "accounts",
    "title": "User Accounts",
    "content": "To use the secure contact form, you must register for an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for safeguarding your password and for any activities or actions under your account. You must notify me immediately upon becoming aware of any breach of security or unauthorized use of your account."
  }
];

export const getTerms = async (): Promise<{ message: string; data: TermAndCondition[] }> => {
  return Promise.resolve({
    message: "Success",
    data: STATIC_TERMS
  });
};
