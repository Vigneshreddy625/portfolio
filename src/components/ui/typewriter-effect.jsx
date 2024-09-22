"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  // Split words into arrays of characters but treat them as whole words later
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""), // Split the word into characters
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1), // Stagger the appearance of each letter
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <motion.div key={`word-${idx}`} className="inline-block mr-2">
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: idx * 0.4 + index * 0.1, // Adjust delays for letters and words
                }}
                className={cn(
                  `dark:text-white text-black hidden opacity-0`,
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-2xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
