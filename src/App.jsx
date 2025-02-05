import { useState, useRef } from "react";
import h from "./assets/h.mp3";
import song1 from "./assets/song1.mp3";
import song2 from "./assets/song2.mp3";
import song3 from "./assets/song3.mp3";
import song4 from "./assets/song4.mp3";
import song5 from "./assets/song5.mp3";
import song6 from "./assets/song6.mp3";
import song7 from "./assets/song7.mp3";
import song8 from "./assets/song8.mp3";
import song9 from "./assets/song9.mp3";
import song10 from "./assets/song10.mp3";
import song11 from "./assets/song11.mp3";
import song12 from "./assets/song12.mp3";
import song13 from "./assets/song13.mp3";
import song14 from "./assets/song14.mp3";
import song15 from "./assets/song15.mp3";
import song16 from "./assets/song16.mp3";
import song17 from "./assets/song17.mp3";
import song18 from "./assets/song18.mp3";
import song19 from "./assets/song19.mp3";
import song20 from "./assets/song20.mp3";
import song21 from "./assets/song21.mp3";
import song22 from "./assets/song22.mp3";
import song23 from "./assets/song23.mp3";
import song24 from "./assets/song24.mp3";
import song25 from "./assets/song25.mp3";
import song26 from "./assets/song26.mp3";
import song27 from "./assets/song27.mp3";
import song28 from "./assets/song28.mp3";
import song29 from "./assets/song29.mp3";
import song30 from "./assets/song30.mp3";

import "./App.css";

const songs = [
  { id: 1, name: "MUJHE KUCH KEHNA HAI", file: song1 },
  { id: 2, name: "BLUE EYES", file: song2 },
  { id: 3, name: "DIL BECHARA", file: song3 },
  { id: 4, name: "MAUSAM", file: song4 },
  { id: 5, name: "DIL MIL GYE", file: song5 },
  { id: 6, name: "TERA MERA RISTA", file: song7 },
  { id: 7, name: "MAULA MERE MAULA", file: song26 },
  { id: 8, name: "ISHQ WALA LOVE", file: song27 },
  { id: 9, name: "ARE RE ARE RE", file: song28 },
  { id: 10, name: "TERI ORE", file: song29 },
  { id: 11, name: "JANNAT", file: song30 },
  { id: 12, name: "YASH NARVEKAR", file: song6 },
  { id: 13, name: "DARSHAN RAVAL", file: song8 },
  { id: 14, name: "MOHIT CHAUHAN", file: song9 },
  { id: 15, name: "SHREYA GHOSHAL", file: song10 },
  { id: 16, name: "DILJIT DOSANJH", file: song11 },
  { id: 17, name: "SONU NIGAM", file: song12 },
  { id: 18, name: "BENNY DHALIWAL", file: song13 },
  { id: 19, name: "AKHIL SACHDEVA", file: song14 },
  { id: 20, name: "HASSAN JHANGIR", file: song15 },
  { id: 21, name: "JUBIN NAUTIYAL", file: song16 },
  { id: 22, name: "ATIF ASLAM", file: song17 },
  { id: 23, name: "DARSHAN RAVAL", file: song18 },
  { id: 24, name: "GURNAM BHULLAR", file: song19 },
  { id: 25, name: "JUBIN NAUTIYAL", file: song20 },
  { id: 26, name: "KISHORE KUMAR", file: song21 },
  { id: 27, name: "NUSRAT FATEH ALI KHAN", file: song22 },
  { id: 28, name: "KAMAL KHAN", file: song23 },
  { id: 29, name: "ARIJIT SINGH", file: song24 },
  { id: 30, name: "AMIR JAMAL", file: song25 },
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
              🎵 Guess the <span>{currentIndex >= 11 ? "Singer" : "Song"}</span>{" "}
              🎉
            </h1>
            <div className="p-8 rounded-xl shadow-lg border border-gray-300 bg-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Song {currentIndex + 1} of 30
              </h2>

              {/* Audio Player */}
              <audio
                ref={audioRef}
                controls
                className="w-full mb-4 border border-gray-400 rounded-lg"
              >
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
                {currentIndex < songs.length - 1
                  ? "Next Song 🎶"
                  : "Finish Quiz 🎉"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center loop">
            <h1 className="text-5xl font-extrabold text-green-500">
              Quiz Completed!
            </h1>
            <p className="mt-4 text-xl text-gray-700">
              Thank you for participating! 🎧
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
