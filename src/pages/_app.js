import "@/styles/globals.css";
import SharedLayout from "@/components/shared/SharedLayout";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <SharedLayout>
            <Component {...pageProps} />
          </SharedLayout>
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-[100dvh] bg-scheme-gray z-20 transform-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
        ></motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-[100dvh] bg-scheme-gray z-20 transform-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
        ></motion.div>
      </AnimatePresence>
    </>
  );
}
