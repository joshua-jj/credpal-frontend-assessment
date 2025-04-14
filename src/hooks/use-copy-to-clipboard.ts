import { toast } from "sonner";

const useCopyToClipboard = () => {
  const copyToClipboard = async (text: string) => {
    if (!navigator.clipboard) {
      console.warn("Clipboard API not available");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      toast.info("Copied!");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return copyToClipboard;
};

export default useCopyToClipboard;
