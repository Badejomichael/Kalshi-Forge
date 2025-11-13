"use client";

import { useState } from "react";
import Step1DefineEvent from "./components/Step1DefineEvent";
import Step2Parameters from "./components/Step2Parameters";
import Step3Preview from "./components/Step3Preview";
import Step4Success from "./components/Step4Success";
import { Market } from "../../types/market";
import { sampleMarkets } from "../../lib/mockData";
import { motion } from "framer-motion";
import {
  FaRegLightbulb,
  FaSlidersH,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

export default function ForgePage() {
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<Partial<Market>>({
    title: "",
    category: "Crypto",
    resolutionDate: "",
    initialProbability: 0.5,
    currentProbability: 0.5,
    volume: 5000,
  });

  function next() {
    setStep((s) => Math.min(4, s + 1));
  }
  function prev() {
    setStep((s) => Math.max(1, s - 1));
  }

  function onCreate() {
    const newMarket: Market = {
      id: `m-${Date.now()}`,
      title: draft.title || "Untitled Market",
      category: draft.category || "Crypto",
      resolutionDate:
        draft.resolutionDate || new Date().toISOString().slice(0, 10),
      initialProbability: draft.initialProbability ?? 0.5,
      currentProbability: draft.currentProbability ?? 0.5,
      volume: draft.volume ?? 1000,
      creator: "you",
      createdAt: Date.now(),
    };
    sampleMarkets.unshift(newMarket);
    next();
  }

  const steps = [
    { id: 1, label: "Define Event", icon: FaRegLightbulb },
    { id: 2, label: "Set Parameters", icon: FaSlidersH },
    { id: 3, label: "Preview", icon: FaChartLine },
    { id: 4, label: "Success", icon: FaCheckCircle },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Forge a <span className="text-[#14b8a6]">Market</span>
          </motion.h1>
          <p className="text-gray-600 mt-3">
            Create, simulate, and share your own event prediction market.
          </p>
        </div>

        {/* Step indicator */}
        <div className="relative flex justify-between items-center mb-12">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10 transform -translate-y-1/2" />
          {steps.map((s) => {
            const Icon = s.icon;
            const isActive = s.id === step;
            const isCompleted = s.id < step;
            return (
              <div key={s.id} className="flex flex-col items-center text-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    isActive
                      ? "border-[#14b8a6] bg-[#14b8a610]"
                      : isCompleted
                      ? "border-[#14b8a6] bg-[#14b8a6]"
                      : "border-gray-300 bg-white"
                  } transition-all`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isCompleted
                        ? "text-white"
                        : isActive
                        ? "text-[#14b8a6]"
                        : "text-gray-400"
                    }`}
                  />
                </div>
                <span
                  className={`mt-2 text-xs font-medium ${
                    isActive ? "text-[#14b8a6]" : "text-gray-500"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 md:p-8"
        >
          {step === 1 && (
            <Step1DefineEvent draft={draft} setDraft={setDraft} next={next} />
          )}
          {step === 2 && (
            <Step2Parameters
              draft={draft}
              setDraft={setDraft}
              next={next}
              prev={prev}
            />
          )}
          {step === 3 && (
            <Step3Preview
              draft={draft}
              setDraft={setDraft}
              prev={prev}
              onCreate={onCreate}
            />
          )}
          {step === 4 && <Step4Success />}
        </motion.div>
      </div>
    </section>
  );
}
