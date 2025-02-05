import { useState, useRef } from "react";
import h from "./assets/h.mp3";
import song1 from "./assets/song1.mp3"
// import song2 from "./assets/song2.mp3"
import song3 from "./assets/song3.mp3"
import song4 from "./assets/song4.mp3"
import song5 from "./assets/song5.mp3"
import song6 from "./assets/song6.mp3"
import song7 from "./assets/song7.mp3"
import song8 from "./assets/song8.mp3"
import song9 from "./assets/song9.mp3"
import song10 from "./assets/song10.mp3"
import song11 from "./assets/song11.mp3"
import song12 from "./assets/song12.mp3"
import song13 from "./assets/song13.mp3"
import song14 from "./assets/song14.mp3"
import song15 from "./assets/song15.mp3"

import "./App.css";

const songs = [
  { id: 1, name: "KYA HUA TERA WADA", file: song1 },
  { id: 2, name: "CHURA LIYA HAIN TUMNE", file: h },
  { id: 3, name: "HUME TUMSE PYAAR KITNA", file: song3 },
  { id: 4, name: "KABHI KABHI MERE DIL ME", file: song4 },
  { id: 5, name: "KHEDU TUMHE", file: song5 },
  { id: 6, name: "TERA MERA RISTA", file: song7},
  { id: 7, name: "YASH NARVEKAR", file: song6 },
  { id: 8, name: "DARSHAN RAVAL", file: song8 },
  { id: 9, name: "MOHIT CHAUHAN", file: song9},
  { id: 10, name: "SHREYA GHOSHAL", file: song10},
  { id: 11, name: "DILJIT DOSANJH", file: song11},
  { id: 12, name: "SONU NIGAM", file: song12 },
  { id: 13, name: "BENNY DHALIWAL", file: song13 },
  { id: 14, name: "AKHIL SACHDEVA", file: song14},
  { id: 15, name: "HASSAN JHANGIR", file: song15},
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  
  const audioRef = useRef(null); // Ref for the audio element

  const handleNext = () => {
    setShowAnswer(false);
    if (currentIndex < songs.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  // Reset audio when song changes
  const handleAudioReload = () => {
    if (audioRef.current) {
      audioRef.current.load(); // Reloads the new audio source
      audioRef.current.play(); // Auto-play new song (optional)
    }
  };

  return (
    <div className="h-screen flex items-center justify-center text-black harsh">
      <div className="w-full max-w-lg text-center p-6">
        {!quizFinished ? (
          <>
            <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
              🎵 Guess the Song and Singer 🎉
            </h1>
            <div className="p-8 rounded-xl shadow-lg border border-gray-300 bg-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Song {currentIndex + 1} of 15
              </h2>
              
              {/* Audio Player */}
              <audio ref={audioRef} controls className="w-full mb-4 border border-gray-400 rounded-lg">
                <source src={songs[currentIndex].file} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>

              {!showAnswer ? (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="mt-4 w-full py-3 rounded-lg text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-white shadow-md"
                >
                  Show Answer 👀
                </button>
              ) : (
                <p className="text-xl font-bold text-green-600 mt-4">
                  ✅ Answer: {songs[currentIndex].name}
                </p>
              )}

              <button
                onClick={() => {
                  handleNext();
                  handleAudioReload();
                }}
                className="mt-4 w-full py-3 rounded-lg text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-md"
              >
                {currentIndex < songs.length - 1 ? "Next Song 🎶" : "Finish Quiz 🎉"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center loop">
            <h1 className="text-5xl font-extrabold text-green-500">Quiz Completed!</h1>
            <p className="mt-4 text-xl text-gray-700">Thank you for participating! 🎧</p>
          </div>
        )}
      </div>
    </div>
  );
}
