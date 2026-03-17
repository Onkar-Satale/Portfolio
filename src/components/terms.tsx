import { useEffect, useState } from "react";
import { getTerms } from "../services/termsService";

// Local interface (optional, only for TS type checking)
interface TermAndCondition {
  id: string;
  title: string;
  content: string;
  imagePath?: string | null;
  order: number;
}

export default function Terms() {
  const [terms, setTerms] = useState<TermAndCondition[]>([]);

  useEffect(() => {
    async function fetchTerms() {
      const res = await getTerms();
      setTerms(res.data);
    }
    fetchTerms();
  }, []);

  return (
    <div>
      {terms.map(term => (
        <div key={term.id}>
          <h3>{term.title}</h3>
          <p>{term.content}</p>
        </div>
      ))}
    </div>
  );
}
