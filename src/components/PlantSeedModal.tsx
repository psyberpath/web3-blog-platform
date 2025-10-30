import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sprout } from "lucide-react";
import { Button } from "./ui/button";

interface PlantSeedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish: (title: string, content: string) => void;
}

const PlantSeedModal = ({ isOpen, onClose, onPublish }: PlantSeedModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = () => {
    if (title.trim() && content.trim()) {
      onPublish(title, content);
      setTitle("");
      setContent("");
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-3xl bg-card rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-secondary/30">
              <div className="flex items-center gap-3">
                <Sprout className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-semibold text-card-foreground">
                  Plant a Seed
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-secondary/20 transition-colors"
              >
                <X className="w-5 h-5 text-card-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Title Input */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give your seed a name..."
                  className="w-full px-4 py-3 bg-background/50 border border-secondary/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              {/* Content Textarea */}
              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Let your thoughts grow here..."
                  rows={12}
                  className="w-full px-4 py-3 bg-background/50 border border-secondary/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-all"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-secondary/30 bg-background/30">
              <Button
                onClick={onClose}
                variant="outline"
                className="border-secondary text-card-foreground hover:bg-secondary/20"
              >
                Cancel
              </Button>
              <Button
                onClick={handlePublish}
                disabled={!title.trim() || !content.trim()}
                className="bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Publish
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlantSeedModal;
