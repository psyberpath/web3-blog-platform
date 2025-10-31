import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf } from "lucide-react";
import RootsDecoration from "@/components/RootsDecoration";

const Article = () => {
  const { id } = useParams();

  // Mock article data - in a real app, this would come from a database
  const article = {
    title: "The Next Layer of Trust: On-Chain Reputation with Intuition",
    content: `In the fast-evolving landscape of Web3, one of the most fundamental problems remains unsolved: trust.
    Not the kind that’s hardcoded into smart contracts, but the softer, human kind who should you believe, follow, or transact with in a pseudonymous world?
    For all the progress decentralized systems have made, identity and reputation remain fragmented. Each wallet is just a string of characters; every transaction, an isolated event. We have trillions in on-chain data but almost zero context.
    This is where Intuition enters the picture a protocol built to make context machine-readable and trust composable.
     
    1. The Problem: Web3 Has Data, But No Memory
    Blockchains are great at storing immutable facts transfers, swaps, mints but terrible at representing meaning.
    Who is trustworthy? Which projects have real communities? What relationships exist between addresses, protocols, and outcomes?
    Right now, this context exists off-chain: in Discords, X threads, Telegram chats, and gut instincts.
    The result? Every new user, investor, or developer starts from scratch blind to the invisible reputation network that actually powers Web3.
    We have DAOs without reputation systems, protocols without verifiable history, and “influencers” without transparency. Trust is rebuilt, broken, and rebuilt again, manually.
     
    2. The Solution: Intuition’s Knowledge Graph of Trust
    Intuition solves this by creating a universal, on-chain knowledge graph a way to represent, verify, and compose human knowledge and social trust directly on-chain.
    At its core, Intuition lets users and protocols create Claims verifiable statements about any entity (a person, wallet, protocol, or idea).
    Each claim can be supported or challenged by others, forming a web of interlinked beliefs a “trust fabric” that can be queried, visualized, and used to make informed decisions.
    Think of it as:
    If the blockchain is a database of transactions, Intuition is a database of trust.
    Every claim lives on-chain, backed by cryptographic signatures and social proofs.
    This creates a context layer for the decentralized world transforming anonymous data into a living network of meaning.
     
    3. The Architecture: How It Works
    Under the hood, Intuition’s system rests on three pillars:
    • Claims structured assertions made by users or agents, like “@alice.eth contributed to Optimism RetroPGF” or “Wallet 0xA1B is part of a verified DAO.”
    • Entities anything that can be the subject or object of a claim: people, protocols, projects, or concepts.
    • Relations the connective tissue that allows multiple claims to form a graph.
    All this is built with graph-based data architecture, enabling semantic linking and contextual reasoning between nodes.
    What makes Intuition different from legacy reputation systems is that it’s open, composable, and non-binary.
    Reputation isn’t a static score it’s a contextual narrative built from collective knowledge.
    Through this, Intuition enables AI agents, protocols, and users to consume verified social context as easily as they read token balances today.
     
    4. The Use Case: On-Chain Reputation
    The most powerful use case of Intuition is on-chain reputation a long-sought foundation for credible Web3 identity.
    Reputation today is scattered: followers on X, badges in Discord, POAPs from events, and tokens in wallets.
    Intuition brings them together into a verifiable, interoperable reputation layer.
    Imagine:
    • DeFi protocols granting higher limits or better terms to wallets with verified trust graphs.
    • DAOs voting based on contribution reputation rather than wallet size.
    • NFT creators validating real community members before drops.
    • AI agents making decisions based on trust-weighted claims instead of random heuristics.
    By mapping who trusts whom and why, Intuition transforms fragmented reputation into a dynamic, queryable asset a new primitive for human credibility in digital economies.
     
    5. The Token and Economic Design
    At the center of Intuition’s system lies the $TRUST token, which governs claim creation, validation, and curation.
    It introduces economic alignment into the trust graph: users stake $TRUST to assert claims, signal belief, or challenge misinformation.
    This mechanism ensures that the network’s information remains self-regulating false or low-quality claims carry economic risk, while high-quality insights accrue value and reputation over time.
    The outcome is a trust market, where good information becomes a scarce and valuable resource an internet where context, not just content, has capital.
     
    6. Why It Matters
    Web3 was built to decentralize power, but it cannot decentralize trust unless reputation becomes portable, composable, and verifiable.
    Intuition’s design offers this missing layer.
    It doesn’t replace human judgment it amplifies it.
    It gives structure to the social intuition that has always guided crypto: who to believe, who to back, and who to build with.
    By turning trust into data, Intuition makes reputation not just observable, but actionable the cornerstone of coordination in a truly decentralized internet.
     
    7. The Vision Ahead
    In time, Intuition could become the trust protocol of Web3 a universal reputation infrastructure connecting DeFi, DAOs, social platforms, and AI systems.
    Just as oracles brought external data on-chain, Intuition brings social truth on-chain.
    It enables networks to reason, not just compute; to understand, not just execute.
    This is the foundation for a new generation of intelligent, human-aligned crypto systems where every address carries not just history, but meaning.
     
    Conclusion
    The future of crypto isn’t just financial it’s relational.
    To scale trust, we must map it.
    And Intuition is building the first protocol capable of doing that encoding human reputation into the blockchain itself, one verifiable claim at a time.
    It’s not just an innovation.
    It’s a memory layer for the decentralized world.
     `,
    author: "Heyjerey",
    date: "October 29, 2025",
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
