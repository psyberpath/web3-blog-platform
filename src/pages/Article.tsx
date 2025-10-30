import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf } from "lucide-react";
import RootsDecoration from "@/components/RootsDecoration";

const Article = () => {
  const { id } = useParams();

  // Mock article data - in a real app, this would come from a database
  const article = {
    title: "The Art of Digital Cultivation",
    content: `In the vast expanse of the digital landscape, we find ourselves tending to gardens of thought, nurturing seeds of ideas that bloom into forests of understanding.

The practice of maintaining a digital garden is both ancient and modern. Like the monks who tended their monastery gardens, we cultivate our thoughts with patience and care. Each article is a living plant, growing and evolving with each reader who encounters it.

Consider the nature of growth itself. A seed planted in rich soil doesn't simply appear as a full-grown tree. It pushes through darkness, breaks through the surface, reaches toward the light. Our ideas follow similar patterns. They begin as whispers, fragments of thoughts scattered across our consciousness.

In traditional publishing, an article is finished the moment it's released. But in a digital garden, content is perpetually in season. It grows, branches, and sometimes even bears unexpected fruit. Readers become gardeners themselves, their engagement providing the water and sunlight needed for ideas to flourish.

The metaphor extends beyond mere aesthetics. Just as a garden requires different plants to thrive—some in shade, others in sun—our digital spaces need diversity. Technical articles sit alongside personal reflections. How-to guides grow next to philosophical musings. Each contributes to the ecosystem.

This approach to content creation stands in contrast to the stream-based feeds that dominate social media. Instead of thoughts flowing past like water, never to be seen again, a digital garden creates spaces where ideas can take root. Time moves differently here. There's no pressure for daily content, no algorithm demanding constant feeding.

What emerges is something more organic, more human. A digital garden reflects its gardener. It shows not just what they know, but how they think, how they connect ideas, how they've grown over time. The dead ends and the flourishing paths all tell a story.

As you read this, you're participating in the garden's growth. Your attention is sunlight. Your reflection is water. And perhaps, inspired by what you find here, you'll plant seeds of your own.`,
    author: "The Gardener",
    date: "March 15, 2024",
    readTime: "5 min read",
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Decorative roots on both sides */}
      <RootsDecoration side="left" />
      <RootsDecoration side="right" />

      {/* Header */}
      <motion.header
        className="border-b border-secondary/30 bg-background/80 backdrop-blur-sm sticky top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Garden</span>
          </Link>
        </div>
      </motion.header>

      {/* Article Content */}
      <motion.article
        className="container mx-auto px-6 py-16 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Article header */}
        <div className="mb-12 text-center">
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Leaf className="w-12 h-12 text-accent" />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-lora font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {article.title}
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </motion.div>
        </div>

        {/* Article body */}
        <motion.div
          className="bg-card rounded-2xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="prose prose-lg max-w-none">
            {article.content.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                className="mb-6 text-card-foreground leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Footer decoration */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Leaf className="w-4 h-4" />
            <span>This plant is still growing</span>
            <Leaf className="w-4 h-4" />
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
};

export default Article;
