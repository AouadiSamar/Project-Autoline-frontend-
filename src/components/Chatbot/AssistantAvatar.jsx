import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5";
import avatar from "../../assets/AVATAR.jpg"; // Add your assistant avatar

const COLORS = {
  PRIMARY: "#7BC0E3",
  DARK: "#34495E",
  LIGHT: "#F3F4F6",
  WHITE: "#FFFFFF",
};

const AssistantAvatar = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;
    console.log("User asked:", message);
    setMessage("");
  };

  return (
    <>
      {/* Floating Avatar */}
      <motion.div
        onClick={() => setOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
      >
        <motion.img
          src={avatar}
          alt="Assistant Avatar"
          className="w-20 h-20 rounded-full shadow-xl border-4"
          style={{ borderColor: COLORS.PRIMARY }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />
      </motion.div>

      {/* Chat Window */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-28 right-6 w-80 bg-white shadow-xl rounded-xl p-4 z-50"
          style={{ border: `2px solid ${COLORS.PRIMARY}` }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3
              className="text-lg font-semibold"
              style={{ color: COLORS.DARK }}
            >
              🤖 AutoLink Assistant
            </h3>

            <button
              onClick={() => setOpen(false)}
              className="text-red-500 font-bold text-xl"
            >
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div
            className="h-40 overflow-y-auto mb-3 p-2 rounded-lg"
            style={{ backgroundColor: COLORS.LIGHT }}
          >
            <p className="text-gray-700">
              👋 أهلاً! كيف يمكنني مساعدتك اليوم؟
            </p>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none"
              placeholder="اكتب رسالتك..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ backgroundColor: COLORS.LIGHT }}
            />

            <button
              onClick={handleSend}
              className="p-2 rounded-lg shadow"
              style={{ backgroundColor: COLORS.PRIMARY }}
            >
              <IoSend className="text-white text-xl" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default AssistantAvatar;
