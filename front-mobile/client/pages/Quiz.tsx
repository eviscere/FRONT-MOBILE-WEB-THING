import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import StatusBar from "@/components/StatusBar";

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const totalQuestions = 5;

  const questions = [
    {
      id: 1,
      text: "В новом посёлке 7 домиков. Они уже стоят, а дорожки надо проложить. Нужно выбрать план, при котором бульдозер сможет расчистить все дорожки, проходя по каждой по одному разу и вернуться в начальную точку. все вариант",
    },
    {
      id: 2,
      text: "Есть четырехзначный код, состоящий из цифр, найдите вероятность, что все цифры разные",
    },
    {
      id: 3,
      text: "В ящике находится 15 деталей. Сколькими способами можно взять 4 детали?",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentQuestion === 3 && answer === "130") {
      setError("Ответ неверный, попробуйте еще раз");
    } else {
      setError("");
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1);
        setAnswer("");
      } else {
        navigate("/courses");
      }
    }
  };

  const currentQuestionData = questions[currentQuestion - 1] || questions[0];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StatusBar />
      <div className="px-4 py-8 flex-1">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="w-6 h-6 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-[#333]" />
          </button>
          <h1 className="text-lg font-bold tracking-[0.09px] text-[#333]">
            Дискретная математика
          </h1>
        </div>

        <div className="flex gap-[6px] mb-12">
          {[...Array(totalQuestions)].map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-[28px] ${
                i < currentQuestion ? "bg-primary" : "bg-gray-3"
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-[#333] text-xl font-bold text-center leading-normal tracking-[-0.4px]">
            {currentQuestionData.text}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex flex-col bg-[#F0F0F0] rounded-xl px-4 py-[18px] h-[58px] justify-center">
                <input
                  type="text"
                  placeholder="Введите ответ"
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                    setError("");
                  }}
                  className="bg-transparent outline-none text-sm text-[#252525] placeholder:text-[#979797]"
                />
              </div>
              {error && (
                <p className="text-primary text-sm text-center mt-2 tracking-[-0.28px]">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold text-base rounded-full h-[60px] flex items-center justify-center tracking-[-0.32px]"
            >
              Ответить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
