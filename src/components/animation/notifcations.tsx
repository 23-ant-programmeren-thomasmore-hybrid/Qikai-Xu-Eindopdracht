import React, { useEffect, useState } from "react";
import { FiAlertCircle, FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { Egg } from "lucide-react";

const SlideInNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const removeNotif = (id:number) => {
    setNotifications((pv) => pv.filter((n:any) => n.id !== id));
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => {
          setNotifications((pv):any => [generateRandomNotif(), ...pv]);
        }}
        className="bg-stone-800 w-16 h-16 mb-2 rounded-full text-3xl text-red-900 grid place-items-center mx-auto"
      >
        <FiAlertCircle/>
      </button>
      <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n:any) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }: { text:string, id:number, removeNotif:any }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{x:-107, y: 93, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-stone-800 bg-amber-100 pointer-events-auto"
    >
      <Egg className="text-red-900 mt-0.5 w-3 h-3"/>
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX className="text-red-900"/>
      </button>
    </motion.div>
  );
};

export default SlideInNotifications;

const generateRandomNotif = () => {
  const strings = [
    "Click me again. I dare you. I double dare you.",
    "Don't you have something better to do?",
    "Your persistence is fascinating.",
    "You can't keep finding these.",
    "Authoritative figure spotted!",
    "You can't keep clicking this.",
    "Stay if want, I don't care.",
    "Can you do someting else?",
    "Please, stop clicking.",
    "That's enough, stop.",
    "Still here, huh?",
    "Tell me a joke.",
    "General Kenobi!",
    "Back to work.",
    "Boo!",
  ];

  const randomIndex = Math.floor(Math.random() * strings.length);

  const data = {
    id: Math.random(),
    text: `${strings[randomIndex]}`,
  };

  return data;
};